import getBooks from '../../server/getBooks';
import amazon from '../resources/Amazon_icon.png';
import apple from '../resources/apple.png';
import '../styles/style.css';

const Home = async () => {
  const books = await getBooks();
  console.log(books);
  const view = `
  <div class="content-title">
    <h1>The New York Times Best Sellers Lists</h1>
  </div>
  <div class="main-container">
    ${books
      .map(
        (element) =>
          `<article class="card card-book">
          <img src=${element.book_image} alt=${element.title}>
          <h2>${element.title}</h2>
          <h3>By: ${element.author}</h3>
          <p>${element.description}</p>
         <div class="card-links">
          <span> Compra en: </span> 
          <a href=${element.buy_links[0].url} target="_blank">
            <img src=${amazon} alt="Logo amazon" />
          </a>
          <a href=${element.buy_links[1].url} target="_blank">
            <img src=${apple} alt="Logo apple" />
          </a>
         </div> 
      </article>`
      )
      .join('')}
    </div>
  `;

  return view;
};

export default Home;
