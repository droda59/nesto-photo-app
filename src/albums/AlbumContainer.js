import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Album from './Album';
import { albumOperations } from './duck';

function mapStateToProps(state) {
    const { albumReducer } = state;
    return {
        album: albumReducer.album,
        photos: albumReducer.photos,
        isFetchingAlbum: albumReducer.isFetchingAlbum,
        isFetchingPhotos: albumReducer.isFetchingPhotos,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchAlbum: albumOperations.fetchAlbum,
        fetchAlbumPhotos: albumOperations.fetchAlbumPhotos,
    }, dispatch);
}

const AlbumContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Album);
  
export default AlbumContainer;
