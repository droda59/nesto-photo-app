import React, { Component } from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import LoginPage from './login/LoginPage';
import HomePage from './home/HomePage';
import NotFound from './shared/NotFound';
import AlbumListContainer from './albums/AlbumListContainer';
import AlbumContainer from './albums/AlbumContainer';
import PostListContainer from './posts/PostListContainer.js';
import PostContainer from './posts/PostContainer.js';
import { ROUTE_HOME, ROUTE_ALBUMS, ROUTE_POSTS, ROUTE_LOGIN } from './constants/routes';
import Layout from './Layout';
import './App.css';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});

export default class App extends Component {
    isUserLoggedIn() {
        return !!localStorage.getItem('user');
    }

    navigateOrRedirect = (target) => {
        return this.isUserLoggedIn() ? (
            <Layout>
                {target}
            </Layout>
          ) : (
            <Redirect to={ROUTE_LOGIN} />
          );
    }
    
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <CssBaseline />
                    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
                        <Switch>
                            <Route path={ROUTE_HOME} exact render={props => this.navigateOrRedirect(<HomePage {...props} />)} />
                            <Route path={ROUTE_LOGIN} exact render={props => <LoginPage {...props} />}/>

                            <Route path={ROUTE_ALBUMS} exact render={props => this.navigateOrRedirect(<AlbumListContainer {...props} />)} />
                            <Route path={`${ROUTE_ALBUMS}/:albumId`} render={props => this.navigateOrRedirect(<AlbumContainer {...props} />)} />

                            <Route path={ROUTE_POSTS} exact render={props => this.navigateOrRedirect(<PostListContainer {...props} />)} />
                            <Route path={`${ROUTE_POSTS}/:postId`} render={props => this.navigateOrRedirect(<PostContainer {...props} />)} />
                            
                            <Route render={() => <Layout><NotFound /></Layout>}/>
                        </Switch>
                    </BrowserRouter>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
