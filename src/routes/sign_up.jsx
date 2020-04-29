import React from "react";
import FormInput from "../components/form_input";
import {auth, createUser, signInWithGoogleWithPrompt, signInWithGoogleWithRedirect} from "../firebase/firebase.config";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
            width: 0
        };
    }

    componentDidMount() {
        this.windowUpdateDimensions();
        window.addEventListener("resize", this.windowUpdateDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.windowUpdateDimensions);
    }

    windowUpdateDimensions = () => {
        this.setState({width: window.innerWidth});
    }

    displayNameHandler = (event) => {
        this.setState({displayName: event.target.value});
    }

    emailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    passwordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    confirmPasswordHandler = (event) => {
        this.setState({confirmPassword: event.target.value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            window.alert("Password and Confirm Password don't match.");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUser(user, {displayName});

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            }, () => window.alert("User created"));
        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        const {displayName, email, password, confirmPassword, width} = this.state;
        return (
            <div className={"sign-up-container md:grid md:grid-cols-3 m-4 text-center"}>
                <form className={"col-start-2 bg-whitish shadow-2xl rounded-md w-78"} onSubmit={this.handleSubmit}>
                    <h1 className={"text-3xl text-darkish p-2"}>Sign Up</h1>
                    <FormInput
                        label={"Username"}
                        onChange={this.displayNameHandler}
                        placeholder={"Enter Username"}
                        type={"text"}
                        required={true}
                        value={displayName}
                    />
                    <FormInput
                        label={"Email"}
                        onChange={this.emailHandler}
                        placeholder={"Enter Email"}
                        type={"email"}
                        required={true}
                        value={email}
                    />
                    <FormInput
                        label={"Password"}
                        onChange={this.passwordHandler}
                        placeholder={"Enter Password"}
                        type={"password"}
                        required={true}
                        value={password}
                    />
                    <FormInput
                        label={"Confirm Password"}
                        onChange={this.confirmPasswordHandler}
                        placeholder={"Enter Password Again"}
                        type={"password"}
                        required={true}
                        value={confirmPassword}
                    />
                    <button
                        className={"m-3 ml-4 py-2 px-3 rounded shadow bg-greenish hover:bg-greenishhv text-bluish"}
                        type={"submit"}>Sign
                        Up
                    </button>
                    {
                        width < 768 ?
                            <button
                                className={"m-3 py-2 px-3 rounded shadow bg-greenish hover:bg-greenishhv text-bluish"}
                                onClick={signInWithGoogleWithRedirect}>Connect
                                With Google
                            </button>
                            :
                            <button
                                className={"m-3 py-2 px-3 rounded shadow bg-greenish hover:bg-greenishhv text-bluish"}
                                onClick={signInWithGoogleWithPrompt}>Connect With Google
                            </button>
                    }
                </form>
            </div>
        );
    }
}

export default SignUp;
