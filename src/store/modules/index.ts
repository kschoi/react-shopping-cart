import { combineReducers } from 'redux';
import { ProductState, productReducer as products } from './products';
import { OrdPlusState, OrderPlusReducer as orderplus } from './OrderPlus';

export interface StoreState {
  products: ProductState;
  orderplus: OrdPlusState; 
}

export default combineReducers<StoreState>({
  products,
  orderplus
});