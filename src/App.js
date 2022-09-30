import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Page from './components/Page';


import Home from './pages/Home';
import Favorites from './pages/Favorites';


export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get('https://63331c02573c03ab0b584f72.mockapi.io/items/');
      const cartResponse = await axios.get('https://63331c02573c03ab0b584f72.mockapi.io/cart/');
      const favoritesResponse = await axios.get('https://63331c02573c03ab0b584f72.mockapi.io/favorites/');

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);



  const onAddToCart = (obj) => {
    console.log(obj);
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://63331c02573c03ab0b584f72.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://63331c02573c03ab0b584f72.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63331c02573c03ab0b584f72.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://63331c02573c03ab0b584f72.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post('https://63331c02573c03ab0b584f72.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };



  return (
    <AppContext.Provider value={{ items, cartItems,  favorites}}>
      <div className="page">
        {cartOpened && <Page items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem} />}

        <Header
          onClickCart={() => setCartOpened(true)}
        />


        <Routes>
          <Route path='/'
            element={<Home
              items={items}
              cartItems={cartItems}
              favorites={favorites}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              isLoading={isLoading}
            />} />
        </Routes>

        <Routes>
          <Route path='/favorites' element={<Favorites
            onAddToFavorite={onAddToFavorite}
          />} />
        </Routes>

      </div>
    </AppContext.Provider>
  );
}

export default App;