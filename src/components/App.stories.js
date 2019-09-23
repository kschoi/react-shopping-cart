import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../App';
import { Provider } from 'react-redux';
import configureStore from './../store/configureStore';

export const store = configureStore();

storiesOf('App', module).add('default', () => (
    <Provider store={store}>
        <App />
    </Provider>
))