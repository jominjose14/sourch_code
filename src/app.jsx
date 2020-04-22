import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./routes/home_route/homepage";
import AboutPage from "./routes/about_route/aboutpage";
import LoginPage from "./routes/login_route/loginpage";
import RegisterPage from "./routes/register_route/registerpage";
import PricingPage from "./routes/pricing_route/pricingpage";
import WorkPage from "./routes/work_route/workpage";
import "./app.css"

const App = () => {
    return(
        <div className={"app-container"}>
            <Header />
            <Router>
                <Switch>
                    <Route exact path={"/"} component={HomePage} />
                    <Route exact path={"/about"} component={AboutPage} />
                    <Route exact path={"/login"} component={LoginPage} />
                    <Route exact path={"/register"} component={RegisterPage} />
                    <Route exact path={"/pricing"} component={PricingPage} />
                    <Route exact path={"/work"} component={WorkPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;