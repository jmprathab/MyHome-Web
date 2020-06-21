import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./pages/sign-in-and-sign-up/sign-in-and-sign-up.styles.scss";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/signin"
                        component={SignInAndSignUpPage}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
