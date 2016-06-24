'use strict'
import api from '../lib/api'
export const RESPONSE_LIST = 'RESPONSE_LIST'
export const REQUEST_LIST = 'REQUEST_LIST'

export function responseList(videoList) {
    return { type: RESPONSE_LIST, videoList }
}

export function requestList(){
    return {type:REQUEST_LIST}
}

export function fetchList() {
    return dispatch => {
        dispatch(requestList())
        fetch(api.videoList,{
            headers:{
                deviceType:2
            }
        }).then((ret)=>ret.json()).then((ret)=>{
            console.log(ret)
            dispatch(responseList(ret.data.list))
        })
    }
}