(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[16],{168:function(e,t,r){"use strict";r.r(t);var n=r(23),a=r.n(n),s=r(29),o=(r(1),r(126)),c=r(22),i=r.n(c),u=r(124),l=r(93),d=r(113),p=r(24),h=r(98),v=r(102),b=r(2);t.default=function(e){var t=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i()("/api/auth/getMyRequests");case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=Object(u.a)("id",t,{refetchAllOnWindowFocus:!1}),n=r.status,c=r.data,f=r.refetch,j=function(){var e=Object(s.a)(a.a.mark((function e(t){var r,n,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Do you want to delete the request you made?")){e.next=9;break}return e.next=5,i.a.delete("/api/help/delete/".concat(t));case 5:return r=e.sent,e.next=8,f();case 8:p.b.success(r.data.data,{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),p.b.error(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(s=n.data)||void 0===s?void 0:s.error,{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return"loading"===n?Object(b.jsx)(l.a,{children:Object(b.jsx)(d.a,{size:150,thickness:100,speed:300,color:"rgba(252, 34, 49, 0.979)",secondaryColor:"rgba(0, 0, 0, 0.44)"})}):0===(null===c||void 0===c?void 0:c.length)?Object(b.jsx)("h2",{style:{marginLeft:30},children:"You don't have any requests yet!"}):Object(b.jsxs)("div",{children:[Object(b.jsx)(v.a,{goBack:e.history.goBack}),Object(b.jsx)(h.a,{children:"My Requests"}),Object(b.jsx)("div",{style:{marginTop:"20px"},children:c.map((function(e){return Object(b.jsx)(o.a,{request:e,deleteRequest:j})}))})]})}}}]);
//# sourceMappingURL=16.f828e1e6.chunk.js.map