(()=>{"use strict";var r,e,n,t,o,i,a,d,c,l,s,m,u,p,f={92:(r,e,n)=>{n.d(e,{Z:()=>d});var t=n(46),o=n.n(t),i=n(758),a=n.n(i)()(o());a.push([r.id,'*{\r\n    margin: 0;\r\n    padding: 0;\r\n    color: white;\r\n    background-color: #506042;\r\n}\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: .2fr 1fr;\r\n    grid-template-areas: \r\n    "side main main"\r\n    "side main main"\r\n    ;\r\n    min-height: 63.1rem;\r\n}\r\n/* ======================================Side Bar Content=========================================== */\r\n#sidebar{\r\n    grid-area: side;\r\n    border: .3rem solid blue;\r\n}\r\nheader{\r\n    font-size: 2rem\r\n}\r\n/* #create-new-list-btn-ctnr{\r\n    border: .3rem solid yellow;\r\n} */\r\n#sidebar-list-projects-ctnr{\r\n    border: .3rem solid purple;\r\n}\r\n/* #create-new-list-btn{\r\n    border: none; \r\n    padding: 1rem; \r\n    border-radius: 1rem; \r\n} */\r\n#sidebar-note-ctnr{\r\n    border: .3rem solid pink;\r\n}\r\n\r\n/* ========================================Dialog Box=============================================== */\r\n#dialog-form{\r\n    margin: 15rem 0rem 0rem 50rem;\r\n    border: .5rem solid white;\r\n    border-radius: 2rem;\r\n}\r\n\r\n#project-title-form{\r\n    border-radius: 2rem;\r\n    padding: 3rem 0rem 0rem 0rem;\r\n    font-size: 1rem;\r\n}\r\n#project-title-form .form-group{\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    padding: 1rem;\r\n}\r\n#project-title-form .form-group .title-form-title-label{\r\n    font-size: 3rem;\r\n}\r\n#project-title-form .form-group input{\r\n    padding: .5rem 1rem .5rem 1rem;\r\n    border: .2rem solid white;\r\n    border-radius: .5rem;\r\n}\r\n\r\n/* Buttons and ctnrs */\r\n#project-title-form #form-btn-ctnr{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr;\r\n    padding: 0rem 1rem 1rem 1rem;\r\n    border-radius: 3rem;\r\n}\r\n#project-title-form #form-btn-ctnr input{\r\n    border: 1rem transparent;\r\n    font-size: 2rem;\r\n    transition-duration: 0.4s;\r\n}\r\n#project-title-form #form-btn-ctnr input:hover{\r\n    color: green;\r\n}\r\n\r\n/* ======================================Main Content=============================================== */\r\n#main-content{\r\n    grid-area: main;\r\n    border: .3rem solid red;\r\n}\r\n\r\n#project-table-heading-ctnr{\r\n    margin: 4rem 0rem 1rem 0rem;\r\n    display: flex;\r\n\tflex-direction: row;\r\n\tflex-wrap: nowrap;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\talign-content: stretch;\r\n}\r\n#project-table-addButton{\r\n    padding: 1.2rem;\r\n    border: 1px solid white;\r\n}\r\n#add-to-project-dialog{\r\n    margin: 5rem 0rem 0rem 40rem;\r\n}\r\n#add-to-project-dialog::backdrop{\r\n    background-color: black;\r\n    opacity: .3;\r\n}\r\n\r\n#project-table{\r\n    width: 100%;    \r\n    /* display: none; */\r\n}\r\n#project-table th{\r\n    /* padding: 2rem 0rem 2rem 0rem; */\r\n    outline: .2rem solid blue;\r\n}\r\n#project-table #th1{\r\n    padding: 2rem 18rem 2rem 0rem;\r\n}\r\n/* ===========Switch CheckBox============== */\r\n',""]);const d=a},758:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n="",t=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),t&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=r(e),t&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(r,n,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<r.length;l++){var s=[].concat(r[l]);t&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},46:r=>{r.exports=function(r){return r[1]}},278:r=>{var e=[];function n(r){for(var n=-1,t=0;t<e.length;t++)if(e[t].identifier===r){n=t;break}return n}function t(r,t){for(var i={},a=[],d=0;d<r.length;d++){var c=r[d],l=t.base?c[0]+t.base:c[0],s=i[l]||0,m="".concat(l," ").concat(s);i[l]=s+1;var u=n(m),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var f=o(p,t);t.byIndex=d,e.splice(d,0,{identifier:m,updater:f,references:1})}a.push(m)}return a}function o(r,e){var n=e.domAPI(e);return n.update(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;n.update(r=e)}else n.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var d=n(i[a]);e[d].references--}for(var c=t(r,o),l=0;l<i.length;l++){var s=n(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=c}}},547:r=>{var e={};r.exports=function(r,n){var t=function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}e[r]=n}return e[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},593:r=>{r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},604:(r,e,n)=>{r.exports=function(r){var e=n.nc;e&&r.setAttribute("nonce",e)}},391:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=r.insertStyleElement(r);return{update:function(n){!function(r,e,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,r,e.options)}(e,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},784:r=>{r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}},g={};function b(r){var e=g[r];if(void 0!==e)return e.exports;var n=g[r]={id:r,exports:{}};return f[r](n,n.exports,b),n.exports}b.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return b.d(e,{a:e}),e},b.d=(r,e)=>{for(var n in e)b.o(e,n)&&!b.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},b.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),b.nc=void 0,r=b(278),e=b.n(r),n=b(391),t=b.n(n),o=b(547),i=b.n(o),a=b(604),d=b.n(a),c=b(593),l=b.n(c),s=b(784),m=b.n(s),u=b(92),(p={}).styleTagTransform=m(),p.setAttributes=d(),p.insert=i().bind(null,"head"),p.domAPI=t(),p.insertStyleElement=l(),e()(u.Z,p),u.Z&&u.Z.locals&&u.Z.locals,console.log("project-page"),function(){const r=document.getElementById("dialog-form"),e=document.getElementById("form-btn-submit"),n=document.getElementById("form-btn-close"),t=document.getElementById("project-title-form");let o=document.getElementById("project-title-input");const i=document.getElementById("project-table"),a=document.getElementById("project-table-addButton"),d=document.getElementById("add-to-project-dialog"),c=document.getElementById("add-to-project-form"),l=(document.getElementById("add-to-project-form-submit"),document.getElementById("add-to-project-btn-close")),s=document.getElementById("create-new-list-btn"),m=[];function u(r,e,n,t){return{title:r,listItem:e,dueDate:n,priority:t}}console.log(m),t.addEventListener("submit",(r=>{!function(){const r=new u(o.value,"TestItem","TestDate","TestPriority");var e;e=r,m.push(e),console.log(r)}(),i.style.display="table",console.log(m),r.preventDefault()})),a.addEventListener("click",(()=>{console.log("Im being clicked"),d.showModal()})),c.addEventListener("submit",(r=>{d.close(),r.preventDefault()})),l.addEventListener("click",(()=>{d.close(),console.log("Yo im being clicked")})),t.addEventListener("submit",(r=>{o.value=" "})),u.prototype.displayProjectList=function(){document.getElementById("main-content"),m.length},s.addEventListener("click",(function(){r.showModal()})),e.addEventListener("click",(function(){r.close()})),n.addEventListener("click",(function(){r.close()}))}()})();