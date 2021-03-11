const fetch = require('node-fetch');
const key = process.env.KEY_SECRET;

const getBooks = async () => {
  try {
    const url = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    const categorias = data.results.lists.length;

    let arrayBooks = [];

    for (var i = 0; i < categorias; i++) {
      data.results.lists[i].books.map((element) => {
        arrayBooks.push(element);
      });
    }

    return arrayBooks;
  } catch (error) {
    console.log(error);
  }
};

// getBooks();

export default getBooks;
