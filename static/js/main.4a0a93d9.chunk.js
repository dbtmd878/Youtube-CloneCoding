(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{13:function(e,t,n){e.exports={videos:"video_list_videos__1VCw_"}},2:function(e,t,n){e.exports={container:"video_item_container__15oji",grid:"video_item_grid__2iJDD",list:"video_item_list__2jYRY",video:"video_item_video__37dg9",thumbnails:"video_item_thumbnails__38zQE",metadata:"video_item_metadata__N-I6a",title:"video_item_title__3lIaP",channel:"video_item_channel__1dZ3U"}},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(12),c=n.n(i),r=n(10),o=n(4),l=n.n(o),u=n(3),d=n.n(u),p=n(0),h=function(e){var t=e.onSearch,n=Object(a.useRef)(),s=function(){t(n.current.value)};return Object(p.jsxs)("header",{className:d.a.header,children:[Object(p.jsxs)("div",{className:d.a.logo,children:[Object(p.jsx)("img",{className:d.a.img,src:"./images/logo.png",alt:"logo"}),Object(p.jsx)("h1",{className:d.a.title,children:"YouTube"})]}),Object(p.jsx)("input",{ref:n,className:d.a.input,type:"text",placeholder:"search...",onKeyPress:function(e){"Enter"===e.code&&s()}}),Object(p.jsx)("button",{className:d.a.btn,type:"submit",onClick:function(){s()},children:Object(p.jsx)("img",{className:d.a.btnImg,src:"./images/search.png",alt:""})})]})},_=n(8),j=n.n(_),b=function(e){var t=e.video;return Object(p.jsxs)("section",{className:j.a.detail,children:[Object(p.jsx)("iframe",{id:"ytplayer",type:"text/html",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameborder:"0",allowfullscreen:!0}),Object(p.jsx)("h2",{children:t.snippet.title}),Object(p.jsx)("h3",{children:t.snippet.channelTitle}),Object(p.jsx)("pre",{className:j.a.description,children:t.snippet.description})]})},m=n(2),v=n.n(m),x=function(e){var t=e.video,n=e.video.snippet,a=e.onselect,s="list"===e.display?v.a.list:v.a.grid;return Object(p.jsx)("li",{className:"".concat(v.a.container," ").concat(s),onClick:function(){return a(t)},children:Object(p.jsxs)("div",{className:v.a.video,children:[Object(p.jsx)("img",{className:v.a.thumbnails,src:n.thumbnails.medium.url,alt:"video thumnails"}),Object(p.jsxs)("div",{className:v.a.metadata,children:[Object(p.jsx)("p",{className:v.a.title,children:n.title}),Object(p.jsx)("p",{className:v.a.channel,children:n.channelTitle})]})]})})},O=n(13),f=n.n(O),y=function(e){var t=e.videos,n=e.onselect,a=e.display;return Object(p.jsx)("ul",{className:f.a.videos,children:t.map((function(e){return Object(p.jsx)(x,{video:e,onselect:n,display:a},e.id)}))})},g=function(e){var t=e.youtube,n=Object(a.useState)([]),s=Object(r.a)(n,2),i=s[0],c=s[1],o=Object(a.useState)(null),u=Object(r.a)(o,2),d=u[0],_=u[1];return Object(a.useEffect)((function(){t.mostpopular().then((function(e){return c(e)}))}),[]),Object(p.jsxs)("div",{className:l.a.app,children:[Object(p.jsx)(h,{onSearch:function(e){t.search(e).then((function(e){return c(e)}))}}),Object(p.jsxs)("div",{className:l.a.content,children:[d&&Object(p.jsx)("div",{className:l.a.video,children:Object(p.jsx)(b,{video:d})}),Object(p.jsx)("div",{className:l.a.list,children:Object(p.jsx)(y,{videos:i,onselect:function(e){_(e)},display:d?"list":"grid"})})]})]})},k=(n(21),n(22),n(5)),N=n.n(k),w=n(11),I=n(9),J=n(14),R=n(15),B=new(function(){function e(t){Object(J.a)(this,e),this.key=t,this.getRequestOptions={method:"GET",redirect:"follow"}}return Object(R.a)(e,[{key:"search",value:function(){var e=Object(I.a)(N.a.mark((function e(t){var n,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBRP3CLzJxa5BO9bnhoMeP0Jdw3trs4GXk&part=snippet&maxResults=25&q=".concat(t,"&type=video&key=").concat(this.key),this.getRequestOptions);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.items.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{id:e.id.videoId})})));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"mostpopular",value:function(){var e=Object(I.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyBRP3CLzJxa5BO9bnhoMeP0Jdw3trs4GXk&part=snippet&chart=mostPopular&maxResults=25&key=".concat(this.key),this.getRequestOptions);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.items);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}())("AIzaSyBRP3CLzJxa5BO9bnhoMeP0Jdw3trs4GXk");c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(g,{youtube:B})}),document.getElementById("root"))},3:function(e,t,n){e.exports={header:"search_header_header__3zkT2",logo:"search_header_logo__tK0eh",input:"search_header_input__3vem-",btn:"search_header_btn__2Ulv9",btnImg:"search_header_btnImg__3hBpJ"}},4:function(e,t,n){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",video:"app_video__3GKwE",list:"app_list__2we4s"}},8:function(e,t,n){e.exports={detail:"video_detail_detail__2BkQh",description:"video_detail_description__3nW_r"}}},[[27,1,2]]]);
//# sourceMappingURL=main.4a0a93d9.chunk.js.map