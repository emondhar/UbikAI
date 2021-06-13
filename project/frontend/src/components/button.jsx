import React from "react";
import "./button.css"

const STYLE = [
    "button--primary--solid",
    "button--success--solid",

];

const SIZE = [
    "sm",
    "md",

];


export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {

    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const checkButtonSize = STYLE.includes(buttonSize) ? buttonSize : SIZE[0];

    return (
        <button onClick={onClick} type={type}>
            {children}
        </button>
    )
}