import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import CommentEntry from './CommentEntry';
import BackButton from '../shared/BackButton';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
        width: '100%',
        textAlign: 'center',
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
        },
    },
    cardGrid: {
        marginTop: theme.spacing.unit * 3,
    },
});

class Post extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired,
        comments: PropTypes.array.isRequired,
        isFetchingPost: PropTypes.bool.isRequired,
        isFetchingComments: PropTypes.bool.isRequired,
        fetchPost: PropTypes.func.isRequired,
        fetchPostComments: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const postId = this.props.match.params.postId;

        this.props.fetchPost(postId);
        this.props.fetchPostComments(postId);
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.props.classes.heroUnit}>
                    <div className={this.props.classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            {this.props.post.title}
                        </Typography>
                    </div>
                </div>
                <BackButton></BackButton>
                <div className={classNames(this.props.classes.layout, this.props.classes.cardGrid)}>
                    <Grid container spacing={40} className={this.props.classes.cardGrid}>
                        <Grid item xs={12} md={10}>
                            {this.props.isFetchingPost && <div className={this.props.classes.progress}><CircularProgress /></div>}
                            <Typography variant='body2'>
                                {this.props.post.body}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={40} className={this.props.classes.cardGrid}>
                        <Grid item xs={12} md={12}>
                            {this.props.isFetchingComments && <div className={this.props.classes.progress}><CircularProgress /></div>}
                            {this.props.comments.map(comment => (
                                <CommentEntry key={comment.id} comment={comment}></CommentEntry>
                            ))}
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(withStyles(styles)(Post));
