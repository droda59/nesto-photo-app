import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import FeaturedPost from './FeaturedPost';
import Post from './Post';

const styles = theme => ({
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

const featuredPosts = [
  {
    title: 'Featured post 1',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Featured post 2',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];

const posts = [
    {
        title: 'Post 1',
        date: 'Nov 10',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post 2',
        date: 'Nov 9',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];

class PostPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div className={this.props.classes.layout}>
                    <main>
                        <Grid container spacing={40} className={this.props.classes.cardGrid}>
                            {featuredPosts.map(post => (
                                <FeaturedPost key={post.title} post={post}></FeaturedPost>
                            ))}
                        </Grid>
                        
                        <Grid container spacing={40} className={this.props.classes.mainGrid}>
                            <Grid item xs={12} md={12}>
                                <Typography variant="h6" gutterBottom>
                                    Dat blog tho
                                </Typography>
                                <Divider />
                                <Grid container spacing={40} className={this.props.classes.cardGrid}>
                                    {posts.map(post => (
                                        <Post post={post} key={post.title}></Post>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </main>
                </div>
            </React.Fragment>
        );
    }
}

PostPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostPage);