import Card from '../components/Card';

function Home({ items, cartItems, favorites, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorite, isLoading }) {

  const renderItems = () => {
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()));
    return ( isLoading ? [...Array(12)] : filteredItems).map((item, index) =>
      <Card
        id={index}
        onClickPlus={(obj) => onAddToCart(obj)}
        onFavorite={(obj) => onAddToFavorite(obj)}
        // added={cartItems}
        added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
        // favorited={favorites}
        favorited={favorites.some(obj => Number(obj.id) === Number(item.id))}
        loading={isLoading}
        {...item}
      />
    )
  }



  return (
    <div>
      <div className="panel">
        <h1 className="panel__title"> {searchValue ? `Поиск: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="panel__search">
          <img src="/img/search.svg" alt="Search" />
          <input onChange={onChangeSearchInput} value={searchValue} className="panel__input" placeholder="Поиск.." />
          {searchValue && <button onClick={() => setSearchValue('')} className="card__button card__button--closed">
            <img className="card__button--size" src="/img/close.svg" alt="close" />
          </button>}
        </div>
      </div>

      <div className="cards">
        {renderItems()}
      </div>
    </div>
  );
}

export default Home;