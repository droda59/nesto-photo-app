import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostList from './PostList';
import { postOperations } from './duck';

function mapStateToProps(state) {
    const { postReducer } = state;
    return {
        featuredPosts: postReducer.featuredPosts,
        posts: postReducer.posts,
        isFetching: postReducer.isFetching,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPosts: postOperations.fetchPosts,
    }, dispatch);
}

const PostListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);
  
export default PostListContainer;
