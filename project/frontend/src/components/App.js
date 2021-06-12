import React, { Component } from "react";
import { render } from "react-dom";
import Routing from "./Routing";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Routing />
            </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);