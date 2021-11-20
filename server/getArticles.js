const fetch = require('node-fetch');
const key = process.env.KEY_SECRET;

// let getArticles;
// document.addEventListener(
//   'DOMContentLoaded',
//   (
const getArticles = async () => {
  try {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=culture&api-key=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
//)
//);

// getArticles();

export default getArticles;
