import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../cssModules/NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className={styles.bar}>
      <div className={styles.item}>
        <NavLink
          to="/dashboard/MyPage/"
          className={({ isActive }) => (isActive ? styles.active : styles.item)}
        >
          My page
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/dashboard/ToDoList/"
          className={({ isActive }) => (isActive ? styles.active : styles.item)}
        >
          ToDoList
        </NavLink>
      </div>

      <div className={styles.item}>
        <NavLink
          to="/dashboard/Calculator/"
          className={({ isActive }) => (isActive ? styles.active : styles.item)}
        >
          Calculator
        </NavLink>
      </div>
    </div>
  );
};
export { NavBar };
