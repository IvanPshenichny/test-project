import React, { useState } from "react";
import styles from "../../../../cssModules/InsidePopup.module.css";
import styless from "../../../../cssModules/ChosenChanels.module.css";

export const VKInsidePopup = (props) => {
  const OnQuickReplyChange = (e) => {
    props.setQuickReply(e.target.value);
  };
  const OnQuickRepliesArrayChange = () => {
    if (props.quickReply.length > 0) {
      props.setQuickRepliesArray([
        ...props.QuickRepliesArray,
        {
          id: props.QuickRepliesArray + 1,
          value: props.quickReply[0].toUpperCase() + props.quickReply.slice(1),
        },
      ]);
      props.setQuickReply("");
    }
  };
  const DeleteQuickReply = (id) => {
    props.setQuickRepliesArray(
      props.QuickRepliesArray.filter((r) => r.id !== id)
    );
  };
  
  const QuickReplies = props.QuickRepliesArray.map((r) => {
    return (
      <div className={styles.quickReplyArea}>
        <div className={styles.itemWraper}>
          <div
            className={styles.item}
            onClick={() => {
              props.changeValue(r.value);
            }}
          >
            {" "}
            {r.value}{" "}
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
            value={props.quickReply}
            onChange={OnQuickReplyChange}
            placeholder="Введите быстрый ответ"
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
