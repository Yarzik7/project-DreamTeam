var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;e.register("k75O6",(function(t,o){var n=e("3hFzq");const r=document.querySelector(".js-list-categories"),a=document.querySelector(".js-all-books"),s=document.querySelector(".js-category-name");(0,n.default)().then((e=>{const t=e.sort(((e,t)=>e.list_name.localeCompare(t.list_name)));r.insertAdjacentHTML("beforeend",t.map((({list_name:e})=>`<li class="categories__item">${e}</li>`)).join(""))})),r.addEventListener("click",(function(e){if("categories__item"!==e.target.classList[0])return;const t=e.target.textContent.split(" "),o=t.splice(0,t.length-1).join(" "),n=t.at(-1);s.textContent=o+" ",s.insertAdjacentHTML("beforeend",`<span class="category_name category__name--violet">${n}</span>`),r.querySelector(".categories__current").classList.remove("categories__current"),e.target.classList.add("categories__current"),s.scrollIntoView({behavior:"smooth"}),fetch("https://books-backend.p.goit.global/books/category?category="+e.target.textContent).then((e=>e.json())).then((e=>{a.innerHTML=function(e){return e.map((({author:e,book_image:t,title:o})=>`\n  <li class="category__book">\n    <img class="category__img" src="${t}" alt="${o}">\n    <h2 class="category__title">${o}</h2>\n    <h3 class="category__subtitle">${e}</h3>\n  </li>\n  `)).join("")}(e)}))}))})),e.register("3hFzq",(function(e,t){var o,n,r,a;o=e.exports,n="default",r=function(){return s},Object.defineProperty(o,n,{get:r,set:a,enumerable:!0,configurable:!0});var s=function(){return fetch("https://books-backend.p.goit.global/books/category-list").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}}));
//# sourceMappingURL=category.44402602.js.map
