(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{10:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(4),i=n.n(r),s=(n(10),n(5)),u=n(0),d=function(e){return Object(u.jsx)("h1",{children:e.video.snippet.title})},a=function(e){return Object(u.jsx)("ul",{children:e.videos.map((function(e){return Object(u.jsx)(d,{video:e},e.id)}))})},j=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),o=n[0],r=n[1];return Object(c.useEffect)((function(){fetch("https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyCNyged456xrxPXXAwmA-BLInpG39104C8&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCNyged456xrxPXXAwmA-BLInpG39104C8",{method:"GET",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return r(e.items)})).catch((function(e){return console.log("error",e)}))})),Object(u.jsx)("div",{children:Object(u.jsx)(a,{videos:o},o.id)})};n(12);i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ba7fac10.chunk.js.map