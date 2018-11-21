import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Album from './Album';
import { albumOperations } from './duck';

function mapStateToProps(state) {
    const { albumReducer } = state;
    return {
        album: albumReducer.album,
        isFetching: albumReducer.isFetching,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchAlbum: albumOperations.fetchAlbum,
    }, dispatch);
}

const AlbumContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Album);
  
export default AlbumContainer;
