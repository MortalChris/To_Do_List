(()=>{"use strict";var e,r,n,t,o,a,i,s,c,d,u,l,p,f,m={92:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(46),o=n.n(t),a=n(758),i=n.n(a)()(o());i.push([e.id,'*{\r\n    margin: 0;\r\n    padding: 0;\r\n    color: white;\r\n    background-color: #506042\r\n}\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: .2fr 1fr;\r\n    grid-template-areas: \r\n    "side main main"\r\n    "side main main"\r\n    ;\r\n    min-height: 63.1rem;\r\n}\r\n/* ======================================Side Bar Content=========================================== */\r\n#sidebar{\r\n    grid-area: side;\r\n    border: .3rem solid blue;\r\n}\r\nheader{\r\n    font-size: 2rem\r\n}\r\n#create-new-list-btn-ctn{\r\n    border: .3rem solid yellow;\r\n}\r\n#create-new-list-btn{\r\n    border: none;\r\n    /* padding: 1rem; */\r\n    border-radius: 1rem;\r\n}\r\n#sidebar-list-projects-ctn{\r\n    border: .3rem solid purple;\r\n}\r\n#sidebar-note-ctn{\r\n    border: .3rem solid pink;\r\n}\r\n/* ======================================Main Content=============================================== */\r\n#main-content{\r\n    grid-area: main;\r\n    border: .3rem solid red;\r\n}',""]);const s=i},758:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},46:e=>{e.exports=function(e){return e[1]}},278:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=t.base?c[0]+t.base:c[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var m=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);r[s].references--}for(var c=t(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=c}}},547:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},593:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},604:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},391:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},784:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},v={};function h(e){var r=v[e];if(void 0!==r)return r.exports;var n=v[e]={id:e,exports:{}};return m[e](n,n.exports,h),n.exports}h.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return h.d(r,{a:r}),r},h.d=(e,r)=>{for(var n in r)h.o(r,n)&&!h.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},h.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),h.nc=void 0,e=h(278),r=h.n(e),n=h(391),t=h.n(n),o=h(547),a=h.n(o),i=h(604),s=h.n(i),c=h(593),d=h.n(c),u=h(784),l=h.n(u),p=h(92),(f={}).styleTagTransform=l(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=d(),r()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,console.log("Kill the Gods and Topple their Thrones")})();