(ns cloud-itonami.open-cofog.state
  "App state for the open-cofog worker UI. Ported 1:1 from the former
  worker/svelte/src/routes/+page.svelte template shell — a single static
  screen describing the app surface (title / project / routes / bindings /
  source path). Single reagent atom, murakumo-studio構成."
  (:require [reagent.core :as r]))

(defonce state
  (r/atom
   {:app {:title "Worker"
          :project "etzhayyim-project-open-cofog"
          :name "worker"
          :kind "worker"
          :route-count 0
          :routes []
          :vars []
          :xrpc? true
          :relative-path "60-apps/etzhayyim-project-open-cofog/worker/svelte/src/routes/+page.svelte"}}))
