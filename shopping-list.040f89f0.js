!function(){function e(e,r,n,t){Object.defineProperty(e,r,{get:n,set:t,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,r){t[e]=r},r.parcelRequired7c6=o),o.register("iE7OH",(function(r,n){var t,o;e(r.exports,"register",(function(){return t}),(function(e){return t=e})),e(r.exports,"resolve",(function(){return o}),(function(e){return o=e}));var c={};t=function(e){for(var r=Object.keys(e),n=0;n<r.length;n++)c[r[n]]=e[r[n]]},o=function(e){var r=c[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),o.register("6TbEw",(function(r,n){e(r.exports,"changeCurrentPageOnHomePage",(function(){return i})),e(r.exports,"changeCurrentPageOnShoppingList",(function(){return s}));var t=document.querySelector(".js-link-home"),o=document.querySelector(".js-link-shoppingList"),c=document.querySelector(".js-link-home-mobile"),a=document.querySelector(".js-link-shoppingList-mobile");function i(){t.classList.add("current-page"),o.classList.remove("current-page"),c.classList.add("current-page"),a.classList.remove("current-page")}function s(){t.classList.remove("current-page"),o.classList.add("current-page"),c.classList.remove("current-page"),a.classList.add("current-page")}})),o.register("gGcLX",(function(r,n){e(r.exports,"setTheme",(function(){return i})),e(r.exports,"activateThemeSwitch",(function(){return a}));var t="isDark",o="js-theme-switch",c=document.querySelector(".".concat(o));function a(e,r){if(e.target.classList.contains(o)){e.target;!function(e){c.checked&&(localStorage.setItem(t,"true"),i(e));c.checked||(localStorage.removeItem(t),i(e))}(r)}}function i(e){localStorage.getItem(t)?(e.setAttribute("page-theme","dark"),c.checked=!0):(e.setAttribute("page-theme","light"),c.checked=!1)}})),o.register("bgY8A",(function(e,r){e.exports=Promise.all([o("5FrBL")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("i3zQN")),o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("eDtMv"))]).then((function(){return o("xpKCW")}))})),o.register("5FrBL",(function(e,r){"use strict";var n=o("2prpb");e.exports=n((function(e){return new Promise((function(r,n){var t=document.getElementsByTagName("link");if([].concat(t).some((function(r){return r.href===e&&r.rel.indexOf("stylesheet")>-1})))r();else{var o=document.createElement("link");o.rel="stylesheet",o.href=e,o.onerror=function(e){o.onerror=o.onload=null,o.remove(),n(e)},o.onload=function(){o.onerror=o.onload=null,r()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),o.register("2prpb",(function(e,r){"use strict";var n={},t={},o={};function c(e){switch(e){case"preload":return t;case"prefetch":return o;default:return n}}e.exports=function(e,r){return function(n){var t=c(r);return t[n]?t[n]:t[n]=e.apply(null,arguments).catch((function(e){throw delete t[n],e}))}}})),o.register("aNJCr",(function(r,n){var t;e(r.exports,"getBundleURL",(function(){return t}),(function(e){return t=e}));var o={};function c(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t=function(e){var r=o[e];return r||(r=function(){try{throw new Error}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return c(e[2])}return"/"}(),o[e]=r),r}})),o.register("4WKyX",(function(e,r){"use strict";var n=o("2prpb");e.exports=n((function(e){return new Promise((function(r,n){var t=document.getElementsByTagName("script");if([].concat(t).some((function(r){return r.src===e})))r();else{var o=document.createElement("link");o.href=e,o.rel="preload",o.as="script",document.head.appendChild(o);var c=document.createElement("script");c.async=!0,c.type="text/javascript",c.charset="utf-8",c.src=e,c.onerror=function(r){var t=new TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(r.message));c.onerror=c.onload=null,c.remove(),n(t)},c.onload=function(){c.onerror=c.onload=null,r()},document.getElementsByTagName("head")[0].appendChild(c)}}))}))})),o.register("fXxE2",(function(e,r){e.exports=Promise.all([o("5FrBL")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("4SJ1l")),o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("bO6qu")),o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("7CwvE")),o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("iAYH4"))]).then((function(){return o("aqJoK")}))})),o.register("dBZNm",(function(e,r){e.exports=Promise.all([o("5FrBL")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("4SJ1l")),o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("bO6qu")),o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("7CwvE"))]).then((function(){return o("jcFG7")}))})),o.register("41jT1",(function(e,r){e.exports=o("4WKyX")(o("aNJCr").getBundleURL("heHZr")+o("iE7OH").resolve("fi3LA")).then((function(){return o("gM4a7")}))})),o("iE7OH").register(JSON.parse('{"heHZr":"shopping-list.040f89f0.js","eDtMv":"support.ad1724f7.js","kPMTf":"savethechildren.afa9e55b.png","lWQrY":"savethechildren2x.688b6dc7.png","9bJh5":"projecthope.6b951dc9.png","dnJ9O":"projecthope2x.ee6ab1e6.png","7PqWD":"united24.7e58352b.png","gLfU2":"united242x.d41967f5.png","bDEKz":"internationalmedicalcorps.38e7f653.png","h3rcd":"internationalmedicalcorps2x.2c438457.png","6PsTP":"medicinssansfrontieres.9cc61963.png","e8Kfc":"medicinssansfrontieres2x.33a97fc1.png","fB4Oq":"razom.61fc7ccd.png","bTbqa":"razom2x.49347143.png","9vVWc":"actionagainsthunger.2a8c3c0d.png","bbTus":"actionagainsthunger2x.68b93551.png","95CMb":"worldvision.544fa60d.png","jPv5b":"worldvision2x.01220224.png","kKuAN":"serhiyprytulacharityfoundation.69cae55e.png","1S0jP":"serhiyprytulacharityfoundation2x.b3afcdef.png","i3zQN":"support.f0fe09a9.css","iAYH4":"shoplist.37a426bb.js","4SJ1l":"shoplist.9895f7af.css","7CwvE":"pagination.51e6141f.js","ee16w":"sprite.63fae945.svg","85TVO":"amazon1x.b8fa90cb.png","l4LHY":"amazon2x.edefe29e.png","1W9xN":"apple1x.5a9f17e3.png","bRKWQ":"apple2x.54474d7d.png","3Kvit":"bookshop1x.91914384.png","2bgCQ":"bookshop2x.fbbde057.png","bO6qu":"popupModal.41bc08e6.js","fi3LA":"burgerMenu.1e1bef3d.js"}'));var c=o("6TbEw"),a=o("gGcLX");o("bgY8A"),o("fXxE2"),o("dBZNm"),o("41jT1"),Promise.resolve(o("gGcLX")),(0,c.changeCurrentPageOnShoppingList)();var i=document.querySelector("html");(0,a.setTheme)(i),i.addEventListener("click",(function(e){(0,a.activateThemeSwitch)(e,i)}))}();
//# sourceMappingURL=shopping-list.040f89f0.js.map
