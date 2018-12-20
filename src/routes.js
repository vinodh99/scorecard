import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
//import Carousal from "./components/carousal";
import Scorecard from './components/scorecard';

export default () => {
    return (



        <BrowserRouter>
            <Switch>
                {/* <Route exact path="/carousel" render={props => <Carousal {...props} />} /> */}
                <Route exact path="/scorecard" render={props => <Scorecard {...props} />} />
                {/* <Route exact path="/home" render={props => <Home {...props} />} />
        <Route exact path="/createNewRequest" render={props => <CreateNewRequest {...props} />} /> */}

                <Redirect to="/scorecard" />
            </Switch>
        </BrowserRouter>
    );
};