import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    markdown: {
      padding: `${theme.spacing.unit * 3}px 0`,
    },
});

const Post = props => (
    <Typography className={props.classes.markdown}>
        {props.post.title}
    </Typography>
);

Post.propTypes = {
    classes: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);
