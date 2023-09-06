import React, { useEffect, useState } from "react";
import styles from "../cssModules/login&register.module.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [firstname, changefirstname] = useState("");
  const [lastname, changelastname] = useState("");
  const [email, changeEmail] = useState("");
  const [passwords, changepassword] = useState("");

  const changeFirstNameValue = (e) => {
    changefirstname(e.target.value);
  };
  const changeLastNameValue = (e) => {
    changelastname(e.target.value);
  };
  const changeEmailValue = (e) => {
    changeEmail(e.target.value);
  };
  const changePasswordValue = (e) => {
    changepassword(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { firstname, lastname, email, passwords };
      const response = await fetch("http://localhost:3001/auth/register", {
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
        <div className={styles.upperInscription}>First Name</div>
        <div className={styles.textAreas}>
          <textarea
            value={firstname}
            onChange={changeFirstNameValue}
            placeholder="Your First name"
          />
        </div>
      </div>
      <div>
        <div className={styles.upperInscription}> Last Name</div>
        <div className={styles.textAreas}>
          <textarea
            value={lastname}
            onChange={changeLastNameValue}
            placeholder="Your Last name"
          />
        </div>
      </div>
      <div>
        <div className={styles.upperInscription}> Email</div>
        <div className={styles.textAreas}>
          <textarea
            value={email}
            onChange={changeEmailValue}
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
        <button onClick={onSubmitForm}>Create</button>
      </div>
      <div> If you have an account,</div>
      <div>
        <Link to="/login">login</Link>
      </div>
    </div>
  );
};

export default Login;
