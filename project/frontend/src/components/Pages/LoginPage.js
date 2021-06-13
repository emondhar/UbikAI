import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import { Button } from "../button.jsx";


export default class LoginPage extends Component {
    defaultVotes = 2;

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component="h4" variant="h4" color="primary">
                        Login
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset">
                        <FormHelperText>
                            <div align="center" color="primary">Guest Control of Playback State</div>
                        </FormHelperText>

                    </FormControl>
                </Grid>

                <Grid item xs={12} align="center">
                    <Button>Login</Button>
                </Grid>

            </Grid>
        );
    }
}