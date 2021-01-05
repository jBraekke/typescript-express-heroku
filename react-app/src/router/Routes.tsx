import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';

export default function Routes(): JSX.Element {
    return (
        <Switch>
            <Route path="/" exact>
                <Main />
            </Route>
            <Route path="/new-booking" exact>
                <div>
                    New booking
                </div>
            </Route>
            <Route path="/booking" exact>
                <div>
                    All bookings
                </div>
            </Route>
        </Switch>
    );
}