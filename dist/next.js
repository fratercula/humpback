define("next",["react","nycticorax"],(function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";var n=r(2),o=r(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(r(5)),c=n(r(6)),i=o(r(7)),{createStore:f,connect:l,dispatch:a,getStore:p,subscribe:s}=new i.default;f({a:1}),s(e=>{console.log("subscribe",e)});class d extends c.Component{constructor(){super(...arguments),(0,u.default)(this,"onClick",()=>{this.props.dispatch("global","updateUserName","6666")})}render(){var{user:e}=this.props.data;return c.default.createElement("div",null,c.default.createElement("p",null,e),c.default.createElement("button",{onClick:this.onClick},"click"))}}d.getA=()=>p("a"),d.updateA=e=>{a({a:e})};var y=d;t.default=y},function(e,t,r){var n=r(3);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var i=u?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(r,c,i):r[c]=e[c]}return r.default=e,t&&t.set(e,r),r}},function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=n=function(e){return r(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},n(t)}e.exports=n},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,"default",(function(){return n}))},function(t,r){t.exports=e},function(e,r){e.exports=t}]).default}));
//# sourceMappingURL=next.js.map