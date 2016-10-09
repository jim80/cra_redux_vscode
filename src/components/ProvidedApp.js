import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from '../reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

let store = createStoreWithMiddleware(rootReducer)

import React, {Component} from 'react';

class ProvidedApp extends Component {
    render() {
        return (    
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

export default ProvidedApp;