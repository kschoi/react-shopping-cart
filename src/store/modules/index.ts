import { combineReducers } from 'redux';
import { ProductState, productReducer as products } from './products';

export interface StoreState {
  products: ProductState;
}

export default combineReducers<StoreState>({
  products
});