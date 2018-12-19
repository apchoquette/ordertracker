export const setFilter = ( filters

 ) => dispatch => {

    const payload = filters;
    
    dispatch( { type: 'SET_FILTER', payload } )  
}

export const clearFilter = () => dispatch => {
    const payload = {
        warehouse: ''
    }
    dispatch({ type: 'SET_FILTER', payload})
}