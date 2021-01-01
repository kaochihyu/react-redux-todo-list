(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(0),c=e(9),a=e.n(c),i=e(3),d=e(5),u=e(4),l=e(6),p=function(n){return n.todos.todos},s=function(n){return n.filters},b=Object(l.a)(p,(function(n){return n.filter((function(n){return n.completed})).length})),x=Object(l.a)(p,(function(n){return n.length})),f=Object(l.a)(b,x,(function(n,t){return Math.floor(Number(n)/Number(t)*100)})),j=Object(l.a)(p,(function(n){return n.filter((function(n){return n.completed}))})),O=Object(l.a)(p,(function(n){return n.filter((function(n){return!n.completed}))})),g=e(12),h="add_todo",v="delete_todo",m="toggle_todo",y="complete_all",k="clear_completed",w="editing_todo",_="change_todo",C="change_status";function E(n){return{type:h,payload:{name:n}}}function z(n){return{type:C,payload:{filterValue:n}}}function N(n){return{type:w,payload:{id:n}}}function S(){var n=Object(i.a)(["\n  box-sizing: border-box;\n  margin-left: 10px;\n  width: 30px;\n  height: 30px;\n  padding: 6px;\n  font-size: 18px;\n  color: #555;\n  text-align: center;\n  cursor: default;\n  display: inline-block;\n\n  &:hover {\n    background-color: #ddd;\n    border-radius: 50%;\n  }\n"]);return S=function(){return n},n}function D(){var n=Object(i.a)(["\n  border: solid 1px #cacece;\n  border-radius: 5px;\n  width: 70%;\n  height: 30px;\n  font-size: 16px;\n  padding: 10px;\n  display: inline-block;\n\n  &:focus {\n    outline: #aaa auto 1px;\n  }\n"]);return D=function(){return n},n}function T(){var n=Object(i.a)(["\n  margin: 16px 0;\n  vertical-align: sub;\n"]);return T=function(){return n},n}var A=u.a.div(T()),L=u.a.input(D()),V=u.a.div(S());function X(){var n=Object(d.b)(),t=Object(o.useState)(""),e=Object(g.a)(t,2),c=e[0],a=e[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(A,{children:[Object(r.jsx)(L,{value:c,onChange:function(n){return a(n.target.value)},onKeyPress:function(t){if("Enter"===t.key){if(!c)return;n(E(c)),a("")}}}),Object(r.jsx)(V,{onClick:function(){c&&(n(E(c)),a(""))},children:"+"})]})})}function I(){var n=Object(i.a)(["\n  width: 280px;\n  overflow-wrap: break-word;\n  & input {\n    border: solid 1px #cacece;\n    height: 20px;\n    color: #555;\n\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return I=function(){return n},n}function J(){var n=Object(i.a)(["\n  display: flex;\n"]);return J=function(){return n},n}function M(){var n=Object(i.a)(["\n  color: #888;\n  font-size: 14px;\n  cursor: default;\n  margin-left: 10px;\n  font-family: '\u5fae\u8edf\u6b63\u9ed1\u9ad4';\n\n  &:hover {\n    color: #333;\n  }\n"]);return M=function(){return n},n}function R(){var n=Object(i.a)(['\n  padding: 10px;\n  appearance: none;\n  background-color: #fff;\n  border: 1px solid #cacaca;\n  border-radius: 3px;\n  display: inline-block;\n  position: relative;\n  margin-right: 15px;\n  margin-bottom: -2px;\n  letter-spacing: 1.5px;\n\n  &:active {\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),\n      inset 0px 1px 3px rgba(0, 0, 0, 0.1);\n    border: solid 1px #cacaca;\n  }\n\n  &:checked {\n    background-color: #fefefe;\n    border: 1px solid #cacaca;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),\n      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),\n      inset 15px 10px -12px rgba(255, 255, 255, 0.1);\n    color: #555;\n\n    &:active {\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),\n        inset 0px 1px 3px rgba(0, 0, 0, 0.1);\n      border: solid 1px #cacaca;\n    }\n\n    &:after {\n      content: "\u2714";\n      font-size: 20px;\n      position: absolute;\n      top: -5px;\n      left: 3px;\n      color: #555;\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n'],['\n  padding: 10px;\n  appearance: none;\n  background-color: #fff;\n  border: 1px solid #cacaca;\n  border-radius: 3px;\n  display: inline-block;\n  position: relative;\n  margin-right: 15px;\n  margin-bottom: -2px;\n  letter-spacing: 1.5px;\n\n  &:active {\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),\n      inset 0px 1px 3px rgba(0, 0, 0, 0.1);\n    border: solid 1px #cacaca;\n  }\n\n  &:checked {\n    background-color: #fefefe;\n    border: 1px solid #cacaca;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),\n      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),\n      inset 15px 10px -12px rgba(255, 255, 255, 0.1);\n    color: #555;\n\n    &:active {\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),\n        inset 0px 1px 3px rgba(0, 0, 0, 0.1);\n      border: solid 1px #cacaca;\n    }\n\n    &:after {\n      content: "\\u2714";\n      font-size: 20px;\n      position: absolute;\n      top: -5px;\n      left: 3px;\n      color: #555;\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n']);return R=function(){return n},n}function U(){var n=Object(i.a)(["\n  margin-bottom: 20px;\n  color: #555;\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  align-item: center;\n"]);return U=function(){return n},n}var B=u.a.div(U()),F=u.a.input(R()),K=u.a.div(M()),P=u.a.div(J()),q=u.a.div(I());function G(n){var t=n.todo,e=Object(d.b)(),c=Object(o.useState)(""),a=Object(g.a)(c,2),i=a[0],u=a[1],l=Object(r.jsxs)(B,{children:[Object(r.jsxs)(q,{children:[Object(r.jsx)(F,{type:"checkbox",id:t.id,checked:t.completed,onChange:function(){return e((n=t.id,{type:m,payload:{id:n}}));var n}}),t.name]}),Object(r.jsxs)(P,{children:[Object(r.jsx)(K,{onClick:function(){return e(N(t.id))},children:"Edit"}),Object(r.jsx)(K,{onClick:function(){return e((n=t.id,{type:v,payload:{id:n}}));var n},children:"Delete"})]})]}),p=Object(r.jsxs)(B,{children:[Object(r.jsx)(q,{children:Object(r.jsx)("input",{id:t.id,onChange:function(n){return u(n.target.value)},placeholder:t.name})}),Object(r.jsxs)(P,{children:[Object(r.jsx)(K,{onClick:function(){var n;e(i?(n=t.id,{type:_,payload:{id:n,value:i}}):N(t.id))},children:"save"}),Object(r.jsx)(K,{onClick:function(){return e(N(t.id))},children:"cancel"})]})]});return t.editing?p:l}function H(){var n=Object(i.a)(["\n  padding: 5px;\n  color: #888;\n  cursor: default;\n  font-size: 14px;\n\n  &:hover {\n    color: #333;\n  }\n"]);return H=function(){return n},n}function Q(){var n=Object(i.a)(["\n  display: flex;\n"]);return Q=function(){return n},n}function W(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n"]);return W=function(){return n},n}function Y(){var n=Object(i.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: #ddd;\n  margin-bottom: 5px;\n"]);return Y=function(){return n},n}function Z(){var n=Object(i.a)(["\n  margin: 30px 0 10px 0;\n  color: #888;\n"]);return Z=function(){return n},n}function $(){var n=Object(i.a)(["\n  margin-top: 50px;\n  width: 100%;\n"]);return $=function(){return n},n}function nn(){var n=Object(i.a)(["\n  font-family: 'Mukta', sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  color: #333;\n  margin-bottom: 30px;\n  letter-spacing: 1.5px;\n  text-align: left;\n"]);return nn=function(){return n},n}function tn(){var n=Object(i.a)(["\n  width: 400px;\n  min-height: 120px;\n  background-color: #fff;\n  margin: 50px auto;\n  border-radius: 16px;\n  padding: 40px 40px 5px 40px;\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);\n"]);return tn=function(){return n},n}var en=u.a.div(tn()),rn=u.a.h4(nn()),on=u.a.div($()),cn=u.a.div(Z()),an=u.a.div(Y()),dn=u.a.div(W()),un=u.a.div(Q()),ln=u.a.div(H()),pn=function(){var n=Object(d.c)(f);return Object(r.jsx)("span",{children:n})};var sn=function(){var n=Object(d.c)(p),t=Object(d.c)(s),e=Object(d.b)(),o=function(){return Object(d.c)(O).map((function(n){return Object(r.jsx)(G,{todo:n})}))},c=function(){return Object(d.c)(j).map((function(n){return Object(r.jsx)(G,{todo:n})}))};return Object(r.jsxs)(en,{children:[Object(r.jsx)(rn,{children:"Todo List"}),Object(r.jsx)(X,{}),Object(r.jsxs)(on,{children:["all"===t.status&&n.map((function(n){return Object(r.jsx)(G,{todo:n})})),"completed"===t.status&&Object(r.jsx)(c,{}),"active"===t.status&&Object(r.jsx)(o,{})]}),n.length>0&&Object(r.jsxs)(cn,{children:["Achievement :",Object(r.jsx)(pn,{}),"%"]}),Object(r.jsx)(an,{}),Object(r.jsxs)(dn,{children:[Object(r.jsx)(ln,{onClick:function(){return e({type:y})},children:"Complete All"}),Object(r.jsx)(ln,{onClick:function(){return e({type:k})},children:"Clear Completed"}),Object(r.jsxs)(un,{children:[Object(r.jsx)(ln,{onClick:function(){return e(z("all"))},children:"All"}),Object(r.jsx)(ln,{onClick:function(){return e(z("active"))},children:"Active"}),Object(r.jsx)(ln,{onClick:function(){return e(z("completed"))},children:"Completed"})]})]})]})},bn=e(7),xn=e(23),fn=e(2),jn=0,On={todos:[]};Object(l.a)([function(n){return n.todos}],(function(n){return n.filter((function(n){return n.name.toLowerCase().includes("milk")}))}));var gn={status:"all"};var hn=Object(bn.b)({todos:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:On,t=arguments.length>1?arguments[1]:void 0;switch(console.log("received action",t),t.type){case h:return Object(fn.a)(Object(fn.a)({},n),{},{todos:[].concat(Object(xn.a)(n.todos),[{id:jn++,name:t.payload.name,completed:!1,editing:!1}])});case v:return Object(fn.a)(Object(fn.a)({},n),{},{todos:n.todos.filter((function(n){return n.id!==t.payload.id}))});case m:return Object(fn.a)(Object(fn.a)({},n),{},{todos:n.todos.map((function(n){return n.id!==t.payload.id?n:Object(fn.a)(Object(fn.a)({},n),{},{completed:!n.completed})}))});case y:return Object(fn.a)(Object(fn.a)({},n),{},{todos:n.todos.map((function(n){return Object(fn.a)(Object(fn.a)({},n),{},{completed:!0})}))});case k:return Object(fn.a)(Object(fn.a)({},n),{},{todos:n.todos.filter((function(n){return!0!==n.completed}))});case w:return Object(fn.a)(Object(fn.a)({},n),{},{todos:n.todos.map((function(n){return n.id!==t.payload.id?n:Object(fn.a)(Object(fn.a)({},n),{},{editing:!n.editing})}))});case _:return Object(fn.a)(Object(fn.a)({},n),{},{todos:n.todos.map((function(n){return n.id!==t.payload.id?n:Object(fn.a)(Object(fn.a)({},n),{},{name:t.payload.value,editing:!1})}))});default:return n}},filters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(fn.a)(Object(fn.a)({},n),{},{status:t.payload.filterValue});default:return n}}}),vn=Object(bn.c)(hn,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(r.jsx)(d.a,{store:vn,children:Object(r.jsx)(sn,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.d349def5.chunk.js.map