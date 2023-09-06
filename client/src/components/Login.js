import React, { useEffect, useState } from "react";
import styles from "../cssModules/login&register.module.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  localStorage.removeItem("token");
  const [email, changeEmail] = useState("");
  const [passwords, changePassword] = useState("");

  const changeLoginValue = (e) => {
    changeEmail(e.target.value);
  };
  const changePasswordValue = (e) => {
    changePassword(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, passwords };
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseResponse = await response.json();
      localStorage.setItem("token", parseResponse.token);
      props.setAuthentification(true);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className={styles.mainArea}>
      <div>
        <div className={styles.upperInscription}> Email</div>
        <div className={styles.textAreas}>
          <textarea
            value={email}
            onChange={changeLoginValue}
            placeholder="Your Email"
          />
        </div>
      </div>
      <div>
        <div className={styles.upperInscription}> Password</div>
        <div className={styles.textAreas}>
        <textarea 
          value={passwords}
          onChange={changePasswordValue}
          placeholder="Your Password"
        />
        </div>
      </div>
      <div>
        <button onClick={onSubmitForm}>Login</button>
      </div>
      <div>If you dont have an account,</div>
      <div>
        <Link to="/register"> create it</Link>
      </div>
    </div>
  );
};

export default Login;
