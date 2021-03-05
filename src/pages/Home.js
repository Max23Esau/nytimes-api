import obtenerDatos from '../../server/obtenerDatos';

const Home = async () => {
  const books = await obtenerDatos();
  console.log(books);
  const view = `
    <div class="Header-main">
    ${books
      .map(
        (element) =>
          `<article class="card-book">
          <img src=${element.book_image} alt=${element.title}>
          <h1>${element.author}</h1>
          <p>${element.description}</p>
      </article>`
      )
      .join('')}
    </div>
  `;

  return view;
};

export default Home;
