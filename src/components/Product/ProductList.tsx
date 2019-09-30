import * as React from 'react';
import { memo, useEffect } from 'react';
import ProductItem from './ProductItem';
import { ProductItemDataParams } from '../../store/modules/products';

interface Props {
  productItems: ProductItemDataParams[];
  onRemove(id: number): void;
  onToggle(id: number): void;
  onSubtract(id: number): void;
  onAdd(id: number): void;
}

const ProductList: React.SFC<Props> = ({
  productItems,
  onRemove,
  onToggle,
  onSubtract,
  onAdd,
}) => {

  const productItemList = productItems.map(product =>
    product ? (
      <ProductItem
        key={product.id}
        id={product.id}
        selected={product.selected}
        quantity={product.quantity}
        price={product.price}
        imageUrl={product.imageUrl}
        onToggle={() => onToggle(product.id)}
        onRemove={() => onRemove(product.id)}
        onSubtract={() => onSubtract(product.id)}
        onAdd={() => onAdd(product.id)}
        title={product.title}
      />
    ) : null);


  useEffect(() => { // componentDidMount, componentDidUpdate 역할 (1대1 대응은 아님)
    console.log('tag: ProducList 컴포넌트 렌더링');
    return () => { // componentWillUnmount 역할
      console.log('tag: ProducList 컴포넌트 종료');
    }
  }, []);


  return (
    <div>
      <ul>
        {productItemList}
      </ul>
    </div>
  );

}

export default memo(ProductList);
