import React, { useState } from "react";
import styles from "../../cssModules/ChosenChanels.module.css";
import { Popup } from "../ChosenChanels/Popup";
import { VKPopup } from "../ChosenChanels/PopUps/VKPopUp";


export const VK = (props) => {
  return (
    <div className={styles.chosenPopUp}>
      <div className={styles.itemWithDelete}>
      <div className={styles.item} onClick={() => {
                props.setPopupVK(!props.popupVK);
              }}>
        <div > 
          <img src="https://img.icons8.com/?size=512&id=60454&format=png" />
          </div>
        <div>VK</div>
        
      </div>
      <div>
      {props.VK && (
        <img onClick={()=> {props.setVK(false); props.setPopupVK(false)}} className={styles.deleteIcon} src='https://cdn-icons-png.flaticon.com/512/10147/10147931.png'/>
        )}
        
        </div>
      </div>
      
      
      <div>
        {props.popupVK && (
          <div>
            <VKPopup
            setVK={props.setVK}
              insidePopUp={props.insidePopUp}
              setInsidePopUp={props.setInsidePopUp}
              insideLinkPopUp={props.insideLinkPopUp}
              setInsideLinkPopUp={props.setInsideLinkPopUp}
              name={props.name}
            />
          </div>
        )}
      </div>
    </div>
  );
};
