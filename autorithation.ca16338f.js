function e(e){return e&&e.__esModule?e.default:e}var s=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;s.register("cK9oC",(function(t,n){var i=s("eyjy7"),d=s("2ix2C"),a=s("7Y9D8");const l=document.querySelector(".form"),c=document.querySelector(".js-signIn"),o=document.querySelector(".btn_form"),r=document.querySelector(".js-signUp"),u=document.querySelector(".backdrop_form"),f=document.querySelector(".js-modal-closeBtn"),m=document.querySelector(".Js-profileBtn"),h=document.querySelector(".Js-signUpBtn-heder"),y=document.querySelector(".js-profile-name"),L=document.querySelector(".js-logOutBtn-header");l.addEventListener("submit",(function(s){s.preventDefault();const t=s.currentTarget.elements.name.value,n=s.currentTarget.elements.email.value,c=s.currentTarget.elements.password.value,r=(0,i.getAuth)();if(g=t,""===c.value||""===n.value)alert("Всі поля повинні бути заповненні!");else if(o.classList.contains("Js-signIn-btn"))return(0,i.signInWithEmailAndPassword)(r,n,c).then((s=>{u.classList.add("is-hidden"),e(a).Notify.success(`\nWelcome back, ${t}`)})).catch((e=>console.log(e))).finally((()=>{l.reset()})),m.classList.remove("is-hidden"),y.textContent=t,h.classList.add("is-hidden"),L.classList.add("is-hidden"),void u.classList.add("is-hidden");(0,i.createUserWithEmailAndPassword)(r,n,c).then((e=>{const s=e.user.uid;(0,d.writeUserData)(s,t,n),m.classList.remove("is-hidden"),y.textContent=t,h.classList.add("is-hidden"),L.classList.add("is-hidden"),u.classList.add("is-hidden")})).catch((s=>{console.log(s.code),"auth/email-already-in-use"===s.code?e(a).Notify.failure("email already in use"):"auth/weak-password"===s.code&&e(a).Notify.failure("Weak password"),console.log(s.messag)})).finally((()=>{l.reset()}))})),c.addEventListener("click",(function(e){e.preventDefault(),o.classList.add("Js-signIn-btn"),o.textContent="SIGN IN",r.classList.remove("curent"),c.classList.add("curent")})),r.addEventListener("click",(function(e){e.preventDefault(),o.classList.remove("Js-signIn-btn"),o.textContent="SIGN UP",r.classList.add("curent"),c.classList.remove("curent")})),f.addEventListener("click",(function(){u.classList.add("is-hidden"),L.classList.contains("is-hidden")||L.classList.add("is-hidden")}));let g=""}));
//# sourceMappingURL=autorithation.ca16338f.js.map
