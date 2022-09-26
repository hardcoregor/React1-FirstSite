function App() {
  return (
    <div className="page">

      <div style={{ display: 'none'}} className="page__darken">
        <div className="page__sidebar">

          <div className="page__header">
            <h2 className="page__title">Корзина</h2>
            <button className="card__button card__button--close">
              <img className="card__button--size" src="/img/close.svg" alt="close" />
            </button>
          </div>

          <div className="page__items">
            <div className="page__item">
              <img className="page__item__photo" src="/img/cards/4.jpg" alt="shoes" />
              <div className="page__item__content">
                <h4 className="page__item__title">Мужские Кроссовки Nike Air Max 270</h4>
                <p className="page__item__price">12 999 грн.</p>
              </div>
              <button className="card__button card__button--close">
                <img className="card__button--size" src="/img/close.svg" alt="close" />
              </button>
            </div>

            <div className="page__item">
              <img className="page__item__photo" src="/img/cards/2.jpg" alt="shoes" />
              <div className="page__item__content">
                <h4 className="page__item__title">Мужские Кроссовки Nike Air Max 270</h4>
                <p className="page__item__price">12 999 грн.</p>
              </div>
              <button className="card__button card__button--close">
                <img className="card__button--size" src="/img/close.svg" alt="close" />
              </button>
            </div>

            <div className="page__item">
              <img className="page__item__photo" src="/img/cards/4.jpg" alt="shoes" />
              <div className="page__item__content">
                <h4 className="page__item__title">Мужские Кроссовки Nike Air Max 270</h4>
                <p className="page__item__price">12 999 грн.</p>
              </div>
              <button className="card__button card__button--close">
                <img className="card__button--size" src="/img/close.svg" alt="close" />
              </button>
            </div>

            <div className="page__item">
              <img className="page__item__photo" src="/img/cards/4.jpg" alt="shoes" />
              <div className="page__item__content">
                <h4 className="page__item__title">Мужские Кроссовки Nike Air Max 270</h4>
                <p className="page__item__price">12 999 грн.</p>
              </div>
              <button className="card__button card__button--close">
                <img className="card__button--size" src="/img/close.svg" alt="close" />
              </button>
            </div>

            <div className="page__item">
              <img className="page__item__photo" src="/img/cards/4.jpg" alt="shoes" />
              <div className="page__item__content">
                <h4 className="page__item__title">Мужские Кроссовки Nike Air Max 270</h4>
                <p className="page__item__price">12 999 грн.</p>
              </div>
              <button className="card__button card__button--close">
                <img className="card__button--size" src="/img/close.svg" alt="close" />
              </button>
            </div>

            <div className="page__item">
              <img className="page__item__photo" src="/img/cards/4.jpg" alt="shoes" />
              <div className="page__item__content">
                <h4 className="page__item__title">Мужские Кроссовки Nike Air Max 270</h4>
                <p className="page__item__price">12 999 грн.</p>
              </div>
              <button className="card__button card__button--close">
                <img className="card__button--size" src="/img/close.svg" alt="close" />
              </button>
            </div>

            <div className="page__item">
              <img className="page__item__photo" src="/img/cards/4.jpg" alt="shoes" />
              <div className="page__item__content">
                <h4 className="page__item__title">Мужские Кроссовки Nike Air Max 270</h4>
                <p className="page__item__price">12 999 грн.</p>
              </div>
              <button className="card__button card__button--close">
                <img className="card__button--size" src="/img/close.svg" alt="close" />
              </button>
            </div>
          </div>

          <ul className="page__item__sum">
            <li className="page__item__allsum">
              <h5 className="page__item__title-sum">Итого:</h5>
              <div className="page__devider"></div>
              <b className="page__item__sum--allprice">21 599 грн</b>
            </li>
            <li className="page__item__allsum">
              <h5>Доставка:</h5>
              <div className="page__devider"></div>
              <b>89 грн.</b>
            </li>
          </ul>

          <button className="page__button">Оформить заказ
            <img className="page__button__img" src="/img/arrow.svg" alt="" /></button>

        </div>
      </div>

      <header className="header">
        <div className="header__left">
          <img className="header__logo" src="/img/logo.png" alt="logo" />
          <div className="header__texts">
            <h3 className="header__name">React sneakers</h3>
            <p className="header__description">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="header__right">
          <li className="header__buttons header__buttons--sum">
            <img className="header__icons header__icons--ml10" src="/img/card.svg" alt="logo" />
            <span className="header__sum">1205 грн.</span>
          </li>
          <li className="header__buttons">
            <img className="header__icons" src="/img/user.svg" alt="logo" />
          </li>
        </ul>
      </header>

      <div className="panel">
        <h1 className="panel__title">Все кроссовки</h1>
        <div className="panel__search">
          <img src="/img/search.svg" alt="Search" />
          <input className="panel__input" placeholder="Поиск.." />
        </div>
      </div>

      <div className="cards">

        <div className="card">
          <button className="card__button card__button--like">
            <img className="card__button--size" src="/img/like.svg" alt="heart" />
          </button>
          <img className="card__photo" src="/img/cards/1.jpg" alt="" />
          <h4 className="card__describe">Мужские Кроссовки Nike Blazer Mid Suede</h4>
          <div className="card__footer">
            <div className="card__footer2">
              <span className="card__price__title">Цена:</span>
              <b className="card__price">12 000 грн.</b>
            </div>
            <button className="card__button">
              <img className="card__icon" src="/img/plus.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="card">
          <button className="card__button card__button--like">
            <img className="card__button--size" src="/img/like.svg" alt="heart" />
          </button>
          <img className="card__photo" src="/img/cards/2.jpg" alt="" />
          <h4 className="card__describe">Мужские Кроссовки Nike Blazer Mid Suede</h4>
          <div className="card__footer">
            <div className="card__footer2">
              <span className="card__price__title">Цена:</span>
              <b className="card__price">12 000 грн.</b>
            </div>
            <button className="card__button">
              <img className="card__icon" src="/img/plus.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="card">
          <button className="card__button card__button--like">
            <img className="card__button--size" src="/img/like.svg" alt="heart" />
          </button>
          <img className="card__photo" src="/img/cards/3.jpg" alt="" />
          <h4 className="card__describe">Мужские Кроссовки Nike Blazer Mid Suede</h4>
          <div className="card__footer">
            <div className="card__footer2">
              <span className="card__price__title">Цена:</span>
              <b className="card__price">12 000 грн.</b>
            </div>
            <button className="card__button">
              <img className="card__icon" src="/img/plus.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="card">
          <button className="card__button card__button--like">
            <img className="card__button--size" src="/img/like.svg" alt="heart" />
          </button>
          <img className="card__photo" src="/img/cards/4.jpg" alt="" />
          <h4 className="card__describe">Мужские Кроссовки Nike Blazer Mid Suede</h4>
          <div className="card__footer">
            <div className="card__footer2">
              <span className="card__price__title">Цена:</span>
              <b className="card__price">12 000 грн.</b>
            </div>
            <button className="card__button">
              <img className="card__icon" src="/img/plus.svg" alt="" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;