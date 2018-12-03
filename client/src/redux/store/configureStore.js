import {createStore,combineReducers,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import authReducer from '../reducers/authReducer';
import queryReducer from '../reducers/queryReducer';
import whQueryReducer from '../reducers/whQueryReducer';

export default () => {
    const store = createStore(combineReducers({
        queryResults: queryReducer,
        whQueryResults: whQueryReducer,
        user: authReducer
    }),applyMiddleware(reduxThunk));
    return store
}