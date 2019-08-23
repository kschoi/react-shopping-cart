import React from 'react';
import ProductsListItem from './ProductsListItem';

interface ProductsListProps {
}

const ProductsList: React.FC<ProductsListProps> = props => {

    return (
        <ul>
            <ProductsListItem />
        </ul>
    );
}

export default ProductsList;