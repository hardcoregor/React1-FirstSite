import React from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { AppContext } from '../App';

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async() => {
      try {
        const { data } = await axios.get('https://63331c02573c03ab0b584f72.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Error load orders');
      }
    })();
  }, []);

  return (
    <div>
      <div className="panel">
        <h1 className="panel__title">Мои заказы</h1>
      </div>

      <div className="cards">
        {(isLoading ? [...Array(12)] : orders).map((item, index) =>
          <Card
          id={index}
          loading={isLoading}
          {...item}
          />
        )}
      </div>
    </div>
  );
}

export default Orders;