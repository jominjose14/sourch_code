import React from "react";
import FormInput from "../components/form_input";
import {signInWithGoogleWithPrompt, signInWithGoogleWithRedirect, auth} from "../firebase/firebase.config";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            width: 0
        }
    }

    componentDidMount() {
        this.windowUpdateDimensions();
        window.addEventListener("resize", this.windowUpdateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.windowUpdateDimensions);
    }

    windowUpdateDimensions = () => {
        this.setState({width: window.innerWidth});
    }

    emailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    passwordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password, width} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password: ""}, () => window.alert("Successful Sign In"));
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const {email, password, width} = this.state;
        return (
            <div className={"sign-in-container md:grid md:grid-cols-3 m-4 text-center"}>
                <form className={"col-start-2 bg-whitish shadow-2xl rounded-md w-78"} onSubmit={this.handleSubmit}>
                    <h1 className={"text-3xl text-darkish p-2"}>Sign In</h1>
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
                    <button className={"m-3 ml-4 py-2 px-3 rounded shadow bg-greenish hover:bg-greenishhv text-bluish"}
                            type={"submit"}>
                        Sign In
                    </button>
                    {
                        width < 768 ?
                            <button
                                className={"m-3 py-2 px-3 rounded shadow bg-greenish hover:bg-greenishhv text-bluish"}
                                onClick={signInWithGoogleWithRedirect}>Connect With Google
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

export default SignIn;