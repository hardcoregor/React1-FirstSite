// import ItemIn from './ItemInBasket';
// import itemsInArray from '../assets/arrs/itemInArray';

function Page({ onCloseCart, onRemove, items = [] }) {
  return (
    <div className="page__darken">
      <div className="page__sidebar">

        <div className="page__header">
          <h2 className="page__title">Корзина</h2>
          <button onClick={onCloseCart} className="card__button card__button--close">
            <img className="card__button--size" src="/img/close.svg" alt="close" />
          </button>
        </div>


        {items.length > 0 ? (
          <div className="page__items">
            <div className="page__items__main">
              {
                items.map((obj) => (
                  <div className="page__item">
                    <img className="page__item__photo" src={obj.imageUrl} alt="shoes" />
                    <div className="page__item__content">
                      <h4 className="page__item__title">{obj.title}</h4>
                      <p className="page__item__price">{obj.price} грн.</p>
                    </div>
                    <button onClick={() => onRemove(obj.id)} className="card__button card__button--close">
                      <img className="card__button--size" src="/img/close.svg" alt="close" />
                    </button>
                  </div>
                ))}
            </div>
            <div className="page__item__footer">
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
                <img className="page__button__img" src="/img/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        ) : (
          <div className="page__empty">
            <img src="/img/box.png" alt="" className="page__empty__img" />
            <h5 className="page__empty__title">Корзина пустая</h5>
            <p className="page__empty__text">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onCloseCart} className="page__button page__button--back">
              <p className="page__button__text">Вернуться назад</p>
              <img className="page__button__img page__button__img--back" src="/img/arrow.svg" alt="" />
            </button>
          </div>
        )}


      </div>
    </div>
  );
}

export default Page;