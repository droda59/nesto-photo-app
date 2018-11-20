import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Home from './login/LoginPage';
import AlbumPage from './albums/AlbumPage';
import PostPage from './posts/PostPage';
import NotFound from './shared/NotFound';
import { ROUTE_HOME } from './constants/routes';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/albums' component={AlbumPage} />
                    <Route path='/posts' component={PostPage} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}
