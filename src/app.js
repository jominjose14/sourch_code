import React from "react";
import Header from "./components/header";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Pricing from "./routes/pricing";
import SignUp from "./routes/sign_up";
import SignIn from "./routes/sign_in";
import Work from "./routes/work";
import {auth, createUser} from "./firebase/firebase.config";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user_reducer/user_actions";

class App extends React.Component {
    unSubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unSubscribeFromAuth = auth.onAuthStateChanged(async (firebaseUser) => {
            if (firebaseUser) {
                const usersRef = await createUser(firebaseUser);
                usersRef.onSnapshot((snapshot) => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            }
            setCurrentUser(firebaseUser);
        })
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {
        return (
            <div className={"app-container"}>
                <Header/>
                <Router>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/about"} component={About}/>
                        <Route exact path={"/pricing"} component={Pricing}/>
                        <Route exact path={"/sign_up"} render={() =>
                            this.props.currentUser ?
                                (<Redirect to={"/"}/>)
                                :
                                (<SignUp/>)
                        }/>
                        <Route exact path={"/sign_in"} render={() =>
                            this.props.currentUser ?
                                (<Redirect to={"/"} />)
                                :
                                (<SignIn />)
                        }/>
                        <Route exact path={"/work"} component={Work}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        currentUser: state.user.currentUser
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setCurrentUser: (user) => dispatch(setCurrentUser(user))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);