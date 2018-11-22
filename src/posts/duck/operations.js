import actions from './actions';

const fetchPosts = () => (dispatch) => {
    dispatch(actions.requestPosts());
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json(), err => dispatch(actions.receivePostsFail(err)))
        .then(posts => dispatch(actions.receivePosts(posts)));
};

const fetchPost = (postId) => (dispatch) => {
    dispatch(actions.requestPost(postId));
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json(), err => dispatch(actions.receivePostFail(err)))
        .then(post => dispatch(actions.receivePost(post)));
};

const fetchPostComments = (postId) => (dispatch) => {
    dispatch(actions.requestPostComments(postId));
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(res => res.json(), err => dispatch(actions.receivePostCommentsFail(err)))
        .then(comments => dispatch(actions.receivePostComments(comments)));
};

export default {
    fetchPosts,
    fetchPost,
    fetchPostComments,
};
