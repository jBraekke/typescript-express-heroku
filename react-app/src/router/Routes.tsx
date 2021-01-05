import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Booking from '../pages/Booking';
import Main from '../pages/Main';
import NewBooking from '../pages/NewBooking';

export default function Routes(): JSX.Element {
    return (
        <Switch>
            <Route path="/" exact>
                <Main />
            </Route>
            <Route path="/new-booking" exact>
                <NewBooking />
            </Route>
            <Route path="/booking" exact>
                <Booking />
            </Route>
        </Switch>
    );
}