import PropTypes from "prop-types";
import React, { Component, useContext, useState } from "react";
import styles from "../../../cssModules/ToggleButton.module.css";

export const ToggleButton = (props) => {
  const ConstructorButtonHandler = () => {
    props.toggleChange(false);

  };
  const RuntimeButtonHandler = () => {
    props.toggleChange(true);
  };
let RuntimeClassName;
let ConstructorClassName;
  if (props.toggleState === false) {
    RuntimeClassName = styles.ToggleButtonRuntimeOFF;
    ConstructorClassName = styles.ToggleButtonConstructorON;
  }
    else {
      RuntimeClassName = styles.ToggleButtonConstructorON;
      ConstructorClassName = styles.ToggleButtonConstructorOFF;
    }
    return (
      <div className={styles.TogleButtonContainer}>
        <button
          onClick={RuntimeButtonHandler}
          className={RuntimeClassName}
        >
          {" "}
          Клавиатура{" "}
        </button>
        <button
          onClick={ConstructorButtonHandler}
          className={ConstructorClassName}
        >
          {" "}
          Inline{" "}
        </button>
        
      </div>
    );
    }
