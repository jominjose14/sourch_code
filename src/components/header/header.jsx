import React from "react";
import { NavLink, Dropdown } from "react-bootstrap";
import "./header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 0
        }
    }

    componentDidMount() {
        this.windowUpdateDimensions();
        window.addEventListener("resize", this.windowUpdateDimensions);
    }

    windowUpdateDimensions = () => {
        this.setState({width: window.innerWidth});
    }

    render() {
        if(this.state.width > 800) {
            return (
                <div className={"header"}>
                    <div className={"title"}>
                        <h1>Sourch</h1>
                    </div>
                    <div className={"nav-links"}>
                        <NavLink href={"/"} eventKey={"home"} className={"home"}><h4>Home</h4></NavLink>
                        <NavLink href={"/about"} eventKey={"about"} className={"about"}><h4>About</h4></NavLink>
                        <NavLink href={"/pricing"} eventKey={"pricing"} className={"pricing"}><h4>Pricing</h4></NavLink>
                        <NavLink href={"/work"} eventKey={"work"} className={"work"}><h4>Work</h4></NavLink>
                    </div>
                    <div className={"side-links"}>
                        <NavLink href={"/login"} eventKey={"login"} className={"login"}><h4>Login</h4></NavLink>
                        <NavLink href={"/register"} eventKey={"register"} className={"register"}><h4>Register</h4></NavLink>
                    </div>
                </div>
            );
        } else {
            return(
                <div className={"mobile-header"}>
                    <div className={"mobile-title"}>
                        <h1>Sourch</h1>
                    </div>
                    <div className={"mobile-links"}>
                        <Dropdown>
                            <Dropdown.Toggle variant={"primary"} id={"links-dropdown"}>
                                Menu
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href={"/"}>Home</Dropdown.Item>
                                <Dropdown.Item href={"/register"}>Register</Dropdown.Item>
                                <Dropdown.Item href={"/login"}>Login</Dropdown.Item>
                                <Dropdown.Item href={"/about"}>About</Dropdown.Item>
                                <Dropdown.Item href={"/pricing"}>Pricing</Dropdown.Item>
                                <Dropdown.Item href={"/work"}>Work</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            );
        }
    }
}

export default Header;