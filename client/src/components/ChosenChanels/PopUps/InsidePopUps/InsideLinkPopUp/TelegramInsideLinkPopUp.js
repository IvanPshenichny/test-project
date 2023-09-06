import React, { useState } from "react";
import styles from "../../../../../cssModules/InsidePopup.module.css";
import styless from "../../../../../cssModules/ChosenChanels.module.css";

export const TelegramInsideLinkPopup = (props) => {
  const Redirect = (value) => {
    const timeout = setTimeout(() => {
      window.location.replace(value);
    }, 1000);

    return () => clearTimeout(timeout);
}
  const OnQuickReplyChange = (e) => {
    props.setQuickLink(e.target.value);
  };
  const OnQuickRepliesArrayChange = () => {
    if (props.quickLink.length > 0) {
      props.setQuickLinksArray([
        ...props.QuickLinksArray,
        {
          id: props.QuickLinksArray + 1,
          value: props.quickLink[0].toUpperCase() + props.quickLink.slice(1),
        },
      ]);
      props.setQuickLink("");
    }
  };
  const DeleteQuickReply = (id) => {
    props.setQuickLinksArray(
      props.QuickLinksArray.filter((r) => r.id !== id)
    );
  };
  const QuickReplies = props.QuickLinksArray.map((r) => {
    return (
      <div className={styles.quickReplyArea}>
        <div className={styles.itemWraper}>
          <div
            className={styles.item}
            onClick={() => {
              props.changeLinkValue(r.value);
            }}
          >
            <div onClick={()=> Redirect(r.value)}>{r.value}</div>
            
          </div>
        </div>
        <img
          onClick={() => DeleteQuickReply(r.id)}
          className={styless.deleteIcon}
          src="https://cdn-icons-png.flaticon.com/512/10147/10147931.png"
        />
      </div>
    );
  });

  return (
    <div className={styles.mainArea}>
      <div className={styles.inputArea}>
        <div>
          <input
            value={props.quickLink}
            onChange={OnQuickReplyChange}
            placeholder="Введите ссылку ответ"
          />
        </div>
        <div>
          <button onClick={OnQuickRepliesArrayChange}>Добавить</button>
        </div>
      </div>
      <div>{QuickReplies}</div>
    </div>
  );
};
