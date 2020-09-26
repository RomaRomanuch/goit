import './styles.scss';
import fetchArticles from './js/fetch';

import updateMarkup from './js/markup';

const countryDomBlock = document.querySelector('.country');
const inputEl = document.querySelector('.search');

inputEl.addEventListener('input', e => {
  const val = e.target.value;
  countryDomBlock.innerHTML = '';
  fetchArticles(val).then(updateMarkup);
});
