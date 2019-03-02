import axios from 'axios';

export const addToOrder = (itemCode,user,quantity) => async dispatch => {
    let res = await axios.post('/order', {
        user,
        itemCode,
        quantity
    })

    dispatch({type: 'FETCH_CURRENT_ORDER', payload: res.data });
}

export const removeFromOrder = (id) => async dispatch => {
    let res = await axios.delete('/order', {
        id
    })
}

export const changeQuantity = (id, newQuantity) => async dispatch => {
    let res = await axios.put('/order', {
        id,
        quantity: newQuantity
    })
}