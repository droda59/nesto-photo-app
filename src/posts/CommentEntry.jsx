import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    divider: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
    }
});

const CommentEntry = props => (
    <Grid item xs={12} md={6}>
        <Typography variant='h6'>
            {props.comment.name}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
            {props.comment.email}
        </Typography>
        <Typography variant='body2'>
            {props.comment.body}
        </Typography>
        <Divider className={props.classes.divider} />
    </Grid>
);

CommentEntry.propTypes = {
    classes: PropTypes.object.isRequired,
    comment: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentEntry);
