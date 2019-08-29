import React from 'react';
import Header from './components/layouts/Header';
import ProductsList from './components/ProductList/ProductList';
import Toolbar from './components/Toolbar/Toolbar';


const productListData = [
    { "price": 1000, "mallName": "이마트몰", "brandName": "브랜드명", "name": ["상품명1"], imgPath: ["http://item.ssgcdn.com/07/00/95/item/1000024950007_i1_140.jpg"] },
    { "price": 2000, "mallName": "이마트몰", "brandName": "브랜드명", "name": ["상품명2"], imgPath: ["http://item.ssgcdn.com/23/26/08/item/1000023082623_i1_140.jpg"] },
    { "price": 6000, "mallName": "이마트몰", "brandName": "브랜드명", "name": ["상품명3"], imgPath: ["http://item.ssgcdn.com/54/88/59/item/1000023598854_i1_140.jpg"] },
    { "price": 5000, "mallName": "이마트몰", "brandName": "브랜드명", "name": ["업셀링상품명1","업셀링상품명2","업셀링상품명3"], imgPath: ["http://item.ssgcdn.com/63/62/69/item/1000021696263_i1_140.jpg","http://item.ssgcdn.com/63/62/69/item/1000021696263_i1_140.jpg","http://item.ssgcdn.com/63/62/69/item/1000021696263_i1_140.jpg"] },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ProductsList data={productListData} />
      <Toolbar count={0} deliveryCharge={0} totalPrice={0} />   
    </div>
  );
}

export default App;
