import React, { Component } from "react";
import {
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme
} from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";


const theme = createMuiTheme({
    palette: {
        type: "dark"
    }
});
const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "white"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "white"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "white",
                borderWidth: 6
            },

            "&:hover fieldset": {
                borderColor: "white"
            },
            "&.Mui-focused fieldset": {
                borderColor: "white"
            }
        }
    }
})(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing(1)
    }
}));


export const SimpleTextField = (props) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <CssTextField
                    className={classes.margin}
                    label="Email"
                    id="custom-css-outlined-input" />
                <CssTextField
                    className={classes.margin}
                    label="Password"
                    type="password"
                    id="custom-css-outlined-input" />
            </ThemeProvider>
        </div>
    )
}