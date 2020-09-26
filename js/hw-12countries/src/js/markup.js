import countryTemplate from '../countryCard.hbs';
const countryDomBlock = document.querySelector('.country');

function updateMarkup(data) {
  const markup = countryTemplate(data);
  countryDomBlock.insertAdjacentHTML('beforeend', markup);
}
export default updateMarkup;
