goog.provide('cloud_itonami.open_cofog.ui');
cloud_itonami.open_cofog.ui.css_text = "\n.oc-app { min-height: 100vh; padding: 24px; background: var(--liquid-glass-bg, #11161d); color: var(--liquid-glass-fg, #eef4f8); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; }\n.oc-top { margin-bottom: 18px; }\n.oc-top p, .oc-top span, .oc-muted, .oc-app h2, .oc-facts span { color: #96a6b8; }\n.oc-top p { margin: 0 0 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; }\n.oc-app h1, .oc-app h2, .oc-app p { margin: 0; }\n.oc-app h1 { font-size: clamp(28px, 5vw, 48px); line-height: 1.05; }\n.oc-top span { display: block; margin-top: 8px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.oc-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 12px; }\n.oc-facts > div, .oc-panel { border: 1px solid #2b3948; border-radius: 8px; background: #171f28; }\n.oc-facts > div { padding: 14px; }\n.oc-facts span { display: block; margin-bottom: 8px; font-size: 12px; }\n.oc-facts strong { overflow-wrap: anywhere; }\n.oc-panel { margin-bottom: 12px; padding: 16px; }\n.oc-app h2 { margin-bottom: 12px; font-size: 13px; text-transform: uppercase; }\n.oc-app ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }\n.oc-app li, .oc-path p { border: 1px solid #263443; border-radius: 6px; background: #101720; padding: 9px 10px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.oc-chips { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }\n@media (max-width: 760px) { .oc-app { padding: 18px; } .oc-facts { grid-template-columns: 1fr; } }\n";
cloud_itonami.open_cofog.ui.panel = (function cloud_itonami$open_cofog$ui$panel(title,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.oc-panel","section.oc-panel",-519144734),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),body], null);
});
cloud_itonami.open_cofog.ui.facts = (function cloud_itonami$open_cofog$ui$facts(app){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.oc-facts","section.oc-facts",-2110683075),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Project"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Routes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"route-count","route-count",-1535759193).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"XRPC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(cljs.core.truth_(new cljs.core.Keyword(null,"xrpc?","xrpc?",938402752).cljs$core$IFn$_invoke$arity$1(app))?"enabled":"not configured")], null)], null)], null);
});
cloud_itonami.open_cofog.ui.public_routes = (function cloud_itonami$open_cofog$ui$public_routes(p__23617){
var map__23618 = p__23617;
var map__23618__$1 = cljs.core.__destructure_map(map__23618);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23618__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.open_cofog.ui.panel,"Public Routes",((cljs.core.seq(routes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function cloud_itonami$open_cofog$ui$public_routes_$_iter__23619(s__23620){
return (new cljs.core.LazySeq(null,(function (){
var s__23620__$1 = s__23620;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23620__$1);
if(temp__5825__auto__){
var s__23620__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23620__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23620__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23622 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23621 = (0);
while(true){
if((i__23621 < size__5479__auto__)){
var r = cljs.core._nth(c__5478__auto__,i__23621);
cljs.core.chunk_append(b__23622,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)));

var G__23689 = (i__23621 + (1));
i__23621 = G__23689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23622),cloud_itonami$open_cofog$ui$public_routes_$_iter__23619(cljs.core.chunk_rest(s__23620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23622),null);
}
} else {
var r = cljs.core.first(s__23620__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)),cloud_itonami$open_cofog$ui$public_routes_$_iter__23619(cljs.core.rest(s__23620__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(routes);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.oc-muted","p.oc-muted",1257989416),"No public route is declared next to this app surface."], null))], null);
});
cloud_itonami.open_cofog.ui.runtime_bindings = (function cloud_itonami$open_cofog$ui$runtime_bindings(p__23626){
var map__23627 = p__23626;
var map__23627__$1 = cljs.core.__destructure_map(map__23627);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23627__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.open_cofog.ui.panel,"Runtime Bindings",((cljs.core.seq(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.oc-chips","ul.oc-chips",2066689692),(function (){var iter__5480__auto__ = (function cloud_itonami$open_cofog$ui$runtime_bindings_$_iter__23628(s__23629){
return (new cljs.core.LazySeq(null,(function (){
var s__23629__$1 = s__23629;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23629__$1);
if(temp__5825__auto__){
var s__23629__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23629__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23629__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23631 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23630 = (0);
while(true){
if((i__23630 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__23630);
cljs.core.chunk_append(b__23631,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__23691 = (i__23630 + (1));
i__23630 = G__23691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23631),cloud_itonami$open_cofog$ui$runtime_bindings_$_iter__23628(cljs.core.chunk_rest(s__23629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23631),null);
}
} else {
var k = cljs.core.first(s__23629__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),cloud_itonami$open_cofog$ui$runtime_bindings_$_iter__23628(cljs.core.rest(s__23629__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(vars);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.oc-muted","p.oc-muted",1257989416),"No public vars are declared in the nearest wrangler config."], null))], null);
});
cloud_itonami.open_cofog.ui.source = (function cloud_itonami$open_cofog$ui$source(p__23653){
var map__23654 = p__23653;
var map__23654__$1 = cljs.core.__destructure_map(map__23654);
var relative_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23654__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.oc-panel.oc-path","section.oc-panel.oc-path",1317945678),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Source"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),relative_path], null)], null);
});
cloud_itonami.open_cofog.ui.root = (function cloud_itonami$open_cofog$ui$root(){
var map__23655 = cljs.core.deref(cloud_itonami.open_cofog.state.state);
var map__23655__$1 = cljs.core.__destructure_map(map__23655);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23655__$1,new cljs.core.Keyword(null,"app","app",-560961707));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),cloud_itonami.open_cofog.ui.css_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [appkit.core.panel,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.oc-app","main.oc-app",-1120851554),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.oc-top","section.oc-top",-890785162),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Cloudflare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(app))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(app)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.open_cofog.ui.facts,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.open_cofog.ui.public_routes,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.open_cofog.ui.runtime_bindings,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.open_cofog.ui.source,app], null)], null)], null)], null);
});

//# sourceMappingURL=cloud_itonami.open_cofog.ui.js.map
