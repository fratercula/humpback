define("humpback",["react","react-router-dom","react-dom","nycticorax"],(function(e,t,r,o){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(t,r){t.exports=e},function(e,t,r){var o=r(9);function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var c=a?Object.getOwnPropertyDescriptor(e,u):null;c&&(c.get||c.set)?Object.defineProperty(r,u,c):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}},function(e,t,r){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,"default",(function(){return o}))},function(e,t,r){"use strict";var o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.dispatch=t.connect=t.getStore=t.createStore=void 0;var n=new(o(r(11)).default),a=n.createStore;t.createStore=a;var u=n.getStore;t.getStore=u;var c=n.connect;t.connect=c;var i=n.dispatch;t.dispatch=i},function(e,t,r){"use strict";var o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.Container=t.Error=t.Loading=t.LOADED_COMPONENTS=t.IGNORE_STATIC_METHODS=void 0;var n=o(r(1));t.IGNORE_STATIC_METHODS=["name","prototype","length","propTypes","defaultProps"];t.LOADED_COMPONENTS="LOADED_COMPONENTS";t.Loading=()=>n.default.createElement("h3",null,"Loading");t.Error=e=>{var{error:t}=e;return n.default.createElement("h3",null,t)};t.Container=()=>n.default.createElement("h3",null,"Nothing")},function(e,r){e.exports=t},function(e,t,r){e.exports=r(8)},function(e,t,r){"use strict";var o=r(2),n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(3)),u=n(r(18)),c=o(r(1)),i=r(10),s=r(6),l=r(4),f=n(r(12)),p=r(5);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=e=>{var{packages:t,store:r={},routes:o=[],methods:n={},loading:d=p.Loading,error:y=p.Error,container:O=p.Container}=e,h=(0,u.default)(e,["packages","store","routes","methods","loading","error","container"]),b=Object.keys(r),v=()=>c.default.createElement(f.default,{routes:o,methods:n,Loading:d,Error:y});(0,l.createStore)(m({},r,{[p.LOADED_COMPONENTS]:[]}));class E extends c.Component{constructor(){super(...arguments),(0,a.default)(this,"state",{error:void 0})}componentDidCatch(e){this.setState({error:e.message||"Container Error"})}render(){var{error:e}=this.state;if(e)return c.default.createElement(y,{error:e});var t={};return b.forEach(e=>{t[e]=this.props[e]}),c.default.createElement(O,{Routes:v,config:m({},h,{routes:o}),store:t})}}var g=(0,l.connect)(...b)(E);(0,i.render)(c.default.createElement(s.HashRouter,null,c.default.createElement(g,null)),document.querySelector("#root"))}},function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=o=function(e){return r(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},o(t)}e.exports=o},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t,r){"use strict";var o=r(2),n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(3)),u=o(r(1)),c=r(6),i=n(r(13)),s=r(4),l=n(r(16)),f=r(5);class p extends u.Component{constructor(){super(...arguments),(0,a.default)(this,"componentMethods",{}),(0,a.default)(this,"state",{error:void 0})}componentDidCatch(e){this.setState({error:e.message||"Routes Error"})}shouldComponentUpdate(e,t){var{error:r}=t;return r}componentDidMount(){var{history:e}=this.props;this.unsubscribe=e.listen(()=>(0,s.dispatch)({[f.LOADED_COMPONENTS]:[]},!0))}componentWillUnmount(){this.unsubscribe()}render(){var{error:e}=this.state,{Loading:t,Error:r,routes:o,methods:n}=this.props;return e?u.default.createElement(r,{error:e}):o.map(e=>{var{path:o,components:a}=e;return u.default.createElement(c.Route,{key:o,exact:!0,path:o,component:e=>a.map((o,a)=>{var c=e.match.path.split(/\/|:|-/g).join("_");return u.default.createElement("div",{className:"row-components row-components-".concat(a," route-").concat(c),key:a},o.map((o,a)=>u.default.createElement("div",{className:"column-components column-components-".concat(a," route-").concat(c),key:a},o.map((o,a)=>{if(!o)return null;var c={name:o,storeMethods:n,componentMethods:this.componentMethods,Loading:t,Error:r,router:e},i=(0,l.default)(c);return u.default.createElement("div",{key:a,className:"component-".concat(o)},u.default.createElement(i,null))}))))})})})}}(0,a.default)(p,"propTypes",{routes:i.default.array.isRequired,methods:i.default.object.isRequired,Loading:i.default.element.isRequired,Error:i.default.element.isRequired});var d=(0,c.withRouter)(p);t.default=d},function(e,t,r){e.exports=r(14)()},function(e,t,r){"use strict";var o=r(15);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,a,u){if(u!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:n};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";var o=r(2),n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var{name:t,storeMethods:r,componentMethods:o,Loading:n,Error:l,router:f}=e,p=Object.keys((0,i.getStore)());class d extends c.Component{constructor(){var e;super(...arguments),e=this,(0,u.default)(this,"state",{component:void 0,error:void 0}),(0,u.default)(this,"dispatch",(function(t,n){for(var a=arguments.length,u=new Array(a>2?a-2:0),c=2;c<a;c++)u[c-2]=arguments[c];if("global"===t){if(!r[n])throw"Method `".concat(n,"` not exists");return e.props.dispatch(r[n],...u)}if(!e.props[s.LOADED_COMPONENTS].includes(t))throw"Component `".concat(t,"` not ready");var i=o[t];if(i)return i[n](...u)}))}componentDidMount(){window.require([t],e=>{var r=(0,i.getStore)()[s.LOADED_COMPONENTS],n={};r.push(t),(0,i.dispatch)({[s.LOADED_COMPONENTS]:r},!0),Object.getOwnPropertyNames(e).forEach(t=>{s.IGNORE_STATIC_METHODS.includes(t)||(n[t]=e[t])}),o[t]=n,this.setState({component:e})},e=>{this.setState({error:e.message||"Component Load Error"})})}componentDidCatch(e){this.setState({error:e.message||"Component Error"})}render(){var{component:e,error:t}=this.state,r={};return t?c.default.createElement(l,{error:t}):e?(p.forEach(e=>{r[e]=this.props[e]}),c.default.createElement(e,(0,a.default)({store:r,dispatch:this.dispatch},f))):c.default.createElement(n,null)}}return(0,i.connect)(...p)(d)};var a=n(r(17)),u=n(r(3)),c=o(r(1)),i=r(4),s=r(5)},function(e,t,r){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}r.r(t),r.d(t,"default",(function(){return o}))},function(e,t,r){"use strict";function o(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.r(t),r.d(t,"default",(function(){return o}))}]).default}));
//# sourceMappingURL=humpback.js.map