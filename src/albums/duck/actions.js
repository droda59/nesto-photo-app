import types from './types';

/* ALBUMS LIST */
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

/* ALBUM DETAILS */
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

/* ALBUM PHOTOS */
const requestAlbumPhotos = () => ({
    type: types.GET_PHOTOS,
});

const receiveAlbumPhotos = photos => ({
    type: types.GET_PHOTOS_SUCCESS,
    photos
});

const receiveAlbumPhotosFail = error => ({
    type: types.GET_PHOTOS_FAILURE,
    error
});

export default {
    requestAlbums,
    receiveAlbums,
    receiveAlbumsFail,
    
    requestAlbum,
    receiveAlbum,
    receiveAlbumFail,
    
    requestAlbumPhotos,
    receiveAlbumPhotos,
    receiveAlbumPhotosFail,
};
