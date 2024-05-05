import React, { useContext, useEffect, useState } from "react";
import "./css/Header.css";
import { Button } from "@mui/material";
import { authContext } from "../context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { auth, setAuth } = useContext(authContext);
  const navigate = useNavigate()
  useEffect(() => {
    console.log(auth.auth_status);
  });
  const logout = () => {
    localStorage.setItem("auth_status", false);
    localStorage.setItem("user", null);
    setAuth({ auth_status: false, user: null });
    navigate('/stdlogin')
  };
  return (
    <div className="header" style={{ backgroundColor: "" }}>
      <h1>DORMEASE</h1>
      {auth.auth_status && (
        <Button variant="contained" onClick={logout}>
          Logout
        </Button>
      )}
    </div>
  );
};

export default Header;
