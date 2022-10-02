import React from 'react';
import axios from 'axios';

import Info from "./info";
import {useCart} from '../hooks/useCart';

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

function Page({ onCloseCart, onRemove, items = [], opened }) {

  const { cartItems, setCartItems, totalPrice} = useCart();
  const [oredrId, setOrderIt] = React.useState(null);
  const [isComplete, setIsComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://63331c02573c03ab0b584f72.mockapi.io/orders', {
        items: cartItems,
      });

      setOrderIt(data.id);
      setIsComplete(true);
      setCartItems([]);

      for (let i=0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://63331c02573c03ab0b584f72.mockapi.io/cart/' + item.id);
        await delay();
      }
    } catch (error) {
      alert('Failed to create order :(')
    }
    setIsLoading(false);
  }

  return (
    <div className={opened ? "page__darken" : "page__visible"}>
      <div className="page__sidebar">

        <div className="page__header">
          <h2 className="page__title">Корзина</h2>
          <button onClick={onCloseCart} className="card__button card__button--close">
            <img className="card__button--size" src="img/close.svg" alt="close" />
          </button>
        </div>


        {items.length > 0 ? (
          <div className="page__items">
            <div className="page__items__main">
              {
                items.map((obj) => (
                  <div key={obj.id} className="page__item">
                    <img className="page__item__photo" src={obj.imageUrl} alt="shoes" />
                    <div className="page__item__content">
                      <h4 className="page__item__title">{obj.title}</h4>
                      <p className="page__item__price">{obj.price} грн.</p>
                    </div>
                    <button onClick={() => onRemove(obj.id)} className="card__button card__button--close">
                      <img className="card__button--size" src="img/close.svg" alt="close" />
                    </button>
                  </div>
                ))}
            </div>
            <div className="page__item__footer">
              <ul className="page__item__sum">
                <li className="page__item__allsum">
                  <h5 className="page__item__title-sum">Итого:</h5>
                  <div className="page__devider"></div>
                  <b className="page__item__sum--allprice">{totalPrice} грн</b>
                </li>
                <li className="page__item__allsum">
                  <h5>Доставка:</h5>
                  <div className="page__devider"></div>
                  <b className='page__item__allsum-total'>{totalPrice / 100} грн.</b>
                </li>
              </ul>

              <button disabled={isLoading} onClick={onClickOrder} className="page__button">Оформить заказ
                <img className="page__button__img" src="img/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={isComplete ? `Ваш заказ #${oredrId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
            image={isComplete ? "img/complete-order.png" : "img/box.png"} />
        )}


      </div>
    </div>
  );
}

export default Page;