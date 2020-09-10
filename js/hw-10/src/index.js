import './styles.css';
import menu from './menu.json';
import cardTemplate from './card.hbs';

const markup = cardTemplate(menu);

const listRef = document.querySelector('.js-menu');
listRef.insertAdjacentHTML('beforeend', markup);

// Code with theme

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const curTheme = localStorage.getItem('curTheme');
const parsedCurTheme = JSON.parse(curTheme);

const changeThemeEl = document.querySelector('.js-switch-input');
const bodyEl = document.querySelector('body');
const inputRef = document.querySelector('input.js-switch-input');

bodyEl.classList.add(Theme.LIGHT);
bodyEl.classList.add(parsedCurTheme);

if (bodyEl.classList.contains(Theme.DARK)) {
  inputRef.checked = true;
  bodyEl.classList.remove(Theme.LIGHT);
}

changeThemeEl.addEventListener('change', themeChange);
function themeChange() {
  if (bodyEl.classList.contains(Theme.LIGHT)) {
    bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('curTheme', JSON.stringify(Theme.DARK));
  } else {
    bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('curTheme', JSON.stringify(Theme.LIGHT));
  }
}
