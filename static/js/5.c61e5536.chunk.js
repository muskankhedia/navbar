(this.webpackJsonpnavbar=this.webpackJsonpnavbar||[]).push([[5],{219:function(e,t,n){"use strict";n.r(t);var a=n(216),r=n(217),c=n(218),i=n(180),s=n(100),o=n(220),l=n(177),j=n(196),b=n(195),d=n(171),h=n(215),u=n(194),m=n(97),p=n(193),O=n(192),x=n(214),g=n(172),f=n(174),v=n(191),y=n(190),w=n(189),C=n(36),k=n(24),N=n(199),S=n(169),I=n(212),M=n(213),R=n(173),W=n(25),q=n(2),D=n(0),T=n.n(D),z=n(181),L=n(12),A=n(29),B=(n(105),n(160)),E=n(184),F=n(133),U=n(165),P=n(179),J=n(162),V=n(43),G=Object(B.a)((function(e){return{root:{height:"0vh",width:"Ovw"},paperForm:{margin:e.spacing(4,4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),H=Object(z.a)((function(e){var t=e.store,n=G(),a=n.root,r=n.paperForm,c=n.form,i=n.submit,o=Object(V.b)({mode:"onBlur"}),j=o.register,b=o.handleSubmit,d=o.errors,h=Object(L.b)((function(e){var n=e.email,a=e.password;Array.from(t.users,(function(e){return e.email})).includes(n)||(t.addUser({email:n,name:a}),t.toggleSgn(),t.setMsg(),t.setCurrent({email:n,pwd:a})),t.setModalClose()}));return Object(q.jsxs)(U.a,{container:!0,component:"main",className:a,align:"center",justify:"center",children:[Object(q.jsx)(J.a,{}),Object(q.jsx)(U.a,{item:!0,xs:6,sm:6,md:5,component:F.a,elevation:6,square:!0,children:Object(q.jsxs)("div",{className:r,children:[Object(q.jsx)(s.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(q.jsxs)("form",{className:c,noValidate:!0,onSubmit:b(h),children:[Object(q.jsx)(P.a,{inputRef:j({required:{value:!0,message:"Required"},pattern:{value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,message:"Email is not valid, should be my@email.com"}}),id:"outlined-email-input",label:"Email",margin:"normal",fullWidth:!0,name:"email",type:"email",autoComplete:"email",required:!0,variant:"outlined"}),d.email&&Object(q.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:d.email.message}),Object(q.jsx)(P.a,{inputRef:j({required:{value:!0,message:"Required"},minLength:{value:6,message:"Password should be at-least 6 characters."}}),id:"outlined-password-input",label:"Password",name:"password",type:"password",variant:"outlined",autoComplete:"current-password",margin:"normal",fullWidth:!0}),d.password&&Object(q.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:d.password.message}),Object(q.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:i,disabled:t.isSignedIn,children:"Sign In"})]})]})})]})}));function $(){return{top:"".concat(15,"%"),margin:"auto"}}var K=Object(B.a)((function(e){return{paper:{position:"absolute",width:700}}})),Q=function(e){var t=e.open,n=e.handleClose,a=e.store,r=K(),c=Object(D.useState)($),i=Object(k.a)(c,1)[0],s=Object(q.jsx)("div",{style:i,className:r.paper,children:Object(q.jsx)(H,{store:a})});return Object(q.jsx)(E.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},open:t,onClose:n,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:s})},X=Object(z.a)((function(e){var t=e.store;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(l.a,{onClick:Object(L.b)((function(){return t.setMsg(),void(t.isSignedIn?(t.rmCurrent(t.current),t.toggleSgn()):t.toggleModal())})),children:t.setSignedIn}),Object(q.jsx)(Q,{open:t.open,handleClose:Object(L.b)((function(){return t.setModalClose()})),store:t})]})})),Y=n.p+"static/media/kitesurfingLogo.e1fb1667.svg",Z=n(197),_=n.n(Z),ee=n(198),te=n.n(ee),ne=Object(B.a)((function(e){var t,n;return{list:{width:250},grow:{flexGrow:1},title:(t={display:"none"},Object(W.a)(t,e.breakpoints.up("xs"),{display:"block"}),Object(W.a)(t,"marginRight",e.spacing(2)),t),midway:(n={display:"none"},Object(W.a)(n,e.breakpoints.up("sm"),{display:"block"}),Object(W.a)(n,"marginRight",e.spacing(2)),n),sectionDesktop:Object(W.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(W.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),imageIcon:{height:"100%"},iconRoot:{textAlign:"center"}}})),ae={bgcolor:"background.paper",borderColor:"text.primary",m:1,border:1,style:{width:"5rem",height:"3rem",backgroundColor:"#3f51b5"},display:"flex",alignItems:"center",justifyContent:"center",margin:"5px"},re=function(e){var t=e.to,n=e.handler,a=e.text,r=e.children;return Object(q.jsxs)(I.a,{component:S.a,href:t,onClick:Object(L.b)(n),children:[Object(q.jsx)(R.a,{children:r}),Object(q.jsx)(M.a,{primary:a})]})},ce=Object(z.a)((function(e){var t=e.store,n=(Object(N.a)(e,["store"]),ne()),M=Object(D.useState)(null),z=Object(k.a)(M,2),L=z[0],B=z[1],E=Object(D.useState)(null),F=Object(k.a)(E,2),U=F[0],P=F[1],J=Boolean(L),V=Boolean(U),G=T.a.useState({left:!1}),H=Object(k.a)(G,2),$=H[0],K=H[1],Q="left",Z=function(e,t){return function(){K(Object(C.a)(Object(C.a)({},$),{},Object(W.a)({},e,t)))}};function ee(e){B(e.currentTarget)}function ce(e){t.inc(),ie(e)}function ie(e){B(null),K(Object(C.a)(Object(C.a)({},$),{},{left:!1})),e.preventDefault(),A.a.push({pathname:e.currentTarget.pathname})}var se="primary-search-account-menu",oe=Object(q.jsxs)(m.a,{anchorEl:L,anchorOrigin:{vertical:"top",horizontal:"right"},id:se,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:J,onClose:ie,children:[Object(q.jsx)(I.a,{component:S.a,href:"/signinform",onClick:function(e){ie(e),e.preventDefault(),A.a.push({pathname:e.currentTarget.pathname})},children:"Login in"}),Object(q.jsx)(I.a,{component:S.a,href:"/t",onClick:ie,children:"Sign up"})]}),le="primary-search-account-menu-mobile",je=Object(q.jsxs)(m.a,{anchorEl:U,anchorOrigin:{vertical:"top",horizontal:"right"},id:le,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:V,onClose:function(){P(null)},children:[Object(q.jsxs)(I.a,{children:[Object(q.jsx)(d.a,{"aria-label":"show number views",color:"inherit",children:Object(q.jsx)(h.a,{badgeContent:t.nb,color:"secondary",children:Object(q.jsx)(u.a,{})})}),Object(q.jsx)("p",{children:"Views"})]}),Object(q.jsxs)(I.a,{children:[Object(q.jsx)(d.a,{"aria-label":"show number contacts",color:"inherit",children:Object(q.jsx)(h.a,{badgeContent:t.nbUsers,color:"secondary",children:Object(q.jsx)(b.a,{})})}),Object(q.jsx)("p",{children:"Contacts"})]}),Object(q.jsxs)(I.a,{onClick:ee,children:[Object(q.jsx)(d.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(q.jsx)(j.a,{})}),Object(q.jsx)("p",{children:"Profile"})]})]});return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)("div",{className:n.grow,children:[Object(q.jsx)(a.a,{position:"sticky",children:Object(q.jsxs)(r.a,{children:[Object(q.jsx)(l.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"open drawer",onClick:Z(Q,!0),children:Object(q.jsx)(_.a,{})}),Object(q.jsx)(o.a,{anchor:Q,open:$.left,onClose:Z(Q,!1),children:Object(q.jsxs)("div",{className:n.list,role:"presentation",children:[Object(q.jsx)(g.a,{children:["Home","About","Login in"].map((function(e,t){return Object(q.jsx)(f.a,{button:!0,children:Object(q.jsxs)(R.a,{children:[0===t&&Object(q.jsx)(re,{to:"/",handler:ie,text:e,children:Object(q.jsx)(w.a,{})}),1===t&&Object(q.jsx)(re,{to:"/about",handler:ce,text:e,children:Object(q.jsx)(y.a,{})}),2===t&&Object(q.jsx)(re,{to:"/signinform",handler:ie,text:e,children:Object(q.jsx)(v.a,{})})]})},e)}))}),Object(q.jsx)(x.a,{}),Object(q.jsx)(g.a,{children:["Contacts","Add Contact"].map((function(e,t){return Object(q.jsx)(f.a,{button:!0,children:Object(q.jsxs)(R.a,{children:[0===t&&Object(q.jsx)(re,{to:"/contacts",handler:ie,text:e,children:Object(q.jsx)(O.a,{})}),1===t&&Object(q.jsx)(re,{to:"/addusers",handler:ie,text:e,children:Object(q.jsx)(p.a,{})})]})},e)}))})]})}),Object(q.jsx)(s.a,{className:n.midway,variant:"h6",noWrap:!0,children:"The DownWinder"}),Object(q.jsx)(s.a,{className:n.title,variant:"h6",noWrap:!0,style:{marginLeft:"50px"},children:Object(q.jsx)(i.a,Object(C.a)(Object(C.a)({borderRadius:10},ae),{},{children:Object(q.jsx)(X,{store:t})}))}),Object(q.jsx)("div",{className:n.grow,children:Object(q.jsx)(s.a,{children:Object(q.jsx)(c.a,{classes:{root:n.iconRoot},children:Object(q.jsx)("img",{component:"img",alt:"logo",className:n.imageIcon,src:Y,loading:"lazy",style:{width:40}})})})}),Object(q.jsx)("div",{className:n.grow}),Object(q.jsxs)("div",{className:n.sectionDesktop,children:[Object(q.jsx)(d.a,{"aria-label":"show number contacts",color:"inherit",children:Object(q.jsx)(h.a,{badgeContent:t.nbUsers,color:"secondary",children:Object(q.jsx)(b.a,{})})}),Object(q.jsx)(d.a,{"aria-label":"show new views",color:"inherit",children:Object(q.jsx)(h.a,{badgeContent:t.nb,color:"secondary",children:Object(q.jsx)(u.a,{})})}),Object(q.jsx)(d.a,{edge:"end","aria-label":"account of current user","aria-controls":se,"aria-haspopup":"true",onClick:ee,color:"inherit",children:Object(q.jsx)(j.a,{})})]}),Object(q.jsx)("div",{className:n.sectionMobile,children:Object(q.jsx)(d.a,{"aria-label":"show more","aria-controls":le,"aria-haspopup":"true",onClick:function(e){P(e.currentTarget)},color:"inherit",children:Object(q.jsx)(h.a,{badgeContent:t.nbUsers+t.nb,color:"secondary",children:Object(q.jsx)(te.a,{})})})})]})}),je,oe]})})}));t.default=ce}}]);
//# sourceMappingURL=5.c61e5536.chunk.js.map