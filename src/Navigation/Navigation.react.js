import React from 'react';
import AdminDashboardContainer from '../AdminDashboard/AdminDashboardContainer/AdminDashboardContainer.react';
import LoginPage from '../LoginPage/LoginPage.react';
import { Switch, Route } from 'react-router-dom'


const Navigation = () => {

    return (
        <div >
            <Switch>
                <Route exact path="/" component={LoginPage}></Route>
                <Route exact path="/adminDashboard" component={AdminDashboardContainer}></Route>
            </Switch>
        </div>
    );

}

export default Navigation;