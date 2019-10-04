import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withA11y } from '@storybook/addon-a11y';
import OrderPlus from './OrderPlus';
addDecorator(withA11y);

// const handleClick = e => {
//     const 
// };

storiesOf('주문더하기', module)
  .add('기본', () => (
    <OrderPlus></OrderPlus>
  ));
