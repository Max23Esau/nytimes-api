// import getKeyword from '../../server/Articles/getKeyword';
import getTopStories from '../../server/getTopStories';

const Articles = async () => {
  // const word = await getKeyword();
  const stories = await getTopStories();
  console.log(stories);
  // console.log(word);
  const view = `
  <form name="myForm" id="form">
      <label for="articles">
        <p>What type of articles do you search?</p>
        <input type="text" name="articles" id="keywordSearch" placeholder='Culture'>
      </label>
      <button type="button" onclick=''>Search</button>
    </form>  
    <div class="content-title">
      <h1>New York Times Top Stories</h1>
    </div>
    <div class="main-container">
    ${stories
      .map(
        (element) =>
          `
      <article class="card card-stories">
        <a href=${element.short_url} target='_blank'>
          <img src=${element.multimedia[0].url} alt=${element.multimedia[0].caption}>
          <h2>${element.title}</h2>
          <b>${element.byline}</b>
          <p>${element.abstract}</p>
        </a>
      </article>  
      `
      )
      .join('')}
  </div>
    
  `;
  return view;
};

export default Articles;
