import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
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
import Button from '@material-ui/core/Button';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import PhotoAlbum from '@material-ui/icons/PhotoAlbum';
import Eject from '@material-ui/icons/Eject';
import { ROUTE_HOME, ROUTE_ALBUMS, ROUTE_POSTS } from './constants/routes';

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

    isUserLoggedIn() {
        return !!localStorage.getItem('user');
    }

    logout = () => {
        localStorage.removeItem('user');
        this.props.history.push(ROUTE_HOME);
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const renderAlbumsLink = itemProps => <Link to={ROUTE_ALBUMS} {...itemProps} />;
        const renderPostsLink = itemProps => <Link to={ROUTE_POSTS} {...itemProps} />;
        const renderLogOut = itemProps => <Button onClick={this.logout} {...itemProps} />;

        return (
            <div className={this.props.classes.root}>
                <AppBar position="fixed" className={this.props.classes.appBar}>
                    <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Nesto photo app
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
                        {this.isUserLoggedIn() && 
                            <ListItem button key='Logout' component={renderLogOut}>
                                <ListItemIcon><Eject /></ListItemIcon>
                                <ListItemText primary='Logout' />
                            </ListItem>
                        }
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

export default withRouter(withStyles(styles)(Layout));