var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;e.register("7StVb",(function(t,n){var s,i,a,l;s=t.exports,i="Loader",a=function(){return o},Object.defineProperty(s,i,{get:a,set:l,enumerable:!0,configurable:!0});var r=e("6g8WH");class o{constructor(e,t){this.element=document.createElement("div"),this.container=e,this.cssClassName=t,this.interval=0,this.show()}startAnimation(){const e=this.element.querySelector(".loader").querySelectorAll("span");let t=1,n=!0;this.interval=setInterval((()=>{e.forEach((e=>{e.style.opacity=t})),n||(t+=.01,t>=1&&(n=!0)),n&&(t-=.01,t<=0&&(n=!1))}),10)}show(){this.element.classList.add(this.cssClassName),this.element.innerHTML=r.loaderMarcup,this.container.append(this.element),this.startAnimation()}hide(){clearInterval(this.interval),this.element.remove()}}}));
//# sourceMappingURL=loaderClass.bde24761.js.map
