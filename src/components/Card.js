import React from 'react';
import ContentLoader from "react-content-loader";

import { AppContext } from '../App';

function Card({ id, onClickPlus, onFavorite, imageUrl, title, price, loading = false }) {

  const { isItemAdded, isItemFav } = React.useContext(AppContext);
  const itemObj = { id, parentId: id, imageUrl, title, price };

  const handleClick = () => {
    onClickPlus(itemObj);
  }

  const onClickFavorite = () => {
    onFavorite(itemObj);
  }

  return (
    <div className='card'>
      {
        loading ?
          <ContentLoader
            speed={2}
            width={155}
            height={210}
            viewBox="0 0 150 210"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
            <rect x="1" y="112" rx="5" ry="5" width="150" height="15" />
            <rect x="1" y="136" rx="5" ry="5" width="100" height="15" />
            <rect x="3" y="183" rx="5" ry="5" width="80" height="25" />
            <rect x="117" y="175" rx="10" ry="10" width="32" height="32" />
          </ContentLoader> :
          <>

            {onFavorite && <button className={isItemFav(id) ? "card__button card__button--liked" : "card__button card__button--like"} onClick={onClickFavorite}>

              <img className="card__button--size" src={isItemFav(id) ? "img/favorite.svg" : "img/like.svg"} alt="heart" />
            </button>}
            <img className="card__photo" src={imageUrl} alt="" />
            <h4 className="card__describe">{title}</h4>
            <div className="card__footer">
              <div className="card__footer2">
                <span className="card__price__title">Цена:</span>
                <b className="card__price">{price} грн.</b>
              </div>

              {onClickPlus && <button className={isItemAdded(id) ? "card__button active" : "card__button"} onClick={handleClick}>
                <img className="card__icon" src={isItemAdded(id) ? "img/added.svg" : "img/plus.svg"} alt="" />
              </button>}

            </div>
          </>
      }
    </div>
  );
}


export default Card;