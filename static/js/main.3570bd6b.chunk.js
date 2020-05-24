(this["webpackJsonpsuper-gif"]=this["webpackJsonpsuper-gif"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(18),r=n.n(c),o=(n(76),n(67)),l=n(121),s=n(21),u=n(23),f=n(60);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d={typography:{fontFamily:["Zilla Slab","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},palette:{primary:{main:"#95C9FF"}}},m=n(66),p=n(5),g=n(17),b=n(29),h=n(122),O=n(120),E=n(117),y=n(61),j=n(3),S=n(118),v=n(125),I=n(119),w={header:{backgroundColor:"#fff",display:"flex",flexDirection:"column",alignItems:"center"},title:{fontSize:48,color:"#000",fontWeight:"bold",margin:12,transition:"0.2s"},titleShrunk:{fontSize:32}},_=function(e,t){var n=Object(a.useState)(e),i=Object(b.a)(n,2),c=i[0],r=i[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){r(e)}),t);return function(){clearTimeout(n)}}),[e,t]),c},N=function(e){return Object.keys(e).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&")},T=Object(E.a)(w),k=function(){var e=T(w),t=Object(S.a)({disableHysteresis:!0,threshold:0}),n=_(t,125);return i.a.createElement(v.a,{position:"sticky",className:e.header,elevation:n?6:0},i.a.createElement(I.a,{className:Object(j.a)(e.title,n&&e.titleShrunk)},"Super GIF"))},x=n(38),L=n.n(x),C="EBwOiGqfDkDOzuwUQGL0sjsV2lP0rjI7",D={search:"/gifs/search",trending:"/gifs/trending",trends:"/trending/searches"},R=n(30),G=n(123),F=n(65),A=n.n(F),U=n(32),P=Object(E.a)((function(e){return{trendsContainer:Object(U.a)({transition:"0.2s",background:"#fff",display:"flex",flexDirection:"row",overflowX:"scroll"},e.breakpoints.up("sm"),{overflowX:"unset",flexWrap:"wrap",justifyContent:"center"}),chip:{display:"flex",flexDirection:"row",marginLeft:8,fontWeight:"800",marginBottom:8,fontSize:16},selectedChip:{border:"2px solid #1F4788",color:"#1F4788"}}})),B=function(e){var t=P(),n=Object(u.c)((function(e){return e.trends})),a=e.selectedTrend,c=e.setTrend,r=Object(S.a)({disableHysteresis:!0,threshold:0}),o=_(r,125);return i.a.createElement(v.a,{className:t.trendsContainer,elevation:0,position:"sticky",style:{top:o?71:96}},["Trending"].concat(Object(R.a)(n.list)).map((function(e){return i.a.createElement(G.a,{label:e,icon:"Trending"===e&&i.a.createElement(A.a,null),key:e,onClick:function(){return c("Trending"===e?null:e)},clickable:!0,className:Object(j.a)(t.chip,(a===e||null===a&&"Trending"===e)&&t.selectedChip),color:"primary"})})))},W=Object(E.a)((function(){return{root:{width:"100vw",minHeight:"calc(100vh - 96px)",display:"flex",flexDirection:"column",alignItems:"center"},masonryContainer:{width:"100vw",display:"flex",flexDirection:"row",alignItems:"center"},masonry:{columns:"5 150px",columnGap:12,width:"90%",margin:"0 auto"},brick:{margin:"6px 0",display:"inline-block",width:"100%",transition:"all .25s ease-in-out"},listImage:{width:"100%",borderRadius:3},loader:{margin:"0 auto"},invisible:{opacity:1}}})),z=function(){var e=W(),t=Object(u.c)((function(e){return e.gifList})),n=Object(u.b)(),c=Object(a.useState)(null),r=Object(b.a)(c,2),o=r[0],l=r[1],s=Object(a.useState)(),f=Object(b.a)(s,2),d=f[0],m=f[1],p=Object(a.useRef)(null);return function(e,t,n){var i=Object(a.useCallback)((function(e){new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>t&&n((function(e){return e+1}))}))})).observe(e)}),[n,t]);Object(a.useEffect)((function(){e.current&&i(e.current)}),[i,e])}(p,0,m),Object(a.useEffect)((function(){n(function(){var e={api_key:C},t=L.a.get("".concat("https://api.giphy.com/v1").concat(D.trends,"?").concat(N(e)));return function(e){e({type:"TRENDS_LIST_LOADING"}),t.then((function(t){var n=t.data;e({type:"TRENDS_LIST_RESPONSE",payload:n})}))}}())}),[n]),Object(a.useEffect)((function(){n((function(e){return e({type:"CLEAR_GIF_LIST"})})),m(0)}),[n,o]),Object(a.useEffect)((function(){n(function(e,t){var n=Object(g.a)(Object(g.a)({},t),{},{api_key:C}),a=L.a.get("".concat("https://api.giphy.com/v1").concat(D[e],"?").concat(N(n)));return function(e){e({type:"GIF_LIST_LOADING"}),a.then((function(t){var n=t.data;e({type:"GIF_LIST_RESPONSE",payload:n})}))}}(o?"search":"trending",Object(g.a)({limit:10,offset:10*d},o&&{q:o})))}),[n,o,d]),i.a.createElement("div",{className:e.root},i.a.createElement(k,null),i.a.createElement(B,{selectedTrend:o,setTrend:l}),i.a.createElement("div",{className:e.masonryContainer},i.a.createElement("div",{className:e.masonry},t.list.map((function(t){return i.a.createElement(h.a,{className:e.brick,key:t.id},i.a.createElement(y.Img,{alt:t.id,className:e.listImage,src:t.images.fixed_width.url,loader:i.a.createElement("div",{style:{height:"".concat(t.images.fixed_width.height,"px"),width:"".concat(t.images.fixed_width.width,"px"),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},className:e.listImage},i.a.createElement(O.a,null))}))})))),i.a.createElement(O.a,{ref:p,className:Object(j.a)(e.loader,!t.loading&&e.invisible)}))},H=function(){return i.a.createElement(m.a,{basename:"/SuperGIF"},i.a.createElement(p.c,null,i.a.createElement(p.a,{exact:!0,path:"/",component:z})))},X={loading:!1,list:[],pagination:{}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"GIF_LIST_LOADING":return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case"GIF_LIST_RESPONSE":return{loading:!1,list:[].concat(Object(R.a)(e.list),Object(R.a)(n.data)),pagination:n.pagination};case"CLEAR_GIF_LIST":return Object(g.a)({},X);default:return e}},q={loading:!1,list:[]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"TRENDS_LIST_LOADING":return{loading:!0,list:[]};case"TRENDS_LIST_RESPONSE":return{loading:!1,list:n.data};default:return e}},V=Object(s.c)({gifList:M,trends:J}),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,Z=Object(s.e)(V,Q(Object(s.a)(f.a))),$=Object(o.a)(d);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u.a,{store:Z},i.a.createElement(l.a,{theme:$},i.a.createElement(H,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,n){e.exports=n(103)},76:function(e,t,n){}},[[71,1,2]]]);
//# sourceMappingURL=main.3570bd6b.chunk.js.map