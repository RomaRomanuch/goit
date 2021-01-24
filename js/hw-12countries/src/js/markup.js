import countryTemplate from '../countryCard.hbs';
import countriesListTemplate from '../countylist.hbs';
import { error } from '@pnotify/core';

const countryDomBlock = document.querySelector('.country');

function updateMarkup(data) {
  const markup = countryTemplate(data);
  const markupList = countriesListTemplate(data);
  if (data.length === 1) {
    countryDomBlock.insertAdjacentHTML('beforeend', markup);
  } else if (data.length > 1 && data.length <= 10) {
    countryDomBlock.insertAdjacentHTML('beforeend', markupList);
  } else {
    error({
      title: 'Ошибка',
      text: 'To many matches found. Please enter MORE specific query!',
    });
  }
}

export default updateMarkup;
