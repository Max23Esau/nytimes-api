import getMovies from '../../server/getMovies';

const Movies = async () => {
  const movies = await getMovies();
  const view = `
  <div class="content-title">
    <h1>New York Times Movie Reviews</h1>
  </div>
  <div class="main-container">
    ${movies
      .map(
        (element) =>
          `
      <article class="card card-movie">
        <a href=${element.link.url} target='_blank'>
          <img src=${element.multimedia.src} alt=${element.display_title}>
          <h2>${element.headline}</h2>
          <h3>${element.byline}</h3>
          <p>${element.summary_short}</p>
        </a>
      </article>  
      `
      )
      .join('')}
  </div>
  `;

  return view;
};

export default Movies;
