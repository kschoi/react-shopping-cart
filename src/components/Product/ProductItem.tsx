import * as React from 'react';

export interface Props {
  id: number,
  title: string;
  quantity: number;
  price: number;
  selected: boolean;
  onToggle(): void;
  onRemove(): void;
  onSubtract(): void;
  onAdd(): void;
}

const ProductItem: React.SFC<Props> = ({ id, title, quantity, price, selected, onToggle, onRemove, onSubtract, onAdd }) => (
  <li>
    <input type="checkbox"
      id={`${id}`}
      checked={selected}
      onChange={onToggle}
    />
    <label htmlFor={`${id}`}
      style={{
        display: 'block'
      }}
    >
      <div>상품명: {title}</div>
      <div>가격: {price}</div>
    </label>
    <button className="" onClick={onSubtract}>-</button>
    {quantity}
    <button className="" onClick={onAdd}>+</button>
    <button style={{ all: 'unset', marginLeft: '0.5rem' }} onClick={onRemove}>[상품 삭제]</button>
  </li>
);

export default ProductItem;