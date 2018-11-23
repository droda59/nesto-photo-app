import actions from './actions';

const fetchPosts = () => (dispatch) => {
    dispatch(actions.requestPosts());
    const user = JSON.parse(localStorage.getItem('user'));
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then(res => res.json(), err => dispatch(actions.receivePostsFail(err)))
        .then(posts => setTimeout(() => dispatch(actions.receivePosts(posts)), 300));
};

const fetchPost = (postId) => (dispatch) => {
    dispatch(actions.requestPost(postId));
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json(), err => dispatch(actions.receivePostFail(err)))
        .then(post => setTimeout(() => dispatch(actions.receivePost(post)), 200));
};

const fetchPostComments = (postId) => (dispatch) => {
    dispatch(actions.requestPostComments(postId));
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(res => res.json(), err => dispatch(actions.receivePostCommentsFail(err)))
        .then(comments => setTimeout(() => dispatch(actions.receivePostComments(comments)), 300));
};

export default {
    fetchPosts,
    fetchPost,
    fetchPostComments,
};
