import React from 'react';
import ProductItem from './ProductItem';

interface IProductsListProps {
    data: {
        price: number;
        mallName: string;
        brandName: string;
        name: string[];
        imgPath: string[];
    }[],
}

const ProductsList: React.FC<IProductsListProps> = ({ data }) => {

    return (
        <ul>
            {data.map((v, i) => <ProductItem key={i} data={v} /> )}
        </ul>
    );
}

export default ProductsList;