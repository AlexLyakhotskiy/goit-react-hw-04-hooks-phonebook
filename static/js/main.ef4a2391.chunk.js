(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={wrapper:"ContactForm_wrapper__2cErZ",form:"ContactForm_form__1hfer",label:"ContactForm_label__3LvU8",input:"ContactForm_input__ft7Zi",button:"ContactForm_button__wvsRM"}},,function(t,e,n){t.exports={item:"ContactList_item__q6_8A",text:"ContactList_text__1w9WH",button:"ContactList_button__fLaEy"}},,,,function(t,e,n){t.exports={label:"Filter_label__2_EiS",input:"Filter_input__2-XYv"}},,function(t,e,n){t.exports={Container:"Container_Container__1TNpt"}},,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(9),o=n.n(c),s=(n(16),n(11)),i=n(3),u=n(10),l=n.n(u),b=n(0),j=function(t){var e=t.children;return Object(b.jsx)("div",{className:l.a.Container,children:e})},m=n(20),d=n(2),f=n.n(d);var p=function(t){var e=t.onSubmit,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),l=u[0],j=u[1];return Object(b.jsx)("div",{className:f.a.wrapper,children:Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({id:Object(m.a)(),name:c,number:l})&&(o(""),j(""))},className:f.a.form,children:[Object(b.jsxs)("label",{className:f.a.label,children:["Name",Object(b.jsx)("input",{value:c,onChange:function(t){return o(t.currentTarget.value)},type:"text",name:"name",className:f.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(b.jsxs)("label",{className:f.a.label,children:["Number",Object(b.jsx)("input",{value:l,onChange:function(t){return j(t.currentTarget.value)},type:"tel",name:"number",className:f.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(b.jsx)("button",{className:f.a.button,type:"submit",children:"Add contact"})]})})},h=n(8),O=n.n(h),_=function(t){var e=t.value,n=t.onChange;return Object(b.jsxs)("label",{className:O.a.label,children:["Find contacts by name",Object(b.jsx)("input",{value:e,onChange:n,className:O.a.input,name:"filter",type:"text"})]})},x=n(4),C=n.n(x),v=function(t){var e=t.filtredContacts,n=t.remove;return Object(b.jsx)("ul",{className:C.a.list,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(b.jsxs)("li",{className:C.a.item,children:[Object(b.jsxs)("p",{className:C.a.text,children:[a,":"]}),Object(b.jsx)("p",{className:C.a.text,children:r}),Object(b.jsx)("button",{onClick:function(){return n(e)},className:C.a.button,type:"button",children:"Delete"})]},e)}))})};var N=function(){var t=Object(a.useState)((function(){return localStorage.contacts?JSON.parse(localStorage.contacts):[]})),e=Object(i.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),o=Object(i.a)(c,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){localStorage.contacts=JSON.stringify(n)}),[n]),Object(b.jsxs)(j,{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(p,{onSubmit:function(t){return function(t){var e=t.name.toLowerCase();return n.find((function(t){return t.name.toLowerCase()===e}))}(t)?(alert("".concat(t.name," is already in contacts")),!1):(r((function(e){return[t].concat(Object(s.a)(e))})),!0)}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(_,{value:u,onChange:function(t){return l(t.currentTarget.value)}}),Object(b.jsx)(v,{filtredContacts:n.filter((function(t){return t.name.toLowerCase().includes(u.toLowerCase())})),remove:function(t){r((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.ef4a2391.chunk.js.map