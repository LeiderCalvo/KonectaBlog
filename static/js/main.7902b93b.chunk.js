(this.webpackJsonpblog_conecta=this.webpackJsonpblog_conecta||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),l=a(1),i=a(3);var s={UNLOGGED:null,UNKNOW:void 0},u=0,m=1,f=2,d=function(e){var t=e.initialState,a=e.guivenReducer,n=e.key,o=r.a.createContext(),c=r.a.createContext(),i=a;if(n){try{t=JSON.parse(localStorage.getItem(n))||t||null}catch(s){}i=function(e,t){var r=a(e,t);return localStorage.setItem(n,JSON.stringify(r)),r}}return[function(e){var a=e.children,n=r.a.useReducer(i,t),s=Object(l.a)(n,2),u=s[0],m=s[1];return r.a.createElement(o.Provider,{value:m},r.a.createElement(c.Provider,{value:u},a))},function(){return r.a.useContext(c)},function(){return r.a.useContext(o)}]}({initialState:s.UNKNOW,guivenReducer:function(e,t){switch(t.type){case u:case f:return Object(i.a)({},t.value);case m:return s.UNLOGGED;default:throw new Error("unKnown action\xa1",t)}},key:"userStore"}),h=Object(l.a)(d,3),p=h[0],g=h[1],E=h[2],v=a(2);a(22);function b(){var e=g(),t=E();return e?r.a.createElement("div",{className:"header__user"},r.a.createElement("img",{className:"header__user__img",src:"".concat("/KonectaBlog","/imgs/").concat(e.img?e.img:"boy.png"),alt:"user"}),r.a.createElement("section",{className:"floating_user"},r.a.createElement("div",{className:"row"},r.a.createElement("img",{className:"header__user__img",src:"".concat("/KonectaBlog","/imgs/").concat(e.img?e.img:"boy.png"),alt:"user"}),r.a.createElement("div",null,r.a.createElement("h6",null,r.a.createElement("strong",null,e.name)),r.a.createElement("p",null,e.email))),r.a.createElement("hr",null),r.a.createElement("h6",null,"Perfil de Conectir"),r.a.createElement("h6",null,"Ayuda"),r.a.createElement("h6",{onClick:function(e){return t({type:m})}},"Cerrar sesi\xf3n"))):r.a.createElement(v.a,{to:"/log"},r.a.createElement("button",{className:"user_loging blue"},"Loging"))}a(23);function w(){var e=Object(v.e)()[0],t=r.a.useState(!1),a=Object(l.a)(t,2),n=a[0],o=a[1],c=function(t){return e==="/".concat(t)?"selected":""};return r.a.useEffect((function(){o("/log"===e)}),[e]),n?null:r.a.createElement("header",null,r.a.createElement("p",{className:"logo"},"Konecta",r.a.createElement("br",null),"Blog"),r.a.createElement("nav",null,r.a.createElement(v.a,{href:"/",className:c("")},"Home"),r.a.createElement(v.a,{href:"/poster",className:c("poster")},"Crear Post")),r.a.createElement(b,null))}a(24);function O(e){return r.a.createElement("svg",Object.assign({className:"close",width:0,height:0,viewBox:"0 0 15 15",fill:"none"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 6.414L1.707 9.707.293 8.293 3.586 5 .293 1.707 1.707.293 5 3.586 8.293.293l1.414 1.414L6.414 5l3.293 3.293-1.414 1.414L5 6.414z"}))}function y(e){var t=e.show,a=e.onclose,n=e.children;return t?r.a.createElement("article",{className:"Modal"},r.a.createElement("section",null,a&&r.a.createElement(O,{onClick:a}),n)):null}function j(e){var t=e.show,a=e.onclose,n=e.children;return c.a.createPortal(r.a.createElement(y,{show:t,onclose:a},n),document.getElementById("root"))}function N(e){var t=e.name,a=e.initValue,o=e.placeholder,c=e.type,i=e.onValidate,s=e.onChange,u=Object(n.useState)(a||""),m=Object(l.a)(u,2),f=m[0],d=m[1],h=Object(n.useState)(o),p=Object(l.a)(h,2),g=p[0],E=p[1],v=Object(n.useState)(null),b=Object(l.a)(v,2),w=b[0],O=b[1],y=function(e){"email"===c&&function(e){if(e.includes(" "))throw new Error("Por favor no use espacios");if(!e.includes("@")||!e.includes("."))throw new Error("El formato es incorrecto")}(e),"password"===c&&function(e){if(e.includes(" "))throw new Error("Por favor no use espacios");if(e.length<8)throw new Error("Porfavor use m\xe1s de 8 caracteres")}(e),"tel"===c&&function(e){if(e.includes(" "))throw new Error("Por favor no use espacios");if(e.length<8)throw new Error("El n\xfamero est\xe1 incompleto");if(isNaN(e))throw new Error("No es un n\xfamero, no use signos")}(e),i&&i(e)};return Object(n.useEffect)((function(){"password"===c&&E("La contrase\xf1a debe tener un m\xednimo de 8 caracteres y debe contener n\xfameros y letras"),"tel"===c&&E("El n\xfameo de telefono movil o celular no debe contener signos o espacios")}),[]),r.a.createElement("div",{className:"inputConter"},r.a.createElement("input",{required:!0,value:f,className:w?"error":"",pattern:".*\\S.*",onChange:function(e){var t=e.target.value;try{if(d(t),""===t)throw new Error("El campo est\xe1 vac\xedo");y(t),O(null),s(t)}catch(w){O(w.message)}},type:c&&"email"!==c?c:"text"}),r.a.createElement("span",null,t),w?r.a.createElement("small",null,r.a.createElement("em",null,w)):g?r.a.createElement("p",null,r.a.createElement("em",null,g)):null)}var C=a(12),k=a.n(C),P=a(16);function S(e){var t=e.children,a=e.classname,o=e.onClick,c=e.onValidate,i=Object(n.useState)(null),s=Object(l.a)(i,2),u=s[0],m=s[1],f=Object(n.useState)(!1),d=Object(l.a)(f,2),h=d[0],p=d[1],g=function(){var e=Object(P.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,c;case 4:if(e.t0=e.sent,!e.t0){e.next=7;break}c();case 7:return e.next=9,o();case 9:(t=e.sent)&&t.catch((function(e){return m(e.message)})),m(null),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(1),m(e.t1.message);case 17:p(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"buttonConter ".concat(a||"")},r.a.createElement("button",{disabled:h,className:u?"error":"",onClick:g},t),u&&r.a.createElement("small",null,r.a.createElement("em",null,u)))}function _(e){switch(e.code){case"auth/invalid-email":e.message="Correo electr\xf3nico no valido";break;case"auth/user-not-found":e.message="No se encontr\xf3 cuenta del usuario con el correo especificado";break;case"auth/email-already-in-use":e.message="Este correo ya est\xe1 siendo usado por otro usuario";break;case"auth/user-disabled":e.message="Este usuario ha sido deshabilitado";break;case"auth/operation-not-allowed":e.message="Operaci\xf3n no permitida";break;case"auth/wrong-password":e.message="Contrase\xf1a incorrecta";break;case"auth/network-error":e.message="Promblema al intentar conectar al servidor";break;case"auth/weak-password":e.message="Contrase\xf1a muy debil o no v\xe1lida";break;case"auth/missing-email":e.message="Hace falta registrar un correo electr\xf3nico";break;case"auth/internal-error":e.message="Error interno";break;case"auth/invalid-custom-token":e.message="Token personalizado invalido";break;case"auth/too-many-requests":e.message="Ya se han enviado muchas solicitudes al servidor"}return e}var I=a(8),x=a.n(I);a(26),a(28);function B(e){return!x.a.apps.length&&x.a.initializeApp({apiKey:"AIzaSyBsNTlAqwfICa65oMUVnA6KdF5q4iG8xj8",authDomain:"konecta-blog.firebaseapp.com",databaseURL:"https://konecta-blog.firebaseio.com",projectId:"konecta-blog",storageBucket:"konecta-blog.appspot.com",messagingSenderId:"1038372790627",appId:"1:1038372790627:web:74f02a3a4c13c88cf63356"}),x.a[e]}var A=B("firestore")(),L=function(e){return A.collection(e).doc().id},M=function(e){return A.collection("users").doc(e.uid).set(e).catch((function(e){throw e}))},V=function(e){var t=L("posts");return A.collection("posts").doc(t).set(Object(i.a)({},e,{id:t,slug:e.title.trim(),creationDate:Date.now()})).catch((function(e){throw e}))},G=function(){return A.collection("posts").get().then((function(e){var t=[];return!e.empty&&e.docs.forEach((function(e){return t.push(e.data())})),t}))},D=B("auth"),z=D();z.useDeviceLanguage();var K=function(e){return M(e).catch((function(e){throw e}))},R={Login:function(e,t){var a=t?"createUserWithEmailAndPassword":"signInWithEmailAndPassword",n=e.name,r=e.email,o=e.password,c=e.cel;return z[a](r,o).then((function(e){return t&&(K({uid:e.user.uid,name:n,email:r,cel:c,password:o}),e.user.updateProfile({displayName:n}).catch((function(e){return _(e)}))),e})).catch((function(e){throw _(e)}))},loggout:function(){z.signOut().catch((function(e){throw e}))},authStateChanged:function(e){return z.onAuthStateChanged((function(t){if(t){var a=t.uid,n=t.displayName,r=t.email,o=t.photoURL;e({uid:a,name:n,email:r,photo:o})}else e(null)}))},logingWithGoogle:function(){var e=new D.GoogleAuthProvider;z.signInWithRedirect(e).then((function(e){var t=e.credential.accessToken,a=e.user;console.log(a,t)})).catch((function(e){throw _(e)}))},logingWithFacebook:function(){var e=new D.FacebookAuthProvider;z.signInWithRedirect(e).then((function(e){var t=e.credential.accessToken,a=e.user;console.log(a,t)})).catch((function(e){throw _(e)}))}};function U(e){return n.createElement("svg",Object.assign({width:"0",height:"0",viewBox:"0 0 15 26",fill:"none"},e),n.createElement("path",{d:"M10.364 4.333h3.272a.544.544 0 00.546-.541V.542c0-.3-.244-.542-.546-.542h-3.272c-3.313.004-5.997 2.67-6 5.958V9.75H.545a.544.544 0 00-.545.542v3.25c0 .299.244.541.545.541h3.819v11.375c0 .3.244.542.545.542h3.273a.544.544 0 00.545-.542V14.083h3.819c.234 0 .443-.15.517-.37l1.09-3.25a.54.54 0 00-.517-.713H8.727V5.958a1.63 1.63 0 011.637-1.625z"}))}function W(e){return n.createElement("svg",Object.assign({width:16.8,height:16.8,viewBox:"0 0 26 26",fill:"none"},e),n.createElement("g",{clipPath:"url(#prefix__clip0)"},n.createElement("path",{d:"M5.319 14.504l-.835 3.118-3.054.065A11.946 11.946 0 010 12c0-1.99.484-3.866 1.342-5.519l2.719.499 1.19 2.702A7.133 7.133 0 004.868 12c0 .88.16 1.725.452 2.504z",fill:"#FBBB00"}),n.createElement("path",{d:"M23.79 9.758a12.021 12.021 0 01-.053 4.747 11.997 11.997 0 01-4.224 6.853l-3.425-.175-.484-3.025a7.152 7.152 0 003.077-3.652h-6.417V9.758H23.791z",fill:"#518EF8"}),n.createElement("path",{d:"M19.512 21.357v.001A11.95 11.95 0 0112 24c-4.57 0-8.543-2.554-10.57-6.313l3.889-3.184a7.135 7.135 0 0010.284 3.655l3.909 3.2z",fill:"#28B446"}),n.createElement("path",{d:"M19.66 2.763l-3.888 3.182a7.137 7.137 0 00-10.52 3.736l-3.91-3.2A11.998 11.998 0 0112 0a11.95 11.95 0 017.66 2.763z",fill:"#F14336"})),n.createElement("defs",null,n.createElement("clipPath",{id:"prefix__clip0"},n.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"}))))}a(32);function F(e){var t=e.isreg,a=void 0!==t&&t,n=E(),o=r.a.useState(a),c=Object(l.a)(o,2),s=c[0],m=c[1],f=r.a.useState({}),d=Object(l.a)(f,2),h=d[0],p=d[1],g=s?"\xdanete a los millones de personas que apoyan ":"Bienvenido, y gracias por apoyar ";return r.a.createElement("article",{className:"loging"},r.a.createElement("h5",null,g," el turismo colombiano"),r.a.createElement("p",null,"Inicia sesi\xf3n con tus redes sociales"),r.a.createElement("div",{className:"socialMediaBtns"},r.a.createElement(S,{onClick:R.logingWithGoogle,classname:"google"},r.a.createElement(W,null),"GOOGLE"),r.a.createElement(S,{onClick:R.logingWithFacebook,classname:"facebook"},r.a.createElement(U,{width:"10.9",height:"20",fill:"#fff"}),"FACEBOOK")),r.a.createElement("p",null,"\xf3"),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},s&&r.a.createElement(N,{name:"Nombre Completo",onChange:function(e){return p(Object(i.a)({},h,{name:e}))}}),r.a.createElement(N,{name:"Correo",type:"email",onChange:function(e){return p(Object(i.a)({},h,{email:e}))}}),r.a.createElement(N,{name:"Contrase\xf1a",type:"password",onChange:function(e){return p(Object(i.a)({},h,{password:e}))}}),s&&r.a.createElement(N,{name:"N\xfamero movil",type:"text",onChange:function(e){return p(Object(i.a)({},h,{cel:e}))}}),r.a.createElement(S,{onClick:function(){R.Login(h,s).then((function(e){console.log(e);var t=e.user,a=t.uid,r=t.displayName,o=t.phoneNumber,c=t.email;n({type:u,value:{uid:a,name:r,email:c,cel:o||null}})}))},onValidate:function(){if(s&&(!h.hasOwnProperty("name")||!h.hasOwnProperty("cel")))throw new Error("Porfavor llene todos los campos");if(!h.hasOwnProperty("email")||!h.hasOwnProperty("password"))throw new Error("Porfavor llene todos los campos")}},s?"SING UP":"LOG IN")),r.a.createElement("small",{className:"changer",onClick:function(){return m(!s)}},s?"Ya tengo cuenta":"Necesito registrarme"))}var H=a(6),T=[["day",86400],["hour",3600],["minute",60],["second",1]],q=function(e){var t,a=(e-Date.now())/1e3,n=Object(H.a)(T);try{for(n.s();!(t=n.n()).done;){var r=Object(l.a)(t.value,2),o=r[0],c=r[1];if(Math.abs(a)>c||"second"===o)return{value:Math.round(a/c),unit:o}}}catch(i){n.e(i)}finally{n.f()}};a(33);function J(e){var t=e.post,a=t.title,o=(t.category,t.description),c=t.img,i=t.slug,s=function(e){var t=Object(n.useState)((function(){return q(e)})),a=Object(l.a)(t,2),r=a[0],o=a[1];Object(n.useEffect)((function(){var t=setInterval((function(){var t=q(e);o(t)}),5e3);return function(){return clearInterval(t)}}),[e]);var c=new Intl.RelativeTimeFormat("es",{style:"short"}),i=r.value,s=r.unit;return c.format(i,s)}(t.creationDate);return r.a.createElement("section",{className:"small"},r.a.createElement("img",{src:c,alt:a}),r.a.createElement("h5",null,a),r.a.createElement("div",null,r.a.createElement("span",null,"Viajes"),r.a.createElement("small",null,s)),r.a.createElement("p",null,o),r.a.createElement(v.a,{to:"/post/"+i},r.a.createElement("button",null,"Ver")))}a(34);function Y(){var e=g(),t=r.a.useState([]),a=Object(l.a)(t,2),n=a[0],o=a[1];return r.a.useEffect((function(e){G().then((function(e){return o(e)}))}),[]),r.a.createElement("section",{className:"Home"},r.a.createElement("h3",null,"\xdaltimos art\xedculos"),r.a.createElement("div",{className:"posts"},n&&n.map((function(e){return r.a.createElement(J,{post:e,key:e.id})}))),r.a.createElement(j,{show:!e},r.a.createElement(F,null)))}a(35);function Q(){return r.a.createElement("section",{className:"Log"},r.a.createElement("aside",null,r.a.createElement("img",{src:"https://www.travelconsultores.com/Carrusel/16_October_2015_12_41_50_pm.jpg",alt:"blog"})),r.a.createElement(F,null))}a(36);function X(){var e=Object(v.e)(),t=Object(l.a)(e,2)[1],a=r.a.useState({}),n=Object(l.a)(a,2),o=n[0],c=n[1];return r.a.createElement("article",{className:"PostCreator"},r.a.createElement("h5",null,"A\xf1ade tu propio post"),r.a.createElement("section",null,r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement(N,{name:"Titulo",onChange:function(e){return c(Object(i.a)({},o,{title:e}))}}),r.a.createElement("div",{className:"inputConter"},r.a.createElement("select",{name:"Categor\xeda",onChange:function(e){return c(Object(i.a)({},o,{category:e.target.value}))}},r.a.createElement("option",{hidden:!0},"Selecciona una categoria"),r.a.createElement("option",{value:"0"},"Viaje")),r.a.createElement("span",null,"Categor\xeda")),r.a.createElement(N,{name:"Descripci\xf3n",onChange:function(e){return c(Object(i.a)({},o,{description:e}))}}),r.a.createElement(N,{name:"Cuerpo del art\xedculo",onChange:function(e){return c(Object(i.a)({},o,{body:e}))}}),r.a.createElement(N,{name:"Url de imagen",onChange:function(e){return c(Object(i.a)({},o,{img:e}))}}),r.a.createElement(S,{onClick:function(){V(o).then((function(e){return t("/")}))},onValidate:function(){if(!o.hasOwnProperty("title")||!o.hasOwnProperty("category")||!o.hasOwnProperty("description")||!o.hasOwnProperty("body")||!o.hasOwnProperty("img"))throw new Error("Porfavor llene todos los campos")}},"Crear Post")),r.a.createElement("img",{src:"https://www.mimundotravel.com/blog/wp-content/uploads/2019/02/IMG-1172.jpg",alt:"img"})))}function Z(){return r.a.createElement(v.c,{base:"/KonectaBlog"},r.a.createElement("div",{className:"App"},r.a.createElement(p,null,r.a.createElement(w,null),r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/",component:Y}),r.a.createElement(v.b,{path:"/log",component:Q}),r.a.createElement(v.b,{path:"/poster",component:X})))))}a(37);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.7902b93b.chunk.js.map