(this["webpackJsonpklose-box"]=this["webpackJsonpklose-box"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(18),a=n.n(r),s=n(21),o=n(12),i=n(15),l=n(8),j=Object(c.createContext)(),u=n(1);var b=function(e){var t=e.children,n=Object(c.useState)(0),r=Object(l.a)(n,2),a=r[0],b=r[1],d=Object(c.useState)([]),O=Object(l.a)(d,2),h=O[0],x=O[1],f=Object(c.useState)("Other"),m=Object(l.a)(f,2),p=m[0],v=m[1],y={total:a,notes:h,currency:[.01,.05,.1,.25,.5,1],banknote:{2:"turtle",5:"heron",10:"macaw",20:"tamarin",50:"jaguar",100:"grouper",200:"wolf"},subTotal:function(){return(Object.entries(a).reduce((function(e,t){return e+t[0]*t[1]}),0)+h.reduce((function(e,t){return e+Number(t[1])}),0)).toFixed(2)},handleTotal:function(e,t){b(Object(i.a)(Object(i.a)({},a),{},Object(o.a)({},e,t)))},handleNotes:function(e){x([].concat(Object(s.a)(h),[[p,e]]))},deleteNotes:function(e){x(h.filter((function(t){return h.indexOf(t)!==e})))},setRadioCheck:v};return Object(u.jsx)(j.Provider,{value:y,children:t})},d=n(19),O=n(2);function h(e,t){var n=Object(c.useState)(""),r=Object(l.a)(n,2),a=r[0],s=r[1];Object(c.useEffect)((function(){d(e,a)}),[a]);var o=Object(c.useContext)(j),i=o.total,b=o.banknote,d=o.handleTotal;return Object(u.jsxs)("form",{className:b[e],children:["Valor: $".concat(e.toFixed(2)," "),Object(u.jsxs)("div",{children:["Unidade: ",Object(u.jsx)("input",{min:0,value:a,type:"number",placeholder:"0",onChange:function(e){var t=e.target;return s(t.value)},onKeyPress:function(e){return"Enter"===e.key&&e.preventDefault()}})]}),Object(u.jsx)("span",{className:i[e]>0?"green-text":null,children:"Total: $".concat(i[e]?(i[e]*e).toFixed(2):"0.00")})]},t)}function x(){var e=Object(c.useContext)(j),t=e.handleNotes,n=e.notes,r=e.deleteNotes,a=e.setRadioCheck;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{className:"notes",children:[Object(u.jsxs)("label",{children:["Valor: ",Object(u.jsx)("input",{type:"text",placeholder:"0.00",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),t(e.target.value.replace(/,/g,".")),e.target.value="")}})]}),Object(u.jsxs)("div",{className:"radios-in",children:[Object(u.jsxs)("label",{htmlFor:"Pix",children:[Object(u.jsx)("input",{type:"radio",name:"PayType",value:"Pix",onChange:function(e){var t=e.target;return a(t.value)}}),"Pix"]}),Object(u.jsxs)("label",{htmlFor:"PicPay",children:[Object(u.jsx)("input",{type:"radio",name:"PayType",value:"PicPay",onChange:function(e){var t=e.target;return a(t.value)}}),"PicPay"]}),Object(u.jsxs)("label",{htmlFor:"Other",children:[Object(u.jsx)("input",{defaultChecked:!0,type:"radio",name:"PayType",value:"Other",onChange:function(e){var t=e.target;return a(t.value)}}),"Other"]})]}),Object(u.jsx)("div",{className:"notesContainer",children:Object(u.jsx)("ol",{children:n.map((function(e,t){return Object(u.jsxs)("li",{className:t%2===0?"white":"grey",children:[Object(u.jsx)("span",{style:{width:"100px"},children:"Forma: ".concat(e[0])}),Object(u.jsx)("span",{children:"Valor: $".concat(Number(e[1]).toFixed(2))}),Object(u.jsx)("button",{type:"button",onClick:function(){return r(n.indexOf(e))},children:"X"})]},n.indexOf(e))}))})})]})})}function f(){var e=Object(c.useContext)(j),t=e.currency,n=e.banknote,r=e.subTotal;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:r()>0?"green-text":null,children:"Sub-total $".concat(r())}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Moedas"}),Object(u.jsx)("div",{className:"currencyContainer",children:t.map((function(e,t){return h(e,"C".concat(t))}))})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"C\xe9dulas"}),Object(u.jsx)("div",{className:"banknoteContainer",children:Object.keys(n).map((function(e,t){return h(Number(e),"B".concat(t))}))})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Notas"}),x()]})]})}function m(){return Object(u.jsxs)("main",{className:"center",children:[Object(u.jsx)("h1",{children:"[Klose-Box]"}),Object(u.jsx)(f,{})]})}var p=function(){return Object(u.jsx)(d.a,{children:Object(u.jsx)(O.c,{children:Object(u.jsx)(O.a,{path:"/",component:m})})})};n(35),n(36);a.a.render(Object(u.jsx)(b,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.dd94d771.chunk.js.map