import React from 'react';
import Card from '../components/Card';
import { AppContext } from '../App';

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div>
      <div className="panel">
        <h1 className="panel__title">Мои закладки</h1>
      </div>

      <div className="cards">
        {favorites.map((item, index) =>
          <Card
            id={index}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        )}
      </div>
    </div>
  );
}

export default Favorites;