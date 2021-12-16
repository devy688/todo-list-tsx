(this["webpackJsonptodo-list-tsx"]=this["webpackJsonptodo-list-tsx"]||[]).push([[0],{36:function(e,n,t){},38:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var c,i,r,o=t(0),a=t.n(o),l=t(15),s=t.n(l),d=(t(36),t(8)),u=(t(38),t(5)),j=t(7),b=t(3),p=t(10),f=t(21),x=t(9),O=t(27),h=Object(O.recoilPersist)().persistAtom,g=Object(d.atom)({key:"categories",default:["TO_DO","DOING","DONE"],effects_UNSTABLE:[h]}),v=Object(d.selector)({key:"categorySelector",get:function(e){return(0,e.get)(g)},set:function(e,n){(0,e.set)(g,n)}}),m=Object(d.atom)({key:"category",default:"TO_DO"}),y=Object(d.atom)({key:"toDo",default:[],effects_UNSTABLE:[h]}),w=Object(d.selector)({key:"toDoSelector",get:function(e){var n=e.get,t=n(y),c=n(m);return t.filter((function(e){return e.category===c}))}}),S=t(28),k=t(2),T=x.c.form(c||(c=Object(p.a)(["\n  padding: 0;\n"]))),D=x.c.input(i||(i=Object(p.a)(["\n  width: 195px;\n  border: none;\n  padding: 3px 0;\n"]))),R=x.c.button(r||(r=Object(p.a)(["\n  border: none;\n  padding: 3px 10px;\n"])));var z,A=function(){var e=Object(d.useSetRecoilState)(y),n=Object(d.useRecoilValue)(m),t=Object(S.a)(),c=t.register,i=t.handleSubmit,r=t.setValue;return Object(k.jsxs)(T,{onSubmit:i((function(t){var c=t.toDo;e((function(e){return 15===e.length?(alert("\uc774\ubbf8\uc9c0\ud06c\uae30 \uc870\uc808\uc744 \uc704\ud574 \uc544\uc9c1 \uad6c\ud604\uc911\uc785\ub2c8\ub2e4."),e):[{text:c,id:Date.now(),category:n}].concat(Object(j.a)(e))})),r("toDo","")})),children:[Object(k.jsx)(D,Object(u.a)(Object(u.a)({},c("toDo",{required:"Please write a To do"})),{},{placeholder:"Write a To do"})),Object(k.jsx)(R,{children:"Add"})]})},C=x.c.li(z||(z=Object(p.a)(["\n  height: 31px;\n  display: flex;\n  align-items: center;\n  padding: 0;\n\n  span {\n    font-size: 16px;\n    width: 195px;\n  }\n\n  button {\n    color: red;\n    border: none;\n    cursor: pointer;\n    margin-left: 5px;\n  }\n"])));var E,L,N,P,B,K=function(e){var n=e.text,t=e.category,c=e.id,i=Object(d.useSetRecoilState)(y),r=Object(d.useRecoilValue)(v);return Object(k.jsxs)(C,{children:[Object(k.jsx)("span",{children:n}),Object(k.jsxs)("div",{children:[Object(k.jsx)("select",{onChange:function(e){var t=e.target.value;i((function(e){var i=e.findIndex((function(e){return e.id===c})),r={text:n,id:c,category:t},o=Object(j.a)(e);return o.splice(i,1,r),o}))},children:r.map((function(e){return t===e?Object(k.jsx)("option",{selected:!0,children:t}):Object(k.jsx)("option",{children:e})}))}),Object(k.jsx)("button",{onClick:function(){i((function(e){return Object(j.a)(e).filter((function(e){return e.id!==c}))}))},children:"Delete"})]})]})},V=x.c.div(E||(E=Object(p.a)(['\n  width: 450px;\n  min-width: 450px;\n  height: 685px;\n  background: url("./images/yellow.png") center/cover no-repeat;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n']))),_=x.c.h1(L||(L=Object(p.a)(['\n  background-color: #273c75;\n  color: white;\n  font-size: 1.2em;\n  font-family: "Yanone Kaffeesatz", sans-serif;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5em;\n']))),I=x.c.div(N||(N=Object(p.a)(['\n  width: 90px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  font-family: "Yanone Kaffeesatz", sans-serif;\n  padding: 0;\n  padding-top: 63px;\n  text-align: center;\n\n  ul {\n    font-size: 1em;\n    padding: 0 !important;\n\n    li {\n      cursor: pointer;\n      padding: 7.6px 0;\n      &:hover {\n        background-color: #ffc0cb45;\n      }\n      &.selected {\n        background-color: #ffc0cb45;\n      }\n    }\n  }\n\n  div {\n    width: 100%;\n    margin-top: 35px;\n    input {\n      text-align: center;\n      border: none;\n      width: 80px;\n      padding: 5px 0;\n    }\n    button {\n      border: none;\n      width: 85px;\n      margin-top: 6px;\n      padding: 5px;\n    }\n  }\n']))),Y=x.c.div(P||(P=Object(p.a)(["\n  display: flex;\n  width: 100%;\n  font-size: 16px;\n"]))),J=x.c.div(B||(B=Object(p.a)(['\n  width: 75%;\n  padding: 8px 16px;\n\n  span {\n    font-family: "Source Sans Pro", sans-serif;\n    font-size: 20px;\n  }\n  form {\n    padding-top: 9px;\n  }\n\n  ul {\n    padding-top: 5px;\n  }\n'])));var U,q=function(){var e=Object(d.useRecoilValue)(w),n=Object(d.useSetRecoilState)(m),t=Object(d.useRecoilState)(v),c=Object(b.a)(t,2),i=c[0],r=c[1],a=Object(o.useRef)([]),l=Object(o.useRef)(null),s=function(e){a&&a.current.map((function(n){return(null===n||void 0===n?void 0:n.id)===e.currentTarget.id?e.currentTarget.classList.add("selected"):null===n||void 0===n||n.setAttribute("class",""),null})),n(e.currentTarget.id)},p=function(e){var n=[].concat(Object(j.a)(i),[e]);r(n)};return Object(k.jsxs)(V,{children:[Object(k.jsx)(f.b,{children:Object(k.jsxs)(f.a,{children:[Object(k.jsx)("title",{children:"Todo List"}),Object(k.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Source+Sans+Pro:wght@300;400&family=Yanone+Kaffeesatz&display=swap",rel:"stylesheet"})]})}),Object(k.jsx)(_,{children:"Todo list with TypeScript"}),Object(k.jsxs)(Y,{children:[Object(k.jsxs)(I,{children:[Object(k.jsx)("ul",{children:i.map((function(e,n){return Object(k.jsx)("li",{ref:function(e){return a.current[n]=e},onClick:s,id:e,children:e},e+n)}))}),Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{ref:l,placeholder:"Category",onKeyPress:function(e){if(13!==i.length){var n=e.currentTarget.value;"Enter"===e.key&&p(n)}else alert("\uc774\ubbf8\uc9c0\ud06c\uae30 \uc870\uc808\uc744 \uc704\ud574 \uc544\uc9c1 \uad6c\ud604\uc911\uc785\ub2c8\ub2e4.")}}),Object(k.jsx)("button",{onClick:function(e){var n;e.preventDefault(),13!==i.length?p(null===l||void 0===l||null===(n=l.current)||void 0===n?void 0:n.value):alert("\uc774\ubbf8\uc9c0\ud06c\uae30 \uc870\uc808\uc744 \uc704\ud574 \uc544\uc9c1 \uad6c\ud604\uc911\uc785\ub2c8\ub2e4.")},children:"Add"})]})]}),Object(k.jsxs)(J,{children:[Object(k.jsx)("span",{children:"List"}),Object(k.jsx)(A,{}),Object(k.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(e){return Object(k.jsx)(K,Object(u.a)({},e),e.id)}))})]})]})]})},F=t(31),G=Object(x.a)(U||(U=Object(p.a)(["\n    ","\n"])),F.a);var M=function(){return Object(k.jsxs)("div",{className:"app",children:[Object(k.jsx)(G,{}),Object(k.jsx)(q,{})]})};s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(d.RecoilRoot,{children:Object(k.jsx)(M,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.8ad2c8e2.chunk.js.map