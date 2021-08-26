import React from 'react'
import { Switch, Route } from 'react-router';
import Phone from './containers/phone';
import Phones from './containers/phones';

export default (
    <Switch>
        <Route path='/' exact component={Phones}/>
        <Route path='/phones/:id' component={Phone}/>
    </Switch>
)


