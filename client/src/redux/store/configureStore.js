import {createStore,combineReducers,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import queryReducer from '../reducers/queryReducer'

export default () => {
    const store = createStore(combineReducers({
        queryResults: queryReducer
    }),applyMiddleware(reduxThunk));
    return store
}