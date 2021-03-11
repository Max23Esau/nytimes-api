const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route === '/' ? route : '/movies';
    return validRoute;
  }
  return `/${route}`;
};
export default resolveRoutes;
