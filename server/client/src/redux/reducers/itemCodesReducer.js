export default (state=[],action) => {
    switch(action.type){
        case 'FETCH_DETAIL_QUERY':
            return action.payload
        case 'FETCH_WH_DETAIL_QUERY':
            return action.payload
        default:
            return state
    }
}