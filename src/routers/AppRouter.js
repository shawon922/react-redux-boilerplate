import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home'
import Feature from '../containers/Feature'
import NewFeature from '../containers/Feature/NewFeature'
import NotFound from '../containers/NotFound';

const AppRouter = () => (
    <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/feature/" exact={true} component={Feature} />
        <Route path="/new-feature/" exact={true} component={NewFeature} />
        <Route component={NotFound} />
    </Switch>
);

export default AppRouter;