import ItemIn from './ItemInBasket';
// import itemsInArray from '../assets/arrs/itemInArray';

function Page({ onCloseCart, items = []}) {
  return (
    <div className="page__darken">
      <div className="page__sidebar">

        <div className="page__header">
          <h2 className="page__title">Корзина</h2>
          <button onClick={onCloseCart} className="card__button card__button--close">
            <img className="card__button--size" src="/img/close.svg" alt="close" />
          </button>
        </div>

        <div className="page__items">
          {
          items.map((obj) =>
            <ItemIn
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
            />
          )}
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
  );
}

export default Page;