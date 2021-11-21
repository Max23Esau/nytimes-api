const fetch = require('node-fetch');
const key = process.env.KEY_SECRET;


const getStories = async () => {
  try {
    const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  
    let storiesMap = data.results.map((item) => {
      return [item, item];
    });
    
    var StoriesMapArr = new Map(storiesMap);

    let arrayStories = [...StoriesMapArr.values()];
  
  
    return arrayStories;
  
  
  } catch (error) {
    console.log(error);
  }
};


export default getStories;
