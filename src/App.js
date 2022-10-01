import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Page from './components/Page';


import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';


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
      try {
        const [itemsResponse, cartResponse, favoritesResponse] = await Promise.all([
          axios.get('https://63331c02573c03ab0b584f72.mockapi.io/items/'),
          axios.get('https://63331c02573c03ab0b584f72.mockapi.io/cart/'),
          axios.get('https://63331c02573c03ab0b584f72.mockapi.io/favorites/'
          )]);

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных(')
      }
    }

    fetchData();
  }, []);



  const onAddToCart = (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        axios.delete(`https://63331c02573c03ab0b584f72.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const {data} = axios.post('https://63331c02573c03ab0b584f72.mockapi.io/cart', obj);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину');
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63331c02573c03ab0b584f72.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  const onAddToFavorite = async (obj) => {
    try {
      const findFav = favorites.find(favObj => Number(favObj.parentId) === Number(obj.id));
      if (findFav) {
        setFavorites(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        axios.delete(`https://63331c02573c03ab0b584f72.mockapi.io/favorites/${findFav.id}`);
      } else {
        axios.post('https://63331c02573c03ab0b584f72.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  }

  const isItemFav = (id) => {
    return favorites.some((obj) => Number(obj.parentId) === Number(id));
  }


  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, isItemFav, onAddToFavorite, onAddToCart, setCartOpened, setCartItems }}>

      <div className="page">
        <Page
          items={cartItems}
          onCloseCart={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

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
          <Route path='/favorites' element={<Favorites />} />
        </Routes>

        <Routes>
          <Route path='/orders' element={<Orders />} />
        </Routes>

      </div>

    </AppContext.Provider>
  );
}

export default App;