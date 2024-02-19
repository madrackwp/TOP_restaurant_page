(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>b});var r=t(601),o=t.n(r),a=t(314),c=t.n(a),i=t(417),s=t.n(i),d=new URL(t(780),t.b),l=new URL(t(285),t.b),u=new URL(t(408),t.b),p=c()(o()),f=s()(d),m=s()(l),v=s()(u);p.push([n.id,`@font-face {\n  font-family: "Roboto";\n  src: url(${f});\n}\n@font-face {\n  font-family: "Roboto-Bold";\n  src: url(${m});\n}\n@font-face {\n  font-family: "Roboto-Italic";\n  src: url(${v});\n}\n\nhtml {\n  background-color: #3b3923;\n  color: #d17a22;\n  font-family: "Roboto", sans-serif;\n  padding: 0px;\n}\nbody {\n  margin: 0px;\n}\n\nheader {\n  background-color: #4c061d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nheader .nav-button {\n  display: flex;\n  flex-direction: row;\n}\n\n#restaurant-name {\n  display: flex;\n  padding: 5px;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n\n#restaurant-name img {\n  background: #ebffc7;\n  width: 100px;\n  margin: 0px 15px;\n}\n\n.nav_button {\n  font-family: "Roboto-Bold", sans-serif;\n  background-color: #d17a22;\n  border: none;\n  padding: 10px;\n  border-radius: 0px;\n  color: #b4c292;\n  margin: 0px 5px;\n}\n\n.main-tab {\n  background-color: #b4c292;\n  margin: 10px;\n  padding: 20px;\n  font-weight: bold;\n}\n\n.menu_tab_heading {\n}\n`,""]);const b=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},285:(n,e,t)=>{n.exports=t.p+"f80816a5455d171f948d.ttf"},408:(n,e,t)=>{n.exports=t.p+"87f3afe16a8c3c370634.ttf"},780:(n,e,t)=>{n.exports=t.p+"fc2b5060f7accec5cf74.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),c=t.n(a),i=t(56),s=t.n(i),d=t(540),l=t.n(d),u=t(113),p=t.n(u),f=t(208),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;const v=t.p+"730fea0be8ec7d3145a3.png";console.log("I am here!");const b=document.querySelectorAll(".nav_button");console.log(b),b[0].addEventListener("click",(n=>{n.preventDefault(),h.innerHTML="",h.appendChild(function(){const n=document.createElement("div");n.classList.add("main-tab"),n.id="menu_tab";for(let e=0;e<5;e++){let e=document.createElement("p");e.innerHTML="MENU CONTENT",n.appendChild(e)}return n}())})),b[1].addEventListener("click",(n=>{n.preventDefault(),h.innerHTML="",h.appendChild(function(){const n=document.createElement("div");n.classList.add("main-tab"),n.id="about_tab";for(let e=0;e<5;e++){let e=document.createElement("p");e.innerHTML="ABOUT CONTENT",n.appendChild(e)}return n}())})),b[2].addEventListener("click",(n=>{n.preventDefault(),h.innerHTML="",h.appendChild(function(){const n=document.createElement("div");n.classList.add("main-tab"),n.id="contact_tab";for(let e=0;e<5;e++){let e=document.createElement("p");e.innerHTML="CONTACT CONTENT",n.appendChild(e)}return n}())}));const h=document.getElementById("content");console.log(h);const g=document.getElementById("restaurant-name"),y=new Image;y.src=v,g.appendChild(y);const x=document.createElement("div");x.classList.add("main-tab"),x.id="about_tab";const T=document.createElement("div");T.classList.add("main-tab"),T.id="contact_tab"})()})();