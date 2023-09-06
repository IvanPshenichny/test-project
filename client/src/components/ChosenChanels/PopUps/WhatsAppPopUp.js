import React, { useEffect, useState } from "react";
import styles from "../../../cssModules/Popup.module.css";
import styless from "../../../cssModules/InsidePopup.module.css";
import stylesss from "../../../cssModules/KeyBoard.module.css";
import { InsidePopup } from "../InsidePopup";
import { WhatsAppInsideLinkPopup } from "./InsidePopUps/InsideLinkPopUp/WhatsAppInsideLinkPopUp";
import { ToggleButton } from "./ToggleButton";
import { KeyBoard } from "./KeyBoardPopUp";

export const WhatsAppPopup = (props) => {
  const [insidePopUp, setInsidePopUp] = useState("");
  const [value, changeValue] = useState("");
  const [quickReply, setQuickReply] = useState("");
  const [QuickRepliesArray, setQuickRepliesArray] = useState([
  ]);
  const [messages, setMessages] = useState([]);
  const [toggleState, toggleChange] = useState([]);
  QuickRepliesArray.length = Math.min(QuickRepliesArray.length, 10);

  const changeInputValue = (e) => {
    changeValue(e.target.value);
  };
  const SetMessageHandler = () => {
    if (value.length > 0) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          user: props.name + ":",
          messageValue: value,
        },
      ]);
    }
    changeValue("");
  };
  const MessagesArray = messages.map((m) => {
    return (
      <div className={styles.messagesArea}>
        <div>{m.user}</div>
        <div className={styles.messageValueArea}>{m.messageValue}</div>
      </div>
    );
  });
  return (
    <div className={styles.mainArea}>
      <div className={styless.inputArea}>
        <div>
          <input
          maxlength="10"
            placeholder="Введите сообщение"
            onChange={changeInputValue}
            value={value}
          />
        </div>
        <div>
          <button onClick={SetMessageHandler}>Отправить</button>
        </div>
      </div>
      <div>
        <ToggleButton toggleState={toggleState} toggleChange={toggleChange} />
      </div>
      <div>
        {!toggleState&&(      <div className={styles.quickReply}>
        <div> Добавить быстрый ответ:</div>
        <div>
          {insidePopUp && (
            <img
              onClick={() => {
                setInsidePopUp(!insidePopUp);
              }}
              src="https://img.icons8.com/?size=512&id=2775&format=png"
            />
          )}
        </div>
        <div>
          {!insidePopUp && (
            <img
              onClick={() => {
                setInsidePopUp(!insidePopUp);
              }}
              src="https://img.icons8.com/?size=512&id=1501&format=png"
            />
          )}
        </div>
        <div>
          {insidePopUp && (
            <InsidePopup
              changeValue={changeValue}
              quickReply={quickReply}
              setQuickReply={setQuickReply}
              QuickRepliesArray={QuickRepliesArray}
              setQuickRepliesArray={setQuickRepliesArray}
              insideLinkPopUp={props.insideLinkPopUp}
              setInsideLinkPopUp={props.setInsideLinkPopUp}
            />
          )}
        </div>
      </div>)}
      </div>
      <div>
        {toggleState&&( <div className={stylesss.keyBoard}>
        <KeyBoard />
      </div>)}
      </div>
      <div  >
      Кнопки ссылки не поддерживаются
      </div>
      <div className={styles.messagesMainArea}>
        <div>Сообщения:</div>
        <div>{MessagesArray}</div>
      </div>
    </div>
  );
};
