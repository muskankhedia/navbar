(this.webpackJsonpnavbar=this.webpackJsonpnavbar||[]).push([[7],{12:function(e,n,t){"use strict";var r=t(11),a=t(3),c=Object(a.e)({open:!1,setModalOpen:Object(a.b)((function(){c.open=!0})),setModalClose:Object(a.b)((function(){c.open=!1})),toggleModal:Object(a.b)((function(){return c.open=!c.open})),showForm:!1,toggleForm:Object(a.b)((function(){return c.showForm=!c.showForm})),isSignedIn:!1,toggleSgn:Object(a.b)((function(){return c.isSignedIn=!c.isSignedIn})),get setSignedIn(){return c.isSignedIn?"Sign out":"Sign in"},nb:0,inc:Object(a.b)((function(){return c.nb++})),welcome:"Please sign in",get setWelcome(){return c.isSignedIn?"Welcome back":"Please sign in"},setMsg:Object(a.b)((function(){return c.welcome=c.isSignedIn?"Welcome back":"Please sign in"})),users:[],addUser:Object(a.b)((function(e){c.users.push(e)})),addUsers:Object(a.b)((function(e){var n=Array.from(c.users,(function(e){return e.email})),t=e.filter((function(e){return!n.includes(e.email)}));return c.users=[].concat(Object(r.a)(c.users),Object(r.a)(t))})),get nbUsers(){return c.users.length},getUserEmail:function(e){if(c.users.length>0)return c.users[e].email},getUserByEmail:function(e){var n;return c.users.forEach((function(t){t.email===e&&(n=t)})),n},current:{},setCurrent:Object(a.b)((function(e){c.current=e})),rmCurrent:Object(a.b)((function(e){c.users=c.users.filter((function(n){return n.email!==e.email})),c.current={}})),token:"",setToken:Object(a.b)((function(e){var n=e.token;c.token=n}))});n.a=c},23:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t.n(r),c=t(4),s=t(0),u=t(8),i=t.n(u),o=t(15),l=t(9),b=t(1),p=t(3);function f(){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(a.a.mark((function e(){var n,t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://reqres.in/api/users",n=[1,2].map((function(e){return fetch("".concat("https://reqres.in/api/users","?page=").concat(e))})),e.next=4,Promise.all(n);case 4:return t=e.sent,e.next=7,Promise.all(t.map((function(e){return e.json()})));case 7:return r=e.sent,e.abrupt("return",r.flatMap((function(e){return e.data})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=t(6),d=function(){return Object(s.jsx)(h.a,{})},m=Object(b.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,201))})),O=Object(b.lazy)((function(){return Promise.all([t.e(1),t.e(0),t.e(15)]).then(t.bind(null,183))})),x=Object(b.lazy)((function(){return Promise.all([t.e(1),t.e(0),t.e(12),t.e(17)]).then(t.bind(null,198))})),g=Object(b.lazy)((function(){return Promise.all([t.e(1),t.e(0),t.e(2),t.e(3),t.e(14)]).then(t.bind(null,197))})),v=Object(b.lazy)((function(){return Promise.all([t.e(1),t.e(0),t.e(2),t.e(3),t.e(11)]).then(t.bind(null,202))})),w=Object(b.lazy)((function(){return Promise.all([t.e(1),t.e(0),t.e(2),t.e(3),t.e(13)]).then(t.bind(null,203))})),k=Object(b.lazy)((function(){return Promise.all([t.e(1),t.e(0),t.e(2),t.e(4),t.e(16)]).then(t.bind(null,196))})),y=[{path:"",action:function(e){return Object(c.a)(a.a.mark((function n(){var t,r,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.store,r=e.next,n.next=3,r();case 3:return c=n.sent,n.abrupt("return",c&&Object(s.jsx)(b.Suspense,{fallback:Object(s.jsx)(h.a,{}),children:Object(s.jsx)(m,{store:t,children:c})}));case 5:case"end":return n.stop()}}),n)})))()},children:[{path:"/",action:function(){var e=Object(c.a)(a.a.mark((function e(n){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.store,e.abrupt("return",Object(s.jsxs)(b.Suspense,{fallback:d(),children:[Object(s.jsx)(O,{store:t}),";"]}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{path:"/about",action:function(e){return Object(c.a)(a.a.mark((function n(){var t,r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.store,r=e.mode,n.abrupt("return",Object(s.jsxs)(b.Suspense,{fallback:d(),children:[Object(s.jsx)(x,{store:t,info:r}),";"]}));case 2:case"end":return n.stop()}}),n)})))()}},{path:"/signinform",action:function(e){return Object(c.a)(a.a.mark((function n(){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.store,n.abrupt("return",Object(s.jsxs)(b.Suspense,{fallback:d(),children:[Object(s.jsx)(g,{store:t}),";"]}));case 2:case"end":return n.stop()}}),n)})))()}},{path:"/addusers",action:function(e){return Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(s.jsxs)(b.Suspense,{fallback:d(),children:[Object(s.jsx)(v,{store:e.store}),";"]}));case 1:case"end":return n.stop()}}),n)})))()}},{path:"/contacts",children:[{path:"",action:function(e){return Object(c.a)(a.a.mark((function n(){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.store,f().then(Object(p.b)((function(e){return t.addUsers(e)}))),n.abrupt("return",Object(s.jsxs)(b.Suspense,{fallback:d(),children:[Object(s.jsx)(k,{store:t}),";"]}));case 3:case"end":return n.stop()}}),n)})))()}},{path:"/:email",action:function(e){return Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(s.jsxs)(b.Suspense,{fallback:d(),children:[Object(s.jsx)(w,{email:e.params.email,store:e.store}),";"]}));case 1:case"end":return n.stop()}}),n)})))()}}]}]}],S=t(12),P=t.p+"static/media/404.8b1d91e2.jpg",z=Object(b.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,201))}));function I(){return Object(s.jsx)(b.Suspense,{fallback:Object(s.jsx)(h.a,{}),children:Object(s.jsx)(z,{children:Object(s.jsx)("img",{src:P,alt:"error 404",style:{height:"100vh",width:"100vw"},loading:"lazy"})})})}Object(p.c)({enforceActions:"always",computedRequiresReaction:!0,reactionRequiresObservable:!0,observableRequiresReaction:!0,disableErrorBoundaries:!0});var U=document.getElementById("root"),q={mode:"admin",store:S.a},E=new o.a(y,{context:q});function M(e){return R.apply(this,arguments)}function R(){return(R=Object(c.a)(a.a.mark((function e(n){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,void 0!==n){e.next=3;break}return e.abrupt("return",n.pathname="/");case 3:return e.next=5,E.resolve({pathname:n.pathname});case 5:return t=e.sent,e.abrupt("return",i.a.render(t,U));case 9:return e.prev=9,e.t0=e.catch(0),console.log("Nothing there: ",n),e.abrupt("return",i.a.render(Object(s.jsx)(I,{}),U));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}l.a.listen((function(e){return M(e.location)})),M(l.a.location)},6:function(e,n,t){"use strict";var r=t(0),a=t(1),c=(t(23),Object(a.memo)((function(){return Object(r.jsx)("svg",{className:"spinner",width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})})})));n.a=c},9:function(e,n,t){"use strict";var r=t(14),a=Object(r.a)();n.a=a}},[[24,8,9]]]);
//# sourceMappingURL=main.da61cab3.chunk.js.map