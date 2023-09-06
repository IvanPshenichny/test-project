import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import styles from "../cssModules/App.module.css";
import { MyPage } from "./MyPage";

const Dashboard = (props) => {
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:3001/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseResponse = await response.json();
      setName(parseResponse.firstname + " " + parseResponse.lastname);
      setEmail(parseResponse.email);
    } catch (err) {
      console.error(err.message);
    }
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    props.setAuthentification(false);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <div className={styles.app}>
      <div>
        <Header logout={logout} name={name} />
      </div>
      <div>
        <MyPage name={name} mail={mail} />
      </div>
    </div>
  );
};

export default Dashboard;
