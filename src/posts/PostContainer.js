import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Post from './Post';
import { postOperations } from './duck';

function mapStateToProps(state) {
    const { postReducer } = state;
    return {
        post: postReducer.post,
        comments: postReducer.comments,
        isFetchingPost: postReducer.isFetchingPost,
        isFetchingComments: postReducer.isFetchingComments,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPost: postOperations.fetchPost,
        fetchPostComments: postOperations.fetchPostComments,
    }, dispatch);
}

const PostContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);
  
export default PostContainer;
