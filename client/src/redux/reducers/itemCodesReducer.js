export default (state=[],action) => {
    switch(action.type){
        case 'FETCH_ITEM_CODES':
            return action.payload
        default:
            return state
    }
}