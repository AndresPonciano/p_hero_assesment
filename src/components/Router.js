import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import videoPlayer from './videoPlayer';
import SavedList from './SavedList';

function Router () {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/savedvideos" component={SavedList}/>
            <Route path="/:video" component={videoPlayer}/>
        </Switch>
    </BrowserRouter>
    );
}

export default Router;
