(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),r=a.n(c),i=a(10),s=a.n(i),o=(a(106),a(107),a(167)),l=a(189),j=a(170),b=a(172),d=a(133),h=a(173),u=a(86),O=a.n(u),x=Object(o.a)((function(e){return Object(l.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})}));function p(){var e=x();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(j.a,{position:"static",children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(h.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(n.jsx)(O.a,{})}),Object(n.jsx)(d.a,{variant:"h6",className:e.title,children:"ManufacAnalytics"})]})})})}var m=a(39),f=a.n(m),g=a(56),v=a(12),w=a(30),y=a.n(w),S=a(11),A=a(176),N=a(185),z=a(174),I=a(175),k=a(20),C=a(57),T=a.n(C),Z=a(58),B=a.n(Z),P=a(186),F=Object(o.a)({submitbtn:{textDecoration:"none",color:"white"}}),D=function(){var e=F(),t=Object(c.useState)(""),a=Object(v.a)(t,2),r=a[0],i=a[1],s=Object(c.useState)(""),o=Object(v.a)(s,2),l=o[0],j=o[1],b=Object(c.useState)(""),h=Object(v.a)(b,2),u=h[0],O=h[1],x=Object(c.useState)(""),p=Object(v.a)(x,2),m=p[0],w=p[1],C=Object(S.f)(),Z=Object(c.useState)(!1),D=Object(v.a)(Z,2),E=D[0],$=D[1],J=Object(c.useState)(!1),L=Object(v.a)(J,2),W=L[0],G=L[1],M=Object(c.useState)(!1),U=Object(v.a)(M,2),_=U[0],q=(U[1],function(){var e=Object(g.a)(f.a.mark((function e(t){var a,n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,!(r.match(a)&&l.length>=6)){e.next=17;break}return e.prev=3,n={email:r,name:u,password:l},e.next=7,T.a.post("/register",n);case 7:c=e.sent,y.a.set("userInfo",JSON.stringify(c)),C.push("/profile"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),w(e.t0.response.data.msg);case 15:e.next=18;break;case 17:l.length<6?G(!0):$(!0);case 18:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}());return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(z.a,{fixed:!0,maxWidth:"xs",children:[Object(n.jsxs)(d.a,{style:{height:"20px",width:"350px",paddingTop:"10px",paddingLeft:"5%"},children:[""!==m?Object(n.jsx)(P.a,{severity:"error",children:m}):Object(n.jsx)("div",{})," "]}),"    ",Object(n.jsxs)(d.a,{component:"div",style:{marginTop:"50px",height:"60%",padding:16},children:[Object(n.jsxs)("form",{className:"App",onSubmit:q,children:[Object(n.jsx)(d.a,{variant:"h6",children:Object(n.jsx)(B.a,{fontSize:"large"})}),Object(n.jsx)(N.a,{variant:"outlined",color:"primary",label:"Name",error:_,required:!0,style:{height:80,width:300},onChange:function(e){O(e.target.value)}}),Object(n.jsx)(N.a,{variant:"outlined",color:"primary",label:"Email",required:!0,helperText:!1===E?"":"Incorrect email.",error:E,style:{height:80,width:300},onChange:function(e){return i(e.target.value)},onBlur:function(e){r.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?$(!1):$(!0)}}),Object(n.jsx)(N.a,{variant:"outlined",color:"primary",label:"Password",type:"password",helperText:!1===W?"":"Enter a password with min of 6 letters.",error:W,style:{height:80,width:300},onChange:function(e){j(e.target.value),l.length>5&&G(!1)}}),Object(n.jsx)(A.a,{variant:"contained",color:"primary",size:"large",style:{width:"300px"},children:Object(n.jsx)(I.a,{type:"submit",value:"SIGN UP",name:"Submit",fullWidth:!0,className:e.submitbtn,disableUnderline:!0})})]}),Object(n.jsx)(d.a,{style:{marginLeft:"20%",marginTop:"15px"},children:Object(n.jsx)(k.b,{to:"/signin",children:"Have an account?Sign In"})})]})]})})},E=a(65),$=a(188),J=a(190),L=a(178),W=a(187),G=a(89),M=a.n(G),U=a(90),_=a.n(U),q=a(177),R=a(88),H=a.n(R),K=Object(o.a)({submitbtn:{textDecoration:"none",color:"white",width:"300"}}),Q=function(){var e=K(),t=r.a.useState({showPassword:!1}),a=Object(v.a)(t,2),i=a[0],s=a[1],o=Object(c.useState)(""),l=Object(v.a)(o,2),j=l[0],b=l[1],u=Object(c.useState)(!1),O=Object(v.a)(u,2),x=O[0],p=O[1],m=Object(c.useState)(""),w=Object(v.a)(m,2),C=w[0],Z=w[1],F=Object(c.useState)(""),D=Object(v.a)(F,2),G=D[0],U=D[1],R=Object(c.useState)(!1),Q=Object(v.a)(R,2),V=Q[0],X=Q[1],Y=Object(S.f)(),ee=r.a.useState(!0),te=Object(v.a)(ee,2),ae=te[0],ne=te[1];Object(c.useEffect)((function(){ce()}),[]);var ce=function(){y.a.getJSON("userInfo")&&Y.push("/profile")},re=function(){var e=Object(g.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,!j.match(a)||null===C){e.next=18;break}return console.log("hello"),e.prev=4,e.next=7,T.a.post("/login",{email:j,password:C});case 7:n=e.sent,y.a.set("userInfo",JSON.stringify(n)),Y.push("/profile"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),U(e.t0.response.data.msg),ne(!0);case 16:e.next=19;break;case 18:p(!0);case 19:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(z.a,{fixed:!0,maxWidth:"xs",children:Object(n.jsxs)(d.a,{component:"div",style:{marginTop:"10%",height:"65%",padding:15},children:[Object(n.jsxs)(d.a,{style:{height:"20px",width:"300px",marginLeft:"10%"},children:[""!==G?Object(n.jsx)("div",{children:Object(n.jsx)(q.a,{in:ae,children:Object(n.jsx)(P.a,{severity:"error",action:Object(n.jsx)(h.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){ne(!1)},children:Object(n.jsx)(H.a,{fontSize:"inherit"})}),children:G})})}):Object(n.jsx)("div",{})," "]}),Object(n.jsxs)("form",{onSubmit:re,className:"App",children:[Object(n.jsx)(B.a,{style:{fontSize:40}}),Object(n.jsx)(N.a,{variant:"outlined",style:{height:80,width:300,marginBottom:"5px"},color:"primary",label:"Email",helperText:!1===x?"":"Incorrect email.",error:x,onBlur:function(e){j.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?p(!1):p(!0)},onChange:function(e){b(e.target.value)}}),Object(n.jsxs)(W.a,{variant:"outlined",children:[Object(n.jsx)(J.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(n.jsx)($.a,{id:"outlined-adornment-password",type:i.showPassword?"text":"password",style:{width:300,marginBottom:"5px"},value:C,error:V,required:!0,onChange:function(e){return t=e.target.value,Z(t),void(0===C.length?X(!0):X(!1));var t},endAdornment:Object(n.jsx)(L.a,{position:"end",children:Object(n.jsx)(h.a,{"aria-label":"toggle password visibility",onClick:function(){s(Object(E.a)(Object(E.a)({},i),{},{showPassword:!i.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:i.showPassword?Object(n.jsx)(M.a,{}):Object(n.jsx)(_.a,{})})}),labelWidth:70})]}),Object(n.jsx)(A.a,{variant:"contained",color:"primary",size:"large",style:{width:"300px",marginTop:"15px",marginBottom:"10px"},children:Object(n.jsx)(I.a,{type:"submit",value:"SIGN IN",name:"Submit",fullWidth:!0,className:e.submitbtn,disableUnderline:!0})}),Object(n.jsx)(k.b,{to:"/signup",children:"Don't have an account?Sign Up"})]})]})})})},V=a(179),X=a(180),Y=a(183),ee=a(182),te=a(181),ae=Object(o.a)({root:{maxWidth:300,justifyContent:"center",margin:"8px"},media:{height:300}}),ne=function(){var e=ae(),t=Object(S.f)(),a=r.a.useState(!1),i=Object(v.a)(a,2),s=i[0],o=i[1];Object(c.useEffect)((function(){l()}),[]);var l=function(){y.a.getJSON("userInfo")?o(!0):t.push("/")};return Object(n.jsx)(n.Fragment,{children:!0===s?Object(n.jsx)("div",{className:"profile-container",children:Object(n.jsxs)(V.a,{className:e.root,children:[Object(n.jsxs)(X.a,{children:[Object(n.jsx)(te.a,{className:e.media,image:"https://thegadgetflow.com/wp-content/uploads/2018/08/Incredible-desk-setup-02-821x1024.jpg",title:"Contemplative Reptile"}),Object(n.jsxs)(ee.a,{children:[Object(n.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h4",children:"Manufac Analytics"}),Object(n.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:"Manufac Analytics is a technology firm focussed on providing reliable and easy to use Artificial Intelligence and IoT solutions to the manufacturing plants worldwide to help them become operationally efficient."})]})]}),Object(n.jsx)(Y.a,{classes:{root:e.root},children:Object(n.jsx)("div",{className:"logout-btn",children:Object(n.jsx)(A.a,{variant:"outlined",color:"primary",onClick:function(){console.log("hello"),y.a.remove("userInfo"),t.push("/")},children:"LOG OUT"})})})]})}):Object(n.jsx)("div",{})})},ce=a(91),re=a(184),ie=function(){var e=Object(ce.a)({palette:{primary:{main:"#00796b"},secondary:{main:"#E33E7F"}}});return Object(n.jsx)(k.a,{children:Object(n.jsx)(re.a,{theme:e,children:Object(n.jsxs)("div",{children:[Object(n.jsx)(p,{}),Object(n.jsxs)(S.c,{children:[Object(n.jsxs)(S.a,{path:"/signup",exact:!0,children:[Object(n.jsx)(D,{})," "]}),Object(n.jsxs)(S.a,{path:"/signin",exact:!0,children:[Object(n.jsx)(Q,{})," "]}),Object(n.jsxs)(S.a,{path:"/profile",exact:!0,children:[Object(n.jsx)(ne,{})," "]}),Object(n.jsxs)(S.a,{path:"/",exact:!0,children:[Object(n.jsx)(Q,{})," "]})]})]})})})},se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,191)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(k.a,{children:Object(n.jsx)(ie,{})})}),document.getElementById("root")),se()}},[[132,1,2]]]);
//# sourceMappingURL=main.0747c29a.chunk.js.map