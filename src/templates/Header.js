import Logo from '../resources/the-new-york-times-logo.png';

const Header = async () => {
  const view = `
    <a href="/">
      <figure>
        <img src=${Logo} alt='Logo' class='logo'/>
      </figure>
    </a>
    <nav class="menu">
      <ul>
        <li class="item"><a href="/">Books</a></li>
        <li class="item"><a href="#/movies/">Movies</a></li>
        <li class="item"><a href="#/articles/">Articles</a></li>
      </ul>
    </nav>
  `;

  return view;
};

export default Header;
