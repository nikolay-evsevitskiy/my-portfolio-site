import React from "react";
import style from "./MyProject.module.css"


export const MyProject = (props) => {
    return <div className={style.MyProjectBlock}>
        <div className={style.image}>
            <div className={style.buttonOfProject}>
                <button>Look</button>
            </div>
        </div>
        <div className={style.title}>{props.title}</div>
        <div className={style.description}>{props.description}</div>

    </div>
}