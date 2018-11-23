import actions from './actions';

const fetchAlbums = () => (dispatch) => {
    dispatch(actions.requestAlbums());
    const user = JSON.parse(localStorage.getItem('user'));
    return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
        .then(res => res.json(), err => dispatch(actions.receiveAlbumsFail(err)))
        .then(albums => dispatch(actions.receiveAlbums(albums)));
};

const fetchAlbum = (albumId) => (dispatch) => {
    dispatch(actions.requestAlbum(albumId));
    return fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
        .then(res => res.json(), err => dispatch(actions.receiveAlbumFail(err)))
        .then(album => dispatch(actions.receiveAlbum(album)));
};

const fetchAlbumPhotos = (albumId) => (dispatch) => {
    dispatch(actions.requestAlbumPhotos(albumId));
    return fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        .then(res => res.json(), err => dispatch(actions.receiveAlbumPhotosFail(err)))
        .then(photos => dispatch(actions.receiveAlbumPhotos(photos)));
};

export default {
    fetchAlbums,
    fetchAlbum,
    fetchAlbumPhotos,
};
