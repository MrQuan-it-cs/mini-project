import {useDispatch, useSelector} from 'react-redux'
import { actions } from '../actionType'

export const useItem = () =>{
    const dispatch = useDispatch()

    const list = useSelector(state => state.itemReducer.list)

    const handleGetItem = () => dispatch(actions.getRequest())
    const handlePostItem = (data) => dispatch(actions.postRequest(data))
    const handlePutItem = (data) => dispatch(actions.putRequest(data))
    const handleDeleteItem = (data) => dispatch(actions.deleteRequest(data))

    return{
        list,
        handleGetItem,
        handlePostItem,
        handlePutItem,
        handleDeleteItem
    }
}