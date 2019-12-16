define("humpback",["react","react-router-dom","react-dom","nycticorax"],(function(e,t,r,n){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=14)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.r(t),r.d(t,"default",(function(){return n}))},function(t,r){t.exports=e},function(e,t,r){var n=r(16);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=u?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.r(t),r.d(t,"default",(function(){return n}))},function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.r(t),r.d(t,"default",(function(){return o}))},function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.r(t),r.d(t,"default",(function(){return n}))},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,"default",(function(){return n}))},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.dispatch=t.connect=t.getStore=t.createStore=void 0;var o=new(n(r(18)).default),u=o.createStore;t.createStore=u;var a=o.getStore;t.getStore=a;var c=o.connect;t.connect=c;var i=o.dispatch;t.dispatch=i},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.Container=t.Error=t.Loading=t.LOADED_COMPONENTS=t.IGNORE_STATIC_METHODS=void 0;var o=n(r(2));t.IGNORE_STATIC_METHODS=["name","prototype","length","propTypes","defaultProps"];t.LOADED_COMPONENTS="LOADED_COMPONENTS";t.Loading=function(){return o.default.createElement("h3",null,"Loading")};t.Error=function(e){var t=e.error;return o.default.createElement("h3",null,t)};t.Container=function(){return o.default.createElement("h3",null,"Nothing")}},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.r(t);var o=r(1);function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?Object(o.default)(e):t}r.d(t,"default",(function(){return u}))},function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.r(t),r.d(t,"default",(function(){return o}))},function(e,r){e.exports=t},function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.r(t),r.d(t,"default",(function(){return n}))},function(e,t,r){e.exports=r(15)},function(e,t,r){"use strict";var n=r(3),o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(r(13)),a=o(r(4)),c=o(r(5)),i=o(r(10)),f=o(r(6)),l=o(r(1)),s=o(r(11)),p=o(r(7)),d=o(r(25)),y=n(r(2)),m=r(17),h=r(12),v=r(8),O=o(r(19)),b=r(9);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,p.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){e.packages;var t=e.store,r=void 0===t?{}:t,n=e.routes,o=void 0===n?[]:n,g=e.methods,S=void 0===g?{}:g,j=e.loading,_=void 0===j?b.Loading:j,P=e.error,w=void 0===P?b.Error:P,M=e.container,T=void 0===M?b.Container:M,D=(0,d.default)(e,["packages","store","routes","methods","loading","error","container"]),C=Object.keys(r),k=function(){return y.default.createElement(O.default,{routes:o,methods:S,Loading:_,Error:w})};(0,v.createStore)(E({},r,(0,p.default)({},b.LOADED_COMPONENTS,[])));var x=function(e){function t(){var e,r;(0,a.default)(this,t);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return r=(0,i.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(o))),(0,p.default)((0,l.default)(r),"state",{error:void 0}),(0,p.default)((0,l.default)(r),"dispatch",(function(e){if(!S[e])throw"Method `".concat(e,"` not exists");for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return v.dispatch.apply(void 0,[S[e]].concat(r))})),r}return(0,s.default)(t,e),(0,c.default)(t,[{key:"componentDidCatch",value:function(e){this.setState({error:e.message||"Container Error"})}},{key:"render",value:function(){var e=this,t=this.state.error;if(t)return y.default.createElement(w,{error:t});var r={};return C.forEach((function(t){r[t]=e.props[t]})),y.default.createElement(T,{dispatch:this.dispatch,Routes:k,config:E({},D,{routes:o}),store:r})}}]),t}(y.Component),N=v.connect.apply(void 0,(0,u.default)(C))(x);(0,m.render)(y.default.createElement(h.HashRouter,null,y.default.createElement(N,null)),document.querySelector("#root"))}},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t,r){"use strict";var n=r(3),o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(r(4)),a=o(r(5)),c=o(r(10)),i=o(r(6)),f=o(r(1)),l=o(r(11)),s=o(r(7)),p=n(r(2)),d=r(12),y=o(r(20)),m=r(8),h=o(r(23)),v=r(9),O=function(e){function t(){var e,r;(0,u.default)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return r=(0,c.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(o))),(0,s.default)((0,f.default)(r),"componentMethods",{}),(0,s.default)((0,f.default)(r),"state",{error:void 0}),r}return(0,l.default)(t,e),(0,a.default)(t,[{key:"componentDidCatch",value:function(e){this.setState({error:e.message||"Routes Error"})}},{key:"shouldComponentUpdate",value:function(e,t){return t.error}},{key:"componentDidMount",value:function(){var e=this.props.history;this.unsubscribe=e.listen((function(){return(0,m.dispatch)((0,s.default)({},v.LOADED_COMPONENTS,[]),!0)}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this,t=this.state.error,r=this.props,n=r.Loading,o=r.Error,u=r.routes,a=r.methods;return t?p.default.createElement(o,{error:t}):u.map((function(t){var r=t.path,u=t.components;return p.default.createElement(d.Route,{key:r,exact:!0,path:r,component:function(t){return u.map((function(r,u){var c=t.match.path.split(/\/|:|-/g).join("_");return p.default.createElement("div",{className:"row-components row-components-".concat(u," route-").concat(c),key:u},r.map((function(r,u){return p.default.createElement("div",{className:"column-components column-components-".concat(u," route-").concat(c),key:u},r.map((function(r,u){if(!r)return null;var c={name:r,storeMethods:a,componentMethods:e.componentMethods,Loading:n,Error:o,router:t},i=(0,h.default)(c);return p.default.createElement("div",{key:u,className:"component-".concat(r)},p.default.createElement(i,null))})))})))}))}})}))}}]),t}(p.Component);(0,s.default)(O,"propTypes",{routes:y.default.array.isRequired,methods:y.default.object.isRequired,Loading:y.default.element.isRequired,Error:y.default.element.isRequired});var b=(0,d.withRouter)(O);t.default=b},function(e,t,r){e.exports=r(21)()},function(e,t,r){"use strict";var n=r(22);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";var n=r(3),o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.name,r=e.storeMethods,n=e.componentMethods,o=e.Loading,v=e.Error,O=e.router,b=Object.keys((0,m.getStore)()),g=function(e){function u(){var e,t;(0,c.default)(this,u);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=(0,f.default)(this,(e=(0,l.default)(u)).call.apply(e,[this].concat(a))),(0,d.default)((0,s.default)(t),"state",{component:void 0,error:void 0}),(0,d.default)((0,s.default)(t),"dispatch",(function(e,o){for(var u=arguments.length,a=new Array(u>2?u-2:0),c=2;c<u;c++)a[c-2]=arguments[c];if("global"===e){var i;if(!r[o])throw"Method `".concat(o,"` not exists");return(i=t.props).dispatch.apply(i,[r[o]].concat(a))}if(!t.props[h.LOADED_COMPONENTS].includes(e))throw"Component `".concat(e,"` not ready");var f=n[e];if(f)return f[o].apply(f,a)})),t}return(0,p.default)(u,e),(0,i.default)(u,[{key:"componentDidMount",value:function(){var e=this;window.require([t],(function(r){if(r){var o=(0,m.getStore)()[h.LOADED_COMPONENTS],u={};o.push(t),(0,m.dispatch)((0,d.default)({},h.LOADED_COMPONENTS,o),!0),Object.getOwnPropertyNames(r).forEach((function(e){h.IGNORE_STATIC_METHODS.includes(e)||(u[e]=r[e])})),n[t]=u,e.setState({component:r})}else e.setState({error:"Component Name Error"})}),(function(t){e.setState({error:t.message||"Component Load Error"})}))}},{key:"componentDidCatch",value:function(e){this.setState({error:e.message||"Component Error"})}},{key:"render",value:function(){var e=this,t=this.state,r=t.component,n=t.error,u={};return n?y.default.createElement(v,{error:n}):r?(b.forEach((function(t){u[t]=e.props[t]})),y.default.createElement(r,(0,a.default)({store:u,dispatch:this.dispatch},O))):y.default.createElement(o,null)}}]),u}(y.Component);return m.connect.apply(void 0,(0,u.default)(b))(g)};var u=o(r(13)),a=o(r(24)),c=o(r(4)),i=o(r(5)),f=o(r(10)),l=o(r(6)),s=o(r(1)),p=o(r(11)),d=o(r(7)),y=n(r(2)),m=r(8),h=r(9)},function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.r(t),r.d(t,"default",(function(){return n}))},function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.r(t),r.d(t,"default",(function(){return n}))}]).default}));
//# sourceMappingURL=humpback.js.map