import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import CreateUserApi from "../../api/CreateUser";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { name, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            this.createUser(name, email, password);
            this.setState({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    createUser = (name, email, password) => {
        let api = new CreateUserApi(name, email, password);
        let responsePromise = api.createUser();
        responsePromise
            .then((res) => {
                if (!res.ok) {
                    alert("Cannot create account");
                } else {
                    alert("Successfully created account");
                }
                return res.json();
            })
            .then((res) => console.log(res));
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { name, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        label="Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
