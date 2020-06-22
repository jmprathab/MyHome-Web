import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./pages/sign-in-and-sign-up/sign-in-and-sign-up.styles.scss";
import HomePage from "./pages/homepage/homepage.component";

import Header from "./components/header/header.component";

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
                <div>
                    <Header currentUser={this.state.currentUser} />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/signin" component={SignInAndSignUpPage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
