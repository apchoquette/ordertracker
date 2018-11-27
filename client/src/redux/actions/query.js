import axios from 'axios';

export const fetchQuery = (params) => async dispatch => {
    const res = await axios.get(`/api/query/'${params}'`)
        console.log('queryData: ',res.data);
        dispatch({type: 'FETCH_QUERY', payload: res.data})
    
    
    
}

export const fetchItemCodes = (input) => async dispatch => {
    const res = await axios.get(`/api/query/itemCodes/${input}`)
    dispatch({type: 'FETCH_ITEM_CODES', payload: res.data})
}