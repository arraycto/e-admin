(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"0519":function(e,t,n){var a,i,o;(function(l,c){i=[t,n("9b19")],a=c,o="function"===typeof a?a.apply(t,i):a,void 0===o||(e.exports=o)})("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(e,t){"use strict";var a=n("676a");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=a(t);var i=[{title:"开发指南",icon:"el-icon-s-promotion",children:[{title:"安装",path:"/install",icon:"iconfont icon-install"},{title:"vue-router",path:"/router",icon:"iconfont icon-router"},{title:"vuex",path:"/vuex",icon:"iconfont icon-vue"}]},{title:"组件",icon:"el-icon-s-grid",children:[{title:"admin",group:!0,children:[{title:"框架",path:"/admin",icon:"iconfont icon-layout"},{title:"头部组件",path:"/header",icon:"iconfont icon-header"},{title:"标签栏",path:"/tabs",icon:"iconfont icon-tabs"},{title:"导航菜单",path:"/nav-menu",icon:"iconfont icon-side"},{title:"Logo组件",path:"/logo",src:t.default},{title:"页面组件",path:"/view",icon:"iconfont icon-view"}]},{title:"image",group:!0,children:[{title:"Image",path:"/image",icon:"el-icon-picture"},{title:"ImageDialog",path:"/image-dialog",icon:"el-icon-picture-outline"},{title:"ImageDialogTest",path:"/image-dialog",visible:!1,icon:"el-icon-picture-outline"}]},{title:"其他",group:!0,children:[{title:"Affix 图钉",path:"/affix",icon:"iconfont icon-affix"}]}]},{title:"错误页面",icon:"el-icon-warning",children:[{title:"404",path:"/error/404"},{title:"403",path:"/error/403"}]}];e.default=i}))},"051a":function(e,t,n){var a,i,o;(function(l,c){i=[t,n("b7a4")],a=c,o="function"===typeof a?a.apply(t,i):a,void 0===o||(e.exports=o)})("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(e,t){"use strict";var a=n("676a");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=a(t);var i={name:"Intro",components:{introMd:t.default},props:{},watch:{},data:function(){return{}},computed:{},methods:{},created:function(){},mounted:function(){}};e.default=i}))},"075f":function(e,t,n){"use strict";var a=n("68c3"),i=n.n(a);i.a},"0a80":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ea-view",{staticClass:"ea-document",attrs:{center:""}},[n("intro-md",[n("el-button",[e._v("默认按钮")])],1)],1)},i=[];n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}))},"31fe":function(e,t,n){"use strict";n.r(t);var a=n("9be4"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"50ad":function(e,t,n){"use strict";n.r(t);var a=n("051a"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"68c3":function(e,t,n){},"6be5":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ea-admin",{scopedSlots:e._u([{key:"header",fn:function(){return[n("ea-header",{attrs:{collapse:e.headerCollapse,notice:e.notice,fullscreen:e.fullscreen,"nav-data":e.headerNavData,user:e.user},on:{"update:collapse":function(t){e.headerCollapse=t},command:e.handleCommand}},[n("div",{staticStyle:{flex:"1"}}),n("div",{staticClass:"ea-hover"},[n("a",{staticClass:"iconfont icon-github",attrs:{target:"_blank",href:"https://github.com/akebe/e-admin"}})])])]},proxy:!0},{key:"tabs",fn:function(){return[n("ea-tabs",{attrs:{collapse:e.tabsCollapse,"nav-data":e.tabsNavData},on:{"update:collapse":function(t){e.tabsCollapse=t}}})]},proxy:!0},{key:"side",fn:function(){return[e.logoVisible?n("ea-logo",{attrs:{name:"e-admin",logo:e.logo,"logo-type":"image"}}):e._e(),n("ea-nav-menu",{attrs:{router:"",data:e.navData},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}})]},proxy:!0}])})},i=[];n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}))},"9b19":function(e,t,n){e.exports=n.p+"img/logo.a15d32df.svg"},"9be4":function(e,t,n){var a,i,o;(function(l,c){i=[t,n("0519"),n("9b19"),n("4360")],a=c,o="function"===typeof a?a.apply(t,i):a,void 0===o||(e.exports=o)})("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(e,t,a,i){"use strict";var o=n("676a");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=o(t),a=o(a),i=o(i);var l={name:"Index",components:{},props:{},watch:{},data:function(){return{user:i.default.user,unread:10,collapse:!1,active:"",logo:a.default,navData:t.default,tabsCollapseActive:!0,tabsNavDataActive:!0,notice:"",headerCollapseActive:!1,fullscreen:!0,headerNavDataActive:!0,logoVisible:!0}},computed:{tabsCollapse:{get:function(){return this.tabsCollapseActive?this.$ea.config.collapse:"false"},set:function(e){this.$ea.config.collapse=e}},tabsNavData:function(){return this.tabsNavDataActive?t.default:[]},headerCollapse:{get:function(){return this.headerCollapseActive?this.$ea.config.collapse:"false"},set:function(e){this.$ea.config.collapse=e}},headerNavData:function(){return this.headerNavDataActive?t.default:[]}},methods:{handleCommand:function(e){switch(e){case"me":this.$message.warning("未实现");break;case"setting":this.$message.warning("未实现");break;case"logout":i.default.user={name:"",id:""},this.$message.success("已退出"),localStorage.setItem("document_user",JSON.stringify(i.default.user)),this.$router.push("/login");break}}},created:function(){},mounted:function(){}};e.default=l}))},b7a4:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown"},[n("h1",[e._v("e-admin")]),n("p",[e._v("基于 "),n("a",{attrs:{href:"https://github.com/ElemeFE/element"}},[e._v("element")]),e._v(" 封装的即开即用渐进式中后台组件库"),n("br"),e._v("当前文档项目通过"),n("code",[e._v("e-admin")]),e._v("搭建")]),n("h4",[e._v("快速上手")]),n("p",[e._v("请参考 "),n("a",{attrs:{href:"#/install"}},[e._v("安装")])])])}],o=n("4e82"),l={},c=Object(o["a"])(l,a,i,!1,null,null,null);t["default"]=c.exports},ba18:function(e,t,n){"use strict";n.r(t);var a=n("0a80"),i=n("50ad");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var l=n("4e82"),c=Object(l["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},d504:function(e,t,n){"use strict";n.r(t);var a=n("6be5"),i=n("31fe");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("075f");var l=n("4e82"),c=Object(l["a"])(i["default"],a["a"],a["b"],!1,null,"409a2f05",null);t["default"]=c.exports}}]);
//# sourceMappingURL=index.f5a3a537.js.map