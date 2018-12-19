export default (state=[],action) => {
    switch(action.type){
        case 'FETCH_WH_QUERY':
            
            return action.payload
        
        default:
            return state
    }
}