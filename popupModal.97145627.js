!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;n.register("5uR6A",(function(t,o){var r=n("bpxeT"),s=n("2TvXO"),i=n("5McxV"),c=n("bzkjO"),a=new(0,i.AxiosApi),u="books",l=document.createElement("div");l.classList.add("backdrop");var p=document.querySelector(".js-all-books"),d=JSON.parse(localStorage.getItem(u))||[],f=null,v=function(){try{var e;return null!==(e=JSON.parse(localStorage.getItem(u)))&&void 0!==e?e:[]}catch(e){return console.error(e),[]}},g=function(e){"Escape"===e.key&&(document.body.removeChild(l),document.body.style.overflow="visible",document.removeEventListener("keydown",g))};function b(){return(b=e(r)(e(s).mark((function t(n){var o,r,i,u;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.parentElement.classList.contains("js-book")){e.next=3;break}return e.abrupt("return");case 3:return f=n.target.parentElement.dataset.id,document.addEventListener("keydown",g),o=_(f)?"REMOVE FROM THE SHOPPING LIST":"ADD TO SHOPPING LIST",e.prev=6,e.next=9,a.getShops(f);case 9:r=e.sent,i=r.data,l.innerHTML=(0,c.createPopupCard)(i,o),u=l.querySelector(".pop-up__congratulations"),_(f)?u.classList.remove("hidden"):u.classList.add("hidden"),document.body.appendChild(l),document.body.style.overflow="hidden",l.querySelector(".js-add-storage").addEventListener("click",(function(e){x(f,e)})),l.querySelector(".js-popup-close").addEventListener("click",h),l.addEventListener("click",m),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(6),console.log(e.t0);case 26:case"end":return e.stop()}}),t,null,[[6,23]])})))).apply(this,arguments)}function h(e){e.target&&(document.body.removeChild(l),document.body.style.overflow="visible",document.removeEventListener("keydown",g))}function m(e){e.target.classList.contains("backdrop")&&(document.body.removeChild(l),document.body.style.overflow="visible",document.removeEventListener("keydown",g))}function x(e,t){t.target.blur();var n=l.querySelector(".pop-up__congratulations");if(_(e))return console.log(e),n.classList.add("hidden"),function(e){console.log(e);var t=v().filter((function(t){return t!==e}));console.log(t),localStorage.setItem(u,JSON.stringify(t)),d=[]}(e),t.target.textContent="ADD TO SHOPPING LIST",void console.log("its evtTargetTextCont: ",t.target.textContent);n.classList.remove("hidden"),d.push(e),localStorage.setItem(u,JSON.stringify(d)),t.target.textContent="REMOVE FROM THE SHOPPING LIST"}function _(e){return v().includes(e)}p.addEventListener("click",(function(e){return b.apply(this,arguments)}))})),n.register("5McxV",(function(o,r){t(o.exports,"AxiosApi",(function(){return f}));var s=n("bpxeT"),i=n("8MBJY"),c=n("4KMWL"),a=n("8MQK7"),u=n("a2hTj"),l=n("2TvXO"),p=n("dIxxU"),d=new WeakMap,f=function(){"use strict";function t(){e(i)(this,t),e(a)(this,d,{writable:!0,value:"https://books-backend.p.goit.global/books/"})}return e(u)(t,[{key:"getShops",value:function(t){var n=this;return e(s)(e(l).mark((function o(){var r,s;return e(l).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r="".concat(e(c)(n,d)).concat(t),o.next=3,p.default.get(r);case 3:return s=o.sent,o.abrupt("return",s);case 5:case"end":return o.stop()}}),o)})))()}}]),t}()})),n.register("4KMWL",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var n=o.default(e,t,"get");return r.default(e,n)};var o=s(n("1UHsN")),r=s(n("ffZzF"));function s(e){return e&&e.__esModule?e:{default:e}}})),n.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),n.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),n.register("8MQK7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){r.default(e,t),t.set(e,n)};var o,r=(o=n("5k7tO"))&&o.__esModule?o:{default:o}})),n.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),n.register("bzkjO",(function(e,o){t(e.exports,"createPopupCard",(function(){return i}));var r=n("f2cuJ"),s=["Amazon","Apple Books","Bookshop"];function i(e,t){var o,i=e.author,c=e.book_image,a=e.title,u=e.buy_links,l=e.description;return'\n      <div class="pop-up scrollable">\n        <div class="pop-up__book-info">\n          <img class="pop-up__img" src="'.concat(c,'" alt="').concat(a,'">\n          <div class="pop-up__description">\n            <h2 class="pop-up__book-name">').concat(a,'</h2>\n            <h2 class="pop-up__book-author">').concat(i,'</h2>\n            <p class="pop-up__review">').concat(l,'</p>\n            <ul class="stores-list">').concat((o=u,s.map((function(e){return o.find((function(t){return t.name===e}))})).map((function(e,t){var n=e.name,o=e.url;return'\n      <li class="stores-list__item">\n        <a href="'.concat(o,'" target="_blank" rel="noopener noreferrer nofollow">\n          <img class="stores-img" src="').concat(new URL(r.bookShopsIcons[t].x1,"file:///src/js/popup/marcupForPopUp.js"),'" alt="').concat(n,'" width="').concat(r.bookShopsIcons[t].width,'" height="').concat(r.bookShopsIcons[t].height,'">\n        </a>\n      </li>')})).join("")),'</ul>\n          </div>\n        </div>\n        <div class="pop-up__btn">\n        <button class="action-button pop-up__action-button js-add-storage">').concat(t,'</button>\n        <p class="pop-up__congratulations">Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>\n        </div>\n        <button class="js-popup-close close-button" type="button">\n          <img src="').concat(new URL(n("42XSP")),'" width="24" height="24">\n        </button>\n      </div>')}})),n.register("f2cuJ",(function(o,r){t(o.exports,"bookShopsIcons",(function(){return v}));var s,i,c=n("hKHmD"),a=n("cSQbQ"),u=n("8jOvI"),l=n("cjHuq"),p=n("6o5Bf"),d=n("aCKdv"),f=n("30cjN"),v=[{x1:e(a),x2:e(u),width:"62",height:"19"},(s={x1:e(l)},e(c)(s,"x1",e(p)),e(c)(s,"width","33"),e(c)(s,"height","32"),s),(i={x1:e(d)},e(c)(i,"x1",e(f)),e(c)(i,"width","38"),e(c)(i,"height","36"),i)]})),n.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),n.register("cSQbQ",(function(e,t){e.exports=n("aNJCr").getBundleURL("6XpB3")+n("iE7OH").resolve("85TVO")})),n.register("8jOvI",(function(e,t){e.exports=n("aNJCr").getBundleURL("6XpB3")+n("iE7OH").resolve("l4LHY")})),n.register("cjHuq",(function(e,t){e.exports=n("aNJCr").getBundleURL("6XpB3")+n("iE7OH").resolve("1W9xN")})),n.register("6o5Bf",(function(e,t){e.exports=n("aNJCr").getBundleURL("6XpB3")+n("iE7OH").resolve("bRKWQ")})),n.register("aCKdv",(function(e,t){e.exports=n("aNJCr").getBundleURL("6XpB3")+n("iE7OH").resolve("3Kvit")})),n.register("30cjN",(function(e,t){e.exports=n("aNJCr").getBundleURL("6XpB3")+n("iE7OH").resolve("2bgCQ")})),n.register("42XSP",(function(e,t){e.exports=n("aNJCr").getBundleURL("6XpB3")+n("iE7OH").resolve("c4Fq2")}))}();
//# sourceMappingURL=popupModal.97145627.js.map
