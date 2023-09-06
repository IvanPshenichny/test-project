import React, { useState } from "react";
import styles from "../../cssModules/ChosenChanels.module.css";
import { Popup } from "../ChosenChanels/Popup";
import { WhatsAppPopup } from "../ChosenChanels/PopUps/WhatsAppPopUp";

export const Whatsapp = (props) => {
  return (
    <div className={styles.chosenPopUp}>
      <div className={styles.itemWithDelete}>
        <div className={styles.item} onClick={() => {
                props.setPopupWhatsapp(!props.popupWhatsapp);
              }}>
          <img src="https://img.icons8.com/?size=512&id=16733&format=png" />
          WhatsApp
        </div>
        <div>
          {props.Whatsapp && (
            <img
              onClick={() => {
                props.setWhatsapp(false);
                props.setPopupWhatsapp(false);
              }}
              className={styles.deleteIcon}
              src="https://cdn-icons-png.flaticon.com/512/10147/10147931.png"
            />
          )}
        </div>
      </div>

      <div>
        {props.popupWhatsapp && (
          <div>
            <WhatsAppPopup
            name={props.name}
              insidePopUp={props.insidePopUp}
              setInsidePopUp={props.setInsidePopUp}
              insideLinkPopUp={props.insideLinkPopUp}
              setInsideLinkPopUp={props.setInsideLinkPopUp}
            />
          </div>
        )}
      </div>
    </div>
  );
};
