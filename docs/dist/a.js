define("a",["react","antd","nycticorax"],(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var r=n(2),o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(5)),i=r(n(6)),l=n(7),a=o(n(8)),{createStore:f,connect:c,dispatch:s,getStore:p}=new a.default;f({a:"9"});class d extends i.Component{constructor(){super(...arguments),(0,u.default)(this,"onGetB",()=>{l.message.info(this.props.dispatch("b","getValue"))}),(0,u.default)(this,"onSetB",()=>{this.props.dispatch("b","updateValue",Math.random().toFixed(2))}),(0,u.default)(this,"onSetG",()=>{this.props.dispatch("global","updateUserName",Math.random())})}componentDidMount(){this.unsubscribe=this.props.subscribe(e=>{e.includes("b")&&l.message.info("组件 B 加载完成")})}componentWillUnmount(){this.unsubscribe()}render(){var{user:e}=this.props.store,{a:t}=this.props;return i.default.createElement("div",null,i.default.createElement("p",{style:{fontSize:100}},"A"),i.default.createElement("div",{style:{display:"flex",flexDirection:"column"}},i.default.createElement("p",null,"全局值：",e.name),i.default.createElement("p",null,"组件值: ",t),i.default.createElement(l.Button,{onClick:this.onGetB},"获取 B 组件的值"),i.default.createElement(l.Button,{onClick:this.onSetB},"更新 B 组件的值"),i.default.createElement(l.Button,{onClick:this.onSetG},"更新全局值(异步)")))}}(0,u.default)(d,"getValue",()=>p().a),(0,u.default)(d,"updateValue",e=>{s({a:e})});var y=c("a")(d);t.default=y},function(e,t,n){var r=n(3);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var l=u?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"default",(function(){return r}))},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}]).default}));
//# sourceMappingURL=a.js.map