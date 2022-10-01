import React from 'react'
import { AppContext } from '../App';

const Info = ({ title, image, description }) => {

  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="page__empty">
      <img src={image} alt="" className="page__empty__img" />
      <h5 className="page__empty__title">{title}</h5>
      <p className="page__empty__text">
        {description}
      </p>
      <button onClick={() => setCartOpened(false)} className="page__button page__button--back">
        <p className="page__button__text">Вернуться назад</p>
        <img className="page__button__img page__button__img--back" src="/img/arrow.svg" alt="" />
      </button>
    </div>
  )
}

export default Info;