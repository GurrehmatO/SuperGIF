(this["webpackJsonpsuper-gif"]=this["webpackJsonpsuper-gif"]||[]).push([[0],{60:function(e,t,n){e.exports=n(88)},65:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(22),o=n.n(i),r=(n(65),n(57)),l=n(106),s=n(16),u=n(21),f=n(49);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m={typography:{fontFamily:["Zilla Slab","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}},h=n(56),g=n(4),b=n(12),d=n(29),O=n(50),p=n(105),j=n(101),E=n(103),I=n(107),S=n(104),v=n(10),_={header:{backgroundColor:"#fff",display:"flex",flexDirection:"column",alignItems:"center"},title:{fontSize:48,color:"#000",fontWeight:"bold",margin:12,transition:"0.2s"},titleShrunk:{fontSize:32}},y=Object(j.a)(_),w=function(){var e=y(_),t=function(e,t){var n=Object(a.useState)(e),c=Object(d.a)(n,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){o(e)}),t);return function(){clearTimeout(n)}}),[e,t]),i}(Object(E.a)({threshold:0}),250);return c.a.createElement(I.a,{position:"sticky",className:e.header,elevation:t?6:0},c.a.createElement(S.a,{className:Object(v.a)(e.title,t&&e.titleShrunk)},"Super GIF"))},k=n(55),L=n.n(k),G={search:"/gifs/search",trending:"/gifs/trending"},F=function(e,t){var n=Object(b.a)(Object(b.a)({},t),{},{api_key:"EBwOiGqfDkDOzuwUQGL0sjsV2lP0rjI7"}),a=L.a.get("".concat("http://api.giphy.com/v1").concat(G[e],"?").concat(function(e){return Object.keys(e).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&")}(n)));return function(e){e({type:"GIF_LIST_LOADING"}),a.then((function(t){var n=t.data;e({type:"GIF_LIST_RESPONSE",payload:n})}))}},N=Object(j.a)({border:{height:2,width:1}}),R=function(){var e=N(),t=Object(u.c)((function(e){return e.gifList})),n=Object(u.b)(),i=Object(a.useState)(0),o=Object(d.a)(i,2),r=o[0],l=o[1],s=Object(a.useRef)(null);!function(e,t,n){var c=Object(a.useCallback)((function(e){new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>t&&n((function(e){return e+1}))}))})).observe(e)}),[n,t]);Object(a.useEffect)((function(){e.current&&c(e.current)}),[c,e])}(s,0,l),Object(a.useEffect)((function(){n(F("trending",{limit:10,offset:10*r}))}),[n,r]);var f=Object(a.useMemo)((function(){return t.list.map((function(e){return Object(b.a)(Object(b.a)({},e.images.fixed_height),{},{src:e.images.fixed_height.url,width:parseInt(e.images.fixed_height.width,10),height:parseInt(e.images.fixed_height.height,10)})}))}),[t.list]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(w,null),c.a.createElement(O.a,{photos:f}),t.loading&&c.a.createElement(p.a,null),c.a.createElement("div",{ref:s,className:e.border}))},T=function(){return c.a.createElement(h.a,{basename:"/superGIF"},c.a.createElement(g.c,null,c.a.createElement(g.a,{exact:!0,path:"/",component:R})))},x=n(36),C={loading:!1,list:[],pagination:{}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"GIF_LIST_LOADING":return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case"GIF_LIST_RESPONSE":return{loading:!1,list:[].concat(Object(x.a)(e.list),Object(x.a)(n.data)),pagination:n.pagination};case"CLEAR_GIF_LIST":return Object(b.a)({},C);default:return e}},U=Object(s.c)({gifList:D}),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,B=Object(s.e)(U,A(Object(s.a)(f.a))),M=Object(r.a)(m);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,{store:B},c.a.createElement(l.a,{theme:M},c.a.createElement(T,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.9d6aa1b0.chunk.js.map