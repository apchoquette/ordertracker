export const setFilter = ( filters

 ) => dispatch => {

    const payload = filters;
    
    dispatch( { type: 'SET_FILTER', payload } )  
}

export const clearFilter = () => dispatch => {
    const payload = {
        warehouse: '',
        showOnlyStockAvailable: false
    }
    dispatch({ type: 'SET_FILTER', payload})
}