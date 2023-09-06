import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import { MyPage } from "./components/MyPage";

function App() {
  const [isAuth, setAuth] = useState(false);
  const setAuthentification = (boolean) => {
    setAuth(boolean);
  };
  
  async function isauth() {
    try {
      const response = await fetch("http://localhost:3001/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      parseRes === true ? setAuth(true) : setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    isauth();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            !isAuth ? (
              <Login setAuthentification={setAuthentification} />
            ) : (
              <Navigate to="/dashboard/MyPage/" />
            )
          }
        />
        <Route
          path="/register"
          element={
            !isAuth ? (
              <Register setAuthentification={setAuthentification} />
            ) : (
              <Navigate to="/dashboard/MyPage/" />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuth ? (
              <Dashboard setAuthentification={setAuthentification} />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          {/* <Route path="Users" element={<Users />} />
          <Route path="ToDoList" element={<ToDo />} />
          <Route path="Calculator" element={<Calculator />} /> */}
          <Route path="MyPage" element={<MyPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
