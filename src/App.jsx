import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Home from './login/LoginPage';
import NotFound from './shared/NotFound';
import AlbumListContainer from './albums/AlbumListContainer';
import AlbumContainer from './albums/AlbumContainer';
import PostListContainer from './posts/PostListContainer.js';
import PostContainer from './posts/PostContainer.js';
import { ROUTE_HOME, ROUTE_ALBUMS, ROUTE_POSTS } from './constants/routes';
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
                <BrowserRouter>
                    <Switch>
                        <Route path={ROUTE_HOME} exact component={Home} />

                        <Route path={ROUTE_ALBUMS} exact component={AlbumListContainer} />
                        <Route path={`${ROUTE_ALBUMS}/:albumId`} component={AlbumContainer} />

                        <Route path={ROUTE_POSTS} exact component={PostListContainer} />
                        <Route path={`${ROUTE_POSTS}/:postId`} component={PostContainer} />
                        
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}
