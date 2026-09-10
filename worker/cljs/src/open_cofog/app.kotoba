(ns open-cofog.app
  "etzhayyim-open-cofog worker appview — reagent + re-frame, view built from
  jp-go-dds (デジタル庁デザインシステム) hiccup.

  Faithful port of the previous SvelteKit scaffold's status page
  (`worker/svelte/src/routes/+page.svelte`, 84 lines): a static display of
  this Worker's own declared surface — title / project / kind, route count
  + list, wrangler var keys, an XRPC-enabled flag, and its own source
  path. Every field below mirrors the constant `app` object `+page.svelte`
  held in its <script> block; nothing here is invented and nothing is
  simplified away.

  `worker/svelte` no longer existed in this repo when this migration
  started — an earlier, non-conforming pass (`34166ac`, 'migrate open-cofog
  worker UI from svelte to cljs') had already deleted it wholesale,
  including `+server.ts`, without a replacement inside `worker/`. This
  namespace's content was recovered byte-for-byte from
  `34166ac623dafdc7013013f7a49b9064c06ed8f4^1:worker/svelte/src/routes/+page.svelte`
  via `git show`. See `worker/wrangler.jsonc`'s header comment and this
  repo's migration commit message for the full account.

  Four kinds of change were made to that constant, and all four are
  spelled out here rather than silently applied:

  - `:app/relative-path` now names this file, not the deleted Svelte one.
  - `:app/route-count` and `:app/routes` are corrected, not copied. The
    Svelte scaffold's `app` constant held `routeCount: 0` and
    `routes: []`, but `worker/wrangler.jsonc` actually declares one route
    (`open-cofog.etzhayyim.com/*`) — the generated status page was stale
    on this point. Likewise `:app/vars` is the real `worker/wrangler.jsonc`
    `vars` key set (`AGENTGATEWAY_MCP_ROUTER_URL`, `APP_FRAMEWORK`,
    `APP_HANDLE`, `PRIMARY_DID`, sorted), not the Svelte scaffold's empty
    `vars: []`.
  - `:app/xrpc?` stays true, but for a different, more accurate reason
    than the Svelte scaffold had. `worker/wrangler.jsonc`'s `main` is
    *not* being dropped by this migration (see that file's header comment
    for why: `worker/src/app.ts` independently implements four real, live
    XRPC GET routes under `com.etzhayyim.apps.openCofog.*` — the actual
    product this repo exists to serve — and dropping `main` would remove
    that service, not just this status page). So XRPC handling stays
    live, just through a different mechanism than before: `app.ts`'s own
    native routes, not the moved-but-now-unwired
    `worker/src/xrpc-mcp-router-proxy.ts` (the former
    `+server.ts`, which forwarded arbitrary XRPC method names as MCP
    `tools/call` — that generic proxy is preserved byte-identical but
    `app.ts` never imports or calls it, so it no longer runs).
  - Whether this page itself is ever reachable in production is a
    separate, open question this migration does not resolve: `app.ts`'s
    `fetch` handles every request itself and never calls
    `env.ASSETS.fetch(request)`, so `assets.directory` (now
    `./cljs/public`, see wrangler.jsonc) is not wired to serve anything
    while `main` stays `./src/app.ts`. That gap predates this migration
    (this repo's `wrangler.jsonc` pointed `main` at a SvelteKit build
    output, not `app.ts`, for its entire history until 34166ac) and
    fixing it would mean editing `worker/src/app.ts`, which is out of
    scope for a frontend migration.

  `public/index.html`'s inlined <style> was produced once, at authoring
  time, by `jp-go-dds.page/->page` running on the JVM (via this deps.edn's
  jp-go-dds git/sha), concatenating the vendored `dds.css` with
  `jp-go-dds.core/ext-css` — exactly what `jp-go-dds.page/page` composes
  for its own <style> block. This namespace only requires
  `jp-go-dds.core` — the browser bundle does not need `jp-go-dds.page` or
  `html.core` at runtime; those are JVM-only tools used to author the
  static shell once. Regenerate that shell (e.g. if jp-go-dds's core
  components or ext-rules change) with:

    (require '[jp-go-dds.page :as page] '[clojure.java.io :as io])
    (spit \"public/index.html\"
          (page/->page {:title \"etzhayyim-open-cofog\"
                         :lang \"ja\"
                         :description \"etzhayyim-open-cofog — Cloudflare worker status page (reagent + re-frame + jp-go-dds).\"
                         :css (slurp (io/resource \"jp_go_dds/dds.css\"))}
                        [:div {:id \"app\"} \"etzhayyim-open-cofog loading…\"]
                        [:script {:src \"js/app.js\"}]))"
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [jp-go-dds.core :as dds]))

;; -- db ------------------------------------------------------------------
;;
;; Same seven facts + own source path that `+page.svelte`'s `app` const
;; held (title/project/name/kind/routeCount/routes/vars/xrpc/relativePath),
;; with route-count/routes/vars corrected to worker/wrangler.jsonc's real
;; values (see namespace docstring).

(def default-db
  {:app/title "Worker"
   :app/project "etzhayyim-project-open-cofog"
   :app/name "worker"
   :app/kind "worker"
   :app/route-count 1
   :app/routes ["open-cofog.etzhayyim.com/*"]
   :app/vars ["AGENTGATEWAY_MCP_ROUTER_URL" "APP_FRAMEWORK" "APP_HANDLE" "PRIMARY_DID"]
   :app/xrpc? true
   :app/relative-path "worker/cljs/src/open_cofog/app.cljs"})

(rf/reg-event-db
 :initialize-db
 (fn [_ _] default-db))

(rf/reg-sub :app/title (fn [db _] (:app/title db)))
(rf/reg-sub :app/project (fn [db _] (:app/project db)))
(rf/reg-sub :app/name (fn [db _] (:app/name db)))
(rf/reg-sub :app/kind (fn [db _] (:app/kind db)))
(rf/reg-sub :app/route-count (fn [db _] (:app/route-count db)))
(rf/reg-sub :app/routes (fn [db _] (:app/routes db)))
(rf/reg-sub :app/vars (fn [db _] (:app/vars db)))
(rf/reg-sub :app/xrpc? (fn [db _] (:app/xrpc? db)))
(rf/reg-sub :app/relative-path (fn [db _] (:app/relative-path db)))

;; -- view ------------------------------------------------------------------

(defn app-view []
  (let [title         @(rf/subscribe [:app/title])
        name          @(rf/subscribe [:app/name])
        kind          @(rf/subscribe [:app/kind])
        project       @(rf/subscribe [:app/project])
        route-count   @(rf/subscribe [:app/route-count])
        routes        @(rf/subscribe [:app/routes])
        vars          @(rf/subscribe [:app/vars])
        xrpc?         @(rf/subscribe [:app/xrpc?])
        relative-path @(rf/subscribe [:app/relative-path])]
    (dds/container

     [:section {:class "dds-ext-section"}
      [:p {:class "dds-ext-lead"} (str "Cloudflare " kind)]
      (dds/heading 1 title)
      [:span {:class "dads-u-mono-16N-150"} name]]

     [:section {:class "dds-ext-section"}
      (dds/grid {:min "12rem"}
        (dds/card [:p {:class "dds-ext-lead"} "Project"] [:strong project])
        (dds/card [:p {:class "dds-ext-lead"} "Routes"] [:strong (str route-count)])
        (dds/card [:p {:class "dds-ext-lead"} "XRPC"]
                  [:strong (if xrpc? "enabled" "not configured")]))]

     [:section {:class "dds-ext-section"}
      (dds/heading 2 "Public Routes" {:size "24"})
      (if (seq routes)
        (dds/card
         (into [:ul {:class "dds-ext-stack"}]
               (map (fn [r] [:li {:class "dads-u-mono-16N-150"} r]) routes)))
        [:p {:class "dds-ext-lead"} "No public route is declared next to this app surface."])]

     [:section {:class "dds-ext-section"}
      (dds/heading 2 "Runtime Bindings" {:size "24"})
      (if (seq vars)
        (into [:div {:class "dds-ext-row"}]
              (map (fn [v] (dds/chip-label v {:color "blue"})) vars))
        [:p {:class "dds-ext-lead"} "No public vars are declared in the nearest wrangler config."])]

     [:section {:class "dds-ext-section"}
      (dds/heading 2 "Source" {:size "24"})
      [:p {:class "dads-u-mono-16N-150"} relative-path]])))

;; -- mount -------------------------------------------------------------------

(defn render []
  (rdom/render [app-view] (.getElementById js/document "app")))

(defn ^:export main []
  (rf/dispatch-sync [:initialize-db])
  (render))
