import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PhotoCard from './PhotoCard';

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
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
});

class Album extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        album: PropTypes.object.isRequired,
        photos: PropTypes.array.isRequired,
        isFetchingAlbum: PropTypes.bool.isRequired,
        isFetchingPhotos: PropTypes.bool.isRequired,
        fetchAlbum: PropTypes.func.isRequired,
        fetchAlbumPhotos: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const albumId = this.props.match.params.albumId;

        this.props.fetchAlbum(albumId);
        this.props.fetchAlbumPhotos(albumId);
    }

    render() {
        return (
            <React.Fragment>
            <CssBaseline />
                <div className={this.props.classes.heroUnit}>
                    <div className={this.props.classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            {this.props.album.title}
                        </Typography>
                    </div>
                </div>
                <div className={classNames(this.props.classes.layout, this.props.classes.cardGrid)}>
                    <Grid container spacing={40}>
                        {this.props.photos.map(photo => (
                            <PhotoCard photo={photo} key={photo.id}></PhotoCard>
                        ))}
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Album);
