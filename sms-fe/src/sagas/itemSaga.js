import {takeLatest, put} from 'redux-saga/effects'
import * as actionType from '../actionType/constants'
import {itemApi} from '../API/itemApi'
import {actions} from '../actionType/index'

function* hanldGetItem(){
    try {
        const res = yield itemApi.getList()
        yield put(actions.getSuccess({list: res}))
    } catch (error) {
        yield put(actions.getFailure(error))
    }
}
function* handlePostItem({payload}){
    try {
        yield itemApi.postItem(null, null, payload)
        yield put(actions.postSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put(actions.postFailure(error))
    }
}
function* handlePutItem({payload}){
    try {
        yield itemApi.putItem({id: payload.id}, null,payload)
        yield put(actions.putSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put(actions.putFailure(error))
    }
}
function* handleDeleteItem({payload}){
    try {
        yield itemApi.deleteItem({id: payload.id}, null, null)
        yield put(actions.deleteSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put(actions.deleteFailure(error))
    }
}

const itemSaga = [
    takeLatest(actionType.GET_REQUEST,hanldGetItem),
    takeLatest(actionType.POST_REQUEST, handlePostItem),
    takeLatest(actionType.PUT_REQUEST, handlePutItem),
    takeLatest(actionType.DELETE_REQUEST, handleDeleteItem)
]

export default itemSaga