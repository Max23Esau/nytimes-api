import getKeyword from '../../server/Articles/getKeyword';
import getArticles from '../../server/getArticles';

const Articles = async () => {
  const word = await getKeyword();
  const articles = await getArticles();
  console.log(articles);
  const view = `
    <form name="myForm" id="form">
      <label for="articles">
        <p>What type of articles do you search?</p>
        <input type="text" name="articles" id="keywordSearch" placeholder='Culture'>
      </label>
      <button type="button" onclick='${word}'>Search</button>
    </form>  
  
  `;
  return view;
};

export default Articles;
