import React, { useState } from "react";
import styles from "../cssModules/MyPage.module.css";
import styless from "../cssModules/ChosenChanels.module.css";
import { DropDown } from "./Dropdown/DropDown";
import { ChosenChanels } from "./ChosenChanels/ChosenChanels";

export const MyPage = (props) => {
  const [open, setOpen] = useState(false);
  const [VK, setVK] = useState(false);
  const [telegram, setTelegram] = useState(false);
  const [Whatsapp, setWhatsapp] = useState(false);
  const [SMS, setSMS] = useState(false);
  const [chosenFilled, setchosenFilled] = useState(false);
  const [popupVK, setPopupVK] = useState(false);
  const [popupTelegram, setPopupTelegram] = useState(false);
  const [popupWhatsapp, setPopupWhatsapp] = useState(false);
  const [popupSMS, setPopupSMS] = useState(false);
  const [insidePopUp,setInsidePopUp] = useState(false);
  const [insideLinkPopUp,setInsideLinkPopUp] = useState(false);

  return (
    <div className={styles.mainArea}>
      <div className={styles.leftSide}>
        <div className={styles.dropdown}>
          <div
            onClick={() => setOpen(!open)}
            className={styless.upperinscription}
          >
            Выберите канал
          </div>
          <div onClick={() => setOpen(!open)}>
            <img src="https://img.icons8.com/?size=512&id=39786&format=png" />
          </div>
          <div>
            {open && (
              <DropDown
              name={props.name}
                className={styles.dropdown}
                open={open}
                VK={VK}
                setVK={setVK}
                telegram={telegram}
                setTelegram={setTelegram}
                Whatsapp={Whatsapp}
                setWhatsapp={setWhatsapp}
                SMS={SMS}
                setSMS={setSMS}
                setchosenFilled={setchosenFilled}
                popupVK = {popupVK}
                setPopupVK={setPopupVK}
                popupTelegram={popupTelegram}
                setPopupTelegram={setPopupTelegram}
                popupWhatsapp={popupWhatsapp}
                setPopupWhatsapp={setPopupWhatsapp}
                popupSMS={popupSMS}
                setPopupSMS={setPopupSMS}
              />
            )}
          </div>
        </div>
        <div>
          {chosenFilled && (
            <ChosenChanels
            name={props.name}
              VK={VK}
              setVK={setVK}
              telegram={telegram}
              setTelegram={setTelegram}
              Whatsapp={Whatsapp}
              setWhatsapp={setWhatsapp}
              SMS={SMS}
              setSMS={setSMS}
              popupVK={popupVK}
              setPopupVK={setPopupVK}
              popupTelegram = {popupTelegram}
              setPopupTelegram = {setPopupTelegram}
              popupWhatsapp = {popupWhatsapp}
              setPopupWhatsapp = {setPopupWhatsapp}
              popupSMS = {popupSMS}
              setPopupSMS = {setPopupSMS}
              insidePopUp={insidePopUp}
              setInsidePopUp={setInsidePopUp}
              insideLinkPopUp={insideLinkPopUp}
              setInsideLinkPopUp={setInsideLinkPopUp}
            />
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};
