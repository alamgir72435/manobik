(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{108:function(n,a,t){"use strict";t.d(a,"c",(function(){return l})),t.d(a,"d",(function(){return d})),t.d(a,"e",(function(){return b})),t.d(a,"b",(function(){return h})),t.d(a,"a",(function(){return p}));var e,r,i,o,c,u=t(8),s=t(9),l=s.a.div(e||(e=Object(u.a)(["\n  user-select: none;\n  margin: 20px auto;\n  background: #231e39;\n  color: #b3b8cd;\n  border-radius: 5px;\n  width: 350px;\n  font-family: 'Lato', sans-serif !important;\n  text-align: center;\n  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, .75);\n\n  .profile-name {\n    font-size: 25px;\n    font-weight: bold;\n    margin: 27px 0 0 120px;\n  }\n\n  .about {\n    margin-top: 35px;\n    line-height: 21px;\n  }\n\n  button {\n    margin: 10px 0 40px 10px;\n  }\n\n\n;\n"]))),d=s.a.div(r||(r=Object(u.a)(["\n  // background: url(https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/4090/blooddonor_facebook.jpg);\n  height: 160px;\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n"]))),b=s.a.img(i||(i=Object(u.a)(["\n  height: 120px;\n  width: 120px;\n  border-radius: 50%;\n  margin: 93px 0 0 -175px;\n  border: 1px solid #1f1a32;\n  padding: 7px;\n  background: #292343;\n"]))),h=s.a.button(o||(o=Object(u.a)(["\n  background: #fefe33;\n  border: 1px solid #fefe33;\n  padding: 10px 25px;\n  color: #231e39;\n  border-radius: 3px;\n  font-family: Montserrat, sans-serif;\n  cursor: pointer;\n\n  &:hover {\n    color: #231e39;\n    background: #fff;\n    transition: .5s;\n    outline: none;\n  }\n"]))),p=s.a.div(c||(c=Object(u.a)(["\n  font-size: 55px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 90px;\n  position: absolute;\n  left: ",";\n  color: #003e02;\n  border-radius: 50%;\n  background: linear-gradient(to bottom,\n  rgb(255, 0, 7),\n  rgb(184, 47, 150));\n  border: 5px solid #ffab00;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  color: white;\n  font-family: 'Open Sans Bold';\n\n"])),(function(n){return n.position?n.position:"60%"}))},109:function(n,a,t){"use strict";t(1);var e=t(10),r=t(2);a.a=function(n){var a=n.toBeShown,t=n.message;return a?Object(r.jsx)(r.Fragment,{children:a&&Object(r.jsxs)("h3",{children:[t," ",Object(r.jsx)(e.f,{color:"blue",to:"/login",children:"Click here to signup"})]})}):Object(r.jsx)("div",{})}},110:function(n,a,t){"use strict";t.d(a,"a",(function(){return u}));var e=t(105),r=t(28),i=t(1),o=t(22),c=t.n(o);function u(n,a,t,o){var u=Object(i.useState)(!0),s=Object(r.a)(u,2),l=s[0],d=s[1],b=Object(i.useState)(!1),h=Object(r.a)(b,2),p=h[0],j=h[1],f=Object(i.useState)(null),x=Object(r.a)(f,2),g=x[0],O=x[1],m=Object(i.useState)(!1),v=Object(r.a)(m,2),C=v[0],k=v[1];return Object(i.useEffect)((function(){O(null)}),[t,a]),Object(i.useEffect)((function(){var r;return d(!0),j(!1),c()({method:"GET",url:"/api/".concat(o,"?limit=6&page=").concat(n,"&bloodType=").concat(t,"&district=").concat(a),cancelToken:new c.a.CancelToken((function(n){return r=n}))}).then((function(n){O((function(a){return a?[].concat(Object(e.a)(a),Object(e.a)(n.data.data)):Object(e.a)(new Set(n.data.data))})),k(n.data.data.length>0),d(!1)})).catch((function(n){c.a.isCancel(n)||j(!0)})),function(){return r()}}),[n,a,t]),{loading:l,error:p,data:g,hasMore:C}}},177:function(n,a,t){"use strict";t.r(a);var e=t(28),r=t(1),i=t(115),o=t(108),c=t(20),u=t(94),s=t(2),l=function(n){var a=n.donor;return Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{style:{marginTop:10},children:a.bloodType}),Object(s.jsx)(o.d,{children:Object(s.jsx)(o.e,{src:Object(u.a)(null===a||void 0===a?void 0:a.image,200,200)})}),Object(s.jsx)("div",{className:"profile-name",children:a.name}),Object(s.jsxs)("p",{className:"about",children:["Upazila or Union:  ",a.district,Object(s.jsx)("br",{}),"Email:  ",a.email]}),Object(s.jsxs)(o.b,{children:["+880",a.phone]}),Object(s.jsxs)(c.b,{to:"/user/".concat(a._id),children:[Object(s.jsx)(o.b,{children:"More Info"})," "]})]})},d=t(95),b=t(96),h=t(109),p=t(93),j=t(113),f=t(110),x=t(125);a.default=function(){var n=Object(r.useState)(null),a=Object(e.a)(n,2),t=a[0],o=a[1],c=Object(r.useState)(null),u=Object(e.a)(c,2),g=u[0],O=u[1],m=Object(x.a)({threshold:1}),v=Object(e.a)(m,2),C=v[0],k=v[1],y=Object(r.useState)(1),w=Object(e.a)(y,2),S=w[0],M=w[1],A=Object(f.a)(S,t,g,"donors"),B=A.data,z=A.hasMore,N=A.loading;A.error;Object(r.useEffect)((function(){k&&z&&M((function(n){return n+1}))}),[k]);var P=Object(d.c)(d.b),U=Object(d.c)(d.a);return Object(s.jsxs)(i.Container,{children:[Object(s.jsxs)(i.Row,{children:[Object(s.jsx)(i.Col,{lg:6,md:6,sm:12,children:Object(s.jsx)(b.a,{options:U,isMulti:!1,onChange:function(n){M(1),O(encodeURIComponent(n.value))},defaultLabel:"Search by blood type..."})}),Object(s.jsx)(i.Col,{lg:6,md:6,sm:12,children:Object(s.jsx)(b.a,{options:P,isMulti:!1,onChange:function(n){M(1),o(n.value)},defaultLabel:"Upozila Or Union Name..."})})]}),Object(s.jsx)(h.a,{message:"We don't have any people with your criteria. Why not save a life with your blood?",toBeShown:0===(null===B||void 0===B?void 0:B.length)}),Object(s.jsx)(i.Row,{children:null===B||void 0===B?void 0:B.map((function(n,a){return B.length===a+1?Object(s.jsxs)(i.Col,{lg:4,md:6,sm:12,ref:C,children:[Object(s.jsx)(l,{donor:n}),Object(s.jsx)("div",{ref:C})]}):Object(s.jsx)(i.Col,{lg:4,md:6,sm:12,children:Object(s.jsx)(l,{donor:n})})}))}),N&&Object(s.jsx)(p.a,{children:Object(s.jsx)(j.a,{size:150,thickness:100,speed:300,color:"#D31027",secondaryColor:"rgba(0, 0, 0, 0.44)"})})]})}},93:function(n,a,t){"use strict";t.d(a,"a",(function(){return i}));var e,r=t(8),i=t(9).a.div(e||(e=Object(r.a)(["\n  display: block;\n  text-align: center;\n  margin: 40px auto auto;\n\n\n  \n\n"])))},94:function(n,a,t){"use strict";t.d(a,"a",(function(){return e}));var e=function(n,a,t){try{if(void 0===a||void 0==t)return"/uploads/".concat(n);var e=/(?:\.([^.]+))?$/.exec(n)[0],r=n.replace(e,"");return"/uploads/".concat(r,"_").concat(a,"x").concat(t).concat(e)}catch(i){return"/uploads/noProfile.png"}}},95:function(n,a,t){"use strict";t.d(a,"b",(function(){return e})),t.d(a,"a",(function(){return r})),t.d(a,"c",(function(){return i}));var e=["Narsingdi Sadar","Palash","Belabo","Monohardi","Raipura","Shibpur","Ayubpur","Baghaba","Chakradha","Dulalpur","Joshor","Joynagar","Machhimpur","Putia","Sadharchar","Char Sindur","Danga","Gazaria","Jinardi","Alokbali","Amdia","Chardighaldi","Chinishpur","Hajipur","Karimpur","Kathalia","Nuralapur","Mahishasura","Meherpara","Nazarpur","Poikarchar","Panchdona","Silmandi"," Adiabad","Alipura","Amirganj","Banshgari","Chanderkandi","Chanpur","Char Aralia","Charmadhua","Charsubuddi","Dowkarchar","Hairmara","Maheshpur","Marjal","Mirzanagar","Mirzapur","Mirzarchar"," Musapur","Nilakhya","Palashtali","Paratali","Radhanagar","Roypura","Sreenagar","Uttarbakharnagar","Amlaba","Bajnabo","Belabo","Binnabaid","Narayanpur","Patuli","Sallabad","Charujilab","Barachapa","Chalakchar","Chandanbari","Charmandalia","Daulatpur","Akduaria","Gotashia","Kanchikata","Khidirpur","Lebutala","Shukundi"],r=["A+","A-","B+","B-","O+","O-","AB+","AB-"],i=function(n){return n.map((function(n){return{value:n,label:n.charAt(0).toUpperCase()+n.slice(1)}}))}},96:function(n,a,t){"use strict";t(1);var e=t(104),r=t(2);a.a=function(n){var a=n.options,t=n.onChange,i=n.defaultLabel,o=n.isMulti,c=n.styles;return Object(r.jsx)(e.a,{className:"menu-outer-top",onChange:t,options:a,placeholder:i,isMulti:o,styles:c,style:{position:"absolute"}})}}}]);
//# sourceMappingURL=8.68112f1b.chunk.js.map