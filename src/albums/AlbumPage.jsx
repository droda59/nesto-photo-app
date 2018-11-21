import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Album from './Album';

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

const albums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class AlbumPage extends React.Component {
    render() {
        return (
            <React.Fragment>
            <CssBaseline />
                <div className={this.props.classes.heroUnit}>
                    <div className={this.props.classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Album layout
                        </Typography>
                    </div>
                </div>
                <div className={classNames(this.props.classes.layout, this.props.classes.cardGrid)}>
                    <Grid container spacing={40}>
                        {albums.map(album => (
                            <Album key={album} album={album}></Album>
                        ))}
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}


AlbumPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlbumPage);