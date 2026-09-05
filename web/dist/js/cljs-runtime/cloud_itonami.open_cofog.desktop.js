goog.provide('cloud_itonami.open_cofog.desktop');
if((typeof cloud_itonami !== 'undefined') && (typeof cloud_itonami.open_cofog !== 'undefined') && (typeof cloud_itonami.open_cofog.desktop !== 'undefined') && (typeof cloud_itonami.open_cofog.desktop.root !== 'undefined')){
} else {
cloud_itonami.open_cofog.desktop.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
cloud_itonami.open_cofog.desktop.mount_BANG_ = (function cloud_itonami$open_cofog$desktop$mount_BANG_(){
var el = document.getElementById("app");
if(cljs.core.truth_(cljs.core.deref(cloud_itonami.open_cofog.desktop.root))){
} else {
cljs.core.reset_BANG_(cloud_itonami.open_cofog.desktop.root,reagent.dom.client.create_root(el));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cloud_itonami.open_cofog.desktop.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.open_cofog.ui.root], null));
});
cloud_itonami.open_cofog.desktop.init_BANG_ = (function cloud_itonami$open_cofog$desktop$init_BANG_(){
return cloud_itonami.open_cofog.desktop.mount_BANG_();
});

//# sourceMappingURL=cloud_itonami.open_cofog.desktop.js.map
