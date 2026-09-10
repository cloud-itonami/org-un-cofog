#!/usr/bin/env nbb
;; SPDX-License-Identifier: Apache-2.0
;; Copyright 2026 etzhayyim Japan株式会社 / etzhayyim. All rights reserved.
;; Licensed under the Apache License, Version 2.0 — see LICENSE at repo root.
;;
;; open-cofog provenance: pin the UN Statistics Division's published COFOG
;; structure by hash, and check that everything this repo asserts about COFOG
;; still agrees with it.
;;
;;   nbb scripts/cofog-provenance.cljs verify          offline: hashes, counts, class names
;;   nbb scripts/cofog-provenance.cljs verify --fetch  also re-downloads and diffs against the pin
;;   nbb scripts/cofog-provenance.cljs fetch           re-download and print what to record
;;
;; Exit codes are three-valued on purpose. 0 = checked and clean, 1 = checked and
;; a claim is falsified, 2 = COULD NOT CHECK. A run that could not read its own
;; inputs must not be indistinguishable from a run that read them and found
;; nothing wrong.

(ns cofog-provenance
  (:require [clojure.string :as str]
            [clojure.edn :as edn]
            ["fs" :as fs]
            ["path" :as path]
            ["crypto" :as crypto]))

(def ^:private script-path
  ;; nbb has no js/__filename; the script path is argv[2].
  (nth (js->clj js/process.argv) 2 nil))

(def repo-root
  (if script-path
    (path/resolve (path/join (path/dirname (path/resolve script-path)) ".."))
    (path/resolve (js/process.cwd))))
(defn- at [& parts] (apply path/join repo-root parts))

(def sources-path (at "data" "sources.edn"))
(def classes-dir  (at "data" "classes"))

(defn- digest [s] (-> (crypto/createHash "sha256") (.update s "utf8") (.digest "hex")))
(defn- nbytes [s] (js/Buffer.byteLength s "utf8"))
(defn- short [h] (str (subs h 0 12) "…"))
(defn- slurp* [p] (when (fs/existsSync p) (str/replace (fs/readFileSync p "utf8") "\r\n" "\n")))

;; ── reporting ────────────────────────────────────────────────────────────

(def findings (atom []))
(def checks (atom 0))
(defn- fail! [k msg] (swap! findings conj [k msg]))
(defn- ok! [] (swap! checks inc))

(defn- refuse! [msg]
  (println (str "REFUSED\t" msg))
  (println "Refusing to report a pass: this run could not read what it is supposed to check.")
  (js/process.exit 2))

(defn report! []
  (println (str "CHECKS\t" @checks))
  (when (zero? @checks) (refuse! "zero checks ran"))
  (if (empty? @findings)
    (do (println "OK — every COFOG claim in this repo agrees with the pinned UN structure")
        (js/process.exit 0))
    (do (doseq [[k msg] @findings] (println (str "FAIL\t" (name k) "\t" msg)))
        (println (str "\n" (count @findings) " finding(s)"))
        (js/process.exit 1))))

;; ── the UN structure file ────────────────────────────────────────────────
;; Two whitespace-separated columns: a dotted code and a description. A class
;; description may carry a trailing service-type marker, "(CS)" collective or
;; "(IS)" individual — the distinction national accounts actually uses COFOG for.

(def code-line #"^(\d{2}(?:\.\d)?(?:\.\d)?)\s{2,}(.+?)\s*$")

(defn parse-structure
  "UN structure text -> {:rows [...] :unparsed [...]}. Unparsed non-blank lines
  are RETURNED, not dropped: a parser that silently skips what it does not
  understand reports a truncated file as a complete one."
  [text]
  (let [lines (rest (str/split-lines (or text "")))]
    (reduce
      (fn [acc ln]
        (if (str/blank? ln)
          acc
          (if-let [[_ dotted desc] (re-matches code-line ln)]
            (let [m      (re-matches #"^(.*?)\s*\((CS|IS)\)$" desc)
                  title  (if m (nth m 1) desc)
                  marker (when m (nth m 2))
                  flat   (str/replace dotted "." "")
                  level  (case (count flat) 2 :division 3 :group 4 :class :unknown)]
              (update acc :rows conj {:code flat :dotted dotted :level level
                                      :title (str/trim title)
                                      :service-type (some-> marker str/lower-case)}))
            (update acc :unparsed conj ln))))
      {:rows [] :unparsed []} lines)))

(defn level-counts [rows]
  (reduce (fn [m r] (update m (:level r) (fnil inc 0))) {} rows))

;; ── fetch ────────────────────────────────────────────────────────────────

(defn fetch-one!
  "Returns a promise of {:status :bytes :sha256 :body} or {:error ...}. Never
  rejects — a network failure has to stay distinguishable from a content
  mismatch, and both from success."
  [url]
  (-> (js/fetch url #js {:redirect "follow"})
      (.then (fn [res]
               (.then (.text res)
                      (fn [raw]
                        (let [body (str/replace raw "\r\n" "\n")]
                          {:status (.-status res) :bytes (nbytes body)
                           :sha256 (digest body) :body body})))))
      (.catch (fn [e] {:error (str (.-message e))}))))

;; ── commands ─────────────────────────────────────────────────────────────

(defn- read-sources []
  (if-let [t (slurp* sources-path)]
    ;; Read the file wrapped in a vector, not with a bare read-string. A bare
    ;; read-string returns the FIRST form and ignores whatever follows, so a
    ;; file truncated or appended to mid-edit reads clean and the checks below
    ;; run against a partial record. Wrapping forces every top-level form to be
    ;; read, and anything other than exactly one is a refusal, not a pass.
    (let [forms (try (edn/read-string (str "[" t "\n]"))
                     (catch :default e
                       (refuse! (str "data/sources.edn does not read as EDN: " (.-message e)))))]
      (cond
        (not= 1 (count forms))
        (refuse! (str "data/sources.edn holds " (count forms)
                      " top-level forms; expected exactly 1 (trailing or truncated content)"))
        (not (map? (first forms)))
        (refuse! "data/sources.edn does not hold a map")
        :else (first forms)))
    (refuse! (str "data/sources.edn is absent (" sources-path ")"))))

(defn- check-snapshots! [sources]
  (doseq [s sources]
    (if-let [t (slurp* (at (:path s)))]
      (let [h (digest t)]
        (ok!)
        (when (not= h (:sha256 s))
          (fail! :snapshot-hash (str (:path s) " hashes " (short h) " but sources.edn pins "
                                     (short (:sha256 s)) " (" (:url s) ")")))
        (when (not= (nbytes t) (:bytes s))
          (fail! :snapshot-bytes (str (:path s) " is " (nbytes t) " bytes; sources.edn records " (:bytes s)))))
      (fail! :snapshot-missing (str "pinned file absent: " (:path s))))))

(defn- check-counts! [structure-src rows unparsed declared]
  (ok!)
  (when (seq unparsed)
    (fail! :unparsed (str (count unparsed) " line(s) of " (:path structure-src)
                          " were not understood, so any count below is from a partial read: "
                          (pr-str (vec (take 3 unparsed))))))
  (when (< (count rows) 100)
    (fail! :too-few-rows (str "only " (count rows) " rows parsed from " (:path structure-src)
                              " — refusing to derive counts from that")))
  (let [counts (level-counts rows)]
    (doseq [[level n] declared]
      (ok!)
      (let [actual (get counts level)]
        (when (not= n actual)
          (fail! :count (str "this repo declares " n " " (name level) "(s); "
                             (:path structure-src) " contains " actual)))))))

(defn- check-published-claims!
  "The counts consumers actually read live in PROJECT.jsonld and in the worker
  source, not in data/sources.edn. Check those against the UN file too —
  otherwise :declared is only an echo of itself, and a README that drifts from
  the code stays green."
  [structure-src rows]
  (let [counts (level-counts rows)
        n      (fn [level] (get counts level))]
    ;; PROJECT.jsonld
    (if-let [t (slurp* (at "PROJECT.jsonld"))]
      (let [j (js->clj (js/JSON.parse t))]
        (doseq [[k level] [["etzhayyim:divisions" :division]
                           ["etzhayyim:groups" :group]
                           ["etzhayyim:classes" :class]]]
          (ok!)
          (when (not= (get j k) (n level))
            (fail! :published-claim
                   (str "PROJECT.jsonld " k " is " (pr-str (get j k)) " but "
                        (:path structure-src) " contains " (n level) " " (name level) "(s)")))))
      (fail! :published-claim "PROJECT.jsonld is absent"))
    ;; worker/src/classes-index.ts
    (if-let [t (slurp* (at "worker" "src" "classes-index.ts"))]
      (do (ok!)
          (if-let [m (re-find #"TOTAL_CLASSES\s*=\s*(\d+)" t)]
            (when (not= (js/parseInt (nth m 1) 10) (n :class))
              (fail! :published-claim
                     (str "worker/src/classes-index.ts TOTAL_CLASSES is " (nth m 1)
                          " but " (:path structure-src) " contains " (n :class) " classes")))
            (fail! :published-claim "worker/src/classes-index.ts declares no TOTAL_CLASSES")))
      (fail! :published-claim "worker/src/classes-index.ts is absent"))
    ;; README.md — prose, but it is the first thing a consumer reads
    (if-let [t (slurp* (at "README.md"))]
      (do (ok!)
          (doseq [[level label] [[:division "Divisions"] [:group "Groups"] [:class "Classes"]]]
            (when-not (re-find (re-pattern (str "\\b" (n level) "\\s+" label)) t)
              (fail! :published-claim
                     (str "README.md does not state \"" (n level) " " label "\"; the UN file has "
                          (n level) " " (str/lower-case label))))))
      (fail! :published-claim "README.md is absent"))))

(defn- check-classes! [structure-src rows]
  (let [by-code (into {} (map (juxt :code identity)) rows)
        files   (if (fs/existsSync classes-dir)
                  (filterv #(str/ends-with? % ".json") (sort (fs/readdirSync classes-dir)))
                  [])]
    (when (empty? files) (refuse! (str "no class files under " classes-dir)))
    (doseq [f files]
      (ok!)
      (let [j    (js->clj (js/JSON.parse (slurp* (path/join classes-dir f))) :keywordize-keys true)
            code (:code j)
            un   (get by-code code)]
        (cond
          (nil? un)
          (fail! :unknown-code (str f ": code " (pr-str code) " does not appear in " (:path structure-src)))

          (not= :class (:level un))
          (fail! :not-a-class (str f ": " code " is a " (name (:level un))
                                   " in the UN structure, not a class"))

          :else
          (do
            (when (not= (:nameEn j) (:title un))
              (fail! :name (str f ": nameEn is " (pr-str (:nameEn j)) " but the UN calls "
                                (:dotted un) " " (pr-str (:title un)))))
            (when (not= (:serviceType j) (:service-type un))
              (fail! :service-type (str f ": serviceType is " (pr-str (:serviceType j))
                                        " but the UN marks " (:dotted un) " "
                                        (pr-str (:service-type un)))))
            (when (not= (:source j) (:url structure-src))
              (fail! :source (str f ": source is " (pr-str (:source j))
                                  ", not the pinned structure URL")))))))))

(defn- check-upstream! [sources]
  (-> (js/Promise.all (clj->js (mapv #(fetch-one! (:url %)) sources)))
      (.then (fn [rs]
               (doseq [[s r] (map vector sources (vec rs))]
                 (ok!)
                 (cond
                   (:error r)
                   (fail! :unreachable (str (:url s) " could not be fetched: " (:error r)))

                   (not= 200 (:status r))
                   (fail! :status (str (:url s) " returned HTTP " (:status r)
                                       "; sources.edn records " (:status s)))

                   (not= (:sha256 r) (:sha256 s))
                   (fail! :upstream-drift (str (:url s) " now hashes " (short (:sha256 r))
                                               "; the pinned copy " (:path s) " is " (short (:sha256 s))))

                   :else nil))
               (report!)))))

(defn verify [fetch?]
  (let [{:keys [sources declared]} (read-sources)]
    (when (empty? sources) (refuse! "data/sources.edn lists no sources"))
    (let [structure-src (first (filter #(= :structure (:role %)) sources))]
      (when-not structure-src (refuse! "no source with :role :structure in data/sources.edn"))
      (let [snap (or (slurp* (at (:path structure-src)))
                     (refuse! (str "pinned snapshot missing: " (:path structure-src))))
            {:keys [rows unparsed]} (parse-structure snap)]
        (check-snapshots! sources)
        (check-counts! structure-src rows unparsed declared)
        (check-published-claims! structure-src rows)
        (check-classes! structure-src rows)
        (if fetch?
          (check-upstream! sources)
          (do (println "note: --fetch not given, so upstream reachability was NOT checked this run")
              (report!)))))))

(defn fetch! [sources]
  (-> (js/Promise.all (clj->js (mapv #(fetch-one! (:url %)) sources)))
      (.then (fn [rs]
               (doseq [[s r] (map vector sources (vec rs))]
                 (cond
                   (:error r) (println (str "SKIP (unreachable)\t" (:url s) "\t" (:error r)))
                   (not= 200 (:status r)) (println (str "SKIP (HTTP " (:status r) ")\t" (:url s)))
                   :else
                   (do (fs/mkdirSync (path/dirname (at (:path s))) #js {:recursive true})
                       (fs/writeFileSync (at (:path s)) (:body r))
                       (println (str "GET " (:status r) "\t" (:bytes r) " bytes\tsha256 "
                                     (:sha256 r) "\t" (:url s))))))
               (println "\nRecord :status/:bytes/:sha256/:retrieved-at in data/sources.edn.")
               (println "A URL that did not return 200 was NOT written: an unfetchable URL is not a citation.")))))

(let [args (vec (drop 3 (js->clj js/process.argv)))]
  (case (first args)
    "verify" (verify (boolean (some #{"--fetch"} args)))
    "fetch"  (fetch! (:sources (read-sources)))
    (do (println "usage: cofog-provenance.cljs (verify [--fetch] | fetch)")
        (js/process.exit 2))))
