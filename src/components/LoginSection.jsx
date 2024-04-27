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
  query,
  where,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
const LoginSection = (props) => {
  const [input, setInput] = useState({});
  const [invalid, setInvalid] = useState(false);
  const user = props.user;
  const navigate = useNavigate()

  const login = async () => {
    console.log(user)
    const usersCollectionRef = collection(db, user );

    let q = query(
      usersCollectionRef,
      where("Admission_Number", "==", input.input1),
      where("Password", "==", input.input2)
    );
    if (props.user === "student") {
      q = query(
        usersCollectionRef,
        where("Admission_Number", "==", input.input1),
        where("Password", "==", input.input2)
      );
    } else {
      q= query(
        usersCollectionRef,
        where("Owner_Id", "==", input.input1),
        where("Password", "==", input.input2)
      );
    }
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((snapshot) => {
      console.log(snapshot.data());
      const obj = { ...snapshot.data(), user: props.user }
      localStorage.setItem("user", JSON.stringify(obj));
      localStorage.setItem("auth_status", true);
      if(props.user === "student") {

        navigate("/stdhome")
      }else {
        navigate("/ownerhome")
      }
    });
    if (querySnapshot.size !== 1) {
      setInvalid(true);
    }
    const fetchedData = [];
  };
  return (
    <div className="login">
      <h3>Login as {props.user}</h3>
      <TextField
        id="filled-basic"
        label={props.label1}
        variant="filled"
        onChange={(e) => {
          setInput({ ...input, input1: e.target.value });
        }}
      />
      <TextField
        id="filled-basic"
        label={props.label2}
        variant="filled"
        onChange={(e) => {
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
      <Button
        variant="text"
        size="large"
        style={{ width: "13.5rem", margin: "10px" }}
        disabled
      >
        {invalid ? "Invalid Data" : ""}
      </Button>
      <Link to={props.user == "student" ? "/stdsignup" : "/ownersignup"}>
        <Button
          variant="text"
          size="large"
          style={{ width: "13.5rem", margin: "10px" }}
        >
          Signup
        </Button>
      </Link>
    </div>
  );
};

export default LoginSection;
