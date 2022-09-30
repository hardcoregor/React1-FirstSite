import React from 'react';
import Card from '../components/Card';
import { AppContext } from '../App';

function Favorites({ onAddToFavorite }) {
  const { favorites } = React.useContext(AppContext);

  return (
    <div>
      <div className="panel">
        <h1 className="panel__title">Мои закладки</h1>
      </div>

      <div className="cards">
        {favorites.map((item, index) =>
          <Card
            id={index}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            favorited={true}
            // onClickPlus={(obj) => onAddToCart(obj)}
            onFavorite={onAddToFavorite}
          />
        )}
      </div>
    </div>
  );
}

export default Favorites;