import React from "react";
import { VK } from "./VK";
import { Telegram } from "./Telegram";
import { Whatsapp } from "./Whatsapp";
import { SMS } from "./SMS";
import styles from "../../cssModules/DropDown.module.css";

export const DropDown = (props) => {
    
  return (
    <div className={styles.itemBlock}>
        {!props.VK && (
        <div onClick={()=> {props.setVK(true); props.setchosenFilled(true); props.setPopupVK(false) }}>
        
        <VK
        popupVK = {props.popupVK}
        setPopupVK={props.setPopupVK}
        name={props.name} />
      </div>
      )}
      
      {!props.telegram && (
      <div onClick={()=> {props.setTelegram(true); props.setchosenFilled(true); props.setPopupTelegram(false)}}>
        
        <Telegram
        popupTelegram={props.popupTelegram}
        setPopupTelegram={props.setPopupTelegram}
        name={props.name} />
      </div>)}
      
      {!props.Whatsapp && (
      <div onClick={()=> {props.setWhatsapp(true); props.setchosenFilled(true); props.setPopupWhatsapp(false)}}>
      
      <Whatsapp
      popupWhatsapp={props.popupWhatsapp}
      setPopupWhatsapp={props.setPopupWhatsapp}
      name={props.name} />
    </div>)}
      
    {!props.SMS && (
      <div onClick={()=> {props.setSMS(true); props.setchosenFilled(true); props.setPopupSMS(false)}}>
      <SMS
      popupSMS={props.popupSMS}
      setPopupSMS={props.setPopupSMS}
      name={props.name} />
    </div>)}
      
    </div>
  );
};
