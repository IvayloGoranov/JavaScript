import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import UserProfile from './components/UserProfile';

export default (
    <Route component={App}>
        <Route exact path="/" component={Home} />
        <Route path="/movie/add" component={AddMovie} />
        <Route path="/user/profile/:userId" component={UserProfile} />
    </Route>
);