import React from "react";
import style from './RemoteWork.module.css'
import {Button} from "../Common/Button/Button";

export const RemoteWork = () => {
    return <div className={style.RemoteWorkContainer}>
        <div className={style.RemoteWorkBlock}>
            <h3 className={style.title}>I am considering options for remote work</h3>
            <Button title={"Hire me!"} />
        </div>
    </div>
}