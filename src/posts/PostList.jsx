import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import FeaturedPostEntry from './FeaturedPostEntry';
import PostEntry from './PostEntry';

const styles = theme => ({
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
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    cardGrid: {
        marginTop: theme.spacing.unit * 3,
    },
});

class PostPage extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        posts: PropTypes.array.isRequired,
        featuredPosts: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        fetchPosts: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div className={this.props.classes.heroUnit}>
                    <div className={this.props.classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Dat blog tho
                        </Typography>
                    </div>
                </div>
                <div className={this.props.classes.layout}>
                    <Grid container spacing={40} className={this.props.classes.cardGrid}>
                        {this.props.featuredPosts.map(post => (
                            <Grid item key={post.id} xs={12} md={6}>
                                <FeaturedPostEntry post={post}></FeaturedPostEntry>
                            </Grid>
                        ))}
                    </Grid>
                    
                    <Grid container spacing={40} className={this.props.classes.mainGrid}>
                        <Grid item xs={12} md={12}>
                            <Divider />
                            {this.props.posts.map(post => (
                                <Grid key={post.id} item xs={12} md={8}>
                                    <PostEntry post={post}></PostEntry>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

PostPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostPage);