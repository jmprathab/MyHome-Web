import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import LoginUserApi from "../../api/LoginUser";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            this.loginUser(email, password);
            this.setState({
                email: "",
                password: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    loginUser = (email, password) => {
        let api = new LoginUserApi(email, password);
        let responsePromise = api.createUser();
        responsePromise
            .then((res) => {
                if (!res.ok) {
                    alert("Cannot login");
                } else {
                    alert("Successfully logged in");
                }
                return res.json();
            })
            .then((res) => console.log(res));
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign in </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
