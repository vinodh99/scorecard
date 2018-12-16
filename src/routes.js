import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Carousal from "./components/carousal";


export default () => {
    return (



        <BrowserRouter>
            <Switch>
                <Route exact path="/home" render={props => <Carousal {...props} />} />
                {/* <Route exact path="/home" render={props => <Home {...props} />} />
        <Route exact path="/createNewRequest" render={props => <CreateNewRequest {...props} />} /> */}

                <Redirect to="/home" />
            </Switch>
        </BrowserRouter>
    );
};