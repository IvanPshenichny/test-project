import React, { useState } from "react";
import styles from "../../cssModules/ChosenChanels.module.css";
import { Popup } from "../ChosenChanels/Popup";
import { SMSPopup } from "../ChosenChanels/PopUps/SMSPopUp";

export const SMS = (props) => {
  return (
    <div className={styles.chosenPopUp}>
      <div className={styles.itemWithDelete}>
        <div className={styles.item} onClick={() => {
                props.setPopupSMS(!props.popupSMS);
              }}>
          <img src="https://img.icons8.com/?size=512&id=ZxJ4etQxTELs&format=png" />
          SMS
        </div>
        <div>
          {props.SMS && (
            <img
              onClick={() => {
                props.setSMS(false);
                props.setPopupSMS(false);
              }}
              className={styles.deleteIcon}
              src="https://cdn-icons-png.flaticon.com/512/10147/10147931.png"
            />
          )}
        </div>
      </div>

      <div>
        {props.popupSMS && (
          <div>
            <SMSPopup
            name={props.name}
              insidePopUp={props.insidePopUp}
              setInsidePopUp={props.setInsidePopUp}
            />
          </div>
        )}
      </div>
    </div>
  );
};
