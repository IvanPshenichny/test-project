import React from "react";
import styles from "../../../cssModules/KeyBoard.module.css";

export const KeyBoard = (props) => {
    return (
        <div  >
            <img onClick={()=>alert('Функциональную клавиатуру создать могу, но не успел')} className={styles.keyBoard} src='https://static.vecteezy.com/system/resources/previews/019/860/259/non_2x/computer-keyboard-button-layout-template-with-letters-for-graphic-use-transparent-background-illustration-png.png'/>
        </div>
    )
}