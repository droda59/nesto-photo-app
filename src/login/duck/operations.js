import actions from './actions';

const login = (username, password) => (dispatch) => {
    dispatch(actions.doLogin());
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json(), err => dispatch(actions.receiveLoginFail(err)))
        .then(user => dispatch(actions.receiveLogin(user)));
};

export default {
    login,
};
