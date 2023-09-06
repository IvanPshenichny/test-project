import React, { useEffect, useState } from "react";
import styles from "../../../cssModules/Popup.module.css";
import styless from "../../../cssModules/InsidePopup.module.css";
import stylesss from "../../../cssModules/KeyBoard.module.css";
import stylessss from "../../../cssModules/ChosenChanels.module.css";
import { InsidePopup } from "../InsidePopup";
import { VKInsidePopup } from "./InsidePopUps/VKInsidePopUp";
import { VKInsideLinkPopup } from "./InsidePopUps/InsideLinkPopUp/VKInsideLinkPopUp";
import { KeyBoard } from "./KeyBoardPopUp";
import { ToggleButton } from "./ToggleButton";

export const VKPopup = (props) => {
  const [insidePopUp, setInsidePopUp] = useState(false);
  const [value, changeValue] = useState("");
  const [quickReply, setQuickReply] = useState("");
  const [QuickRepliesArray, setQuickRepliesArray] = useState([]);
  const [insideLinkPopUp, setInsideLinkPopUp] = useState(false);
  const [linkValue, changeLinkValue] = useState("");
  const [quickLink, setQuickLink] = useState("");
  const [QuickLinksArray, setQuickLinksArray] = useState([]);
  const [toggleState, toggleChange] = useState([]);
  const [messages, setMessages] = useState([]);
  const [links, setlinks] = useState([]);
  QuickRepliesArray.length = Math.min(QuickRepliesArray.length, 40);
 
  
  const changeInputValue = (e) => {
    changeValue(e.target.value);
  };
  const SetMessageHandler = () =>
  {
    if (value.length > 0) {
      setMessages ([
        ...messages,
        {
        id: messages.length + 1,
        user: props.name + ':',
        messageValue: value,
      }
      ])
    }
    changeValue('')
  }
  const MessagesArray = messages.map((m) => {
    return (
      <div className={styles.messagesArea}>

        <div>{m.user}</div>
        <div className={styles.messageValueArea}>{m.messageValue}</div>
      </div>
      
    )
  }
    
  ) 

  return (
    <div className={styles.mainArea}>
      <div className={styless.inputArea}>
        <div>
          <input
            maxlength="4096"
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
            <VKInsidePopup
              changeValue={changeValue}
              quickReply={quickReply}
              setQuickReply={setQuickReply}
              QuickRepliesArray={QuickRepliesArray}
              setQuickRepliesArray={setQuickRepliesArray}
              insideLinkPopUp={props.insideLinkPopUp}
              setInsideLinkPopUp={props.setInsideLinkPopUp}
              messages={messages}
              setMessages={setMessages}
              links={links}
              setlinks={setlinks}
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


      <div className={styles.quickReply}>
        <div>Добавить кнопку ссылку:</div>
        <div>
          {insideLinkPopUp && (
            <img
              onClick={() => {
                setInsideLinkPopUp(!insideLinkPopUp);
              }}
              src="https://img.icons8.com/?size=512&id=2775&format=png"
            />
          )}
        </div>
        <div>
          {!insideLinkPopUp && (
            <img
              onClick={() => {
                setInsideLinkPopUp(!insideLinkPopUp);
              }}
              src="https://img.icons8.com/?size=512&id=1501&format=png"
            />
          )}
        </div>

        <div>
          {insideLinkPopUp && (
            <VKInsideLinkPopup
              changeLinkValue={changeLinkValue}
              quickLink={quickLink}
              setQuickLink={setQuickLink}
              QuickLinksArray={QuickLinksArray}
              setQuickLinksArray={setQuickLinksArray}
            />
          )}
        </div>
      </div>
      <div className={styles.messagesMainArea}>
        <div>Сообщения:</div>
        <div>{MessagesArray}</div>
      </div>
    </div>
  );
};
