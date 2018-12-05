export default (state={warehouse: 'PAC'},action) => {
    switch(action.type) {
        case 'SET_FILTER':
            
            return action.payload
        default:
            return state

    }
}