import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__left">
          <img className="header__logo" src="/img/logo.png" alt="logo" />
          <div className="header__texts">
            <h3 className="header__name">React sneakers</h3>
            <p className="header__description">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="header__right">
        <li onClick={props.onClickCart} className="header__buttons header__buttons--sum">
          <img className="header__icons header__icons--ml10" src="/img/card.svg" alt="logo" />
          <span className="header__sum">1205 грн.</span>
        </li>
        <li className="header__buttons header__buttons--fav">
          <Link to="/favorites">
            <img className="header__icons" src="/img/favorites.svg" alt="favorites" />
          </Link>
        </li>
        <li className="header__buttons">
          <img className="header__icons" src="/img/user.svg" alt="users" />
        </li>
      </ul>
    </header >
  );
}

export default Header;