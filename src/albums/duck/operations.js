import actions from './actions';

const fetchAlbums = () => (dispatch) => {
    dispatch(actions.requestAlbums());
    return fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json(), err => dispatch(actions.receiveAlbumsFail(err)))
        .then(albums => dispatch(actions.receiveAlbums(albums)));
};

const fetchAlbum = (albumId) => (dispatch) => {
    dispatch(actions.requestAlbum(albumId));
    return fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
        .then(res => res.json(), err => dispatch(actions.receiveAlbumFail(err)))
        .then(album => dispatch(actions.receiveAlbum(album)));
};

export default {
    fetchAlbums,
    fetchAlbum,
};
