import React from 'react';
import ProductList from './../components/Product/ProductList';
import Toolbar from './../components/Toolbar/Toolbar';
import { connect } from 'react-redux';
import { StoreState } from '../store/modules';
import {
	ProductItemDataParams,
	actionCreators as productsActions,
} from '../store/modules/products';
import { bindActionCreators } from 'redux';

interface Props {
	productItems: ProductItemDataParams[];
	productItemsTotal: number;
	productItemsCount: number;
	ProductsActions: typeof productsActions;
}

class ProductListContainer extends React.Component<Props> {
	onRemove = (id: number): void => {
		const { ProductsActions } =  this.props;
		ProductsActions.remove(id);
	}
	onToggle = (id: number): void => {
		const { ProductsActions } = this.props;
		ProductsActions.toggle(id);
	}
	onSubtract = (id: number): void => {
		const { ProductsActions } =  this.props;
		ProductsActions.subtract(id);
	}
	onAdd = (id: number): void => {
		const { ProductsActions } = this.props;
        ProductsActions.add(id);
	}

	render() {
		const { productItems, productItemsTotal, productItemsCount } = this.props;
		const { onRemove, onToggle, onSubtract, onAdd } = this;
		return (
			<>
				<ProductList
					productItems={productItems}
					onToggle={onToggle}
					onRemove={onRemove}
					onSubtract={onSubtract}
					onAdd={onAdd}
				/>
				<Toolbar count={productItemsCount} deliveryCharge={0} totalPrice={productItemsTotal} />
			</>
		);
	}
}

export default connect(
	({products}: StoreState) => ({
		productItemsTotal: products.total,
		productItemsCount: products.count,
		productItems: products.productItems
	}),
	(dispatch) => ({
		ProductsActions: bindActionCreators(productsActions, dispatch),
	})
)(ProductListContainer);
