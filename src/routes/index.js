import Header from '../templates/Header';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import TopStories from '../pages/TopStories';
import Error404 from '../pages/Error404';
import resolveRoutes from '../utils/resolveRoutes';
import getPathname from '../utils/getPathname';

// ROUTES TO BE RENDER
const routes = {
  '/': Home,
  '/movies': Movies,
  '/articles': TopStories,
};

//ROUTER
const router = async () => {
  // stablishing templates to dom
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  // content.innerHTML = await Home();

  let path = getPathname();
  let route = await resolveRoutes(path);
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();
};

export default router;
