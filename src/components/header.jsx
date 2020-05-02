import React from "react";
import {auth} from "../firebase/firebase.config";
import { connect } from "react-redux";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {width: 0}
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({width: window.innerWidth});
    }

    render() {
        const {width} = this.state;
        if (width < 768) {
            return (
                <div className={"header"}>
                    <nav className={"uk-navbar-container"} uk-navbar>
                        <div className={"bg-whitish m-2 p-3 rounded-md shadow-2xl grid grid-cols-6 gap-3"}>
                            <h1 className={"col-start-3 col-span-2 text-2xl text-bluish"}>Sourch</h1>
                            <div className={"dropdown col-start-5"}>
                                <button className={"uk-button uk-button-default"}>Menu</button>
                                <div uk-dropdown={"mode: click"}>
                                    <ul className={"uk-nav uk-dropdown-nav"}>
                                        <li className={"uk-nav-header"}>Site Navs</li>
                                        <li><a href={"/"}>Home</a></li>
                                        <li><a href={"/about"}>About</a></li>
                                        <li><a href={"/pricing"}>Pricing</a></li>
                                        <li><a href={"/work"}>Work</a></li>
                                        <li className={"uk-nav-header"}>Auth Navs</li>
                                        {
                                            this.props.currentUser ?
                                                <li onClick={() => auth.signOut()}>Sign Out</li>
                                                :
                                                <React.Fragment>
                                                    <li><a href={"/sign_up"}>Sign Up</a></li>
                                                    <li><a href={"/sign_in"}>Sign In</a></li>
                                                </React.Fragment>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            );
        } else {
            return (
                <div className={"header"}>
                    <nav className={"uk-navbar-container"} uk-navbar>
                        <div className={"bg-whitish m-2 rounded-lg shadow-2xl grid grid-cols-12 gap-3"}>
                            <div className={"title col-start-2 col-span-2"}>
                                <ul className={"uk-navbar-nav"}>
                                    <li><a href={"/"}><h1
                                        className={"text-bluish text-3xl col-start-2 col-span-2"}>Sourch</h1></a></li>
                                </ul>
                            </div>
                            <div className={"site-navs col-start-5 col-span-3"}>
                                <ul className={"uk-navbar-nav"}>
                                    <li><a href={"/"}>Home</a></li>
                                    <li><a href={"/about"}>About</a></li>
                                    <li><a href={"/pricing"}>Pricing</a></li>
                                    <li><a href={"/work"}>Work</a></li>
                                </ul>
                            </div>
                            <div className={"auth-navs col-start-11 col-span-2"}>
                                <ul className={"uk-navbar-nav"}>
                                    {
                                        this.props.currentUser ?
                                            <li onClick={() => auth.signOut()}><a>Sign Out</a></li>
                                            :
                                            <React.Fragment>
                                                <li><a href={"/sign_up"}>Sign Up</a></li>
                                                <li><a href={"/sign_in"}>Sign In</a></li>
                                            </React.Fragment>
                                    }
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return({currentUser: state.user.currentUser});
}

export default connect(mapStateToProps)(Header);