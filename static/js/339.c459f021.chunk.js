"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[339],{2339:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var o=e(3433),i=e(9439),r=e(2791),a=e(2884),s=e(184),l=function(n){var t=n.onClick,e=(0,r.useState)(1),o=(0,i.Z)(e,2),l=o[0],f=o[1];t(l);return(0,s.jsx)("div",{children:(0,s.jsxs)(a.C,{className:"btn",type:"button",onClick:function(){return f((function(n){return n+1}))},children:["Load more",(0,s.jsx)("span",{className:"icon-right"}),(0,s.jsx)("span",{className:"icon-right after"})]})})},f=e(6368),c=e(1732),p=function(){var n=(0,r.useState)([]),t=(0,i.Z)(n,2),e=t[0],a=t[1],p=(0,r.useState)(!0),u=(0,i.Z)(p,2),h=u[0],x=u[1],d=(0,r.useState)(1),g=(0,i.Z)(d,2),b=g[0],m=g[1];(0,r.useEffect)((function(){x(!1),(0,c.Tg)(b).then((function(n){var t=n.results;return a((function(n){return[].concat((0,o.Z)(n),(0,o.Z)(t))}))})).finally(x(!0))}),[b]);return(0,s.jsxs)("div",{children:[(0,s.jsx)(f.Z,{moviesList:e}),e.length>0&&h&&(0,s.jsx)(l,{onClick:function(n){m(n)}})]})}},2884:function(n,t,e){e.d(t,{C:function(){return f},e:function(){return l}});var o,i,r=e(168),a=e(6088),s=e(1087),l=(0,a.Z)(s.rU)(o||(o=(0,r.Z)(["\n  display: flex;\n\n  height: 1.5em;\n  width: 150px;\n  align-items: center;\n  justify-content: center;\n  background-color: #eeeeee4b;\n  border-radius: 3px;\n  letter-spacing: 1px;\n  transition: all 0.2s linear;\n  cursor: pointer;\n  border: none;\n  background: #fff;\n\n  & > svg {\n    margin-right: 5px;\n    margin-left: 5px;\n    font-size: 20px;\n    transition: all 0.4s ease-in;\n  }\n\n  &:hover > svg {\n    font-size: 1.2em;\n    transform: translateX(-15px);\n  }\n\n  &:hover {\n    box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;\n    transform: translateY(-2px);\n  }\n"]))),f=a.Z.button(i||(i=(0,r.Z)(["\n  margin: 0 auto;\n  display: block;\n  font-family: 'Poppins', sans-serif;\n  letter-spacing: 2px;\n  background: none;\n  color: white;\n  position: relative;\n  outline: none;\n  border: none;\n  height: 50px;\n  width: 190px;\n  font-size: 14px;\n  z-index: 2;\n  transition: 0.01s 0.23s ease-out all;\n  overflow: hidden;\n\n  &:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 55%;\n    background: #303030;\n    z-index: -1;\n    transition: 0.3s ease-in all;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    left: -5%;\n    top: 5%;\n    height: 90%;\n    width: 5%;\n    background: white;\n    transition: 0.4s 0.02s ease-in all;\n  }\n\n  &:hover {\n    cursor: pointer;\n    color: transparent;\n  }\n\n  &:hover:before {\n    left: 120%;\n    width: 25%;\n  }\n\n  &:hover:after {\n    left: 100%;\n    width: 70%;\n  }\n\n  &:hover > .icon-right.after:after {\n    left: -80px;\n    color: white;\n    transition: 0.2s 0.2s ease all;\n  }\n\n  &:hover > .icon-right.after:before {\n    left: -104px;\n    top: 14px;\n    opacity: 0.2;\n    color: white;\n  }\n\n  .icon-right {\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n\n  .icon-right:after {\n    font-family: 'FontAwesome';\n    content: '\u2192';\n    font-size: 24px;\n    display: inline-block;\n    position: relative;\n    top: 26px;\n    transform: translate3D(0, -55%, 0);\n  }\n\n  .icon-right.after:after {\n    left: -250px;\n    color: black;\n    transition: 0.15s 0.25s ease left, 0.5s 0.05s ease color;\n  }\n\n  .icon-right.after:before {\n    content: '';\n    position: absolute;\n    left: -230px;\n    top: 14px;\n    opacity: 0;\n    transition: 0.2s ease-in all;\n  }\n\n  .signature {\n    position: fixed;\n    font-family: sans-serif;\n    font-weight: 100;\n    bottom: 10px;\n    left: 0;\n    letter-spacing: 4px;\n    font-size: 10px;\n    width: 100%;\n    text-align: center;\n    color: white;\n    text-transform: uppercase;\n    text-decoration: none;\n  }\n"])))}}]);
//# sourceMappingURL=339.c459f021.chunk.js.map