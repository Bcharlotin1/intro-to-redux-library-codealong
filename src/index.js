// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import counterReducer from './reducers/counterReducer.js';
import {createStore} from "redux";
import App from './App';
import './index.css';


const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //so i can uses the google crhome tool
    )


ReactDOM.render(<App store={store} />, document.getElementById('root'));
