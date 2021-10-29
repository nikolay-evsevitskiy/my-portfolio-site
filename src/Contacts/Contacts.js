import React from "react";
import style from './Contacts.module.css'
import {Button} from "../Common/Button/Button";

export const Contacts = () => {
    return <div className={style.ContactsContainer}>
        <div className={style.ContactsBlock}>
            <h3 className={style.title}>Contacts</h3>
            <div className={style.ContactsForm}>
                <form action="">
                    <div>
                        <input type="text"/>
                    </div>
                    <div>
                        <input type="mail"/>
                    </div>
                    <div className={style.blockTextArea}>
                        <textarea name="" id="" cols="45" rows="10"></textarea>
                    </div>
                </form>
            </div>

            <Button title={"Send"} />
        </div>
    </div>
}