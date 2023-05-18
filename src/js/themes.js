export { setTheme, activateThemeSwitch };

const storageKeyLibrary = 'isDark';
const switchClass = 'js-theme-switch';

const checkboxBtn = document.querySelector(`.${switchClass}`);

function activateThemeSwitch(event, pageEl) {
  const isInput = event.target.classList.contains(switchClass);
  if (isInput) {
    const checkboxBtn = event.target;
    changeTheme(pageEl, checkboxBtn);
  }
}

function changeTheme(pageEl) {
  if (checkboxBtn.checked) {
    localStorage.setItem(storageKeyLibrary, 'true');
    setTheme(pageEl, checkboxBtn);
  }
  if (!checkboxBtn.checked) {
    localStorage.removeItem(storageKeyLibrary);
    setTheme(pageEl, checkboxBtn);
  }
}

function setTheme(pageEl) {
  if (localStorage.getItem(storageKeyLibrary)) {
    pageEl.setAttribute('page-theme', 'dark');
    checkboxBtn.checked = true;
  } else {
    pageEl.setAttribute('page-theme', 'light');
    checkboxBtn.checked = false;
  }
}