import React from 'react';

function Card({onClickPlus, onFavorite, imageUrl, title, price}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleClick = () => {
    onClickPlus({imageUrl, title, price});
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    onFavorite({imageUrl, title, price});
    setIsFavorite(!isFavorite);
  }

  return (
  <div className="card">
  <button className={isFavorite ? "card__button card__button--liked" : "card__button card__button--like"} onClick={onClickFavorite}>
    <img className="card__button--size" src={isFavorite ? "/img/favorite.svg" : "/img/like.svg"} alt="heart" />
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