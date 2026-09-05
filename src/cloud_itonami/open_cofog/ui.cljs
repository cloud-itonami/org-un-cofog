(ns cloud-itonami.open-cofog.ui
  "View tree for the open-cofog worker UI. Ported 1:1 from the former
  worker/svelte/src/routes/+page.svelte (template shell screen). Structural
  chrome comes from appkit.core / kotoba-ui.core (murakumo-studio構成);
  panels are hand-rolled hiccup styled with kotoba-ui's exposed class-name,
  mirroring cloud-itonami.keyboard.ui / cloud-itonami.vin.ui."
  (:require [appkit.core :as shape]
            [kotoba-ui.core :as ui]
            [cloud-itonami.open-cofog.state :as state]))

(def css-text
  "
.oc-app { min-height: 100vh; padding: 24px; background: var(--liquid-glass-bg, #11161d); color: var(--liquid-glass-fg, #eef4f8); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; }
.oc-top { margin-bottom: 18px; }
.oc-top p, .oc-top span, .oc-muted, .oc-app h2, .oc-facts span { color: #96a6b8; }
.oc-top p { margin: 0 0 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; }
.oc-app h1, .oc-app h2, .oc-app p { margin: 0; }
.oc-app h1 { font-size: clamp(28px, 5vw, 48px); line-height: 1.05; }
.oc-top span { display: block; margin-top: 8px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }
.oc-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 12px; }
.oc-facts > div, .oc-panel { border: 1px solid #2b3948; border-radius: 8px; background: #171f28; }
.oc-facts > div { padding: 14px; }
.oc-facts span { display: block; margin-bottom: 8px; font-size: 12px; }
.oc-facts strong { overflow-wrap: anywhere; }
.oc-panel { margin-bottom: 12px; padding: 16px; }
.oc-app h2 { margin-bottom: 12px; font-size: 13px; text-transform: uppercase; }
.oc-app ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }
.oc-app li, .oc-path p { border: 1px solid #263443; border-radius: 6px; background: #101720; padding: 9px 10px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }
.oc-chips { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
@media (max-width: 760px) { .oc-app { padding: 18px; } .oc-facts { grid-template-columns: 1fr; } }
")

(defn- panel [title body]
  [:section.oc-panel
   [:h2 title]
   body])

(defn- facts [app]
  [:section.oc-facts
   [:div [:span "Project"] [:strong (:project app)]]
   [:div [:span "Routes"] [:strong (:route-count app)]]
   [:div [:span "XRPC"] [:strong (if (:xrpc? app) "enabled" "not configured")]]])

(defn- public-routes [{:keys [routes]}]
  [panel "Public Routes"
   (if (seq routes)
     [:ul (for [r routes] ^{:key r} [:li r])]
     [:p.oc-muted "No public route is declared next to this app surface."])])

(defn- runtime-bindings [{:keys [vars]}]
  [panel "Runtime Bindings"
   (if (seq vars)
     [:ul.oc-chips (for [k vars] ^{:key k} [:li k])]
     [:p.oc-muted "No public vars are declared in the nearest wrangler config."])])

(defn- source [{:keys [relative-path]}]
  [:section.oc-panel.oc-path
   [:h2 "Source"]
   [:p relative-path]])

;; root

(defn root []
  (let [{:keys [app]} @state/state]
    [:div
     [:style css-text]
     [shape/panel
      [:main.oc-app
       [:section.oc-top
        [:p (str "Cloudflare " (:kind app))]
        [:h1 (:title app)]
        [:span (:name app)]]
       [facts app]
       [public-routes app]
       [runtime-bindings app]
       [source app]]]]))
