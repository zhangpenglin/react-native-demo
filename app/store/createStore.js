'use strict'

import appReducers from '../reducer/index'
import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'

export default function configureStore(initialState) {
    let composers = [ applyMiddleware(thunk) ]
    const finalCreateStore = compose(...composers)(createStore)

    let store = finalCreateStore(appReducers, initialState)
    if (module.hot) {
        module.hot.accept('./reducers/index', () => {
            const nextRootReducer = require('./reducers/index')
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}