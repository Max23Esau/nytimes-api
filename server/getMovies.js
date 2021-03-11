const fetch = require('node-fetch');
const key = process.env.KEY_SECRET;

const getMovies = async () => {
  try {
    const url = `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
  // console.log(key);
};

// getMovies();

export default getMovies;
