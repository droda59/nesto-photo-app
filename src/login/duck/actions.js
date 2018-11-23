import types from './types';

/* USER LOGIN */
const doLogin = () => ({
    type: types.DO_LOGIN,
});

const receiveLogin = user => ({
    type: types.DO_LOGIN_SUCCESS,
    user
});

const receiveLoginFail = error => ({
    type: types.DO_LOGIN_FAILURE,
    error
});

export default {
    doLogin,
    receiveLogin,
    receiveLoginFail,
};
