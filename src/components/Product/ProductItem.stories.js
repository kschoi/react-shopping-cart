import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withA11y } from '@storybook/addon-a11y';
import ProductItem from './ProductItem';
addDecorator(withA11y);

// storiesOf('ProductItem', module)
//   .add('일반상품', () => (
//     <ProductItem
//       key={52}
//       selected={false}
//       quantity={1}
//       price={16000}
//       onToggle={() => onToggle(52)}
//       onRemove={() => onRemove(52)}
//       onSubtract={() => onSubtract(52)}
//       onAdd={() => onAdd(52)}
//       title={'상품명'}
//     />
//   ))
  // .add('업셀링', () => (
  //   <ProductItem data={{ "price": 5000, "mallName": "이마트몰", "brandName": "브랜드명", "name": ["업셀링상품명1", "업셀링상품명2", "업셀링상품명3"], imgPath: ["http://item.ssgcdn.com/63/62/69/item/1000021696263_i1_140.jpg", "http://item.ssgcdn.com/63/62/69/item/1000021696263_i1_140.jpg", "http://item.ssgcdn.com/63/62/69/item/1000021696263_i1_140.jpg"] }} />
  // ));