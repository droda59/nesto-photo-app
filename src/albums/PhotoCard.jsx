import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
    media: {
        height: 140,
    },
};

const PhotoCard = props => {
    const externalLink = () => <a href={props.photo.url} target="_blank">View2</a>
    
    return (
        <Grid item sm={6} md={4} lg={3}>
            <Card className={props.classes.card}>
                <CardMedia
                    className={props.classes.media}
                    image={props.photo.thumbnailUrl}
                    title={props.photo.title} />
                <CardContent className={props.classes.cardContent}>
                    <Typography gutterBottom component="p">
                        {props.photo.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button component={externalLink} to={props.photo.url} size="small" color="primary">
                        View
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
};

PhotoCard.propTypes = {
    classes: PropTypes.object.isRequired,
    photo: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhotoCard);
