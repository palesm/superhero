(function(e){function t(t){for(var n,u,i=t[0],c=t[1],l=t[2],s=0,d=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6e4b280c"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"05de":function(e,t,r){"use strict";var n=r("1416"),o=r.n(n);o.a},1416:function(e,t,r){},"17e7":function(e,t,r){"use strict";var n=r("571e"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view")],1)},a=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("h1",[e._v("Choose your hero")]),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])},i=[],c={name:"Header"},l=c,s=(r("05de"),r("2877")),p=Object(s["a"])(l,u,i,!1,null,"7b7a0caa",null),d=p.exports,f={name:"App",components:{Header:d}},h=f,m=(r("034f"),Object(s["a"])(h,o,a,!1,null,null,null)),v=m.exports,b=(r("d3b7"),r("8c4f")),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("SearchSuperhero"),r("Superheros")],1)},y=[],g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{on:{submit:e.searchSuperhero}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Search..."},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),r("input",{staticClass:"btn",attrs:{type:"submit",name:"Submit"}})])])},w=[],S={name:"SearchSuperhero",data:function(){return{title:""}},methods:{searchSuperhero:function(e){e.preventDefault(),console.log("submitoltál")}}},j=S,O=(r("17e7"),Object(s["a"])(j,g,w,!1,null,"24154382",null)),k=O.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.superheros,(function(t){return r("div",{key:t.id},[r("p",[e._v(" "+e._s(t.name)+": "+e._s(t.skill)+" "),e._v(" "+e._s(t.hired?"hired!":"")+" "),t.hired?e._e():r("button",{staticClass:"del",on:{click:function(r){return e.hireHero(t.id)}}},[e._v("Hire me")])])])})),0)},P=[],H=(r("d81d"),{data:function(){return{superheros:[{id:1,name:"backman",skill:"antisobriety",hired:!1},{id:2,name:"baba",skill:"sleep",hired:!1},{id:3,name:"zulcsimano",skill:"coding",hired:!1}]}},methods:{hireHero:function(e){this.superheros.map((function(t){t.id===e&&(t.hired="true")}))}}}),E=H,C=Object(s["a"])(E,x,P,!1,null,"dee39290",null),$=C.exports,T={name:"Home",components:{SearchSuperhero:k,Superheros:$}},A=T,M=Object(s["a"])(A,_,y,!1,null,null,null),J=M.exports;n["a"].use(b["a"]);var L=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],q=new b["a"]({routes:L}),z=q;n["a"].config.productionTip=!1,new n["a"]({router:z,render:function(e){return e(v)}}).$mount("#app")},"571e":function(e,t,r){},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.ac11ced2.js.map