import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withA11y } from '@storybook/addon-a11y';
import Button from './Button';
addDecorator(withA11y);

storiesOf('Button', module)
  .add('active with fill', () => (
    <Button label={`continue`} fill={true} active={true} />
  ))
  .add('active with no fill', () => (
    <Button label={`sign up`} fill={false} active={true} />
  ))
  .add('disabled', () => (
    <Button label={`continue`} active={false} />
  ));



// storiesOf('button', module)
//   .add('Accessible', () => (
//     <button>Accessible button</button>
//   ))
//   .add('Inaccessible', () => (
//     <button style={{ backgroundColor: 'red', color: 'darkRed', }}>Inaccessible button</button>
//   ));


// import { Button, Welcome } from '@storybook/react/demo';
// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
