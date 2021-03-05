import Header from '../templates/Header';
import Home from '../pages/Home';

// ROUTES TO BE RENDER
const routes = {
  '/': Home,
};

//ROUTER
const router = async () => {
  // stablishing templates to dom
  const header = null || document.getElementById('header');
  // const content = null || document.getElementById('content');

  // header.innerHTML = await Header();
  content.innerHTML = await Home();
};

export default router;
