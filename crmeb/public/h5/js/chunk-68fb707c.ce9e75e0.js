(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68fb707c"],{"0b33":function(t,i,e){"use strict";var n=e("c31d"),s=e("d282"),r=e("9884"),a=e("48f4"),o=Object(s["a"])("tab"),l=o[0],c=o[1];i["a"]=l({mixins:[Object(r["a"])("vanTabs")],props:Object(n["a"])({},a["b"],{name:[Number,String],title:String,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){return this.name||this.index},isActive:function(){return this.computedName===this.parent.currentName}},watch:{"parent.currentIndex":function(){this.inited=this.inited||this.isActive},title:function(){this.parent.setLine()}},mounted:function(){this.slots("title")&&this.parent.renderTitle(this.$refs.title,this.index)},render:function(t){var i=this.slots,e=this.isActive,n=this.inited||!this.parent.lazyRender,s=[n?i():t()];return i("title")&&s.push(t("div",{ref:"title"},[i("title")])),this.parent.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!e},class:c("pane-wrapper",{inactive:!e})},[t("div",{class:c("pane")},[s])]):t("div",{directives:[{name:"show",value:e}],attrs:{role:"tabpanel"},class:c("pane")},[s])}})},"2b67":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{ref:"container",staticClass:"flash-sale "},[n("div",{staticClass:"saleBox"},[t.timeList[t.active]?n("div",{staticClass:"header"},[n("img",{attrs:{src:t.timeList[t.active].slide}})]):t._e()]),t._m(0),n("Tabs",{ref:"timeList",staticClass:"time-tabs",attrs:{"line-height":"0",animated:"","title-inactive-color":"2"},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},t._l(t.timeList,function(i,s){return n("Tab",{key:s},[n("div",{staticClass:"timeItem acea-row row-column-around",attrs:{slot:"title"},on:{click:function(i){return t.setTime(s)}},slot:"title"},[n("span",{staticClass:"time"},[t._v(t._s(i.time))]),n("span",{staticClass:"state"},[t._v(t._s(i.state))])]),n("div",{staticClass:"list"},t._l(t.seckillList,function(e,s){return n("div",{key:s,staticClass:"item acea-row row-between-wrapper",on:{click:function(n){return t.goDetail(e.id,i.status)}}},[n("div",{staticClass:"pictrue"},[n("img",{attrs:{src:e.image}})]),n("div",{staticClass:"text acea-row row-column-around"},[n("div",{staticClass:"line1",domProps:{textContent:t._s(e.title)}}),n("div",{staticClass:"money"},[n("span",{staticClass:"num font-color-red",domProps:{textContent:t._s("￥"+e.price)}}),n("span",{staticClass:"ot_price",domProps:{textContent:t._s("￥"+e.ot_price)}})]),n("div",{staticClass:"stock"},[t._v("\n              限量"),n("span",{domProps:{textContent:t._s(e.quota_show+"件")}})]),n("div",{staticClass:"progress cart-color"},[n("div",{staticClass:"bg-red",style:{width:t.loading?e.percent+"%":""}}),n("div",{staticClass:"piece font-color-red",domProps:{textContent:t._s("已抢"+e.percent+"%")}})])]),1===i.status&&e.quota>0?n("div",{staticClass:"grab bg-color-red"},[t._v("\n            马上抢\n          ")]):t._e(),1===i.status&&e.quota<=0?n("div",{staticClass:"grab bg-color-hui"},[t._v("\n            已售罄\n          ")]):t._e(),2===i.status?n("div",{staticClass:"grab bg-color-red"},[t._v("\n            未开始\n          ")]):t._e(),0===i.status?n("div",{staticClass:"grab bg-color-hui"},[t._v("\n            已结束\n          ")]):t._e()])}),0),0===t.seckillList.length&&1!==t.page?n("div",{staticClass:"noCommodity"},[n("div",{staticClass:"noPictrue"},[n("img",{staticClass:"image",attrs:{src:e("0c36")}})])]):t._e(),t.seckillList.length>0?n("Loading",{attrs:{loaded:t.status,loading:t.loadingList}}):t._e()],1)}),1),n("div",{attrs:{id:"title0"}}),n("div",{attrs:{id:"title1"}}),n("div",{attrs:{id:"title2"}})],1)},s=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"logoPic"},[n("img",{attrs:{src:e("634a")}})])}],r=(e("bda7"),e("5e46")),a=(e("da3c"),e("0b33")),o=e("ca41"),l=e("3a5e"),c={name:"GoodsSeckill",components:{Tab:a["a"],Tabs:r["a"],Loading:l["a"]},props:{},data:function(){return{timeList:[],sticky:!1,loading:!1,datatime:0,active:0,seckillList:[],status:!1,loadingList:!1,page:1,limit:5}},mounted:function(){this.mountedStart()},methods:{mountedStart:function(){var t=this,i=this;Object(o["a"])().then(function(t){i.$set(i,"timeList",t.data.seckillTime),i.$set(i,"active",t.data.seckillTimeIndex),i.datatime=i.timeList[i.active].stop,i.loadingList=!1,i.getSeckillList(),i.$nextTick(function(){i.sticky=!0,i.$refs.timeList.scrollIntoView()})}),this.$scroll(this.$refs.container,function(){!t.loadingList&&t.getSeckillList()}),setTimeout(function(){i.loading=!0},500)},setTime:function(t){var i=this;i.active=t,i.datatime=i.timeList[i.active].stop,i.seckillList=[],i.page=1,i.status=!1,i.loadingList=!1,i.getSeckillList()},getSeckillList:function(){var t=this;if(!t.loadingList&&!t.status){t.loadingList=!0;var i=t.timeList[t.active].id;Object(o["c"])(i,{page:t.page,limit:t.limit}).then(function(i){t.status=i.data.length<t.limit,t.seckillList.push.apply(t.seckillList,i.data),t.page++,t.loadingList=!1}).catch(function(){t.loadingList=!1})}},goDetail:function(t,i){var e=this,n=e.timeList[e.active].stop;this.$router.push({path:"/activity/seckill_detail/"+t+"/"+n+"/"+i})}}},d=c,h=(e("8a4e"),e("2877")),u=Object(h["a"])(d,n,s,!1,null,"314e01aa",null);i["default"]=u.exports},"48f4":function(t,i,e){"use strict";function n(t,i){var e=i.to,n=i.url,s=i.replace;if(e&&t){var r=t[s?"replace":"push"](e);r&&r.catch&&r.catch(function(t){if(t&&"NavigationDuplicated"!==t.name)throw t})}else n&&(s?location.replace(n):location.href=n)}e.d(i,"a",function(){return n}),e.d(i,"b",function(){return s});var s={url:String,replace:Boolean,to:[String,Object]}},"5e46":function(t,i,e){"use strict";var n=e("d282"),s=e("a142"),r=e("ea8e"),a=e("4598");function o(t,i,e){var n=0,s=t.scrollLeft,r=0===e?1:Math.round(1e3*e/16);function o(){t.scrollLeft+=(i-s)/r,++n<r&&Object(a["b"])(o)}o()}var l=e("48f4");function c(t){return"none"===window.getComputedStyle(t).display||null===t.offsetParent}var d=e("9884"),h=e("5fbe"),u="van-hairline",f=u+"--top-bottom",p=e("a8c1"),v=Object(n["a"])("tab")[1],m={props:{type:String,color:String,title:String,isActive:Boolean,ellipsis:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String,swipeThreshold:Number},computed:{style:function(){var t={},i=this.color,e=this.isActive,n="card"===this.type;i&&n&&(t.borderColor=i,this.disabled||(e?t.backgroundColor=i:t.color=i));var s=e?this.activeColor:this.inactiveColor;return s&&(t.color=s),this.scrollable&&this.ellipsis&&(t.flexBasis=88/this.swipeThreshold+"%"),t}},methods:{onClick:function(){this.$emit("click")},renderTitle:function(t){var i=this.$refs.title;i.innerHTML="",i.appendChild(t)}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:v({active:this.isActive,disabled:this.disabled,complete:!this.ellipsis}),style:this.style,on:{click:this.onClick}},[t("span",{ref:"title",class:{"van-ellipsis":this.ellipsis}},[this.title])])}},b=e("c31d"),g=e("3875"),x=Object(n["a"])("tabs"),C=x[0],k=x[1],y=50,w=C({mixins:[g["a"]],props:{count:Number,duration:Number,animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,i=this.deltaX,e=this.currentIndex;"horizontal"===t&&this.offsetX>=y&&(i>0&&0!==e?this.$emit("change",e-1):i<0&&e!==this.count-1&&this.$emit("change",e+1))},genChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:k("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){var t=arguments[0];return t("div",{class:k("content",{animated:this.animated}),on:Object(b["a"])({},this.listeners)},[this.genChildren()])}}),L=Object(n["a"])("sticky"),T=L[0],$=L[1],I=T({mixins:[Object(h["a"])(function(t){this.scroller||(this.scroller=Object(p["b"])(this.$el)),t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()})],props:{zIndex:Number,container:null,offsetTop:{type:Number,default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{style:function(){if(this.fixed){var t={};return Object(s["b"])(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTop&&this.fixed&&(t.top=this.offsetTop+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},methods:{onScroll:function(){var t=this;this.height=this.$el.offsetHeight;var i=this.container,e=this.offsetTop,n=Object(p["c"])(window),s=Object(p["a"])(this.$el),r=function(){t.$emit("scroll",{scrollTop:n,isFixed:t.fixed})};if(i){var a=s+i.offsetHeight;if(n+e+this.height>a){var o=this.height+n-a;return o<this.height?(this.fixed=!0,this.transform=-(o+e)):this.fixed=!1,void r()}}n+e>s?(this.fixed=!0,this.transform=0):this.fixed=!1,r()}},render:function(){var t=arguments[0],i=this.fixed,e={height:i?this.height+"px":null};return t("div",{style:e},[t("div",{class:$({fixed:i}),style:this.style},[this.slots()])])}}),S=Object(n["a"])("tabs"),O=S[0],_=S[1];i["a"]=O({mixins:[Object(d["b"])("vanTabs"),Object(h["a"])(function(t){t(window,"resize",this.setLine,!0)})],model:{prop:"active"},props:{color:String,sticky:Boolean,animated:Boolean,swipeable:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},border:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},duration:{type:Number,default:.3},offsetTop:{type:Number,default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:Number,default:4}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.currentName||this.active),this.setLine(),this.$nextTick(function(){t.scrollIntoView(!0)})},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&Object(p["d"])(Math.ceil(Object(p["a"])(this.$el)-this.offsetTop))}},mounted:function(){this.onShow()},activated:function(){this.onShow(),this.setLine()},methods:{onShow:function(){var t=this;this.$nextTick(function(){t.inited=!0,t.scrollIntoView(!0)})},setLine:function(){var t=this,i=this.inited;this.$nextTick(function(){var e=t.$refs.titles;if(e&&e[t.currentIndex]&&"line"===t.type&&!c(t.$el)){var n=e[t.currentIndex].$el,a=t.lineWidth,o=t.lineHeight,l=Object(s["b"])(a)?a:n.offsetWidth/2,d=n.offsetLeft+n.offsetWidth/2,h={width:Object(r["a"])(l),backgroundColor:t.color,transform:"translateX("+d+"px) translateX(-50%)"};if(i&&(h.transitionDuration=t.duration+"s"),Object(s["b"])(o)){var u=Object(r["a"])(o);h.height=u,h.borderRadius=u}t.lineStyle=h}})},setCurrentIndexByName:function(t){var i=this.children.filter(function(i){return i.computedName===t}),e=(this.children[0]||{}).index||0;this.setCurrentIndex(i.length?i[0].index:e)},setCurrentIndex:function(t){if(t=this.findAvailableTab(t),Object(s["b"])(t)&&t!==this.currentIndex){var i=null!==this.currentIndex;this.currentIndex=t,this.$emit("input",this.currentName),i&&this.$emit("change",this.currentName,this.children[t].title)}},findAvailableTab:function(t){var i=t<this.currentIndex?-1:1;while(t>=0&&t<this.children.length){if(!this.children[t].disabled)return t;t+=i}},onClick:function(t){var i=this.children[t],e=i.title,n=i.disabled,s=i.computedName;n?this.$emit("disabled",s,e):(this.setCurrentIndex(t),this.$emit("click",s,e))},scrollIntoView:function(t){var i=this.$refs.titles;if(this.scrollable&&i&&i[this.currentIndex]){var e=this.$refs.nav,n=i[this.currentIndex].$el,s=n.offsetLeft-(e.offsetWidth-n.offsetWidth)/2;o(e,s,t?0:this.duration)}},renderTitle:function(t,i){var e=this;this.$nextTick(function(){e.$refs.titles[i].renderTitle(t)})},onScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)}},render:function(){var t,i=this,e=arguments[0],n=this.type,s=this.ellipsis,r=this.animated,a=this.scrollable,o=this.children.map(function(t,r){return e(m,{ref:"titles",refInFor:!0,attrs:{type:n,title:t.title,color:i.color,isActive:r===i.currentIndex,ellipsis:s,disabled:t.disabled,scrollable:a,activeColor:i.titleActiveColor,inactiveColor:i.titleInactiveColor,swipeThreshold:i.swipeThreshold},on:{click:function(){i.onClick(r),Object(l["a"])(t.$router,t)}}})}),c=e("div",{ref:"wrap",class:[_("wrap",{scrollable:a}),(t={},t[f]="line"===n&&this.border,t)]},[e("div",{ref:"nav",attrs:{role:"tablist"},class:_("nav",[n]),style:this.navStyle},[this.slots("nav-left"),o,"line"===n&&e("div",{class:_("line"),style:this.lineStyle}),this.slots("nav-right")])]);return e("div",{class:_([n])},[this.sticky?e(I,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onScroll}},[c]):c,e(w,{attrs:{count:this.children.length,animated:r,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}})},"634a":function(t,i,e){t.exports=e.p+"h5/img/baokuan.6313c8c8.png"},"8a4e":function(t,i,e){"use strict";var n=e("8f94"),s=e.n(n);s.a},"8f94":function(t,i,e){},9884:function(t,i,e){"use strict";e.d(i,"a",function(){return r}),e.d(i,"b",function(){return a});var n=e("2b0e");function s(t){var i=[];function e(t){t.forEach(function(t){i.push(t),t.children&&e(t.children)})}return e(t),i}function r(t,i){var e,r;void 0===i&&(i={});var a=i.indexKey||"index";return n["default"].extend({inject:(e={},e[t]={default:null},e),computed:(r={parent:function(){return this.disableBindRelation?null:this[t]}},r[a]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},r),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter(function(i){return i!==t}))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),i=s(this.parent.slots());t.sort(function(t,e){return i.indexOf(t.$vnode)-i.indexOf(e.$vnode)}),this.parent.children=t}}}})}function a(t){return{provide:function(){var i;return i={},i[t]=this,i},data:function(){return{children:[]}}}}},ae9e:function(t,i,e){},b807:function(t,i,e){},bda7:function(t,i,e){"use strict";e("68ef"),e("ae9e"),e("b807")},ca41:function(t,i,e){"use strict";e.d(i,"a",function(){return s}),e.d(i,"c",function(){return r}),e.d(i,"b",function(){return a});var n=e("b775");function s(){return n["a"].get("/seckill/index",{},{login:!1})}function r(t,i){return n["a"].get("/seckill/list/"+t,i,{login:!1})}function a(t,i,e){return n["a"].get("/seckill/detail/"+t+"/"+i+"/"+e,{},{login:!1})}},da3c:function(t,i,e){"use strict";e("68ef"),e("f319")},f319:function(t,i,e){}}]);
//# sourceMappingURL=chunk-68fb707c.ce9e75e0.js.map