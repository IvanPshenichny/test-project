import React, { useEffect, useState } from "react";
import styles from "../../../cssModules/Popup.module.css";
import styless from "../../../cssModules/InsidePopup.module.css";
import { InsidePopup } from "../InsidePopup";

export const SMSPopup = (props) => {
  const [value, changeValue] = useState("");
  const [quickReply, setQuickReply] = useState("");
  const [QuickRepliesArray, setQuickRepliesArray] = useState([
  ]);
  const [messages, setMessages] = useState([]);

  QuickRepliesArray.length = Math.min(QuickRepliesArray.length, 2);
  
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
    Быстрые ответы не поддерживаются
</div>
<div className={styles.messagesMainArea}>
        <div>Сообщения:</div>
        <div>{MessagesArray}</div>
      </div>
    </div>
  );
};
