import * as React from 'react';
import { memo, useEffect } from 'react';
import ProductItem from './ProductItem';
import { ProductItemDataParams } from '../../store/modules/products';

interface Props {
  input: string;
  productItems: ProductItemDataParams[];
  onCreate(): void;
  onRemove(id: number): void;
  onToggle(id: number): void;
  onSubtract(id: number): void;
  onAdd(id: number): void;
  onChange(e: any): void;
}

const ProductList: React.SFC<Props> = ({
  input,
  productItems,
  onCreate,
  onRemove,
  onToggle,
  onSubtract,
  onAdd,
  onChange
}) => {

  const productItemList = productItems.map(product =>
    product ? (
      <ProductItem
        key={product.id}
        id={product.id}
        selected={product.selected}
        quantity={product.quantity}
        price={product.price}
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
      <h1>상품추가 테스트</h1>
      <form onSubmit={(e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        onCreate();
      }}>
        상품명
                <input onChange={onChange} value={input} />
        <button type="submit">추가하기</button>
      </form>
      <ul>
        {productItemList}
      </ul>
    </div>
  );

}

export default memo(ProductList);
