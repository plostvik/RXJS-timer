(this["webpackJsonprxjs-timer"]=this["webpackJsonprxjs-timer"]||[]).push([[0],{17:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n(4),s=n.n(r),i=n(18),u=n.n(i),o=(n(17),n(16)),a=n(32),j=n(28),b=n(29),l=n(31),O=n(19),f=n(30);var h=function(){var t={hours:"00",minutes:"00",seconds:"00",counter:0},e=Object(r.useState)(t),n=Object(o.a)(e,2),s=n[0],i=n[1],u=Object(r.useState)(!1),h=Object(o.a)(u,2),d=h[0],m=h[1];Object(r.useEffect)((function(){var t=Object(a.a)(1e3).subscribe((function(){d&&i((function(t){var e=t.counter+1,n=e%60,c=Math.floor(e/60%60),r=Math.floor(e/3600),s=1===String(n).length?"0".concat(n):n,i=1===String(c).length?"0".concat(c):c;return{hours:1===String(r).length?"0".concat(r):r,minutes:i,seconds:s,counter:e}}))}));return function(){return t.unsubscribe()}}),[d,s.counter]);var x=Object(r.useRef)(null);Object(r.useEffect)((function(){var t=Object(j.a)(x.current,"click"),e=t.pipe(Object(b.a)(300)),n=t.pipe(Object(l.a)(e),Object(O.a)((function(t){return t.length})),Object(f.a)((function(t){return 2===t}))).subscribe((function(){m((function(){return!1}))}));return function(){return n.unsubscribe()}}),[]);var p=s.hours,g=s.minutes,v=s.seconds;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("p",{className:"time",children:"".concat(p,":").concat(g,":").concat(v)}),Object(c.jsxs)("ul",{className:"controls",children:[Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:d?"reset":"start",onClick:function(){m((function(t){return!t}))},children:d?"Stop":"Start"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"wait",ref:x,children:"Wait"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"reset",onClick:function(){i(t)},children:"Reset"})})]})]})})};u.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.78b2cc6c.chunk.js.map