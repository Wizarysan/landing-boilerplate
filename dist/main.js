/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,f=u||d||Function("return this")(),l=Object.prototype.toString,m=Math.max,p=Math.min,v=function(){return f.Date.now()};function b(e,n,o){var i,a,r,c,s,u,d=0,f=!1,l=!1,b=!0;if("function"!=typeof e)throw new TypeError(t);function h(t){var n=i,o=a;return i=a=void 0,d=t,c=e.apply(o,n)}function y(e){var t=e-u;return void 0===u||t>=n||t<0||l&&e-d>=r}function k(){var e=v();if(y(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return l?p(t,r-(e-d)):t}(e))}function x(e){return s=void 0,b&&i?h(e):(i=a=void 0,c)}function j(){var e=v(),t=y(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(k,n),f?h(e):c}(u);if(l)return s=setTimeout(k,n),h(u)}return void 0===s&&(s=setTimeout(k,n)),c}return n=w(n)||0,g(o)&&(f=!!o.leading,r=(l="maxWait"in o)?m(w(o.maxWait)||0,n):r,b="trailing"in o?!!o.trailing:b),j.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=u=a=s=void 0},j.flush=function(){return void 0===s?c:x(v())},j}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&l.call(e)==o}(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=r.test(e);return u||c.test(e)?s(e.slice(2),u?2:8):a.test(e)?n:+e}var h=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),b(e,n,{leading:i,maxWait:n,trailing:a})},y="Expected a function",k=NaN,x="[object Symbol]",j=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,q=C||A||Function("return this")(),L=Object.prototype.toString,T=Math.max,S=Math.min,M=function(){return q.Date.now()};function H(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function $(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==x}(e))return k;if(H(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=H(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(j,"");var n=E.test(e);return n||N.test(e)?z(e.slice(2),n?2:8):O.test(e)?k:+e}var D=function(e,t,n){var o,i,a,r,c,s,u=0,d=!1,f=!1,l=!0;if("function"!=typeof e)throw new TypeError(y);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||f&&e-u>=a}function v(){var e=M();if(p(e))return b(e);c=setTimeout(v,function(e){var n=t-(e-s);return f?S(n,a-(e-u)):n}(e))}function b(e){return c=void 0,l&&o?m(e):(o=i=void 0,r)}function g(){var e=M(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(v,t),d?m(e):r}(s);if(f)return c=setTimeout(v,t),m(s)}return void 0===c&&(c=setTimeout(v,t)),r}return t=$(t)||0,H(n)&&(d=!!n.leading,a=(f="maxWait"in n)?T($(n.maxWait)||0,t):a,l="trailing"in n?!!n.trailing:l),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0},g.flush=function(){return void 0===c?r:b(M())},g},W=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return W()})}var _=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},F=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,I=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function J(){return navigator.userAgent||navigator.vendor||window.opera||""}var Q=new(function(){function e(){_(this,e)}return Y(e,[{key:"phone",value:function(){var e=J();return!(!F.test(e)&&!I.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=J();return!(!K.test(e)&&!G.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),R=function(e,t){var n=void 0;return Q.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},U=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),R("aos:out",i),e.options.id&&R("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),R("aos:in",i),e.options.id&&R("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)})},V=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},X=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},Z=function(e,t){return e.forEach(function(e,n){var o=X(e.node,"mirror",t.mirror),i=X(e.node,"once",t.once),a=X(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=X(e,"anchor"),a=X(e,"anchor-placement"),r=Number(X(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=V(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=X(e,"anchor"),o=X(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),V(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:a}}),e},ee=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},te=[],ne=!1,oe={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1},ie=function(){return document.all&&!window.atob},ae=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ne=!0),ne&&(te=Z(te,oe),U(te),window.addEventListener("scroll",h(function(){U(te,oe.once)},99)))},re=function(){if(te=ee(),se(oe.disable)||ie())return ce();ae()},ce=function(){te.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),oe.initClassName&&e.node.classList.remove(oe.initClassName),oe.animatedClassName&&e.node.classList.remove(oe.animatedClassName)})},se=function(e){return!0===e||"mobile"===e&&Q.mobile()||"phone"===e&&Q.phone()||"tablet"===e&&Q.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){var t,n,o;return oe=B(oe,e),te=ee(),t=re,n=window.document,o=new(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver)(P),W=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0}),se(oe.disable)||ie()?ce():(document.querySelector("body").setAttribute("data-aos-easing",oe.easing),document.querySelector("body").setAttribute("data-aos-duration",oe.duration),document.querySelector("body").setAttribute("data-aos-delay",oe.delay),-1===["DOMContentLoaded","load"].indexOf(oe.startEvent)?document.addEventListener(oe.startEvent,function(){ae(!0)}):window.addEventListener("load",function(){ae(!0)}),"DOMContentLoaded"===oe.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ae(!0),window.addEventListener("resize",D(ae,50,!0)),window.addEventListener("orientationchange",D(ae,50,!0)),te)},refresh:ae,refreshHard:re}});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/_scss/main.scss
var main = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var aos = __webpack_require__(3);

// CONCATENATED MODULE: ./src/modules/utility/index.js
/* Выполнить функции при загрузке документа */
var ready = function ready(fns) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fns.forEach(function (fn) {
      fn();
    });
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      fns.forEach(function (fn) {
        fn();
      });
    });
  }
};


// CONCATENATED MODULE: ./src/modules/modal/index.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal =
/*#__PURE__*/
function () {
  /*TODO add Generic modal option*/
  function Modal(overlay, trigger) {
    var _this = this;

    _classCallCheck(this, Modal);

    Modal.allmodals = [];
    this.overlay = overlay;
    var closeButton = overlay.querySelector('.js-close-modal');
    document.querySelector(trigger).addEventListener('click', this.open.bind(this));
    closeButton.addEventListener('click', this.close.bind(this));
    overlay.querySelector('.modal__backdrop').addEventListener('click', function (e) {
      if (e.srcElement.id === _this.overlay.id) {
        _this.close();
      }
    });
  }

  _createClass(Modal, [{
    key: "open",
    value: function open() {
      this.overlay.classList.add('is-active');
      Modal.allmodals.push(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.overlay.classList.remove('is-active');
      Modal.allmodals.pop(this);
    }
  }, {
    key: "closeAll",
    value: function closeAll() {
      /*TODO*/
    }
  }]);

  return Modal;
}();


// CONCATENATED MODULE: ./src/modules/form/index.js
function form_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function form_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function form_createClass(Constructor, protoProps, staticProps) { if (protoProps) form_defineProperties(Constructor.prototype, protoProps); if (staticProps) form_defineProperties(Constructor, staticProps); return Constructor; }

/*
    Create instance with:
        add collect listener to button
        collect fields method
        check fields method with pre-set checkers
        
        inputDom can accept wrapper of input and error message classes
        for example inputDom = {wrapper: 'field', error: 'error-message'}
        will search for Bulma's standart input wrapper, and then search for custom '.error-message' tag in it
*/
var Form =
/*#__PURE__*/
function () {
  function Form(form, url) {
    var _this = this;

    var checkModel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      email: /.+\@.+\..+/
    };
    var inputDom = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    form_classCallCheck(this, Form);

    this.form = form;
    this.checkModel = checkModel;
    this.inputDom = inputDom;
    this.button = this.form.querySelector('.js-submit-form');
    this.button.addEventListener('click', function (event) {
      event.preventDefault();

      _this.collect();
    });
  }

  form_createClass(Form, [{
    key: "collect",
    value: function collect() {
      this.inputs = Array.from(this.form.elements).filter(function (el) {
        return el.tagName !== 'BUTTON';
      });
      this.check();
    }
  }, {
    key: "check",
    value: function check() {
      var _this2 = this;

      Array.from(document.querySelectorAll(this.inputDom.error)).forEach(function (error) {
        return error.classList.add('is-invisible');
      });
      this.inputs.forEach(function (el) {
        el.classList.remove(_this2.inputDom.fieldWarningClass);

        if (_this2.checkModel[el.name]) {
          if (el.value.search(_this2.checkModel[el.name]) < 0) {
            _this2.printError(el);
          }
        }
      });
    }
  }, {
    key: "send",
    value: function send() {}
  }, {
    key: "printError",
    value: function printError(el) {
      if (this.inputDom.wrapper) {
        var errorField = el.closest(this.inputDom.wrapper).querySelector(this.inputDom.error);
        errorField.classList.remove('is-invisible');
      }

      el.classList.add(this.inputDom.fieldWarningClass); // Описать вариант без враппера (ближайшее поле)
    }
  }]);

  return Form;
}();


// CONCATENATED MODULE: ./src/index.js





/* Add modal explictly to prevent mess */

var src_addModals = function addModals() {
  var testModal = new Modal(document.querySelector('.test-modal'), '.js-open-modal');
  var testModal2 = new Modal(document.querySelector('.test-modal2'), '.js-open-modal2');
};

var src_prepareForms = function prepareForms() {
  var testForm = new Form(document.querySelector('.test-form'), 'test.php', undefined, {
    wrapper: '.field',
    error: '.error-message',
    fieldWarningClass: 'is-danger'
  });
};

ready([src_addModals, src_prepareForms]);

/***/ })
/******/ ]);