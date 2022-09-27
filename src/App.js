import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Page from './components/Page';




function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://63331c02573c03ab0b584f72.mockapi.io/items').then((res) =>{
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };


  return (
    <div className="page">
      {cartOpened && <Page items={cartItems} onCloseCart={() => setCartOpened(false)} />}

      <Header
      onClickCart={() => setCartOpened(true)}
      />

      <div className="panel">
        <h1 className="panel__title">Все кроссовки</h1>
        <div className="panel__search">
          <img src="/img/search.svg" alt="Search" />
          <input className="panel__input" placeholder="Поиск.." />
        </div>
      </div>

      <div className="cards">
        {items.map((item) =>
          <Card
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onClickPlus={(obj) => onAddToCart(obj)}
            onClickFavorite={() => console.log('Добавили в корзину')}
          />
        )}
      </div>

    </div>
  );
}

export default App;