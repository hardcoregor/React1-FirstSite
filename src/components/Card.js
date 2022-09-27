import React from 'react';

function Card({onClickPlus, onClickFavorite, imageUrl, title, price}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const handleClick = () => {
    onClickPlus({imageUrl, title, price});
    setIsAdded(!isAdded);
  }

  return (
  <div className="card">
  <button className="card__button card__button--like" onClick={onClickFavorite}>
    <img className="card__button--size" src="/img/like.svg" alt="heart" />
  </button>
  <img className="card__photo" src={imageUrl} alt="" />
  <h4 className="card__describe">{title}</h4>
  <div className="card__footer">
    <div className="card__footer2">
      <span className="card__price__title">Цена:</span>
      <b className="card__price">{price} грн.</b>
    </div>
    <button className={isAdded ? "card__button active" : "card__button"}  onClick={handleClick}>
      <img className="card__icon" src={isAdded ? "/img/added.svg" : "/img/plus.svg"} alt="" />
    </button>
  </div>
  </div>);
}



export default Card;