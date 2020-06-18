import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import videoPlayer from './videoPlayer';

function Router () {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/:video" component={videoPlayer}/>
        </Switch>
    </BrowserRouter>
    );
}

export default Router;
