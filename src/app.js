import React from 'react';
import {render} from 'react-dom';
import {hot} from 'react-hot-loader';
import '../css/style.css';
import ToDoApp from './components/ToDoApp.js';
import {Provider} from 'react-redux';
import { store } from './store/index.js';


export default hot(module)(
    render(
        <Provider store={store}>
            <ToDoApp/>
        </Provider>,
        document.getElementById('root')
    ));

window.store = store;