import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ROUTE_POSTS } from '../constants/routes';

const styles = {
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
};

const FeaturedPostEntry = props => (
    <Card className={props.classes.card}>
        <div className={props.classes.cardDetails}>
            <CardContent>
                <Typography component="h2" variant="h5">
                    {props.post.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {props.post.body.substring(0, 40)}...
                </Typography>
                <Link to={`${ROUTE_POSTS}/${props.post.id}`}>
                    <Typography variant="subtitle1" color="primary">
                        Continue reading
                    </Typography>
                </Link>
            </CardContent>
        </div>
    </Card>
);

FeaturedPostEntry.propTypes = {
    classes: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeaturedPostEntry);
