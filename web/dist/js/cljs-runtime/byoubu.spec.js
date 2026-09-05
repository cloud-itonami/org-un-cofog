goog.provide('byoubu.spec');
/**
 * Every backdrop names the same nine roles. A fixed vocabulary is what lets
 *   `byoubu.plate` build a plate for any entry without special-casing, and
 *   what lets two backdrops be compared.
 */
byoubu.spec.required_palette_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky-zenith","sky-zenith",-20065151),new cljs.core.Keyword(null,"sky-mid","sky-mid",106630624),new cljs.core.Keyword(null,"sky-horizon","sky-horizon",-157541617),new cljs.core.Keyword(null,"haze","haze",-1024870708),new cljs.core.Keyword(null,"ridge-far","ridge-far",762525090),new cljs.core.Keyword(null,"ridge-near","ridge-near",1102584738),new cljs.core.Keyword(null,"dune-lit","dune-lit",790638115),new cljs.core.Keyword(null,"dune-shadow","dune-shadow",423450330),new cljs.core.Keyword(null,"star","star",279424429)], null);
byoubu.spec.required_scene_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky","sky",1271496862),new cljs.core.Keyword(null,"atmosphere","atmosphere",523254734),new cljs.core.Keyword(null,"terrain","terrain",704966005),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"grade","grade",2117054771)], null);
byoubu.spec.textures = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moderate","moderate",-1039163165),null,new cljs.core.Keyword(null,"calm","calm",-533989756),null,new cljs.core.Keyword(null,"busy","busy",-328286801),null], null), null);
byoubu.spec.missing = (function byoubu$spec$missing(m,ks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22645_SHARP_){
return cljs.core.contains_QMARK_(m,p1__22645_SHARP_);
}),ks);
});
/**
 * Vector of problem descriptions for one backdrop; empty means valid.
 */
byoubu.spec.problems = (function byoubu$spec$problems(backdrop){
var id = new cljs.core.Keyword("byoubu","id","byoubu/id",459733156).cljs$core$IFn$_invoke$arity$1(backdrop);
var palette = new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321).cljs$core$IFn$_invoke$arity$1(backdrop);
var band = new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238).cljs$core$IFn$_invoke$arity$1(backdrop);
var scene = new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071).cljs$core$IFn$_invoke$arity$1(backdrop);
var pfx = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),": "].join('');
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22825(s__22826){
return (new cljs.core.LazySeq(null,(function (){
var s__22826__$1 = s__22826;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22826__$1);
if(temp__5825__auto__){
var s__22826__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22826__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22826__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22828 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22827 = (0);
while(true){
if((i__22827 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22827);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
cljs.core.chunk_append(b__22828,[pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23043 = (i__22827 + (1));
i__22827 = G__23043;
continue;
} else {
var G__23044 = (i__22827 + (1));
i__22827 = G__23044;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22828),byoubu$spec$problems_$_iter__22825(cljs.core.chunk_rest(s__22826__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22828),null);
}
} else {
var k = cljs.core.first(s__22826__$2);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
return cljs.core.cons([pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22825(cljs.core.rest(s__22826__$2)));
} else {
var G__23045 = cljs.core.rest(s__22826__$2);
s__22826__$1 = G__23045;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("byoubu","id","byoubu/id",459733156),new cljs.core.Keyword("byoubu","title","byoubu/title",1943539519),new cljs.core.Keyword("byoubu","summary","byoubu/summary",1753941440),new cljs.core.Keyword("byoubu","tags","byoubu/tags",-743870735),new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191),new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445),new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268),new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321),new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238),new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071)], null));
})(),(((id instanceof cljs.core.Keyword))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"id must be a keyword"].join('')], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.int_QMARK_(new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"seed must be an integer \u2014 a backdrop nobody can re-render ","is an asset, not a spec"].join('')], null)),((cljs.core.contains_QMARK_(byoubu.spec.textures,new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"texture must be one of ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(byoubu.spec.textures))].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22831(s__22832){
return (new cljs.core.LazySeq(null,(function (){
var s__22832__$1 = s__22832;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22832__$1);
if(temp__5825__auto__){
var s__22832__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22832__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22832__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22834 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22833 = (0);
while(true){
if((i__22833 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22833);
cljs.core.chunk_append(b__22834,[pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23046 = (i__22833 + (1));
i__22833 = G__23046;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22834),byoubu$spec$problems_$_iter__22831(cljs.core.chunk_rest(s__22832__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22834),null);
}
} else {
var k = cljs.core.first(s__22832__$2);
return cljs.core.cons([pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22831(cljs.core.rest(s__22832__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(palette,byoubu.spec.required_palette_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22835(s__22836){
return (new cljs.core.LazySeq(null,(function (){
var s__22836__$1 = s__22836;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22836__$1);
if(temp__5825__auto__){
var s__22836__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22836__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22836__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22838 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22837 = (0);
while(true){
if((i__22837 < size__5479__auto__)){
var vec__22844 = cljs.core._nth(c__5478__auto__,i__22837);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22844,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
cljs.core.chunk_append(b__22838,[pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''));

var G__23047 = (i__22837 + (1));
i__22837 = G__23047;
continue;
} else {
var G__23048 = (i__22837 + (1));
i__22837 = G__23048;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22838),byoubu$spec$problems_$_iter__22835(cljs.core.chunk_rest(s__22836__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22838),null);
}
} else {
var vec__22847 = cljs.core.first(s__22836__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22847,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22847,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
return cljs.core.cons([pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''),byoubu$spec$problems_$_iter__22835(cljs.core.rest(s__22836__$2)));
} else {
var G__23049 = cljs.core.rest(s__22836__$2);
s__22836__$1 = G__23049;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(palette);
})(),((cljs.core.contains_QMARK_(palette,new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"accent ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)], 0))," is not a palette key"].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22850(s__22851){
return (new cljs.core.LazySeq(null,(function (){
var s__22851__$1 = s__22851;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22851__$1);
if(temp__5825__auto__){
var s__22851__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22851__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22851__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22853 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22852 = (0);
while(true){
if((i__22852 < size__5479__auto__)){
var vec__22854 = cljs.core._nth(c__5478__auto__,i__22852);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22854,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22854,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
cljs.core.chunk_append(b__22853,[pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23050 = (i__22852 + (1));
i__22852 = G__23050;
continue;
} else {
var G__23051 = (i__22852 + (1));
i__22852 = G__23051;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22853),byoubu$spec$problems_$_iter__22850(cljs.core.chunk_rest(s__22851__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22853),null);
}
} else {
var vec__22857 = cljs.core.first(s__22851__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22857,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22857,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
return cljs.core.cons([pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22850(cljs.core.rest(s__22851__$2)));
} else {
var G__23052 = cljs.core.rest(s__22851__$2);
s__22851__$1 = G__23052;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(band);
})(),(function (){var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0.0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,band));
var drift = (total - 1.0);
var drift__$1 = (((drift < (0)))?(- drift):drift);
if((drift__$1 > 0.001)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"content-band weights sum to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total),", not 1.0"].join('')], null);
} else {
return null;
}
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22860(s__22861){
return (new cljs.core.LazySeq(null,(function (){
var s__22861__$1 = s__22861;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22861__$1);
if(temp__5825__auto__){
var s__22861__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22861__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22861__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22863 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22862 = (0);
while(true){
if((i__22862 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22862);
cljs.core.chunk_append(b__22863,[pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23057 = (i__22862 + (1));
i__22862 = G__23057;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22863),byoubu$spec$problems_$_iter__22860(cljs.core.chunk_rest(s__22861__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22863),null);
}
} else {
var k = cljs.core.first(s__22861__$2);
return cljs.core.cons([pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22860(cljs.core.rest(s__22861__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(scene,byoubu.spec.required_scene_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22864(s__22865){
return (new cljs.core.LazySeq(null,(function (){
var s__22865__$1 = s__22865;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22865__$1);
if(temp__5825__auto__){
var s__22865__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22865__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22865__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22867 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22866 = (0);
while(true){
if((i__22866 < size__5479__auto__)){
var vec__22914 = cljs.core._nth(c__5478__auto__,i__22866);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22914,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22914,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
cljs.core.chunk_append(b__22867,[pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''));

var G__23059 = (i__22866 + (1));
i__22866 = G__23059;
continue;
} else {
var G__23060 = (i__22866 + (1));
i__22866 = G__23060;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22867),byoubu$spec$problems_$_iter__22864(cljs.core.chunk_rest(s__22865__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22867),null);
}
} else {
var vec__22926 = cljs.core.first(s__22865__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22926,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22926,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
return cljs.core.cons([pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''),byoubu$spec$problems_$_iter__22864(cljs.core.rest(s__22865__$2)));
} else {
var G__23064 = cljs.core.rest(s__22865__$2);
s__22865__$1 = G__23064;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.select_keys(new cljs.core.Keyword("byoubu","measured","byoubu/measured",-610808208).cljs$core$IFn$_invoke$arity$1(backdrop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plate","plate",-1920178141),new cljs.core.Keyword(null,"poster","poster",-1616913550)], null)));
})(),(function (){var f = byoubu.facts.derive_facts(backdrop);
var ink = new cljs.core.Keyword("byoubu.facts","ink","byoubu.facts/ink",567836213).cljs$core$IFn$_invoke$arity$1(f);
var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22984(s__22985){
return (new cljs.core.LazySeq(null,(function (){
var s__22985__$1 = s__22985;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22985__$1);
if(temp__5825__auto__){
var s__22985__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22985__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22985__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22987 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22986 = (0);
while(true){
if((i__22986 < size__5479__auto__)){
var vec__22995 = cljs.core._nth(c__5478__auto__,i__22986);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22995,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22995,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
cljs.core.chunk_append(b__22987,[pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''));

var G__23069 = (i__22986 + (1));
i__22986 = G__23069;
continue;
} else {
var G__23070 = (i__22986 + (1));
i__22986 = G__23070;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22987),byoubu$spec$problems_$_iter__22984(cljs.core.chunk_rest(s__22985__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22987),null);
}
} else {
var vec__23032 = cljs.core.first(s__22985__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23032,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23032,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
return cljs.core.cons([pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''),byoubu$spec$problems_$_iter__22984(cljs.core.rest(s__22985__$2)));
} else {
var G__23071 = cljs.core.rest(s__22985__$2);
s__22985__$1 = G__23071;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.facts.tier_colors(backdrop));
})()], 0)));
});
byoubu.spec.valid_QMARK_ = (function byoubu$spec$valid_QMARK_(backdrop){
return cljs.core.empty_QMARK_(byoubu.spec.problems(backdrop));
});

//# sourceMappingURL=byoubu.spec.js.map
