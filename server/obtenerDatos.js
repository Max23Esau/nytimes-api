// const express = require('express');
// const dotenv = require('dotenv');
// const clave = dotenv.config();
// const fetch = require('node-fetch');
// const key = clave.parsed.KEY_SECRET;
// const key = process.env.KEY_SECRET;

// const cors = require('cors');

// const app = express();

// app.use(cors({ origin: 'http://localhost:8080' }));
// app.use(express.json());

// app.get(
//   `https://api.nytimes.com/svc/books/v3/lists/overview.json?${key}`,
//   async (req, res) => {
//     try {
//       const url = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${clave.parsed.KEY_SECRET}`;
//       const res = await fetch(url);
//       const data = await res.json();
//       const categorias = data.results.lists.length;

//       let arrayBooks = [];
//       // data.results.lists[0].books.map((element) => {
//       //   arrayBooks.push(element);
//       // });

//       for (var i = 0; i < categorias; i++) {
//         // data.results.lists[i].books.forEach((element) => {
//         //   arrayBooks.push(element.title);
//         // });
//         // console.log(data.results.lists[i].books);

//         data.results.lists[i].books.map((element) => {
//           arrayBooks.push(element.title);
//           arrayBooks.push(element.author);
//           arrayBooks.push(element.description);
//         });
//       }
//       console.log(arrayBooks);
//       // console.log(data.results.lists[0]);
//       // return arrayBooks;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// app.listen(5000, () => {
//   console.log('Server on port', 5000);
// });
// console.log(key);
// const url = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${key}`;
// console.log(url);
const key = process.env.KEY_SECRET;

const obtenerDatos = async () => {
  try {
    const url = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    const categorias = data.results.lists.length;

    let arrayBooks = [];

    for (var i = 0; i < categorias; i++) {
      // data.results.lists[i].books.forEach((element) => {
      //   arrayBooks.push(element.title);
      // });
      // console.log(data.results.lists[i].books);

      data.results.lists[i].books.map((element) => {
        arrayBooks.push(element);
        // arrayBooks.push(element.author);
        // arrayBooks.push(element.description);
      });
    }
    // console.log(arrayBooks);
    // console.log(data.results.lists[0]);
    return arrayBooks;
  } catch (error) {
    console.log(error);
  }
};
// obtenerDatos();

export default obtenerDatos;
