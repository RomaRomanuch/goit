import './styles.scss';
import fetchArticles from './js/fetch';
import updateMarkup from './js/markup';
import debounce from 'lodash.debounce';
import '@pnotify/core/dist/BrightTheme.css';

const countryDomBlock = document.querySelector('.country');
const inputEl = document.querySelector('.search');

inputEl.addEventListener(
  'input',
  debounce(e => {
    const val = e.target.value;
    countryDomBlock.innerHTML = '';
    fetchArticles(val).then(updateMarkup);
  }, 2000),
);
