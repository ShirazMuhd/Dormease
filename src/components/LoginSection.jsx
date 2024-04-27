import React, { useState } from "react";
import "./css/login.css";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
const LoginSection = (props) => {
  const [input, setInput] = useState({});
  const usersCollectionRef = collection(db, "student");

  const login = async () => {
    var details = {};
    getDocs(usersCollectionRef).then((data) => {
      const dis = data.docs.forEach((doc) => {
        details = doc.data();
        console.log(details);
      });
    });
  };
  return (
    <div className="login">
      <h3>Login as {props.user}</h3>
      <TextField
        id="filled-basic"
        label={props.label1}
        variant="filled"
        onClick={(e) => {
          setInput({ ...input, input1: e.target.value });
        }}
      />
      <TextField
        id="filled-basic"
        label={props.label2}
        variant="filled"
        onClick={(e) => {
          setInput({ ...input, input2: e.target.value });
        }}
      />
      <Button
        variant="contained"
        size="large"
        style={{ width: "13.5rem", margin: "10px" }}
        onClick={login}
      >
        Login
      </Button>
      <Link to={props.user == "Student" ? "/stdsignup" : "/ownersignup"}>
      <Button
        variant="text"
        size="large"
        style={{ width: "13.5rem", margin: "10px" }}
      >Signup</Button></Link>
    </div>
  );
};

export default LoginSection;
