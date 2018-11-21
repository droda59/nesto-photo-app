import types from './types';

const requestAlbums = () => ({
    type: types.GET_ALBUMS,
});

const receiveAlbums = albums => ({
    type: types.GET_ALBUMS_SUCCESS,
    albums
});

const receiveAlbumsFail = error => ({
    type: types.GET_ALBUMS_FAILURE,
    error
});

const requestAlbum = () => ({
    type: types.GET_ALBUM,
});

const receiveAlbum = album => ({
    type: types.GET_ALBUM_SUCCESS,
    album
});

const receiveAlbumFail = error => ({
    type: types.GET_ALBUM_FAILURE,
    error
});

export default {
    requestAlbums,
    receiveAlbums,
    receiveAlbumsFail,
    
    requestAlbum,
    receiveAlbum,
    receiveAlbumFail,
};
