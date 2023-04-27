(()=>{"use strict";var r,e,n,t,o,i,a,s,c,d,l,u,m,p,f={92:(r,e,n)=>{n.d(e,{Z:()=>s});var t=n(46),o=n.n(t),i=n(758),a=n.n(i)()(o());a.push([r.id,'*{\r\n    margin: 0;\r\n    padding: 0;\r\n    color: white;\r\n    background-color: #506042;\r\n}\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: .2fr 1fr;\r\n    grid-template-areas: \r\n    "side main main"\r\n    "side main main"\r\n    ;\r\n    min-height: 63.1rem;\r\n}\r\n/* ======================================Side Bar Content=========================================== */\r\n#sidebar{\r\n    grid-area: side;\r\n    border: .3rem solid blue;\r\n}\r\nheader{\r\n    font-size: 2rem\r\n}\r\n/* #create-new-list-btn-ctnr{\r\n    border: .3rem solid yellow;\r\n} */\r\n#sidebar-list-projects-ctnr{\r\n    border: .3rem solid purple;\r\n}\r\n#create-new-list-btn{\r\n    /* border: none; */\r\n    /* padding: 1rem; */\r\n    /* border-radius: 1rem; */\r\n}\r\n#sidebar-note-ctnr{\r\n    border: .3rem solid pink;\r\n}\r\n\r\n/* ========================================Dialog Box=============================================== */\r\n#dialog-form{\r\n    margin: 15rem 0rem 0rem 50rem;\r\n    border: .5rem solid white;\r\n    border-radius: 2rem;\r\n}\r\n\r\n#project-title-form{\r\n    border-radius: 2rem;\r\n    padding: 3rem 0rem 0rem 0rem;\r\n    font-size: 1rem;\r\n}\r\n#project-title-form .form-group{\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    padding: 1rem;\r\n}\r\n#project-title-form .form-group .title-form-title-label{\r\n    font-size: 3rem;\r\n}\r\n#project-title-form .form-group input{\r\n    padding: .5rem 1rem .5rem 1rem;\r\n    border: .2rem solid white;\r\n    border-radius: .5rem;\r\n}\r\n\r\n/* Buttons and ctnrs */\r\n#project-title-form #form-btn-ctnr{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr;\r\n    padding: 0rem 1rem 1rem 1rem;\r\n    border-radius: 3rem;\r\n}\r\n#project-title-form #form-btn-ctnr button{\r\n    border: 1rem transparent;\r\n    font-size: 2rem;\r\n    transition-duration: 0.4s;\r\n}\r\n#project-title-form #form-btn-ctnr button:hover{\r\n    color: green;\r\n}\r\n\r\n/* ======================================Main Content=============================================== */\r\n#main-content{\r\n    grid-area: main;\r\n    border: .3rem solid red;\r\n}',""]);const s=a},758:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n="",t=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),t&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=r(e),t&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(r,n,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<r.length;d++){var l=[].concat(r[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},46:r=>{r.exports=function(r){return r[1]}},278:r=>{var e=[];function n(r){for(var n=-1,t=0;t<e.length;t++)if(e[t].identifier===r){n=t;break}return n}function t(r,t){for(var i={},a=[],s=0;s<r.length;s++){var c=r[s],d=t.base?c[0]+t.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var m=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=o(p,t);t.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(r,e){var n=e.domAPI(e);return n.update(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;n.update(r=e)}else n.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var c=t(r,o),d=0;d<i.length;d++){var l=n(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},547:r=>{var e={};r.exports=function(r,n){var t=function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}e[r]=n}return e[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},593:r=>{r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},604:(r,e,n)=>{r.exports=function(r){var e=n.nc;e&&r.setAttribute("nonce",e)}},391:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=r.insertStyleElement(r);return{update:function(n){!function(r,e,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,r,e.options)}(e,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},784:r=>{r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}},v={};function g(r){var e=v[r];if(void 0!==e)return e.exports;var n=v[r]={id:r,exports:{}};return f[r](n,n.exports,g),n.exports}g.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return g.d(e,{a:e}),e},g.d=(r,e)=>{for(var n in e)g.o(e,n)&&!g.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},g.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),g.nc=void 0,r=g(278),e=g.n(r),n=g(391),t=g.n(n),o=g(547),i=g.n(o),a=g(604),s=g.n(a),c=g(593),d=g.n(c),l=g(784),u=g.n(l),m=g(92),(p={}).styleTagTransform=u(),p.setAttributes=s(),p.insert=i().bind(null,"head"),p.domAPI=t(),p.insertStyleElement=d(),e()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals,console.log("Kill the Gods and Topple their Thrones"),document.getElementById("create-new-list-btn").addEventListener("click",(function(){}))})();