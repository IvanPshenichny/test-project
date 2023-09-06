import React, { useState } from "react";
import styles from "../../cssModules/ChosenChanels.module.css";
import { Popup } from "../ChosenChanels/Popup";
import { TelegramPopup } from "../ChosenChanels/PopUps/TelegramPopUp";

export const Telegram = (props) => {
  const [insidePopUp, setInsidePopUp] = useState(false);
  return (
    <div className={styles.chosenPopUp}>
      <div className={styles.itemWithDelete}>
        <div className={styles.item} onClick={() => {
                props.setPopupTelegram(!props.popupTelegram);

              }}>
          <img src="https://img.icons8.com/?size=512&id=lUktdBVdL4Kb&format=png" />
          Telegram
        </div>
        <div>
        {props.telegram && (
        <img onClick={()=> {props.setTelegram(false); props.setPopupTelegram(false)}} className={styles.deleteIcon} src='https://cdn-icons-png.flaticon.com/512/10147/10147931.png'/>
        )}
        </div>
      </div>

      <div>
        {props.popupTelegram && (
          <div>
            <TelegramPopup
            name={props.name}
              insidePopUp={insidePopUp}
              setInsidePopUp={setInsidePopUp}
              insideLinkPopUp = {props.insideLinkPopUp}
                setInsideLinkPopUp={props.setInsideLinkPopUp}
            />
          </div>
        )}
      </div>
    </div>
  );
};
