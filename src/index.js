import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './module/HelloWorld';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import userReducer from './reducer/user';
import produceReducer from './reducer/product';
import thunk from "redux-thunk";

const allReducer = combineReducers({product: produceReducer, user: userReducer});
const allStoreEnhancer = compose(applyMiddleware(thunk));
const store = createStore(allReducer, {
    user: 'han',
    product: []
}, allStoreEnhancer);
ReactDOM.render(<Provider store={store}><HelloWorld/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
