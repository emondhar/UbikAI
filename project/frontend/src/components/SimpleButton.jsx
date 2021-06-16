import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const SimpleButton = (props) => {
    let buttonTextColor = "black";
    let buttonBackground = "linear-gradient(45deg, #fff 30%, #dbdbdb 90%)";

    if (props.buttonColor === "black") {
        buttonTextColor = "white";
        buttonBackground = "linear-gradient(45deg, #333333 30%, #000 90%)";
    }


    const classes = makeStyles({
        root: {
            borderRadius: 70,
            border: 0,
            background: buttonBackground,
            color: props.buttonTextColor,
            height: 40,
            padding: "0 30px",
            width: 300,
            fontFamily: "Inter, Roboto, Arial",
            fontSize: props.frontSize,
            fontWeight: 900,
            letterSpacing: -0.5,
        },
        label: {
            textTransform: 'uppercase',
        },
    })();


    return (
        <Button
            classes={{
                root: classes.root,
                label: classes.label,
            }}

            onClick={() => { window.location = props.url }}
        >
            {props.children || 'label'}
        </Button>
    )
}