(() => {
const refs = {
    openMenuBtn: document.querySelector("[btn-menu-open]"),
    closeMenuBtn: document.querySelector("[btn-menu-close]"),
    Menu: document.querySelector("[data-menu]"),
};

refs.openMenuBtn.addEventListener("click", toggleMenu);
refs.closeMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    refs.Menu.classList.toggle("is-hidden");
    refs.openMenuBtn.classList.toggle("is-hidden");
    refs.closeMenuBtn.classList.toggle("is-hidden");

}

})();