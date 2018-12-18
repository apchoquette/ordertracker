export default (state=[],action) => {
    switch(action.type){
        case 'FETCH_QUERY':
            return action.payload
        case 'CLEAR_RESULTS':
            return action.payload
        
        default:
            return state
    }
}