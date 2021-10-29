import React from "react";
import style from './IconButton.module.css'

export const IconButton = (props) => {
    return <div className={style.IconButtonBlock}>
        <img src={props.urlAddress} alt={props.description}/>
    </div>
}