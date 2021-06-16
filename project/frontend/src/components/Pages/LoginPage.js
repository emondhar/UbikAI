import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import { SimpleButton } from "../SimpleButton.jsx";
import { UbikLogo } from "../UbikLogo.jsx";
import { SimpleTextField } from "../SimpleTextField.jsx";


export default class LoginPage extends Component {
    defaultVotes = 2;

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <UbikLogo></UbikLogo>
                </Grid>
                <Grid item xs={3} align="center">
                    <SimpleTextField></SimpleTextField>
                </Grid>
                <Grid item xs={12} align="center">
                    <SimpleButton buttonColor="white" buttonTextColor="black" frontSize={30} url="http://127.0.0.1:8000/create">Login</SimpleButton>
                </Grid>
            </Grid>
        );
    }
}