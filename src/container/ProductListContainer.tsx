import React from 'react';
import ProductList from '../components/Product/ProductList';
import { connect } from 'react-redux';
import { StoreState } from '../store/modules';
import {
	ProductItemDataParams,
	actionCreators as productsActions,
} from '../store/modules/products';
import { bindActionCreators } from 'redux';

interface Props {
	productItems: ProductItemDataParams[];
	input: string;
	ProductsActions: typeof productsActions;
}

class ProductListContainer extends React.Component<Props> {
	onCreate = (): void => {
		const { ProductsActions, input } = this.props;
		ProductsActions.create(input);
	}
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
	onChange = (e: React.FormEvent<HTMLInputElement>): void => {
		const { value } = e.currentTarget;
		const { ProductsActions} = this.props;
		ProductsActions.changeInput(value);
		
	}

	render() {
		const { input, productItems } = this.props;
		const { onCreate, onChange, onRemove, onToggle, onSubtract, onAdd } = this;
		return (
			<ProductList
				input={input}
				productItems={productItems}
				onChange={onChange}
				onCreate={onCreate}
				onToggle={onToggle}
				onRemove={onRemove}
				onSubtract={onSubtract}
				onAdd={onAdd}
			/>
		);
	}
}

export default connect(
	({products}: StoreState) => ({
		input: products.input,
		productItems: products.productItems
	}),
	(dispatch) => ({
		ProductsActions: bindActionCreators(productsActions, dispatch),
	})
)(ProductListContainer);
