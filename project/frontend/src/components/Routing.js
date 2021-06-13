import React, { Component } from "react";
import RoomJoinPage from "./Pages/RoomJoinPage";
import CreateRoomPage from "./Pages/CreateRoomPage";
import LoginPage from "./Pages/LoginPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default class Routing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/join" component={RoomJoinPage} />
                    <Route path="/create" component={CreateRoomPage} />
                </Switch>
            </Router>
        );
    }
}