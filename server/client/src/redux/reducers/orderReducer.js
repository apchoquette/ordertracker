export default (state=null,action) => {
    switch(action.type){
        case 'FETCH_CURRENT_ORDER':
            return action.payload
        default:
            return state
    }
}