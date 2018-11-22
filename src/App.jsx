import React, { Component } from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './login/LoginPage';
import NotFound from './shared/NotFound';
import AlbumListContainer from './albums/AlbumListContainer';
import AlbumContainer from './albums/AlbumContainer';
import PostListContainer from './posts/PostListContainer.js';
import PostContainer from './posts/PostContainer.js';
import { ROUTE_HOME, ROUTE_ALBUMS, ROUTE_POSTS } from './constants/routes';
import Layout from './Layout';
import './App.css';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <CssBaseline />
                    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
                        <Switch>
                            <Route path={ROUTE_HOME} exact render={props => <Layout><Home {...props} /></Layout>}/>

                            <Route path={ROUTE_ALBUMS} exact render={props => <Layout><AlbumListContainer {...props} /></Layout>}/>
                            <Route path={`${ROUTE_ALBUMS}/:albumId`} render={props => <Layout><AlbumContainer {...props} /></Layout>}/>

                            <Route path={ROUTE_POSTS} exact render={props => <Layout><PostListContainer {...props} /></Layout>}/>
                            <Route path={`${ROUTE_POSTS}/:postId`} render={props => <Layout><PostContainer {...props} /></Layout>}/>
                            
                            <Route render={() => <Layout><NotFound /></Layout>}/>
                        </Switch>
                    </BrowserRouter>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
