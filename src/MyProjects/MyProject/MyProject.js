import React from "react";
import style from "./MyProject.module.css"
import {Button} from "../../Common/Button/Button";


export const MyProject = (props) => {
    return <div className={style.MyProjectBlock}>
        <div className={style.image}>
            <Button title={"Look"} address={'#'}/>
        </div>
        <div className={style.title}>{props.title}</div>
        <div className={style.description}>{props.description}</div>

    </div>
}