import React from "react";
import style from './Contacts.module.css'
import {Button} from "../Common/Button/Button";

export const Contacts = () => {
    return <div className={style.ContactsContainer}>
        <div className={style.ContactsBlock}>
            <h3 className={style.title}>Contacts</h3>
            <form className={style.ContactsForm} action="">
                <input type="text"/>
                <input type="mail"/>
                <textarea className={style.blockTextArea} name="" id="" cols="45" rows="10"></textarea>
                <Button title={"Send"} />
            </form>
        </div>
    </div>
}