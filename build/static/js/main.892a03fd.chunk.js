(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},37:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),s=n(27),c=n.n(s),i=n(13),o=n(6),u=n(5),l=n.n(u),d=n(8),j=n(9),b=n.p+"static/media/illustration.ae7276f0.svg",p=n.p+"static/media/logo.a88331cb.svg",h=n.p+"static/media/google-icon.df15d8e5.svg",m=(n(24),n(30)),f=n(31),x=(n(37),n(1));function O(e){var t=e.isOutlined,n=void 0!==t&&t,a=Object(f.a)(e,["isOutlined"]);return Object(x.jsx)("button",Object(m.a)({className:"buttonComp ".concat(n?"outlined":"")},a))}var g=n(18);n(39),n(41);g.a.initializeApp({apiKey:"AIzaSyD71ls_i7-BiPCD73QeKtD8Boq5UUKLszg",authDomain:"teste-gap.firebaseapp.com",databaseURL:"https://teste-gap-default-rtdb.firebaseio.com",projectId:"teste-gap",storageBucket:"teste-gap.appspot.com",messagingSenderId:"721654718314",appId:"1:721654718314:web:9800e1d0be87d865ffcf13"});var v=g.a.auth(),w=g.a.database(),k=Object(a.createContext)({});function y(e){var t=Object(a.useState)(),n=Object(j.a)(t,2),r=n[0],s=n[1];function c(){return(c=Object(d.a)(l.a.mark((function e(){var t,n,a,r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new g.a.auth.GoogleAuthProvider,e.next=3,v.signInWithPopup(t);case 3:if(!(n=e.sent).user){e.next=9;break}if(a=n.user,r=a.displayName,c=a.photoURL,i=a.uid,r&&c){e.next=8;break}throw new Error("Missing information from Google Account.");case 8:s({id:i,name:r,avatar:c});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=v.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.photoURL,a=e.uid;if(!t||!n)throw new Error("Missing information from Google Account.");s({id:a,name:t,avatar:n})}}));return function(){e()}}),[]),Object(x.jsx)(k.Provider,{value:{user:r,signInWithGoogle:function(){return c.apply(this,arguments)}},children:e.children})}function N(){return Object(a.useContext)(k)}function C(){var e=Object(o.f)(),t=N(),n=t.user,r=t.signInWithGoogle,s=Object(a.useState)(""),c=Object(j.a)(s,2),i=c[0],u=c[1];function m(){return(m=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.next=3,r();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==i.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,w.ref("rooms/".concat(i)).get();case 5:if((a=t.sent).exists()){t.next=9;break}return alert("Sala n\xe3o existe!"),t.abrupt("return");case 9:if(!a.val().endedAt){t.next=12;break}return alert("Essa sala foi encerrada!"),t.abrupt("return");case 12:e.push("/rooms/".concat(i));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(x.jsxs)("div",{id:"pagina-auth",children:[Object(x.jsxs)("aside",{children:[Object(x.jsx)("img",{src:b,alt:"Imagem de ilustra\xe7\xe3o"}),Object(x.jsx)("strong",{children:"Toda pergunta tem uma resposta"}),Object(x.jsx)("p",{className:"p-color",children:"Aprenda e compartilhe conhecimento com outras pessoas"})]}),Object(x.jsx)("main",{children:Object(x.jsxs)("div",{className:"main-corpo",children:[Object(x.jsx)("img",{src:p,alt:"Imagem do logo"}),Object(x.jsxs)("button",{onClick:function(){return m.apply(this,arguments)},className:"botao-semsass create-room",children:[Object(x.jsx)("img",{src:h,alt:"Logo do Google"}),"Crie sua sala com o Google"]}),Object(x.jsx)("div",{className:"separator",children:"ou entre em uma sala"}),Object(x.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(x.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala",className:"botao-semsass",onChange:function(e){return u(e.target.value)},value:i}),Object(x.jsx)(O,{type:"submit",children:"Entrar na sala"})]})]})})]})}function q(){var e=N().user,t=Object(o.f)(),n=Object(a.useState)(""),r=Object(j.a)(n,2),s=r[0],c=r[1];function u(){return(u=Object(d.a)(l.a.mark((function n(a){var r,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),""!==s.trim()){n.next=3;break}return n.abrupt("return");case 3:return r=w.ref("rooms"),n.next=6,r.push({title:s,authorId:null===e||void 0===e?void 0:e.id});case 6:c=n.sent,t.push("/rooms/".concat(c.key));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(x.jsxs)("div",{id:"pagina-auth",children:[Object(x.jsxs)("aside",{children:[Object(x.jsx)("img",{src:b,alt:"Imagem de ilustra\xe7\xe3o"}),Object(x.jsx)("strong",{children:"Toda pergunta tem uma resposta"}),Object(x.jsx)("p",{className:"p-color",children:"Aprenda e compartilhe conhecimento com outras pessoas"})]}),Object(x.jsx)("main",{children:Object(x.jsxs)("div",{className:"main-corpo",children:[Object(x.jsx)("img",{src:p,alt:"Imagem do logo"}),Object(x.jsx)("h2",{children:"Criar uma nova sala"}),Object(x.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(x.jsx)("input",{type:"text",placeholder:"Nome da sala",className:"botao-semsass",onChange:function(e){return c(e.target.value)},value:s}),Object(x.jsx)(O,{type:"submit",children:"Criar Sala"})]}),Object(x.jsxs)("p",{children:["Quer entrar em uma sala existente?",Object(x.jsx)(i.b,{to:"/",children:"clique aqui"})]})]})})]})}var A=n(29),I=n.n(A);n(49);function S(e){var t=e.content,n=e.author,a=e.isAnswered,r=void 0!==a&&a,s=e.isHighlighted,c=void 0!==s&&s,i=e.children;return Object(x.jsxs)("div",{className:I()("question",{answered:r},{highlighted:c&&!r}),children:[Object(x.jsx)("p",{children:t}),Object(x.jsxs)("footer",{children:[Object(x.jsxs)("div",{className:"user-info-question",children:[Object(x.jsx)("img",{src:n.avatar,alt:n.name}),Object(x.jsx)("span",{children:n.name})]}),Object(x.jsx)("div",{children:i})]})]})}var H=n.p+"static/media/copy.2f36f99e.svg";n(50);function L(e){return Object(x.jsxs)("button",{className:"room-code",onClick:function(){navigator.clipboard.writeText(e.code)},children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{className:"copy-img",src:H,alt:""})}),Object(x.jsxs)("span",{className:"span-text",children:["Sala #",e.code]})]})}function D(e){var t=N().user,n=Object(a.useState)([]),r=Object(j.a)(n,2),s=r[0],c=r[1],i=Object(a.useState)(""),o=Object(j.a)(i,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){var n=w.ref("rooms/".concat(e));return n.on("value",(function(e){var n,a=e.val(),r=null!==(n=a.questions)&&void 0!==n?n:{},s=Object.entries(r).map((function(e){var n,a,r,s=Object(j.a)(e,2),c=s[0],i=s[1];return{id:c,content:i.content,author:i.author,isHighlighted:i.isHighlighted,isAnswered:i.isAnswered,likeCount:Object.values(null!==(n=i.likes)&&void 0!==n?n:{}).length,likeId:null===(a=Object.entries(null!==(r=i.likes)&&void 0!==r?r:{}).find((function(e){var n=Object(j.a)(e,2);n[0];return n[1].authorId===(null===t||void 0===t?void 0:t.id)})))||void 0===a?void 0:a[0]}}));l(a.title),c(s)})),function(){n.off("value")}}),[e,null===t||void 0===t?void 0:t.id]),{questions:s,title:u}}n(26);function E(){var e=N().user,t=Object(o.g)(),n=Object(a.useState)(""),r=Object(j.a)(n,2),s=r[0],c=r[1],u=t.id,b=D(u),h=b.title,m=b.questions;function f(){return(f=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==s.trim()){t.next=3;break}return t.abrupt("return");case 3:if(e){t.next=5;break}throw new Error("You must be logged in");case 5:return a={content:s,author:{name:e.name,avatar:e.avatar},isHighlighted:!1,isAnswered:!1},t.next=8,w.ref("rooms/".concat(u,"/questions")).push(a);case 8:c("");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return(g=Object(d.a)(l.a.mark((function t(n,a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,w.ref("rooms/".concat(u,"/questions/").concat(n,"/likes/").concat(a)).remove();case 3:t.next=7;break;case 5:return t.next=7,w.ref("rooms/".concat(u,"/questions/").concat(n,"/likes")).push({authorId:null===e||void 0===e?void 0:e.id});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(x.jsxs)("div",{id:"page-room",children:[Object(x.jsx)("header",{children:Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)(i.b,{to:"/",children:Object(x.jsx)("img",{src:p,alt:"Letmeask"})}),Object(x.jsx)(L,{code:u})]})}),Object(x.jsxs)("main",{children:[Object(x.jsxs)("div",{className:"room-title",children:[Object(x.jsxs)("h1",{children:["Sala ",h]}),m.length>0&&Object(x.jsxs)("span",{className:"span",children:[m.length," pergunta(s)"]})]}),Object(x.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(x.jsx)("textarea",{className:"textarea",placeholder:"O que voc\xea quer perguntar?",onChange:function(e){return c(e.target.value)},value:s}),Object(x.jsxs)("div",{className:"form-footer",children:[e?Object(x.jsxs)("div",{className:"user-info",children:[Object(x.jsx)("img",{src:e.avatar,alt:e.name}),Object(x.jsx)("span",{children:e.name})]}):Object(x.jsxs)("span",{className:"span-footer",children:["Para enviar uma pergunta, ",Object(x.jsx)("button",{className:"botao-footer",children:Object(x.jsx)(i.b,{to:"/",children:"fa\xe7a seu login"})}),"."]}),Object(x.jsx)(O,{type:"submit",disabled:!e,className:"botao-room",children:"Enviar pergunta"})]})]}),Object(x.jsx)("div",{className:"question-list",children:m.map((function(e){return Object(x.jsx)(S,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighlighted:e.isHighlighted,children:!e.isAnswered&&Object(x.jsxs)("button",{className:"like-button ".concat(e.likeId?"liked":""),type:"button","aria-label":"Marcar como gostei",onClick:function(){return function(e,t){return g.apply(this,arguments)}(e.id,e.likeId)},children:[e.likeCount>0&&Object(x.jsx)("span",{children:e.likeCount}),Object(x.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},e.id)}))})]})]})}var G=n.p+"static/media/delete.22ba6e00.svg",M=n.p+"static/media/check.5dfa6ed6.svg",B=n.p+"static/media/answer.4502a8d5.svg";function P(){var e=Object(o.f)(),t=Object(o.g)().id,n=D(t),a=n.title,r=n.questions;function s(){return(s=Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.ref("rooms/".concat(t)).update({endedAt:new Date});case 2:e.push("/");case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function c(){return(c=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Tem certeza que voc\xea deseja excluir esta pergunta?")){e.next=3;break}return e.next=3,w.ref("rooms/".concat(t,"/questions/").concat(n)).remove();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.ref("rooms/".concat(t,"/questions/").concat(n)).update({isAnswered:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.ref("rooms/".concat(t,"/questions/").concat(n)).update({isHighlighted:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(x.jsxs)("div",{id:"page-room",children:[Object(x.jsx)("header",{children:Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)(i.b,{to:"/",children:Object(x.jsx)("img",{src:p,alt:"Letmeask"})}),Object(x.jsxs)("div",{className:"botao-encerrar",children:[Object(x.jsx)(L,{code:t}),Object(x.jsx)(O,{className:"botao-admin",isOutlined:!0,onClick:function(){return s.apply(this,arguments)},children:"Encerrar sala"})]})]})}),Object(x.jsxs)("main",{children:[Object(x.jsxs)("div",{className:"room-title",children:[Object(x.jsxs)("h1",{children:["Sala ",a]}),r.length>0&&Object(x.jsxs)("span",{className:"span",children:[r.length," pergunta(s)"]})]}),Object(x.jsx)("div",{className:"question-list",children:r.map((function(e){return Object(x.jsx)(S,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighlighted:e.isHighlighted,children:Object(x.jsxs)("div",{className:"botoes-admin",children:[!e.isAnswered&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{type:"button",onClick:function(){return function(e){return u.apply(this,arguments)}(e.id)},children:Object(x.jsx)("img",{src:M,alt:"Marcar pergunta como respondida!"})}),Object(x.jsx)("button",{type:"button",onClick:function(){return function(e){return j.apply(this,arguments)}(e.id)},children:Object(x.jsx)("img",{src:B,alt:"Dar destaque a pergunta."})})]}),Object(x.jsx)("button",{type:"button",onClick:function(){return function(e){return c.apply(this,arguments)}(e.id)},children:Object(x.jsx)("img",{src:G,alt:"Remover pergunta"})})]})},e.id)}))})]})]})}var U=function(){return Object(x.jsx)(i.a,{children:Object(x.jsx)(y,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/",exact:!0,component:C}),Object(x.jsx)(o.a,{path:"/rooms/new",exact:!0,component:q}),Object(x.jsx)(o.a,{path:"/rooms/:id",component:E}),Object(x.jsx)(o.a,{path:"/admin/rooms/:id",component:P})]})})})};n(51);c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(U,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.892a03fd.chunk.js.map