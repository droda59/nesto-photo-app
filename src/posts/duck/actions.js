import types from './types';

/* POST LIST */
const requestPosts = () => ({
    type: types.GET_POSTS,
});

const receivePosts = posts => ({
    type: types.GET_POSTS_SUCCESS,
    posts
});

const receivePostsFail = error => ({
    type: types.GET_POSTS_FAILURE,
    error
});

/* POST DETAILS */
const requestPost = () => ({
    type: types.GET_POST,
});

const receivePost = post => ({
    type: types.GET_POST_SUCCESS,
    post
});

const receivePostFail = error => ({
    type: types.GET_POST_FAILURE,
    error
});

/* POST COMMENTS */
const requestPostComments = () => ({
    type: types.GET_COMMENTS,
});

const receivePostComments = comments => ({
    type: types.GET_COMMENTS_SUCCESS,
    comments
});

const receivePostCommentsFail = error => ({
    type: types.GET_COMMENTS_FAILURE,
    error
});

export default {
    requestPosts,
    receivePosts,
    receivePostsFail,
    
    requestPost,
    receivePost,
    receivePostFail,
    
    requestPostComments,
    receivePostComments,
    receivePostCommentsFail,
};
