import actions from './actions';

const fetchAlbums = () => (dispatch) => {
    dispatch(actions.requestAlbums());
    const user = JSON.parse(localStorage.getItem('user'));
    return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
        .then(res => res.json(), err => dispatch(actions.receiveAlbumsFail(err)))
        .then(albums => setTimeout(() => dispatch(actions.receiveAlbums(albums)), 300));
};

const fetchAlbum = (albumId) => (dispatch) => {
    dispatch(actions.requestAlbum(albumId));
    return fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
        .then(res => res.json(), err => dispatch(actions.receiveAlbumFail(err)))
        .then(album => setTimeout(() => dispatch(actions.receiveAlbum(album)), 200));
};

const fetchAlbumPhotos = (albumId) => (dispatch) => {
    dispatch(actions.requestAlbumPhotos(albumId));
    return fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        .then(res => res.json(), err => dispatch(actions.receiveAlbumPhotosFail(err)))
        .then(photos => setTimeout(() => dispatch(actions.receiveAlbumPhotos(photos)), 300));
};

export default {
    fetchAlbums,
    fetchAlbum,
    fetchAlbumPhotos,
};
