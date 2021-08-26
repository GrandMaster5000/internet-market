import React from 'react';
import { Switch, Route } from 'react-router';
import Phones from '../phones';

const routes = (
    <Switch>
        <Route path='/' exact component={Phones}/>
    </Switch>
)

const Layout = () => (
    <div className='view-container'>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                sideBar
            </div>
            <div className="col-md-9">
                {routes}
            </div>
        </div>
    </div>
    </div>
)

export default Layout;