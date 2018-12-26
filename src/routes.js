import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
//import Carousal from "./components/carousal";
import Scorecard from './components/scorecard';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();
export default () => {
    return (



        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    {/* <Route exact path="/carousel" render={props => <Carousal {...props} />} /> */}
                    <Route exact path="/scorecard" render={props => <Scorecard {...props} />} />
                    {/* <Route exact path="/home" render={props => <Home {...props} />} />
        <Route exact path="/createNewRequest" render={props => <CreateNewRequest {...props} />} /> */}

                    <Redirect to="/scorecard" />
                </Switch>
            </Provider>
        </BrowserRouter>
    );
};