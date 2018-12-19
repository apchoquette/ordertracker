import axios from 'axios';

export const fetchQuery = ( params ) => async dispatch => {
    const res = await axios.get(`/api/query/'${params}'`)
    dispatch( { type: 'FETCH_QUERY', payload: res.data } )  
}

export const fetchProductDetails = ( params ) => async dispatch => {
    const res = await axios.get(`/api/query/item/${params}`)
    dispatch( { type: 'FETCH_DETAIL_QUERY', payload: res.data } )
}

export const fetchItemCodes = ( input ) => async dispatch => {
    const res = await axios.get(`/api/query/itemCodes/${input}`)
    dispatch( {type: 'FETCH_ITEM_CODES', payload: res.data} )
}

export const fetchOrderStatus = ( orderNo ) => async dispatch => {
    const res = await axios.get(`/api/query/orderStatus/'${orderNo}'`)
    dispatch( { type: 'FETCH_QUERY', payload: res.data } )
}

export const fetchWHProductDetails = ( params ) => async dispatch => {
    const res = await axios.get(`/api/query/wh-item/${params}`)
    dispatch( { type: 'FETCH_WH_DETAIL_QUERY', payload: res.data } )
}

export const clearResults = () => dispatch => {
    dispatch( { type: 'CLEAR_RESULTS', payload: []})
}

export const fetchOrderList = ( partNo ) => async dispatch => {
    const res = await axios.get(`/api/query/orders-eta/${partNo}`)
    dispatch( { type: 'FETCH_QUERY', payload: res.data } );
}

export const fetchOnOrder = ( partNo ) => async dispatch => {
    const res = await axios.get(`/api/query/orders/${partNo}`)
    dispatch( { type: 'FETCH_ORDERS', payload: res.data })
}


