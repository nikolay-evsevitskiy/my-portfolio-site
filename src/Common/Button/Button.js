import React from "react";
import style from './Button.module.css'

export const Button = (props) => {
    return <a className={style.buttonStyle} href={props.address}>
        {props.title}
    </a>
}