import {createStore,combineReducers,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import itemCodesReducer from '../reducers/itemCodesReducer'
import queryReducer from '../reducers/queryReducer'

export default () => {
    const store = createStore(combineReducers({
        queryResults: queryReducer,
        itemCodes: itemCodesReducer
    }),applyMiddleware(reduxThunk));
    return store
}