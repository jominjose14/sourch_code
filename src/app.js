import React from "react";
import Header from "./components/header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Pricing from "./routes/pricing";
import SignUp from "./routes/sign_up";
import SignIn from "./routes/sign_in";
import Work from "./routes/work";
import {auth, createUser} from "./firebase/firebase.config";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unSubscribeFromAuth = null;

    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged(async (firebaseUser) => {
            if (firebaseUser) {
                const usersRef = await createUser(firebaseUser);
                usersRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                });
            }
            this.setState({currentUser: firebaseUser});
        })
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {
        return (
            <div className={"app-container"}>
                <Header currentUser={this.state.currentUser}/>
                <Router>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/about"} component={About}/>
                        <Route exact path={"/pricing"} component={Pricing}/>
                        <Route exact path={"/sign_up"} component={SignUp}/>
                        <Route exact path={"/sign_in"} component={SignIn}/>
                        <Route exact path={"/work"} component={Work}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;