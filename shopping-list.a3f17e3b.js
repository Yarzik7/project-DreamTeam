function t(t,e,s,n){Object.defineProperty(t,e,{get:s,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=s.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},s.parcelRequired7c6=i),i.register("kyEFX",(function(e,s){var n,o;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};n=function(t){for(var e=Object.keys(t),s=0;s<e.length;s++)i[e[s]]=t[e[s]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("lVc5g",(function(t,s){var n=i("4PVUM"),o=i("e5EMj"),r=i("kSibX"),l=i("2iOZk"),a=i("8zDEN"),p=i("3KaUB"),c=i("dZQ1Q"),h=i("8EpWk");const _=document.querySelector(".shoplist__cards"),g=document.querySelector(".shoplist-info"),u=document.querySelector(".shoplist-title");let d=n.default.load("books"),m=1,f=d.length,b=getPagination(f,3);function k(t,s=1){const n=3*(s-1),i=n+3;let d=t.slice(n,i);if(d.length){g.classList.remove("js-empty"),u.style.marginBottom="",removeEventListener("click",v);const t=d.map((({_id:t,book_image:s,author:n,book_image_width:i,book_image_height:_,title:g,list_name:u,description:d,buy_links:[m,f,,,b]})=>`<li class="shopinlist__card data-id="${t}">\n\t\t\t\t\t<div class="shopinlist__block">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class="shopinlist__thumb">\n\t\t\t\t\t\t\t\t<img src="${s}" alt="${u}" class="shopinlist__book-img" width="${i}" height="${_}" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p class="shopinlist__book-author">${n}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="shopinlist__wrap">\n\t\t\t\t\t\t\t<h2 class="shopinlist__title">${g}</h2>\n\t\t\t\t\t\t\t<p class="shopinlist__category">${function(t){if(window.innerWidth<=768)return t.length>20?t.substring(0,20)+"...":t;return t}(u)}</p>\n\t\t\t\t\t\t\t<p class="shopinlist__book-description--tablet">${d}</p>\n\t\t\t\t\t\t\t<ul class="shopinlist__shops">\n\t\t\t\t\t\t\t\t<li class="shopinlist__shop">\n\t\t\t\t\t\t\t\t\t<a href="${m.url}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Amazon-book site">\n\t\t\t\t\t\t\t\t\t<img srset="${e(r)} 1x, ${e(l)} 2x" src="${e(r)}" alt="${m.name}" class="shopinlist__shop-img" width="48" height="15" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="shopinlist__shop">\n\t\t\t\t\t\t\t\t\t<a href="${f.url}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Apple-book site">\n\t\t\t\t\t\t\t\t\t<img srset="${e(a)} 1x, ${e(p)} 2x" src="${e(a)}" alt="${f.name}" class="shopinlist__shop-img" width="28" height="27" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="shopinlist__shop">\n\t\t\t\t\t\t\t\t\t<a href="${b.url}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Book-shop site">\n\t\t\t\t\t\t\t\t\t<img srset="${e(c)} 1x, ${e(h)} 2x" src="${e(c)}" alt="${b.name}" class="shopinlist__shop-img" width="32" height="30" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class="shopinlist__wrap-shops--tablet">\n\t\t\t\t\t\t\t<p class="shopinlist__bookauthor--tablet">${n}</p>\n\t\t\t\t\t\t\t<ul class="shopinlist__shops--tablet">\n\t\t\t\t\t\t\t\t<li class="shopinlist__shop">\n\t\t\t\t\t\t\t\t\t<a href="${m.url}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Amazon-book site">\n\t\t\t\t\t\t\t\t\t<img srset="${e(r)} 1x, ${e(l)} 2x" src="${e(r)}" alt="${m.name}" class="shopinlist__shop-img" width="48" height="15" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="shopinlist__shop">\n\t\t\t\t\t\t\t\t\t<a href="${f.url}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Apple-book site">\n\t\t\t\t\t\t\t\t\t<img srset="${e(a)} 1x, ${e(p)} 2x" src="${e(a)}" alt="${f.name}" class="shopinlist__shop-img" width="28" height="27" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="shopinlist__shop">\n\t\t\t\t\t\t\t\t\t<a href="${b.url}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Book-shop site">\n\t\t\t\t\t\t\t\t\t<img srset="${e(c)} 1x, ${e(h)} 2x" src="${e(c)}" alt="${b.name}" class="shopinlist__shop-img" width="32" height="30" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type="button" class="shopinlist__btn" arial-label="Delete the book from shopping list">\n\t\t\t\t\t\t<svg class="shopinlist__btn-icon" width="15" height="15">\n\t\t\t\t\t\t\t<use href="${e(o)}#icon-dump"></use>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</button\n\t\t\t\t\t<p class="shopinlist__book-description">${d}</p>\n\t\t\t</li>`)).join("");_.innerHTML=t,console.log(t),_.addEventListener("click",v)}else _.innerHTML="",g.classList.add("js-empty"),u.style.marginBottom="140px"}function v(t){const e=t.target.closest(".shopinlist__btn"),s=b.getCurrentPage();if(!e)return;const o=e.closest(".shopinlist__btn").closest(".shopinlist__card").dataset.id.trim(),i=d.findIndex((t=>t._id===o));d.splice(i,1),n.default.save(books,d),f=d.length,b.setTotalItems(f),b.movePageTo(s),0===_.childNodes.length&&b.movePageTo(m-1)}b.on("beforeMove",(t=>{m=t.page,k(d,t.page)})),k(d,m)})),i.register("4PVUM",(function(e,s){t(e.exports,"default",(function(){return n}));var n={save:(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItems(t,s)}catch(t){console.error("Set stutus error:",t.message)}},load:t=>{try{const e=localStorage.getItem(t);return null===e?[]:JSON.parse(e)}catch(t){console.error("Get stutus error:",t.message)}},remove:t=>{try{localStorage.removeItem(t)}catch(t){console.error("Remove stutus error:",t.message)}}}})),i.register("e5EMj",(function(t,e){t.exports=new URL(i("kyEFX").resolve("lp5u4"),import.meta.url).toString()})),i.register("kSibX",(function(t,e){t.exports=new URL(i("kyEFX").resolve("1StS0"),import.meta.url).toString()})),i.register("2iOZk",(function(t,e){t.exports=new URL(i("kyEFX").resolve("igOR5"),import.meta.url).toString()})),i.register("8zDEN",(function(t,e){t.exports=new URL(i("kyEFX").resolve("cLJUC"),import.meta.url).toString()})),i.register("3KaUB",(function(t,e){t.exports=new URL(i("kyEFX").resolve("38YEC"),import.meta.url).toString()})),i.register("dZQ1Q",(function(t,e){t.exports=new URL(i("kyEFX").resolve("iYgR8"),import.meta.url).toString()})),i.register("8EpWk",(function(t,e){t.exports=new URL(i("kyEFX").resolve("kLMPf"),import.meta.url).toString()})),i("kyEFX").register(JSON.parse('{"7uvQu":"shopping-list.a3f17e3b.js","lp5u4":"sprite.43e5eb8e.svg","1StS0":"amazon1x.b8fa90cb.png","igOR5":"amazon2x.edefe29e.png","cLJUC":"apple1x.5a9f17e3.png","38YEC":"apple2x.54474d7d.png","iYgR8":"bookshop1x.91914384.png","kLMPf":"bookshop2x.fbbde057.png"}')),i("lVc5g");
//# sourceMappingURL=shopping-list.a3f17e3b.js.map