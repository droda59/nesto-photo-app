import types from "./types";

const initialState = {
    albums: [],
    album: {},
    isFetching: false,
    error: false
};

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALBUMS: 
            return {
                ...state,
                isFetching: true,
            };

        case types.GET_ALBUMS_SUCCESS: 
            return {
                ...state,
                albums: action.albums,
                isFetching: false,
            };

        case types.GET_ALBUMS_FAILURE:
            return {
                ...state,
                error: action.error,
                isFetching: false
            };

        case types.GET_ALBUM: 
            return {
                ...state,
                isFetching: true,
            };

        case types.GET_ALBUM_SUCCESS: 
            return {
                ...state,
                album: action.album,
                isFetching: false,
            };

        case types.GET_ALBUM_FAILURE:
            return {
                ...state,
                error: action.error,
                isFetching: false
            };

        default: 
            return state;
    }
}

export default albumReducer;
