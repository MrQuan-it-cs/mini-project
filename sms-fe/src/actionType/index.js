import * as actionType from './constants'
import {createAction} from '@reduxjs/toolkit'

export const actions = {
    getRequest : createAction(actionType.GET_REQUEST),
    getSuccess : createAction(actionType.GET_SUCCESS),
    getFailure : createAction(actionType.GET_FAILURE),

    postRequest : createAction(actionType.POST_REQUEST),
    postSuccess : createAction(actionType.POST_SUCCESS),
    postFailure : createAction(actionType.POST_FAILURE),

    deleteRequest : createAction(actionType.DELETE_REQUEST),
    deleteSuccess : createAction(actionType.DELETE_SUCCESS),
    deleteFailure : createAction(actionType.DELETE_FAILURE),

    putRequest : createAction(actionType.PUT_REQUEST),
    putSuccess : createAction(actionType.PUT_SUCCESS),
    putFailure : createAction(actionType.PUT_FAILURE),
}