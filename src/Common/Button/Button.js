import React from "react";
import style from './Button.module.css'

export const Button = (props) => {
    return <div className={style.buttonStyle}>
        <button>
            {props.title}
        </button>
    </div>
 }