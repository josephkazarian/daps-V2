(function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0212cc8c":"0bce61e5"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0212cc8c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0212cc8c":"7a56c8f6"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"051f":function(e,t,n){e.exports=n.p+"img/aktuelle_steuertext.f015c701.jpg"},"08d6":function(e,t,n){e.exports=n.p+"img/structureAndInterpretation.25399d7f.jpg"},"1ce6":function(e,t,n){e.exports=n.p+"img/arbeitsGesetze.808a8022.jpg"},"2bb2":function(e,t,n){"use strict";n("4b4c")},"3b2c":function(e,t,n){"use strict";n("bf5e")},"49f8":function(e,t,n){var r={"./de.json":"6ce2","./en.json":"edd4"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="49f8"},"4b4c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"container"};function a(e,t,n,a,c,i){var s=Object(r["A"])("navBar"),u=Object(r["A"])("router-view");return Object(r["t"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("h1",null,Object(r["C"])(e.lang),1),Object(r["i"])(s),Object(r["f"])("div",o,[Object(r["i"])(u)])],64)}var c=n("cf05"),i=n.n(c),s={class:"navbar navbar-expand-lg navbar-light rounded"},u=Object(r["g"])('<a class="navbar-brand" href="#"><img class="logo" src="'+i.a+'"><span class="logotext">Weed out school books</span></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse contents-right" id="navbarsExample09"><ul class="navbar-nav mr-auto"><li class="nav-item active"><a class="nav-link" href="/">Home</a></li><li class="nav-item"><a class="nav-link" href="#/login">Login</a></li></ul></div>',3),l=[u];function f(e,t,n,o,a,c){return Object(r["t"])(),Object(r["e"])("nav",s,l)}var d=Object(r["j"])({name:"navBar"}),p=(n("3b2c"),n("6b0d")),b=n.n(p);const g=b()(d,[["render",f]]);var m=g,v={name:"App",components:{navBar:m},mounted:function(){this.setLanguage()},methods:{setLanguage:function(){var e=JSON.parse(window.localStorage.getItem("i18n"))||"en";this.$i18n.locale=e}}};n("2bb2");const h=b()(v,[["render",a]]);var j=h,O=(n("d3b7"),n("3ca3"),n("ddb0"),n("e9c4"),{class:"home"}),k={class:"page-content"};function y(e,t,n,o,a,c){var i=Object(r["A"])("Books");return Object(r["t"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("h1",null,Object(r["C"])(e.$t("message")),1),Object(r["f"])("div",O,[Object(r["f"])("div",k,[Object(r["i"])(i)])])],64)}var w=function(e){return Object(r["w"])("data-v-d8487f1e"),e=e(),Object(r["u"])(),e},x=w((function(){return Object(r["f"])("h1",null,"Unsere aktuellen Bücher",-1)})),C={class:"container"},E={class:"img"},A=["href"],_=["src"],S={class:"title"},B=["href"];function P(e,t,o,a,c,i){return Object(r["t"])(),Object(r["e"])(r["a"],null,[x,Object(r["G"])(Object(r["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.searchtoken=t}),type:"text",placeholder:"Search.."},null,512),[[r["E"],e.searchtoken]]),Object(r["f"])("div",C,[(Object(r["t"])(!0),Object(r["e"])(r["a"],null,Object(r["z"])(e.filteredBooks,(function(e){return Object(r["t"])(),Object(r["e"])("div",{class:"item",key:e.ID},[Object(r["f"])("div",E,[Object(r["f"])("a",{href:"#/BooksDetails/"+e.ID},[Object(r["f"])("img",{src:n("b5e7")("./"+e.img)},null,8,_)],8,A)]),Object(r["f"])("div",S,[Object(r["f"])("a",{href:"#/BooksDetails/"+e.ID},[Object(r["f"])("h5",null,Object(r["C"])(e.Name),1),Object(r["f"])("h6",null,Object(r["C"])(e.Author),1)],8,B)])])})),128))])],64)}var L=n("1da1"),N=(n("4de4"),n("caad"),n("2532"),n("96cf"),n("d4ec")),I=n("bee2"),D=n("bc3a"),T=n.n(D),J="api/books/",U=function(){function e(){Object(N["a"])(this,e)}return Object(I["a"])(e,null,[{key:"getAllBooks",value:function(){return new Promise((function(e,t){T.a.get(J).then((function(t){var n=t.data;e(n)})).catch((function(e){t(e)}))}))}}]),e}(),z=U,M=Object(r["j"])({name:"BooksComponent",data:function(){return{searchtoken:"",booksJson:[]}},created:function(){var e=this;return Object(L["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,z.getAllBooks();case 3:e.booksJson=t.sent,t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message,console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()},computed:{filteredBooks:function(){var e=this;return this.booksJson.filter((function(t){return!!t.Name.toLowerCase().includes(e.searchtoken.toLowerCase())}))}}});n("8c67");const G=b()(M,[["render",P],["__scopeId","data-v-d8487f1e"]]);var H=G,F={name:"Home",components:{Books:H}};const q=b()(F,[["render",y]]);var R=q,$=n("6c02"),K=[{path:"/",redirect:"/en"},{path:"/:lang/",name:"Home",component:R},{path:"/login",name:"Login",component:function(){return n.e("chunk-0212cc8c").then(n.bind(null,"a55b"))}}],V=Object($["a"])({history:Object($["b"])(),routes:K});V.beforeEach((function(e,t,n){var r;null!==localStorage.getItem("i18n")&&(r=JSON.parse(window.localStorage.getItem("i18n"))),r!==e.params.lang?(window.localStorage.setItem("i18n",JSON.stringify(e.params.lang)),window.location.reload(!0)):n()}));var W=V,Z=(n("159b"),n("ac1f"),n("466d"),n("47e2"));function Q(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];t[o]=e(n).default}})),t}var X=Object(Z["a"])({legacy:!1,globalInjection:!0,locale:"en",fallbackLocale:"en",messages:Q()});Object(r["d"])(j).use(X).use(W).mount("#app")},"57f0":function(e,t,n){e.exports=n.p+"img/cProgramming.4f5d5900.jpg"},"5b9f":function(e,t,n){e.exports=n.p+"img/imtroduction to Algorithms.9fb94a26.jpg"},"6ce2":function(e,t,n){"use strict";n.r(t),t["default"]={message:e=>{const{normalize:t}=e;return t(["Grüß Gott i18n !!"])}}},"8c67":function(e,t,n){"use strict";n("96bb")},"96bb":function(e,t,n){},af19:function(e,t,n){e.exports=n.p+"img/cleanCode.f9cc96ae.jpg"},b5e7:function(e,t,n){var r={"./aktuelle_steuertext.jpg":"051f","./arbeitsGesetze.jpg":"1ce6","./cProgramming.jpg":"57f0","./cleanCode.jpg":"af19","./codeComplete.jpg":"e0a1","./designPatterns.jpg":"fb81","./imtroduction to Algorithms.jpg":"5b9f","./structureAndInterpretation.jpg":"08d6"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="b5e7"},bf5e:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.3dd8df4c.png"},e0a1:function(e,t,n){e.exports=n.p+"img/codeComplete.0b3f5d9a.jpg"},edd4:function(e,t,n){"use strict";n.r(t),t["default"]={message:e=>{const{normalize:t}=e;return t(["hello i18n !!"])}}},fb81:function(e,t,n){e.exports=n.p+"img/designPatterns.a8bb788f.jpg"}});
//# sourceMappingURL=app.73d16677.js.map