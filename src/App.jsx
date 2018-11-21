import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Home from './login/LoginPage';
import NotFound from './shared/NotFound';
import AlbumPage from './albums/AlbumPage';
import PostPage from './posts/PostPage';
import { ROUTE_HOME, ROUTE_ALBUMS, ROUTE_POSTS } from './constants/routes';
import './App.css';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});

class App extends Component {
    render() {
        return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route path={ROUTE_HOME} exact component={Home} />
                    <Route path={ROUTE_ALBUMS} component={AlbumPage} />
                    <Route path={ROUTE_POSTS} component={PostPage} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
        );
    }
}

export default App;
