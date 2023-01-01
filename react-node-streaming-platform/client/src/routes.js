import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './containers/Header';
import Login from './containers/Login';
import Page404 from './containers/Page404';
import StreamList from './containers/Streams/StreamList';
import StreamCreate from './containers/Streams/StreamCreate';
import StreamEdit from './containers/Streams/StreamEdit';
import StreamDelete from './containers/Streams/StreamDelete';
import StreamShow from './containers/Streams/StreamShow';

const Routes = () => (
    <>
        <Header />
        <Switch>
            <Route path='/login' component={Login} exact />
            <Route path='/' component={StreamList} exact />
            <Route path='/streams/new' component={StreamCreate} exact />
            <Route path='/streams/edit/:id' component={StreamEdit} exact />
            <Route path='/streams/delete/:id' component={StreamDelete} exact />
            <Route path='/streams/show/:id' component={StreamShow} exact />
            <Route component={Page404} />
        </Switch>
    </>
);

export default Routes;
