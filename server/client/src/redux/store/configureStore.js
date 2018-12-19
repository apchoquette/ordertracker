import {createStore,combineReducers,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import authReducer from '../reducers/authReducer';
import filterReducer from '../reducers/filterReducer';
import itemCodesReducer from '../reducers/itemCodesReducer';
import orderReducer from '../reducers/orderReducer';
import queryReducer from '../reducers/queryReducer';
import whQueryReducer from '../reducers/whQueryReducer';


export default () => {
    const store = createStore(combineReducers({
        queryResults: queryReducer,
        whQueryResults: whQueryReducer,
        itemDetails: itemCodesReducer,
        user: authReducer,
        orders: orderReducer,
        filters: filterReducer
    }),applyMiddleware(reduxThunk));
    return store
}