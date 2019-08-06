import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withA11y } from '@storybook/addon-a11y';
import Toolbar from './Toolbar';
addDecorator(withA11y);

storiesOf('Toolbar', module)
  .add('상품이 선택되지 않음', () => (
    <Toolbar count={0} deliveryCharge={0} totalPrice={0} />
  ))
  .add('상품 선택 / 배송비 있음', () => (
    <Toolbar count={5} deliveryCharge={3000} totalPrice={265000} />
  ));