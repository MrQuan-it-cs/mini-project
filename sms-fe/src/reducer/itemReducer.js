import * as actionType from '../actionType/constants'

const INITIAL_STATE ={
    list: [],
    isFetching: false,
    isError: false,
    message: ''
}

export default function itemReducer(state = INITIAL_STATE, {type, payload}){
    switch (type) {
        case actionType.GET_REQUEST:
        case actionType.POST_REQUEST:
        case actionType.PUT_REQUEST:
        case actionType.DELETE_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case actionType.GET_SUCCESS:
            return{
                ...state,
                isFetching: false,
                list: payload.list
            }
        case actionType.POST_SUCCESS:
        case actionType.PUT_SUCCESS:
        case actionType.DELETE_SUCCESS:

            return{
                ...state,
                isFetching: false
            }
        case actionType.GET_FAILURE:
        case actionType.POST_FAILURE:
        case actionType.PUT_FAILURE:
        case actionType.DELETE_FAILURE:
            return{
                ...state,
                isFetching:false,
                isError: true
            }
        default:
            return state;
    }
} 