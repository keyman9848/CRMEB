(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ae7049e"],{"00fd":function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"d",function(){return s}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return u});n("a481");var r=n("f8b7"),i=n("cba2"),o=n("74f9");function a(t){return new Promise(function(e,n){i["a"].confirm({mes:"确认取消该订单?",opts:function(){Object(r["a"])(t).then(function(t){i["a"].success("取消成功"),e(t)}).catch(function(t){i["a"].error("取消失败"),n(t)})}})})}function s(t){return new Promise(function(e,n){Object(r["n"])(t).then(function(t){i["a"].success("收货成功"),e(t)}).catch(function(t){i["a"].error("收货失败"),n(t)})})}function c(t){return new Promise(function(e,n){i["a"].confirm({mes:"确认删除该订单?",opts:function(){Object(r["c"])(t).then(function(t){i["a"].success("删除成功"),e(t)}).catch(function(t){i["a"].error("删除失败"),n(t)})}})})}function u(t,e,n){return new Promise(function(a,s){i["a"].loading.open(""),Object(r["j"])(t,e,n).then(function(t){var e=t.data;switch(i["a"].loading.close(),e.status){case"WECHAT_H5_PAY":location.replace(e.result.jsConfig.mweb_url),s(e);break;case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_ERROR":case"PAY_DEFICIENCY":i["a"].toast({mes:t.msg}),s(e);break;case"SUCCESS":i["a"].success(t.msg),a(e);break;case"WECHAT_PAY":Object(o["pay"])(e.result.jsConfig).then(function(){a(e)})}}).catch(function(t){i["a"].loading.close(),i["a"].toast({mes:t.msg||"订单支付失败"})})})}},"2a23":function(t,e,n){"use strict";var r=n("fde3"),i=n.n(r);i.a},"3b8d":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("795b"),i=n.n(r);function o(t,e,n,r,o,a,s){try{var c=t[a](s),u=c.value}catch(l){return void n(l)}c.done?e(u):i.a.resolve(u).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new i.a(function(r,i){var a=t.apply(e,n);function s(t){o(a,r,i,s,c,"next",t)}function c(t){o(a,r,i,s,c,"throw",t)}s(void 0)})}}},"713c":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"orderGoods"},[n("div",{staticClass:"total"},[t._v("共"+t._s(t.cartInfo.length)+"件商品")]),n("div",{staticClass:"goodWrapper"},t._l(t.cartInfo,function(e){return n("div",{key:e.id,staticClass:"item acea-row row-between-wrapper"},[n("div",{staticClass:"pictrue"},[n("img",{staticClass:"image",attrs:{src:e.productInfo.image}})]),n("div",{staticClass:"text"},[n("div",{staticClass:"acea-row row-between-wrapper"},[n("div",{staticClass:"name line1"},[t._v(t._s(e.productInfo.store_name))]),n("div",{staticClass:"num"},[t._v("x "+t._s(e.cart_num))])]),e.productInfo.attrInfo?n("div",{staticClass:"attr line1"},[t._v("\n          "+t._s(e.productInfo.attrInfo.suk)+"\n        ")]):t._e(),n("div",{staticClass:"money font-color-red"},[t._v("￥"+t._s(e.truePrice))]),3===t.evaluate?n("div",{staticClass:"evaluate",on:{click:function(n){return t.$router.push({path:"/goods_evaluate/"+e.unique})}}},[t._v("\n          评价\n        ")]):t._e()])])}),0)])},i=[],o=(n("c5f6"),{name:"OrderGoods",props:{evaluate:Number,cartInfo:{type:Array,default:function(){return[]}}},data:function(){return{}},mounted:function(){},methods:{}}),a=o,s=n("2877"),c=Object(s["a"])(a,r,i,!1,null,null,null);e["a"]=c.exports},"795b":function(t,e,n){t.exports=n("696e")},"92b7":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"payment",class:!0===t.value?"on":""},[n("div",{staticClass:"title acea-row row-center-wrapper"},[t._v("\n      选择付款方式"),n("span",{staticClass:"iconfont icon-guanbi",on:{click:t.close}})]),-1!==t.types.indexOf("weixin")?n("div",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){return t.checked("weixin")}}},[t._m(0),n("div",{staticClass:"iconfont icon-xiangyou"})]):t._e(),-1!==t.types.indexOf("alipay")?n("div",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){return t.checked("alipay")}}},[t._m(1),n("div",{staticClass:"iconfont icon-xiangyou"})]):t._e(),-1!==t.types.indexOf("yue")?n("div",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){return t.checked("yue")}}},[n("div",{staticClass:"left acea-row row-between-wrapper"},[n("div",{staticClass:"iconfont icon-yuezhifu"}),n("div",{staticClass:"text"},[n("div",{staticClass:"name"},[t._v("余额支付")]),n("div",{staticClass:"info"},[t._v("\n            当前可用余额："),n("span",{staticClass:"money"},[t._v(t._s(t.balance))])])])]),n("div",{staticClass:"iconfont icon-xiangyou"})]):t._e(),-1!==t.types.indexOf("offline")?n("div",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){return t.checked("offline")}}},[t._m(2),n("div",{staticClass:"iconfont icon-xiangyou"})]):t._e()]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mask",on:{click:t.close}})])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left acea-row row-between-wrapper"},[n("div",{staticClass:"iconfont icon-weixinzhifu"}),n("div",{staticClass:"text"},[n("div",{staticClass:"name"},[t._v("微信支付")]),n("div",{staticClass:"info"},[t._v("使用微信快捷支付")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left acea-row row-between-wrapper"},[n("div",{staticClass:"iconfont icon-zhifubao"}),n("div",{staticClass:"text"},[n("div",{staticClass:"name"},[t._v("支付宝支付")]),n("div",{staticClass:"info"},[t._v("使用线上支付宝支付")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left acea-row row-between-wrapper"},[n("div",{staticClass:"iconfont icon-yuezhifu1"}),n("div",{staticClass:"text"},[n("div",{staticClass:"name"},[t._v("线下支付")]),n("div",{staticClass:"info"},[t._v("选择线下付款方式")])])])}],o=(n("c5f6"),{name:"Payment",props:{value:{type:Boolean,default:!1},balance:{type:[Number,String],default:0},types:{type:Array,default:function(){return["weixin","alipay","yue","offline"]}}},data:function(){return{}},mounted:function(){},methods:{checked:function(t){this.$emit("checked",t),this.close()},close:function(){this.$emit("input",!1)}}}),a=o,s=(n("2a23"),n("2877")),c=Object(s["a"])(a,r,i,!1,null,"54b2b916",null);e["a"]=c.exports},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n,r){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=x(t,n,a),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=c;var l="suspendedStart",d="suspendedYield",f="executing",p="completed",v={};function h(){}function y(){}function m(){}var _={};_[o]=function(){return this};var w=Object.getPrototypeOf,g=w&&w(w(T([])));g&&g!==n&&r.call(g,o)&&(_=g);var b=m.prototype=h.prototype=Object.create(_);function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){function e(n,i,o,a){var s=u(t[n],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(l).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function i(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=i}function x(t,e,n){var r=l;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return j()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=u(t,e,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=b.constructor=m,m.constructor=y,m[s]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},C(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,n,r,i){var o=new k(c(e,n,r,i));return t.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},C(b),b[s]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},afa3:function(t,e,n){t.exports=n.p+"h5/img/line.05bf1c84.jpg"},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(1),a=d(o),s=n(3),c=d(s),u=n(4),l=d(u);function d(t){return t&&t.__esModule?t:{default:t}}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function v(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var h=function(t){function e(t,n){f(this,e);var r=p(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return v(e,t),i(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===r(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,l.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return y("action",t)}},{key:"defaultTarget",value:function(t){var e=y("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return y("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(c.default);function y(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=h},function(t,e,n){"use strict";var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),a=s(o);function s(t){return t&&t.__esModule?t:{default:t}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=function(){function t(e){c(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,a.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,a.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"===typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=u},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),i=document.createRange();i.selectNodeContents(t),r.removeAllRanges(),r.addRange(i),e=r.toString()}return e}t.exports=n},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function i(){r.off(t,i),e.apply(n,arguments)}return i._=e,this.on(t,i,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,i=n.length;for(r;r<i;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],i=[];if(r&&e)for(var o=0,a=r.length;o<a;o++)r[o].fn!==e&&r[o].fn._!==e&&i.push(r[o]);return i.length?n[t]=i:delete n[t],this}},t.exports=n},function(t,e,n){var r=n(5),i=n(6);function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return a(t,e,n);if(r.nodeList(t))return s(t,e,n);if(r.string(t))return c(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function s(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function c(t,e,n){return i(document.body,t,e,n)}t.exports=o},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,n){var r=n(7);function i(t,e,n,r,i){var o=a.apply(this,arguments);return t.addEventListener(n,o,i),{destroy:function(){t.removeEventListener(n,o,i)}}}function o(t,e,n,r,o){return"function"===typeof t.addEventListener?i.apply(null,arguments):"function"===typeof n?i.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,r,o)}))}function a(t,e,n,i){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&i.call(t,n)}}t.exports=o},function(t,e){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function i(t,e){while(t&&t.nodeType!==n){if("function"===typeof t.matches&&t.matches(e))return t;t=t.parentNode}}t.exports=i}])})},e68f:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-details"},[n("div",{staticClass:"header bg-color-red acea-row row-middle",class:t.refundOrder?"on":""},[t.refundOrder?t._e():n("div",{staticClass:"pictrue"},[n("img",{attrs:{src:t.orderInfo.status_pic}})]),n("div",{staticClass:"data",class:t.refundOrder?"on":""},[n("div",{staticClass:"state"},[t._v(t._s(t.orderInfo._status._msg))]),n("div",[t._v("\n        "+t._s(t.orderInfo.add_time_y)),n("span",{staticClass:"time"},[t._v(t._s(t.orderInfo.add_time_h))])])])]),t.refundOrder?t._e():[n("div",{staticClass:"nav"},[n("div",{staticClass:"navCon acea-row row-between-wrapper"},[n("div",{class:{on:0===t.status.type||9===t.status.type}},[t._v("\n          待付款\n        ")]),n("div",{class:{on:1===t.status.type}},[t._v("待发货")]),n("div",{class:{on:2===t.status.type}},[t._v("待收货")]),n("div",{class:{on:3===t.status.type}},[t._v("待评价")]),n("div",{class:{on:4===t.status.type}},[t._v("已完成")])]),n("div",{staticClass:"progress acea-row row-between-wrapper"},[n("div",{staticClass:"iconfont",class:[0===t.status.type||9===t.status.type?"icon-webicon318":"icon-yuandianxiao",t.status.type>=0?"font-color-red":""]}),n("div",{staticClass:"line",class:{"bg-color-red":t.status.type>0&&9!=t.status.type}}),n("div",{staticClass:"iconfont",class:[1===t.status.type?"icon-webicon318":"icon-yuandianxiao",t.status.type>=1&&6!=t.status.type&&9!=t.status.type?"font-color-red":""]}),n("div",{staticClass:"line",class:{"bg-color-red":t.status.type>1&&6!=t.status.type&&9!=t.status.type}}),n("div",{staticClass:"iconfont icon-yuandianxiao",class:[2===t.status.type?"icon-webicon318":"icon-yuandianxiao",t.status.type>=2&&6!=t.status.type&&9!=t.status.type?"font-color-red":""]}),n("div",{staticClass:"line",class:{"bg-color-red":t.status.type>2&&6!=t.status.type&&9!=t.status.type}}),n("div",{staticClass:"iconfont icon-yuandianxiao",class:[3===t.status.type?"icon-webicon318":"icon-yuandianxiao",t.status.type>=3&&6!=t.status.type&&9!=t.status.type?"font-color-red":""]}),n("div",{staticClass:"line",class:{"bg-color-red":t.status.type>3&&6!=t.status.type&&9!=t.status.type}}),n("div",{staticClass:"iconfont icon-yuandianxiao",class:[4==t.status.type?"icon-webicon318":"icon-yuandianxiao",t.status.type>=4&&6!=t.status.type&&9!=t.status.type?"font-color-red":""]})])]),n("div",{staticClass:"address"},[n("div",{staticClass:"name"},[t._v("\n        "+t._s(t.orderInfo.real_name)),n("span",{staticClass:"phone"},[t._v(t._s(t.orderInfo.user_phone))])]),n("div",[t._v(t._s(t.orderInfo.user_address))])]),t._m(0)],n("OrderGoods",{attrs:{evaluate:t.status.type||0,cartInfo:t.orderInfo.cartInfo||[]}}),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("订单编号：")]),n("div",{staticClass:"conter acea-row row-middle row-right"},[t._v("\n        "+t._s(t.orderInfo.order_id)),n("span",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":t.orderInfo.order_id}},[t._v("复制")])])]),n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("下单时间：")]),n("div",{staticClass:"conter"},[t._v("\n        "+t._s(t.orderInfo.add_time_y+" "+t.orderInfo.add_time_h)+"\n      ")])]),n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("订单类型：")]),n("div",{staticClass:"conter"},[t._v("\n        "+t._s(t.orderTypeName)+"\n      ")])]),n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("支付状态：")]),n("div",{staticClass:"conter"},[t._v(t._s(t.orderInfo.paid?"已支付":"未支付"))])]),n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("支付方式：")]),n("div",{staticClass:"conter"},[t._v(t._s(t.orderInfo._status._payType))])]),t.orderInfo.mark?n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("买家留言：")]),n("div",{staticClass:"conter"},[t._v(t._s(t.orderInfo.mark))])]):t._e()]),0!=t.orderInfo.status?n("div",["express"===t.orderInfo.delivery_type?n("div",{staticClass:"wrapper"},[t._m(1),n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("快递公司：")]),n("div",{staticClass:"conter"},[t._v(t._s(t.orderInfo.delivery_name||""))])]),n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("快递号：")]),n("div",{staticClass:"conter"},[t._v(t._s(t.orderInfo.delivery_id||""))])])]):n("div",{staticClass:"wrapper"},[t._m(2),n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("配送人：")]),n("div",{staticClass:"conter"},[t._v(t._s(t.orderInfo.delivery_name||""))])]),n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("配送电话：")]),n("div",{staticClass:"conter acea-row row-middle row-right"},[t._v("\n          "+t._s(t.orderInfo.delivery_id||"")),n("span",{staticClass:"copy"},[t._v("拨打")])])])])]):t._e(),t.refundOrder?n("div",{staticClass:"wrapper"},[n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("收货人：")]),n("div",{staticClass:"conter"},[t._v(t._s(t.orderInfo.real_name))])]),n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("联系电话：")]),n("div",{staticClass:"conter"},[t._v(t._s(t.orderInfo.user_phone))])]),n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("收货地址：")]),n("div",{staticClass:"conter"},[t._v(t._s(t.orderInfo.user_address))])])]):t._e(),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("支付金额：")]),n("div",{staticClass:"conter"},[t._v("￥"+t._s(t.orderInfo.total_price))])]),t.orderInfo.coupon_price>0?n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("优惠券抵扣：")]),n("div",{staticClass:"conter"},[t._v("-￥"+t._s(t.orderInfo.coupon_price))])]):t._e(),t.orderInfo.use_integral>0?n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("积分抵扣：")]),n("div",{staticClass:"conter"},[t._v("-￥"+t._s(t.orderInfo.deduction_price))])]):t._e(),t.orderInfo.pay_postage>0?n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("运费：")]),n("div",{staticClass:"conter"},[t._v("￥"+t._s(t.orderInfo.pay_postage))])]):t._e(),n("div",{staticClass:"actualPay acea-row row-right"},[t._v("\n      实付款："),n("span",{staticClass:"money font-color-red"},[t._v("￥"+t._s(t.orderInfo.pay_price))])])]),!t.refundOrder&&t.offlineStatus?n("div",{staticStyle:{height:"1.2rem"}}):t._e(),!t.refundOrder&&t.offlineStatus?n("div",{staticClass:"footer acea-row row-right row-middle"},[0===t.status.type?[n("div",{staticClass:"bnt cancel",on:{click:t.cancelOrder}},[t._v("取消订单")]),n("div",{staticClass:"bnt bg-color-red",on:{click:function(e){t.pay=!0}}},[t._v("立即付款")])]:t._e(),1===t.status.type?[n("div",{staticClass:"bnt cancel",on:{click:function(e){return t.$router.push({path:"/order/refund/"+t.orderInfo.order_id})}}},[t._v("\n        申请退款\n      ")])]:t._e(),2===t.status.type?[n("div",{staticClass:"bnt default",on:{click:function(e){return t.$router.push({path:"/order/logistics/"+t.orderInfo.order_id})}}},[t._v("\n        查看物流\n      ")]),n("div",{staticClass:"bnt bg-color-red",on:{click:t.takeOrder}},[t._v("\n        确认收货\n      ")])]:t._e(),3===t.status.type&&"express"===t.orderInfo.delivery_type?[n("div",{staticClass:"bnt default",on:{click:function(e){return t.$router.push({path:"/order/logistics/"+t.orderInfo.order_id})}}},[t._v("\n        查看物流\n      ")])]:t._e(),4===t.status.type?[n("div",{staticClass:"bnt cancel",on:{click:t.delOrder}},[t._v("\n        删除订单\n      ")]),n("div",{staticClass:"bnt default",on:{click:function(e){return t.$router.push({path:"/order/logistics/"+t.orderInfo.order_id})}}},[t._v("\n        查看物流\n      ")])]:t._e(),6===t.status.type?[n("div",{staticClass:"bnt bg-color-red",on:{click:function(e){return t.$router.push({path:"/activity/group_rule/"+t.orderInfo.pink_id})}}},[t._v("\n        查看拼团\n      ")])]:t._e()],2):t._e(),n("Payment",{attrs:{types:t.payType,balance:t.userInfo.now_money},on:{checked:t.toPay},model:{value:t.pay,callback:function(e){t.pay=e},expression:"pay"}})],2)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"line"},[r("img",{attrs:{src:n("afa3")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("配送方式：")]),n("div",{staticClass:"conter"},[t._v("\n          发货\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item acea-row row-between"},[n("div",[t._v("配送方式：")]),n("div",{staticClass:"conter"},[t._v("\n          送货\n        ")])])}],o=(n("96cf"),n("3b8d")),a=(n("a481"),n("7f7f"),n("cebc")),s=n("713c"),c=n("f8b7"),u=n("b311"),l=n.n(u),d=n("92b7"),f=n("ed08"),p=n("2f62"),v=n("00fd"),h="OrderDetails",y={name:h,components:{OrderGoods:s["a"],Payment:d["a"]},props:{},data:function(){return{offlinePayStatus:2,orderTypeName:"普通订单",orderTypeNameStatus:!0,offlineStatus:!0,id:this.$route.params.id,orderInfo:{_status:{}},status:{},pay:!1,payType:["yue","weixin"],from:Object(f["d"])()?"weixin":"weixinh5"}},computed:Object(a["a"])({refundOrder:function(){return this.orderInfo.refund_status>0}},Object(p["b"])(["userInfo"])),watch:{$route:function(t){t.name===h&&this.id!==t.params.id&&(this.id=t.params.id,this.getDetail())}},inject:["app"],mounted:function(){this.getDetail(),this.$nextTick(function(){var t=this,e=document.getElementsByClassName("copy-data"),n=new l.a(e);n.on("success",function(){t.$dialog.success("复制成功")})})},methods:{goBack:function(){var t=this.app.history,e=t[t.length-1]||{};return"MyOrder"===e.name?this.$router.go(-1):this.$router.replace({path:"/order/list/"})},cancelOrder:function(){var t=this;Object(v["a"])(this.orderInfo.order_id).then(function(){setTimeout(function(){return t.goBack()},300)}).catch(function(){t.getDetail()})},takeOrder:function(){var t=this;Object(v["d"])(this.orderInfo.order_id).finally(function(){t.getDetail()})},delOrder:function(){var t=this;Object(v["b"])(this.orderInfo.order_id).then(function(){setTimeout(function(){return t.goBack()},300)})},setOfflinePayStatus:function(t){var e=this;e.offlinePayStatus=t,1===t&&!0===e.orderTypeNameStatus&&e.payType.push("offline")},getOrderStatus:function(){var t=this.orderInfo||{},e=t._status||{_type:0},n={},r=parseInt(e._type),i=t.delivery_type,o=t.seckill_id?parseInt(t.seckill_id):0,a=t.bargain_id?parseInt(t.bargain_id):0,s=t.combination_id?parseInt(t.combination_id):0;n={type:r,class_status:0},1===r&&s>0&&(n.type=6,n.class_status=1),2===r&&"express"===i&&(n.class_status=2),2===r&&(n.class_status=3),4!==r&&0!==r||(n.class_status=4),o||a||s||3!==r&&4!==r||(n.class_status=5),9==r&&(n.class_status=0,this.offlineStatus=!1),this.status=n},getDetail:function(){var t=this,e=this.id;if(!e)return this.$dialog.error("订单不存在");Object(c["i"])(e).then(function(e){t.orderInfo=e.data,t.getOrderStatus(),t.orderInfo.combination_id>0?(t.orderTypeName="拼团订单",t.orderTypeNameStatus=!1):t.orderInfo.bargain_id>0?(t.orderTypeName="砍价订单",t.orderTypeNameStatus=!1):t.orderInfo.seckill_id>0&&(t.orderTypeName="秒杀订单",t.orderTypeNameStatus=!1),t.setOfflinePayStatus(t.orderInfo.offlinePayStatus)}).catch(function(e){t.$dialog.error(e.msg)})},toPay:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this,t.next=3,Object(v["c"])(this.orderInfo.order_id,e,n.from);case 3:n.getDetail();case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},m=y,_=n("2877"),w=Object(_["a"])(m,r,i,!1,null,null,null);e["default"]=w.exports},f8b7:function(t,e,n){"use strict";n.d(e,"l",function(){return i}),n.d(e,"k",function(){return o}),n.d(e,"e",function(){return a}),n.d(e,"b",function(){return s}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return u}),n.d(e,"a",function(){return l}),n.d(e,"i",function(){return d}),n.d(e,"h",function(){return f}),n.d(e,"m",function(){return p}),n.d(e,"n",function(){return v}),n.d(e,"c",function(){return h}),n.d(e,"d",function(){return y}),n.d(e,"j",function(){return m});var r=n("b775");function i(t){return r["a"].post("/order/confirm",{cartId:t})}function o(t,e){return r["a"].post("/order/computed/"+t,e)}function a(t){return r["a"].get("/coupons/order/"+(parseFloat(t)||0))}function s(t,e){return r["a"].post("/order/create/"+t,e||{})}function c(){return r["a"].get("/order/data")}function u(t){return r["a"].get("/order/list",t)}function l(t){return r["a"].post("/order/cancel",{id:t})}function d(t){return r["a"].get("/order/detail/"+t)}function f(){return r["a"].get("/order/refund/reason")}function p(t){return r["a"].post("/order/refund/verify",t)}function v(t){return r["a"].post("/order/take",{uni:t})}function h(t){return r["a"].post("/order/del",{uni:t})}function y(t){return r["a"].get("order/express/"+t)}function m(t,e,n){return r["a"].post("order/pay",{uni:t,paytype:e,from:n})}},fde3:function(t,e,n){}}]);
//# sourceMappingURL=chunk-5ae7049e.9876869e.js.map