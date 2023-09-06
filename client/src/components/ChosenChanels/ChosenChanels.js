import React from "react";
import { VK } from "../Dropdown/VK";
import { Telegram } from "../Dropdown/Telegram";
import { Whatsapp } from "../Dropdown/Whatsapp";
import { SMS } from "../Dropdown/SMS";
import styles from "../../cssModules/ChosenChanels.module.css";

export const ChosenChanels = (props) => {
  return (
    <div className={styles.mainArea}>
      <div className={styles.upperinscription}>Выбранные каналы:</div>
      <div className={styles.itemBlock}>
        <div>
          {props.VK && (
            <div>
              <VK
              name={props.name}
                VK={props.VK}
                setVK={props.setVK}
                popupVK={props.popupVK}
                setPopupVK={props.setPopupVK}
                insidePopUp={props.insidePopUp}
                setInsidePopUp={props.setInsidePopUp}
                insideLinkPopUp={props.insideLinkPopUp}
                setInsideLinkPopUp={props.setInsideLinkPopUp}
              />
            </div>
          )}
        </div>

        <div>
          {props.telegram && (
            <div>
              <Telegram
              name={props.name}
                telegram={props.telegram}
                setTelegram={props.setTelegram}
                popupTelegram={props.popupTelegram}
                setPopupTelegram={props.setPopupTelegram}
                insidePopUp={props.insidePopUp}
                setInsidePopUp={props.setInsidePopUp}
                insideLinkPopUp={props.insideLinkPopUp}
                setInsideLinkPopUp={props.setInsideLinkPopUp}
              />
            </div>
          )}
        </div>

        <div>
          {props.Whatsapp && (
            <div>
              <Whatsapp
              name={props.name}
                Whatsapp={props.Whatsapp}
                setWhatsapp={props.setWhatsapp}
                popupWhatsapp={props.popupWhatsapp}
                setPopupWhatsapp={props.setPopupWhatsapp}
                insidePopUp={props.insidePopUp}
                setInsidePopUp={props.setInsidePopUp}
                insideLinkPopUp={props.insideLinkPopUp}
                setInsideLinkPopUp={props.setInsideLinkPopUp}
              />
            </div>
          )}
        </div>

        <div>
          {props.SMS && (
            <div>
              <SMS
              name={props.name}
                SMS={props.SMS}
                setSMS={props.setSMS}
                popupSMS={props.popupSMS}
                setPopupSMS={props.setPopupSMS}
                insidePopUp={props.insidePopUp}
                setInsidePopUp={props.setInsidePopUp}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
