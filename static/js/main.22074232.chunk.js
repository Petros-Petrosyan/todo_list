(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{120:function(e,t,n){e.exports=n(133)},132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=n(27),s=n(42),l=n(56),u=function(e){var t=localStorage.getItem(e);return JSON.parse(t)},_=function(e,t){localStorage.setItem(e,JSON.stringify(t))},d={todoLists:u("lists")||[]},f=function(e,t){var n=t.data;return Object(l.a)(e,(function(e){e.todoLists.push(n)}))},m=function(e,t){var n=t.index;return Object(l.a)(e,(function(e){e.todoLists.splice(n,1)}))},p={notifications:u("notifications")||[]},b=function(e,t){var n=t.data;return Object(l.a)(e,(function(e){e.notifications.push(n)}))},E=function(e){return Object(l.a)(e,(function(e){e.notifications=[]}))},O=n(109),C=n(21),v=n.n(C),g=n(18),h=n(25),T=function(e){return{type:"ADD_TODO",payload:{data:e}}},I=function(e){return{type:"DELETE_TODO_INIT",payload:{index:e}}},N=function(e){return{type:"DELETE_TODO",payload:{index:e}}},j=v.a.mark(x),D=v.a.mark(L),y=v.a.mark(w);function x(e){var t,n,a;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload.data,r.next=4,Object(g.b)(T(t));case 4:return r.next=6,Object(g.c)();case 6:n=r.sent,a=n.todoReducer.todoLists,_("lists",a),h.a.success("ToDo successfully added",{position:"bottom-right"}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),h.a.error(r.t0.message,{position:"bottom-right"});case 15:case"end":return r.stop()}}),j,null,[[0,12]])}function L(e){var t,n,a;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload.index,r.next=4,Object(g.b)(N(t));case 4:return r.next=6,Object(g.c)();case 6:n=r.sent,a=n.todoReducer.todoLists,_("lists",a),h.a.success("ToDo successfully deleted",{position:"bottom-right"}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),h.a.error(r.t0.message,{position:"bottom-right"});case 15:case"end":return r.stop()}}),D,null,[[0,12]])}function w(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([Object(g.d)("ADD_TODO_INIT",x),Object(g.d)("DELETE_TODO_INIT",L)]);case 2:case"end":return e.stop()}}),y)}var k=n(108),S=function(e,t){var n=e.getDate(),a=e.getMonth(),r=e.getFullYear(),o=t.getHours(),i=t.getMinutes(),c=t.getSeconds();return new Date(r,a,n,o,i,c)},A=function(e){return new Date(e)<=new Date},F=v.a.mark(M),P=v.a.mark(q),R=v.a.mark(B);function M(){var e,t,n,a,r,o;return v.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(g.c)();case 3:e=i.sent,t=e.todoReducer.todoLists,n=e.notificationReducer.notifications,a=0;case 6:if(!(a<t.length)){i.next=20;break}if(r=t[a].date,!A(r)){i.next=17;break}return i.next=11,Object(g.b)(I(a));case 11:return i.next=13,Object(g.b)({type:"ADD_NOTIFICATION",payload:{data:t[a]}});case 13:(o=Object(k.a)(n)).push(t[a]),_("notifications",o),h.a.success("Notification added",{position:"bottom-right"});case 17:++a,i.next=6;break;case 20:i.next=25;break;case 22:i.prev=22,i.t0=i.catch(0),h.a.error(i.t0.message,{position:"bottom-right"});case 25:case"end":return i.stop()}}),F,null,[[0,22]])}function q(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g.b)({type:"DELETE_NOTIFICATIONS"});case 3:_("notifications",[]),h.a.success("Notifications deleted",{position:"bottom-right"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h.a.error(e.t0.message,{position:"bottom-right"});case 10:case"end":return e.stop()}}),P,null,[[0,7]])}function B(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([Object(g.d)("ADD_NOTIFICATION_INIT",M),Object(g.d)("DELETE_NOTIFICATIONS_INIT",q)]);case 2:case"end":return e.stop()}}),R)}var J=v.a.mark(z);function z(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([w(),B()]);case 2:case"end":return e.stop()}}),J)}var H=Object(O.a)(),Y=Object(s.c)({todoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADD_TODO":return f(e,a);case"DELETE_TODO":return m(e,a);default:return e}},notificationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADD_NOTIFICATION":return b(e,a);case"DELETE_NOTIFICATIONS":return E(e);default:return e}}}),W=Object(s.e)(Y,Object(s.a)(H));H.run(z);var K=n(48),Q=n(180),X=n(171),Z=n(81),G=n(107),U=n(17),V=n(175),$=n(183),ee=n(49),te=n.n(ee),ne=function(){var e=Object(c.b)(),t=Object(a.useState)(""),n=Object(K.a)(t,2),o=n[0],i=n[1],s=Object(a.useState)(""),l=Object(K.a)(s,2),u=l[0],_=l[1],d=Object(a.useState)(new Date),f=Object(K.a)(d,2),m=f[0],p=f[1],b=Object(a.useState)(new Date),E=Object(K.a)(b,2),O=E[0],C=E[1],v=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"title":return i(a);case"info":return _(a);default:return null}};return r.a.createElement("section",{className:te.a.formContainer},r.a.createElement(X.a,null,r.a.createElement("div",{className:te.a.formContainer__fieldsContainer},r.a.createElement("div",{className:te.a.formContainer__fieldsContainer__field},r.a.createElement(Q.a,{name:"title",label:"Title *",value:o,onChange:v})),r.a.createElement("div",{className:te.a.formContainer__fieldsContainer__field},r.a.createElement(Q.a,{name:"info",label:"Info *",value:u,onChange:v})),r.a.createElement(U.a,{utils:G.a},r.a.createElement("div",{className:te.a.formContainer__fieldsContainer__field},r.a.createElement(V.a,{label:"Date",format:"MM/dd/yyyy",value:m,onChange:p,animateYearScrolling:!0})),r.a.createElement("div",{className:te.a.formContainer__fieldsContainer__field},r.a.createElement($.a,{autoOk:!0,label:"Hours",value:O,onChange:C}))),r.a.createElement(Z.a,{variant:"contained",color:"primary",onClick:function(){if(o.trim().length&&u.trim().length){var t={date:S(m,O),title:o,info:u};e(function(e){return{type:"ADD_TODO_INIT",payload:{data:e}}}(t)),i(""),_("")}else h.a.error("Title and Info is required",{position:"bottom-right"})}},"Primary"))))},ae=n(104),re=n.n(ae),oe=n(178),ie=n(176),ce=n(103),se=n.n(ce),le=n(66),ue=n(177),_e=n(182),de=n(89),fe=n.n(de),me=function(e){var t=e.title,n=e.info,a=e.date,o=function(e){var t=new Date(e),n=t.getDate();n<10&&(n="0".concat(n));var a=t.getMonth()+1;a<10&&(a="0".concat(a));var r=t.getFullYear();return r<10&&(r="0".concat(r)),"".concat(n,"/").concat(a,"/").concat(r)}(a),i=function(e){var t=new Date(e),n=t.getHours(),a=t.getMinutes();return a<10&&(a="0".concat(a)),"".concat(n,":").concat(a)}(a);return r.a.createElement("div",{className:fe.a.list},r.a.createElement(_e.a,null,r.a.createElement(ie.a,{expandIcon:r.a.createElement(se.a,null)},r.a.createElement(le.a,null,r.a.createElement("span",null,t),r.a.createElement("span",{className:fe.a.right},o," ",i))),r.a.createElement(ue.a,null,r.a.createElement(le.a,null,n))))},pe=n(90),be=n.n(pe),Ee=function(e){var t=e.notifications,n=Object(c.b)(),o=function e(){var t;n({type:"ADD_NOTIFICATION_INIT",payload:{data:t}}),setTimeout(e,1e4)};Object(a.useEffect)((function(){setTimeout(o,1e4)}),[]);var i=t.map((function(e,t){return r.a.createElement(me,{key:"".concat(e.date).concat(t),title:e.title,info:e.info,date:e.date})}));return r.a.createElement("section",{className:be.a.notContainer},r.a.createElement("div",{className:be.a.notContainer__icon},r.a.createElement(Fe,{title:"Notifications",content:i,event:function(){n({type:"DELETE_NOTIFICATIONS_INIT"})}},r.a.createElement(oe.a,{badgeContent:t.length,color:"primary"},r.a.createElement(re.a,{fontSize:"large"})))))},Oe=n(105),Ce=n.n(Oe),ve=n(65),ge=n.n(ve),he=function(e){var t=Object(c.b)(),n=e.todoLists,a=n.map((function(e,n){var a=e.title,o=e.info,i=e.date;return r.a.createElement("div",{className:ge.a.listContainer__listPanl,key:"".concat(a).concat(n)},r.a.createElement(me,{title:a,info:o,date:i}),r.a.createElement("div",{className:ge.a.listContainer__listPanl__buttons},r.a.createElement("div",{onClick:function(){t(I(n))},className:ge.a.listContainer__listPanl__buttons__delete},r.a.createElement(Ce.a,null))))}));return r.a.createElement("section",{className:ge.a.listContainer},a)},Te=n(110),Ie=n(6),Ne=n(138),je=n(179),De=n(135),ye=n(136),xe=n(113),Le=n(106),we=n.n(Le),ke=Object(Ie.a)((function(e){return{root:{margin:0,minWidth:"300px",padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,n=e.classes,a=e.onClose,o=Object(Te.a)(e,["children","classes","onClose"]);return r.a.createElement(je.a,Object.assign({disableTypography:!0,className:n.root},o),r.a.createElement(le.a,{variant:"h6"},t),a?r.a.createElement(xe.a,{"aria-label":"close",className:n.closeButton,onClick:a},r.a.createElement(we.a,null)):null)})),Se=Object(Ie.a)((function(e){return{root:{padding:e.spacing(2)}}}))(De.a),Ae=Object(Ie.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(ye.a),Fe=function(e){var t=e.children,n=e.title,o=e.content,i=e.event,c=Object(a.useState)(!1),s=Object(K.a)(c,2),l=s[0],u=s[1],_=function(){return u(!1)};return r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){return u(!0)}},t),r.a.createElement(Ne.a,{onClose:_,"aria-labelledby":"customized-dialog-title",open:l},r.a.createElement(ke,{id:"customized-dialog-title",onClose:_},n),r.a.createElement(Se,{dividers:!0},r.a.createElement(le.a,{gutterBottom:!0,component:"span"}," ",o," ")),r.a.createElement(Ae,null,r.a.createElement(Z.a,{autoFocus:!0,onClick:function(){u(!1),i()},color:"secondary"},"Delete notifications"))))},Pe=n(91),Re=n.n(Pe),Me=function(){var e=Object(c.c)((function(e){return e.todoReducer})).todoLists,t=Object(c.c)((function(e){return e.notificationReducer})).notifications;return r.a.createElement("main",{className:Re.a.mainContainer},r.a.createElement("h2",{className:Re.a.mainContainer__title},"To Do List"),r.a.createElement(ne,null),r.a.createElement(he,{todoLists:e}),r.a.createElement(Ee,{notifications:t}))};n(132);i.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{store:W},r.a.createElement(Me,null))),document.getElementById("root"))},49:function(e,t,n){e.exports={formContainer:"CreateList_formContainer__1hqdS",formContainer__fieldsContainer:"CreateList_formContainer__fieldsContainer__3IL-I",formContainer__fieldsContainer__field:"CreateList_formContainer__fieldsContainer__field__qx7gK"}},65:function(e,t,n){e.exports={listContainer:"ListsControle_listContainer__2l_Jv",listContainer__listPanl:"ListsControle_listContainer__listPanl__3h8MZ",listContainer__listPanl__buttons:"ListsControle_listContainer__listPanl__buttons__2q1to",listContainer__listPanl__buttons__edit:"ListsControle_listContainer__listPanl__buttons__edit__1p7yl",listContainer__listPanl__buttons__delete:"ListsControle_listContainer__listPanl__buttons__delete__2OESj"}},89:function(e,t,n){e.exports={list:"List_list__2q5nl",right:"List_right__3qgvX"}},90:function(e,t,n){e.exports={notContainer__icon:"Notifications_notContainer__icon__skhLL"}},91:function(e,t,n){e.exports={mainContainer:"TodoList_mainContainer__2B3Ii",mainContainer__title:"TodoList_mainContainer__title__1WjLQ"}}},[[120,1,2]]]);
//# sourceMappingURL=main.22074232.chunk.js.map