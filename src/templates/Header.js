import obtenerDatos from '../../server/obtenerDatos';

const Header = async () => {
  const books = await obtenerDatos();
  console.log(books);
  // const view = `
  //   <div class="Header-main">
  //   <h1>${element.title}</h1>
  //   ${books.forEach(
  //     (element) =>
  //       `<article class="Character-item">
  //       <img src=${element.book_image} alt=${element.title}>
  //       <h2>${element.author}</h2>
  //       <p>${element.description}</p>
  //       <p>${element.rank}</p>
  //     </article>`
  //   )}
  //   </div>
  // `;

  // const container = document.getElementById('header');

  // const fragment = document.createDocumentFragment();

  // return view;
};

export default Header;
