(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(8),r=n.n(s),a=(n(14),n(9)),l=n(7),o=n(2),u=n(0),d=Object(c.createContext)(),j=function(){return Object(c.useContext)(d)},b=function(t){var e=t.children,n=Object(c.useState)(""),i=Object(o.a)(n,2),s=i[0],r=i[1],j=Object(c.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]),b=Object(o.a)(j,2),m=b[0],f=b[1],O=Object(c.useState)(!1),h=Object(o.a)(O,2),p=h[0],v=h[1],x=Object(c.useState)(null),g=Object(o.a)(x,2),N=g[0],_=g[1],S=Object(c.useState)({show:!1,msg:"",type:""}),y=Object(o.a)(S,2),I=y[0],w=y[1],C=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";w({show:t,type:e,msg:n})};return Object(c.useEffect)((function(){localStorage.setItem("list",JSON.stringify(m))}),[m]),Object(u.jsx)(d.Provider,{value:{handleSubmit:function(t){if(t.preventDefault(),s)if(s&&p)f(m.map((function(t){return t.id===N?Object(l.a)(Object(l.a)({},t),{},{title:s}):t}))),r(""),_(null),v(!1),C(!0,"success","value changed");else{C(!0,"success","item added to the list");var e={id:(new Date).getTime().toString(),title:s};f([].concat(Object(a.a)(m),[e])),r("")}else C(!0,"danger","please enter value")},todo:s,setTodo:r,isEditing:p,list:m,clearList:function(){C(!0,"danger","empty list"),f([])},removeItem:function(t){C(!0,"danger","item removed"),f(m.filter((function(e){return e.id!==t})))},editItem:function(t){var e=m.find((function(e){return e.id===t}));v(!0),_(t),r(e.title)},alert:I,showAlert:C},children:e})},m=(n(16),function(){var t=j(),e=t.alert,n=t.showAlert,i=t.list;return Object(c.useEffect)((function(){var t=setTimeout((function(){n()}),3e3);return function(){return clearTimeout(t)}}),[i,n]),Object(u.jsx)("p",{className:"alert alert-".concat(e.type),children:e.msg})}),f=(n(17),function(t){var e=t.children,n=j(),c=n.handleSubmit,i=n.todo,s=n.setTodo,r=n.isEditing,a=n.list,l=n.clearList,o=n.alert;return Object(u.jsxs)("form",{className:"form",onSubmit:c,children:[Object(u.jsx)("div",{className:"form__alert",children:o.show&&Object(u.jsx)(m,{})}),Object(u.jsx)("h2",{className:"form__title",children:"Todo App"}),Object(u.jsxs)("div",{className:"form__control",children:[Object(u.jsx)("input",{type:"text",className:"form__input",placeholder:"...",value:i,onChange:function(t){return s(t.target.value)}}),Object(u.jsx)("button",{type:"submit",className:"form__btn",children:r?"Edit":"Add"})]}),e,a.length>1&&Object(u.jsx)("button",{className:"form__clear",onClick:l,children:"Clear Items"})]})}),O=i.a.memo(f),h=n(6),p=(n(18),function(){var t=j(),e=t.list,n=t.removeItem,c=t.editItem;return Object(u.jsx)("div",{className:"list",children:e.length>0&&e.map((function(t){var e=t.id,i=t.title;return Object(u.jsxs)("article",{className:"list__item",children:[Object(u.jsx)("p",{className:"list__tilte",children:i}),Object(u.jsxs)("div",{className:"list__btn-container",children:[Object(u.jsx)("button",{className:"btn-edit",type:"button",onClick:function(){return c(e)},children:Object(u.jsx)(h.a,{className:"icon edit"})}),Object(u.jsx)("button",{className:"btn-delete",type:"button",onClick:function(){return n(e)},children:Object(u.jsx)(h.b,{className:"icon delete"})})]})]},e)}))})}),v=function(){return Object(u.jsx)(O,{children:Object(u.jsx)(p,{})})};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{children:Object(u.jsx)(v,{})})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.fc4e1d9c.chunk.js.map