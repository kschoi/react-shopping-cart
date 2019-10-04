import * as React from 'react';
import { memo } from 'react';

export interface Props {
  id: number,
  title: string;
  quantity: number;
  price: number;
  imageUrl: string;
  selected: boolean;
  onToggle(): void;
  onRemove(): void;
  onSubtract(): void;
  onAdd(): void;
}

const ProductItem: React.SFC<Props> = ({ id, title, quantity, price, imageUrl, selected, onToggle, onRemove, onSubtract, onAdd }) => (
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
      <div  style={{
        float: 'left',
        width: '50px',
        height: '50px',
        backgroundColor: '#e0e0e0',
      }}>
        <img src={imageUrl} alt="상품이미지" style={{
          width: '100%',
          height: '100%'
        }} />
      </div>
      <div>상품명: {title}</div>
      <div>가격: {price}</div>
    </label>
    <button className="" onClick={onSubtract}>-</button>
    {quantity}
    <button className="" onClick={onAdd}>+</button>
    <button style={{ all: 'unset', marginLeft: '0.5rem' }} onClick={onRemove}>[상품 삭제]</button>
  </li>
);

export default memo(ProductItem);