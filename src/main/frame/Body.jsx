import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../content/home/Home';
import About from '../content/home/About';

const Body = () => (
    <div className="body">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/blog"/>
        </Switch>
    </div>
)

export default Body;