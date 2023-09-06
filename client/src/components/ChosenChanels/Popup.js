import React, { useEffect, useState } from "react";
import styles from "../../cssModules/Popup.module.css";
import styless from "../../cssModules/InsidePopup.module.css";
import { InsidePopup } from "./InsidePopup";

export const Popup = (props) => {

  const [value, changeValue] = useState("");
  const [quickReply, setQuickReply] = useState("");
  const [QuickRepliesArray, setQuickRepliesArray] = useState([
  ]);
  
  const changeInputValue = (e) => {
    changeValue(e.target.value);
  };
  return (
    <div className={styles.mainArea}>
      <div className={styless.inputArea}>
        <div>
          <input
            placeholder="Введите сообщение"
            onChange={changeInputValue}
            value={value}
          />
        </div>
        <div>
          <button>Отправить</button>
        </div>
      </div>

      <div
        className={styles.quickReply}
        
      >
        <div> Добавить быстрый ответ:</div>
        <div>
      {props.insidePopUp && (
        <img onClick={() => {
          props.setInsidePopUp(!props.insidePopUp);
        }} src="https://img.icons8.com/?size=512&id=2775&format=png" />
        )}
        
        </div>
        <div>
      {!props.insidePopUp && (
        <img onClick={() => {
          props.setInsidePopUp(!props.insidePopUp);
        }} src="https://img.icons8.com/?size=512&id=1501&format=png" />
        )}
        
        </div>
        <div>
          {props.insidePopUp && (
            <InsidePopup
              changeValue={changeValue}
              quickReply={quickReply}
              setQuickReply={setQuickReply}
              QuickRepliesArray={QuickRepliesArray}
              setQuickRepliesArray={setQuickRepliesArray}
            />
          )}
        </div>
      </div>
    </div>
  );
};
