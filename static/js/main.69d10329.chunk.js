(this["webpackJsonpsuper-gif"]=this["webpackJsonpsuper-gif"]||[]).push([[0],{52:function(e,t,n){e.exports=n(79)},57:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(17),o=n.n(c),r=(n(57),n(49)),s=n(97),l=n(11),u=n(16),f=n(42);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h={typography:{fontFamily:["Zilla Slab","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}},g=n(8),m=n(23),b=n(43),d=n(96),O=n(92),j=n(94),p=n(98),E=n(95),S=n(6),I={header:{backgroundColor:"#fff",display:"flex",flexDirection:"column",alignItems:"center"},title:{fontSize:48,color:"#000",fontWeight:"bold",margin:12,transition:"0.2s"},titleShrunk:{fontSize:32}},v=Object(O.a)(I),_=function(){var e=v(I),t=function(e,t){var n=Object(a.useState)(e),i=Object(m.a)(n,2),c=i[0],o=i[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){o(e)}),t);return function(){clearTimeout(n)}}),[e,t]),c}(Object(j.a)({threshold:0}),250);return i.a.createElement(p.a,{position:"sticky",className:e.header,elevation:t?6:0},i.a.createElement(E.a,{className:Object(S.a)(e.title,t&&e.titleShrunk)},"Super GIF"))},y=n(48),w=n.n(y),k={search:"/gifs/search",trending:"/gifs/trending"},L=function(e,t){var n=Object(g.a)(Object(g.a)({},t),{},{api_key:"EBwOiGqfDkDOzuwUQGL0sjsV2lP0rjI7"}),a=w.a.get("".concat("http://api.giphy.com/v1").concat(k[e],"?").concat(function(e){return Object.keys(e).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&")}(n)));return function(e){e({type:"GIF_LIST_LOADING"}),a.then((function(t){var n=t.data;e({type:"GIF_LIST_RESPONSE",payload:n})}))}},G=Object(O.a)({border:{height:2,width:1}}),N=function(){var e=G(),t=Object(u.c)((function(e){return e.gifList})),n=Object(u.b)(),c=Object(a.useState)(0),o=Object(m.a)(c,2),r=o[0],s=o[1],l=Object(a.useRef)(null);!function(e,t,n){var i=Object(a.useCallback)((function(e){new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>t&&n((function(e){return e+1}))}))})).observe(e)}),[n,t]);Object(a.useEffect)((function(){e.current&&i(e.current)}),[i,e])}(l,0,s),Object(a.useEffect)((function(){n(L("trending",{limit:10,offset:10*r}))}),[n,r]);var f=Object(a.useMemo)((function(){return t.list.map((function(e){return Object(g.a)(Object(g.a)({},e.images.fixed_height),{},{src:e.images.fixed_height.url,width:parseInt(e.images.fixed_height.width,10),height:parseInt(e.images.fixed_height.height,10)})}))}),[t.list]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(_,null),i.a.createElement(b.a,{photos:f}),t.loading&&i.a.createElement(d.a,null),i.a.createElement("div",{ref:l,className:e.border}))},F=n(28),R={loading:!1,list:[],pagination:{}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"GIF_LIST_LOADING":return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case"GIF_LIST_RESPONSE":return{loading:!1,list:[].concat(Object(F.a)(e.list),Object(F.a)(n.data)),pagination:n.pagination};case"CLEAR_GIF_LIST":return Object(g.a)({},R);default:return e}},x=Object(l.c)({gifList:T}),C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,D=Object(l.e)(x,C(Object(l.a)(f.a))),U=Object(r.a)(h);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u.a,{store:D},i.a.createElement(s.a,{theme:U},i.a.createElement(N,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.69d10329.chunk.js.map