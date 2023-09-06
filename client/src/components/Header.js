import React from "react";
import styles from "../cssModules/Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <div>
          <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png" />
          
        </div>
        <div className={styles.name}>{props.name}</div>
      </div>
      <div className={styles.logoutElement} onClick={props.logout}>
      <img src="https://img.icons8.com/?size=512&id=2445&format=png" />
        <button  className={styles.logoutButton}>
          Logout
        </button>
      </div>
    </div>
  );
};
export { Header };
