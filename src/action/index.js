
import axios from 'axios';
import history from '../history';

export const getUser = () => async (dispatch) => {
    const response = await axios.get('/api/user');
    dispatch({ type: "GET_USER", payload: response.data });
}

export const logoutUser = () => async (dispatch) => {
    const response = await axios.get('/api/logout');
    dispatch({ type: "GET_USER", payload: response.data });
    history.push('/');
}
