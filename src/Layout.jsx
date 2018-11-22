
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import PhotoAlbum from '@material-ui/icons/PhotoAlbum';
import { ROUTE_ALBUMS, ROUTE_POSTS } from './constants/routes';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
});

class Layout extends React.Component {
    state = {
        open: true,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const renderAlbumsLink = itemProps => <Link to={ROUTE_ALBUMS} {...itemProps} />;
        const renderPostsLink = itemProps => <Link to={ROUTE_POSTS} {...itemProps} />;

        return (
            <div className={this.props.classes.root}>
                <AppBar position="fixed" className={this.props.classes.appBar}>
                    <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Clipped drawer
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={this.props.classes.drawer}
                    variant="permanent"
                    classes={{
                    paper: this.props.classes.drawerPaper }}>
                    <div className={this.props.classes.toolbar} />
                    <List>
                        <ListItem button key='Albums' component={renderAlbumsLink}>
                            <ListItemIcon><PhotoAlbum /></ListItemIcon>
                            <ListItemText primary='Albums' />
                        </ListItem>
                        <ListItem button key='Posts' component={renderPostsLink}>
                            <ListItemIcon><LibraryBooks /></ListItemIcon>
                            <ListItemText primary='Posts' />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={this.props.classes.content}>
                    <div className={this.props.classes.toolbar} />
                    {this.props.children}
                </main>
            </div>
        );
    };
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);