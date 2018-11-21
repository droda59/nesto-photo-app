import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AlbumList from './AlbumList';
import { albumOperations } from './duck';

function mapStateToProps(state) {
    const { albumReducer } = state;
    return {
        albums: albumReducer.albums,
        isFetching: albumReducer.isFetching,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchAlbums: albumOperations.fetchAlbums,
    }, dispatch);
}

const AlbumListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumList);
  
export default AlbumListContainer;
