import React from 'react';
import Header from './components/layouts/Header';
import Toolbar from './components/Toolbar/Toolbar';
import ProductsList from './components/ProductsList/ProductsList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <h1>장바구니</h1>
      <ProductsList />
      <Toolbar count={0} deliveryCharge={0} totalPrice={0} />
    </div>
  );
}

export default App;
