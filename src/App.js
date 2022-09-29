import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Page from './components/Page';




function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://63331c02573c03ab0b584f72.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://63331c02573c03ab0b584f72.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);



  const onAddToCart = (obj) => {
    axios.post('https://63331c02573c03ab0b584f72.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63331c02573c03ab0b584f72.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post('https://63331c02573c03ab0b584f72.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };



  return (
    <div className="page">
      {cartOpened && <Page items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem} />}

      <Header
        onClickCart={() => setCartOpened(true)}
      />

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
        {items.filter(item => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())).map((item, index) =>
          <Card
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onClickPlus={(obj) => onAddToCart(obj)}
            onFavorite={(obj) => onAddToFavorite(obj)}
          />
        )}
      </div>

    </div>
  );
}

export default App;