import  store from './src/stores/app.store';
import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import Container from './src/Components/Container';



render(
<Provider store={store}>
    <Container/>
    </Provider>,
    document.getElementById('app')
);