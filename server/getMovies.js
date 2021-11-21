const fetch = require('node-fetch');
const key = process.env.KEY_SECRET;

const getMovies = async () => {
  try {
    const url = `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    let moviesMap = data.results.map((item) => {
      return [item.headline, item];
    });

    var moviesMapArr = new Map(moviesMap);

    let arrayMovies = [...moviesMapArr.values()];

    return arrayMovies;
  } catch (error) {
    console.log(error);
  }
};

export default getMovies;
