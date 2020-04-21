import React from "react";
import HomePage from "./routes/home_route/homepage";
import UserHomePage from "./routes/user_home_route/userhomepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.css";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route exact path={"/user_home"} component={UserHomePage} />
        </Switch>
    </BrowserRouter>
);

export default App;