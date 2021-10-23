import React from "react";
import style from "./Skills.module.css"
import commonStyle from "../Common/Styles/Styles.module.css"
import {Skill} from "./Skill/Skill";


export const Skills = () => {
    return <div className={style.skillsBlock}>
        <div className={`${commonStyle.container} ${style.skillsContainer}`} >
            <h2 className={style.title}>Skills</h2>
            <div className={style.skills}>
                <Skill />
                <Skill />
                <Skill />
            </div>

        </div>
    </div>
}