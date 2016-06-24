'use strict'

import { combineReducers } from 'redux'
import * as videoReducer from './video'

const appReducers = combineReducers({
    ...videoReducer
})

export default appReducers