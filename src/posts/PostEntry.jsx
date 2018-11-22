import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { ROUTE_POSTS } from '../constants/routes';

const styles = theme => ({
    markdown: {
      padding: `${theme.spacing.unit * 3}px 0`,
    },
});

const PostEntry = props => (
    <div>
        <Typography className={props.classes.markdown} variant='h6'>
            {props.post.title}
        </Typography>
        <Typography className={props.classes.markdown} variant='body2'>
            {props.post.body.substring(0, 80)}...
        </Typography>
        <Link to={`${ROUTE_POSTS}/${props.post.id}`}>
            <Typography variant="subtitle1" color="primary">
                Continue reading
            </Typography>
        </Link>
        <Divider />
    </div>
);

PostEntry.propTypes = {
    classes: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostEntry);
