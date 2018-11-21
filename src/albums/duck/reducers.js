import types from "./types";

const initialState = {
    albums: [],
    album: {},
    photos: [],
    isFetching: false,
    isFetchingAlbum: false,
    isFetchingPhotos: false,
    error: false
};

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        /* ALBUMS LIST */
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

        /* ALBUM DETAILS */
        case types.GET_ALBUM: 
            return {
                ...state,
                isFetchingAlbum: true,
            };

        case types.GET_ALBUM_SUCCESS: 
            return {
                ...state,
                album: action.album,
                isFetchingAlbum: false,
            };

        case types.GET_ALBUM_FAILURE:
            return {
                ...state,
                error: action.error,
                isFetchingAlbum: false
            };

        /* ALBUM PHOTOS */
        case types.GET_PHOTOS: 
            return {
                ...state,
                isFetchingPhotos: true,
            };

        case types.GET_PHOTOS_SUCCESS: 
            return {
                ...state,
                photos: action.photos,
                isFetchingPhotos: false,
            };

        case types.GET_PHOTOS_FAILURE:
            return {
                ...state,
                error: action.error,
                isFetchingPhotos: false
            };

        default: 
            return state;
    }
}

export default albumReducer;
