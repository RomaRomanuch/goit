function fetchArticles(searchQuerry) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuerry}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
}

export default fetchArticles;
