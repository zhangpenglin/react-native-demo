'use strict'

import { REQUEST_LIST,RESPONSE_LIST } from '../action/video'
const intialState={
    videoList:[]
}
export function videoState(state=intialState, action) {
    switch (action.type) {
        case REQUEST_LIST:
            return state
        case RESPONSE_LIST:
            console.log(action.videoList)
            return {videoList:action.videoList}
        default:
            return state
    }
}