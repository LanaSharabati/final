(this["webpackJsonpoffer-ui"]=this["webpackJsonpoffer-ui"]||[]).push([[0],{145:function(t,e,n){},146:function(t,e,n){},169:function(t,e,n){},172:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(42),i=n.n(r),s=(n(145),n(9)),o=n(17),l=n(125),d=(n(146),n(251)),u=n(249),j=n(252),b=n(242),p=n(118),h=n.n(p),x=n(2),O={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function f(t){var e=t.info,n=e.attributes.groupPrice,c=n/e.attributes.groupQuantity,r=a.useState(!1),i=Object(s.a)(r,2),o=i[0],l=i[1],p=a.useState(!1),f=Object(s.a)(p,2),g=f[0],m=f[1],v=a.useState(""),y=Object(s.a)(v,2),_=(y[0],y[1],a.useState(!0)),C=(Object(s.a)(_,1)[0],a.useState(n)),S=Object(s.a)(C,2),w=S[0],E=S[1],P=a.useState(e.attributes.groupQuantity),R=Object(s.a)(P,2),T=R[0],I=R[1];return console.log(e.attributes.groupQuantity),Object(x.jsxs)("div",{children:[Object(x.jsx)(u.a,{onClick:function(){return l(!0)},size:"small",disabled:e.attributes.groupQuantity<=1,children:Object(x.jsx)(h.a,{style:{color:"#c7ad9c"}})}),Object(x.jsx)(b.a,{open:o,onClose:function(){return l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(x.jsxs)(d.a,{sx:O,children:[Object(x.jsx)(j.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"By With Group"}),Object(x.jsxs)(j.a,{id:"modal-modal-description",sx:{mt:2},children:["Please Choose the Quantity : ",Object(x.jsx)("button",{disabled:g,onClick:function(){e.attributes.groupQuantity===T?m(!0):(I(T+1),m(!1),E(w+c))},children:"+"}),Object(x.jsx)("span",{children:T}),Object(x.jsx)("button",{onClick:function(){!function(){if(T>1){I(T-1),m(!1);var t=w-c;console.log(t),E(t)}}()},children:"-"})]}),Object(x.jsx)("div",{children:Object(x.jsxs)("span",{children:[" Total Price : ",w,"$"]})})]})})]})}var g=n(257),m=n(260),v=n(259),y=n(119),_=n.n(y),C=n(261),S=n(4),w=n(120),E=n.n(w),P=n(256),R=["expand"],T=Object(S.a)((function(t){t.expand;var e=Object(l.a)(t,R);return Object(x.jsx)(P.a,Object(o.a)({},e))}))((function(t){var e=t.theme;return{transform:t.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})}}));function I(t){var e=t.info,n=a.useState(!1),c=Object(s.a)(n,2),r=c[0],i=c[1];return console.log(e.attributes.fovproduct),Object(x.jsxs)(g.a,{sx:{maxWidth:345},className:"border-card",children:[Object(x.jsxs)(v.a,{className:"card-style",children:[Object(x.jsx)("span",{className:"product",children:e.attributes.name}),Object(x.jsx)("div",{className:"div-line"}),Object(x.jsx)("img",{src:e.attributes.Image,className:"image-style"})]}),Object(x.jsxs)("div",{className:"information-style font",children:[Object(x.jsxs)("div",{className:"font container",children:[Object(x.jsxs)("span",{className:"price",children:["Price : ",e.attributes.price," $"]}),null!=e.attributes.discount?Object(x.jsxs)("span",{className:"discount",children:[e.attributes.discount,"% "]}):null]}),e.attributes.groupQuantity>1&&e.attributes.groupPrice?Object(x.jsxs)("span",{children:["By with Group ",e.attributes.groupQuantity," at ",e.attributes.groupPrice]}):null]}),Object(x.jsxs)(m.a,{className:"choices-container",children:[Object(x.jsx)(u.a,{size:"small",children:Object(x.jsx)(_.a,{style:{color:"#c7ad9c"},onClick:function(t){var n=e.attributes.fovproduct;n+=1,console.log(e.attributes.fovproduct,n)}})}),Object(x.jsx)(f,{info:e}),Object(x.jsx)(T,{expand:r,onClick:function(){i(!r)},"aria-expanded":r,"aria-label":"show more",children:Object(x.jsx)(E.a,{})})]}),Object(x.jsx)(C.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(x.jsxs)(v.a,{children:[Object(x.jsxs)(j.a,{children:["  ",e.attributes.store.data.attributes.city]}),Object(x.jsx)(j.a,{children:e.attributes.store.data.attributes.address}),Object(x.jsxs)(j.a,{children:[" ",e.attributes.store.data.attributes.name]})]})})]})}var k=n(248),D=n(262);function F(){return Object(x.jsx)(D.a,{style:{marginLeft:"50%"},disableShrink:!0})}function N(t){var e=t.products;return Object(x.jsx)(d.a,{sx:{flexGrow:1},padding:6,children:Object(x.jsx)(k.a,{container:!0,spacing:{xs:.5,md:2},columns:{xs:4,sm:8,md:12},children:void 0!==e?e.map((function(t){return Object(x.jsx)(k.a,{item:!0,xs:2,sm:4,md:4,children:Object(x.jsx)(I,{info:t},t.id)})})):Object(x.jsx)(F,{})})})}var G=n(65),U=n.n(G),L=n(95),A=function(t,e){return"GET_PRODUCT_ERROR"===e.type?Object(o.a)(Object(o.a)({},t),{},{products_loading:!1,products_error:!0}):"GET_PRODUCT_BIGIN"===e.type?Object(o.a)(Object(o.a)({},t),{},{products_loading:!0,products_error:!1}):"GET_PRODUCT_SUCCESS"===e.type?Object(o.a)(Object(o.a)({},t),{},{products_loading:!1,product:e.payload}):"GET_category_SUCCESS"===e.type?Object(o.a)(Object(o.a)({},t),{},{products_loading:!1,category:e.payload}):void 0},Q={products_loading:!1,products_error:!1,product:[],category:[],favProduct:[]},B=c.a.createContext();function W(t){var e=Object(a.useReducer)(A,Q),n=Object(s.a)(e,2),c=n[0],r=n[1],i=function(){var t=Object(L.a)(U.a.mark((function t(){var e,n;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"GET_PRODUCT_BIGIN"}),t.prev=1,t.next=4,fetch("https://apimena.herokuapp.com/api/products?populate=*");case 4:return e=t.sent,t.next=7,e.json();case 7:n=t.sent,r({type:"GET_PRODUCT_SUCCESS",payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),r({type:"GET_PRODUCT_ERROR"});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(L.a)(U.a.mark((function t(){var e,n;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"GET_PRODUCT_BIGIN"}),t.prev=1,t.next=4,fetch("https://apimena.herokuapp.com/api/categories");case 4:return e=t.sent,t.next=7,e.json();case 7:n=t.sent,r({type:"GET_category_SUCCESS",payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),r({type:"GET_PRODUCT_ERROR"});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),Object(a.useEffect)((function(){l()}),[]),Object(x.jsx)(B.Provider,{value:Object(o.a)(Object(o.a)({},c),{},{fetchProduct:i,fetchCategory:l}),children:t.children})}var z=function(t,e){if("LOAD_PRODUCTS"===e.type){return Object(o.a)(Object(o.a)({},t),{},{all_products:e.payload.data,filtered_products:e.payload.data,filter:Object(o.a)(Object(o.a)({},t.filter),{},{max_price:0,price:0})})}if("search_f"==e.type){var n=t.all_products,a=t.filter,c=(a.text,a.category,a.store,a.location,a.shipping,n);return""===e.payload?c=c:"all"!==e.payload&&(c=c.filter((function(t){return t.attributes.name.includes(e.payload)}))),Object(o.a)(Object(o.a)({},t),{},{filtered_products:c})}if("locationf"===e.type){var r=t.all_products,i=t.filter,s=(i.text,i.category,i.store,i.location,i.shipping,r);return"all"!==e.payload&&(s=s.filter((function(t){return t.attributes.store.data.attributes.city===e.payload}))),Object(o.a)(Object(o.a)({},t),{},{filtered_products:s})}if("catefilter"===e.type){var l=t.all_products,d=t.filter,u=(d.text,d.category,d.store,d.location,d.shipping,l);return"all"!==e.payload&&(u=u.filter((function(t){return t.attributes.category.data.attributes.categoryName===e.payload}))),Object(o.a)(Object(o.a)({},t),{},{filtered_products:u})}},H={filtered_products:[],all_products:[],sort:"price-lowest",listgrid:!0,filter:{search:"all",text:"",category:"all",store:"all",location:"all",min_price:0,max_price:0,shipping:!0}},M=c.a.createContext();function V(t){var e=Object(a.useContext)(B).product,n=Object(a.useReducer)(z,H),c=Object(s.a)(n,2),r=c[0],i=c[1];Object(a.useEffect)((function(){i({type:"LOAD_PRODUCTS",payload:e})}),[e]);return Object(x.jsx)(M.Provider,{value:Object(o.a)(Object(o.a)({},r),{},{updatesFilter:function(t){var e=t.target.name,n=t.target.value;"category"===e&&(n=t.target.textContent),"location"===e&&(n=t.target.dataset.location),"shipping"===e&&(n=t.target.checked),"search"===e&&(n=t.target.textContent),i({type:"UPDATE_FILTERS",payload:{name:e,value:n}})},updateSort:function(t){var e=t.target.value;i({type:"UPDATE_SORT",payload:e})},listGrid:function(){i({type:"SET_GRIDVIEW"})},listView:function(){i({type:"SET_LISTVIEW"})},ClearFilter:function(){i({type:"CLEAR_FILTERS"})},cateFilter:function(t){var n=t.target.value;i("All"!=n?{type:"catefilter",payload:n}:{type:"LOAD_PRODUCTS",payload:e})},locFilter:function(t){var e=t.target.value;i({type:"locationf",payload:e})},searchFilter:function(t){var e=t.target.value;i({type:"search_f",payload:e})}}),children:t.children})}var X=n(228),Y=Object(X.a)({});function q(){var t=Y(),e=Object(a.useContext)(M),n=Object(a.useContext)(B),c=n.products_loading;n.category;return!0===c?Object(x.jsx)("h1",{children:"loading"}):Object(x.jsx)(d.a,{className:t.container,children:Object(x.jsx)(k.a,{container:!0,spacing:{xs:1,md:2},columns:{xs:4,sm:8,md:12},children:Object(x.jsx)(N,{products:e.filtered_products})})})}function J(){return Object(x.jsx)("div",{children:Object(x.jsx)(q,{})})}var $=n(58),K=n.n($),Z=n(64);function tt(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1];Object(a.useEffect)((function(){K.a.get("https://apimena.herokuapp.com/api/products?populate=*").then((function(t){c(t.data.data)})).catch((function(t){console.log(t)}))}),[]);var r=n.map((function(t){return t.attributes.fovproduct}));n.map((function(t){return t.attributes.name}));for(var i=r.length,o=new Array(i),l=0;l<i;++l)o[l]=l;o.sort((function(t,e){return r[t]<r[e]?-1:r[t]>r[e]?1:0}));var d=o.slice(Math.max(r.length-3,0)),u=[];for(l=0;l<d.length;l++)u[l]=n[d[l]];var j=n.slice(Math.max(r.length-3,0));return Object(x.jsxs)("div",{children:[Object(x.jsx)(Z.b,{to:"/Favourute-product",children:Object(x.jsx)("h1",{children:"Most Popular Products"})}),Object(x.jsx)(N,{products:u}),Object(x.jsx)(Z.b,{to:"/product",children:Object(x.jsx)("h1",{children:" Products"})}),Object(x.jsx)(N,{products:j})]})}var et,nt,at,ct,rt,it,st,ot,lt,dt,ut=n(15),jt=n(231),bt=n(232),pt=n(19),ht=[{imgPath:"https://palsawa.com/thumb/660x400/uploads/images/qbpVH.jpg"},{imgPath:"https://th.bing.com/th/id/R.bdf1d33e03a40964ceb0250993de5287?rik=FxbYl2ImqDfshw&pid=ImgRaw&r=0"},{imgPath:"https://th.bing.com/th/id/OIP.erAIuom_5o_DjF3oYRdbXQHaHa?pid=ImgDet&rs=1"},{imgPath:"https://th.bing.com/th/id/OIP.72vwzgwIXmDf_EKdQbYjtgHaHa?pid=ImgDet&rs=1"}],xt=pt.a.div(et||(et=Object(ut.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n\n"]))),Ot=pt.a.div(nt||(nt=Object(ut.a)(["\n  width: 50px;\n  height: 50px;\n  background-color: #fff7f7;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: ",";\n  right: ",";\n  margin: auto;\n  cursor: pointer;\n  opacity: 0.5;\n  z-index: 2;\n"])),(function(t){return"left"===t.direction&&"10px"}),(function(t){return"right"===t.direction&&"10px"})),ft=pt.a.div(at||(at=Object(ut.a)(["\n  height: 100%;\n  display: flex;\n  transition: all 1.5s ease;\n  transform: translateX(","vw);\n"])),(function(t){return-100*t.slideIndex})),gt=pt.a.div(ct||(ct=Object(ut.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  background-color: #",";\n"])),(function(t){return t.bg})),mt=pt.a.div(rt||(rt=Object(ut.a)(["\n  height: 100%;\n  flex: 1;\n"]))),vt=pt.a.img(it||(it=Object(ut.a)(["\n  height: 80%;\n"]))),yt=(pt.a.div(st||(st=Object(ut.a)(["\n  flex: 1;\n  padding: 50px;\n"]))),pt.a.h1(ot||(ot=Object(ut.a)(["\n  font-size: 70px;\n"]))),pt.a.p(lt||(lt=Object(ut.a)(["\n  margin: 50px 0px;\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 3px;\n"]))),pt.a.button(dt||(dt=Object(ut.a)(["\n  padding: 10px;\n  font-size: 20px;\n  background-color: transparent;\n  cursor: pointer;\n"]))),function(){var t=Object(a.useState)(0),e=Object(s.a)(t,2),n=e[0],c=e[1],r=function(t){c("left"===t?n>0?n-1:2:n<3?n+1:0)};return Object(x.jsxs)(xt,{children:[Object(x.jsx)(Ot,{direction:"left",onClick:function(){return r("left")},children:Object(x.jsx)(jt.a,{})}),Object(x.jsx)(ft,{slideIndex:n,children:ht.map((function(t){return Object(x.jsx)(gt,{children:Object(x.jsx)(mt,{children:Object(x.jsx)(vt,{src:t.imgPath})})},t.id)}))}),Object(x.jsx)(Ot,{direction:"right",onClick:function(){return r("right")},children:Object(x.jsx)(bt.a,{})})]})});function _t(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(yt,{}),Object(x.jsx)(tt,{})]})}n(169);var Ct,St,wt,Et,Pt,Rt,Tt,It,kt,Dt,Ft,Nt,Gt,Ut=n(14),Lt=n(233),At=n(234),Qt=n(235),Bt=n(236),Wt=n(237),zt=n(238),Ht=n(239),Mt=pt.a.div(Ct||(Ct=Object(ut.a)(["\n  display: flex;\n  \n"]))),Vt=pt.a.div(St||(St=Object(ut.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n"]))),Xt=pt.a.h1(wt||(wt=Object(ut.a)([""]))),Yt=pt.a.p(Et||(Et=Object(ut.a)(["\n  margin: 20px 0px;\n"]))),qt=pt.a.div(Pt||(Pt=Object(ut.a)(["\n  display: flex;\n"]))),Jt=pt.a.div(Rt||(Rt=Object(ut.a)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  color: white;\n  background-color: #",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n"])),(function(t){return t.color})),$t=pt.a.div(Tt||(Tt=Object(ut.a)(["\n  flex: 1;\n  padding: 20px;\n  \n"]))),Kt=pt.a.h3(It||(It=Object(ut.a)(["\n  margin-bottom: 30px;\n"]))),Zt=pt.a.ul(kt||(kt=Object(ut.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n"]))),te=pt.a.li(Dt||(Dt=Object(ut.a)(["\n  width: 50%;\n  margin-bottom: 10px;\n"]))),ee=pt.a.div(Ft||(Ft=Object(ut.a)(["\n  flex: 1;\n  padding: 20px;\n  \n"]))),ne=pt.a.div(Nt||(Nt=Object(ut.a)(["\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n"]))),ae=pt.a.img(Gt||(Gt=Object(ut.a)(["\n    width: 50%;\n"]))),ce=function(){return Object(x.jsxs)(Mt,{style:{borderTop:"solid 1px #93c7ba"},children:[Object(x.jsxs)(Vt,{children:[Object(x.jsx)(Xt,{children:"Offers"}),Object(x.jsx)(Yt,{children:"On the Offers website, we collect for you many products from different stores that have discounts and offers"}),Object(x.jsxs)(qt,{children:[Object(x.jsx)(Jt,{color:"3B5999",children:Object(x.jsx)(Lt.a,{})}),Object(x.jsx)(Jt,{color:"E4405F",children:Object(x.jsx)(At.a,{})}),Object(x.jsx)(Jt,{color:"55ACEE",children:Object(x.jsx)(Qt.a,{})}),Object(x.jsx)(Jt,{color:"E60023",children:Object(x.jsx)(Bt.a,{})})]})]}),Object(x.jsxs)($t,{children:[Object(x.jsx)(Kt,{children:"Useful Links"}),Object(x.jsxs)(Zt,{children:[Object(x.jsx)(te,{children:"Home"}),Object(x.jsx)(te,{children:"Products"})]})]}),Object(x.jsxs)(ee,{children:[Object(x.jsx)(Kt,{children:"Contact"}),Object(x.jsxs)(ne,{children:[Object(x.jsx)(Wt.a,{style:{marginRight:"10px"}})," Hebron , palestine"]}),Object(x.jsxs)(ne,{children:[Object(x.jsx)(zt.a,{style:{marginRight:"10px"}})," +1 234 56 78"]}),Object(x.jsxs)(ne,{children:[Object(x.jsx)(Ht.a,{style:{marginRight:"10px"}})," contact@offersteam"]}),Object(x.jsx)(ae,{src:"https://i.ibb.co/Qfvn4z6/payment.png"})]})]})},re=n(253),ie=n(254),se=n(245),oe=n(244),le=n(255),de=n(241);function ue(t){var e=t.cate,n=Object(a.useContext)(M),c=Object(a.useState)(""),r=Object(s.a)(c,2),i=(r[0],r[1]),o=Object(a.useState)(""),l=Object(s.a)(o,1)[0];return Object(x.jsx)(d.a,{sx:{minWidth:120},children:Object(x.jsxs)(le.a,{fullWidth:!0,children:[Object(x.jsx)(se.a,{id:"demo-simple-select-label",children:"Category"}),Object(x.jsxs)(de.a,{style:{border:"solid 1px #93c7ba"},labelId:"demo-simple-select-label",id:"demo-simple-select",value:l,label:"Category",onChange:function(t){i(t.target.value),n.cateFilter(t)},children:[Object(x.jsx)(oe.a,{value:"All",children:"All"}),")",0!==e.length?e.data.map((function(t){return Object(x.jsxs)(oe.a,{value:t.attributes.categoryName,children:[t.attributes.categoryName," "]})})):null]})]})})}var je=n(5),be=n(23),pe=n(123),he=n.n(pe),xe=n(246);Object(S.a)("div")((function(t){return{padding:t.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),Object(S.a)(be.c)((function(t){var e=t.theme;return{color:"inherit","& .MuiInputBase-input":Object(je.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),")"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}}));function Oe(){var t=Object(a.useContext)(M);return Object(x.jsx)(d.a,{style:{paddingRight:"20%",paddingLeft:"20%"},component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:Object(x.jsx)(xe.a,{style:{border:"solid 1px #93c7ba"},id:"outlined-basic",label:"Search ..",variant:"outlined",onChange:function(e){t.searchFilter(e)},children:Object(x.jsx)(he.a,{})})})}function fe(t){t.city;var e=c.a.useState(""),n=Object(s.a)(e,2),r=n[0],i=(n[1],Object(a.useContext)(M)),o=(new Set,["\u062c\u0646\u064a\u0646","\u063a\u0632\u0629","\u0631\u0627\u0645 \u0627\u0644\u0644\u0647","\u0627\u0644\u062e\u0644\u064a\u0644","\u0639\u0643\u0627"]);return Object(x.jsx)(d.a,{sx:{minWidth:120},children:Object(x.jsxs)(le.a,{fullWidth:!0,children:[Object(x.jsx)(se.a,{id:"demo-simple-select-label",children:"Location"}),Object(x.jsx)(de.a,{style:{border:"solid 1px #93c7ba"},labelId:"demo-simple-select-label",id:"demo-simple-select",value:r,label:"Location",onChange:function(t){i.locFilter(t)},children:0!==o.length?o.map((function(t){return Object(x.jsxs)(oe.a,{value:t,children:[t," "]})})):null})]})})}var ge=Object(X.a)({head:{display:"flex",justifyContent:"space-between",alignItems:"center",marginLeft:"20%"},offers:{color:"#93c7ba",fontWeight:"bolder",fontFamily:"Dancing Script"},navbarStyle:{display:"flex",backgroundColor:"white",borderBottom:"solid 1px #93c7ba"}});function me(){var t=ge(),e=Object(a.useContext)(B),n=(e.products_loading,e.category);return Object(x.jsx)(d.a,{sx:{flexGrow:1},children:Object(x.jsx)(re.a,{position:"static",children:Object(x.jsxs)(ie.a,{className:t.navbarStyle,children:[Object(x.jsx)(j.a,{className:t.offers,variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}},children:"OFFRES"}),Object(x.jsxs)("div",{className:t.head,children:[Object(x.jsx)(ue,{cate:n}),Object(x.jsx)(Oe,{}),Object(x.jsx)(fe,{})]})]})})})}n(171);function ve(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1];Object(a.useEffect)((function(){K.a.get("https://apimena.herokuapp.com/api/products?populate=*").then((function(t){c(t.data.data)})).catch((function(t){console.log(t)}))}),[]);var r=n.map((function(t){return t.attributes.fovproduct}));n.map((function(t){return t.attributes.name}));for(var i=r.length,o=new Array(i),l=0;l<i;++l)o[l]=l;o.sort((function(t,e){return r[t]<r[e]?-1:r[t]>r[e]?1:0}));var d=o.slice(Math.max(r.length-15,0)),u=[];for(l=0;l<d.length;l++)u[l]=n[d[l]];return console.log(tt.favThreeProduct),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"The most favourite product"}),Object(x.jsx)(N,{products:u})]})}var ye=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(Z.a,{children:[Object(x.jsx)(me,{}),Object(x.jsxs)(Ut.d,{path:"/",exact:!0,element:Object(x.jsx)(_t,{}),children:[Object(x.jsx)(Ut.b,{path:"/product",exact:!0,element:Object(x.jsx)(J,{})}),Object(x.jsx)(Ut.b,{path:"/",exact:!0,element:Object(x.jsx)(_t,{})}),Object(x.jsx)(Ut.b,{path:"*",element:Object(x.jsx)(Ut.a,{to:"/"})}),Object(x.jsx)(Ut.b,{path:"/Favourute-product",exact:!0,element:Object(x.jsx)(ve,{})})]}),Object(x.jsx)(ce,{})]})})},_e=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,267)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(W,{children:Object(x.jsx)(V,{children:Object(x.jsx)(ye,{})})})}),document.getElementById("root")),_e()}},[[172,1,2]]]);
//# sourceMappingURL=main.fbf8afee.chunk.js.map