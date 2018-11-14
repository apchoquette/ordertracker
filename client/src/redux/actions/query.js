import axios from 'axios';

export const fetchQuery = (params) => async dispatch => {
    const res = await axios.get(`/api/query/'${params}'`);
    dispatch({type: 'FETCH_QUERY', payload: res.data})
}

export const fetchItemCodes = (params) => async dispatch => {
    const res = await axios.get(`/api/query/itemCodes/list`)
    dispatch({type: 'FETCH_ITEM_CODES', payload: res.data})
}