import types from "./types";

const initialState = {
    posts: [],
    featuredPosts: [],
    post: {},
    comments: [],
    isFetching: false,
    isFetchingPost: false,
    isFetchingComments: false,
    error: false
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        /* POSTS LIST */
        case types.GET_POSTS: 
            return {
                ...state,
                isFetching: true,
            };

        case types.GET_POSTS_SUCCESS: 
            return {
                ...state,
                posts: action.posts.slice(2, action.posts.length - 1),
                featuredPosts: action.posts.slice(0, 2),
                isFetching: false,
            };

        case types.GET_POSTS_FAILURE:
            return {
                ...state,
                error: action.error,
                isFetching: false
            };

        /* POST DETAILS */
        case types.GET_POST: 
            return {
                ...state,
                isFetchingPost: true,
            };

        case types.GET_POST_SUCCESS: 
            return {
                ...state,
                post: action.post,
                isFetchingPost: false,
            };

        case types.GET_POST_FAILURE:
            return {
                ...state,
                error: action.error,
                isFetchingPost: false
            };

        /* POST COMMENTS */
        case types.GET_COMMENTS: 
            return {
                ...state,
                isFetchingComments: true,
            };

        case types.GET_COMMENTS_SUCCESS: 
            return {
                ...state,
                comments: action.comments,
                isFetchingComments: false,
            };

        case types.GET_COMMENTS_FAILURE:
            return {
                ...state,
                error: action.error,
                isFetchingComments: false
            };

        default: 
            return state;
    }
}

export default postReducer;
