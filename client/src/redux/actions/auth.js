import axios from 'axios';

export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/currentuser');
        dispatch({type: 'FETCH_USER', payload: res.data})
    };

export const logIn = (user,pw) => async dispatch => {
    const res = await axios.post('/api/login',{username: user, password: pw})
    dispatch({type: 'LOG_IN', payload: res.data})
}
