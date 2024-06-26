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
import { useNavigate, Link } from "react-router-dom";

const LoginSection = (props) => {
  const [input, setInput] = useState({});
  const [required, setRequired] = useState(false);
  const userType = props.user;
  const usersCollectionRef = collection(db, props.user);
  const navigate = useNavigate();

  const addUser = async (e) => {
    if (userType === "student") {
      const data = {
        Admission_Number: input.input1,
        Name: input.input2,
        Email: input.input3,
        Phone: input.input4,
        Password: input.input5,
      };
      await addDoc(usersCollectionRef, data);
      const obj = { ...data, type: "student" };
      localStorage.setItem("user", JSON.stringify(obj));
      localStorage.setItem("auth_status", true);
      navigate("/stdhome");
    } else {
      const data = {
        Owner_Id: input.input1,
        Name: input.input2,
        Email: input.input3,
        Phone: input.input4,
        Password: input.input5,
      };
      await addDoc(usersCollectionRef, data);
      const obj = { ...data, type: "owner" };
      localStorage.setItem("user", JSON.stringify(obj));
      localStorage.setItem("auth_status", true);
      navigate("/ownerhome");
    }
  };

  
  return (
    <div className="login" style={{padding:"2rem", fontFamily: "monospace"}}>
      <h2>Signup as {props.user}</h2>
      <TextField
        id="filled-basic"
        label={props.label1}
        variant="filled"
        style={{
          marginTop: "1rem"
        }}
        onChange={(e) => {
          setInput({ ...input, input1: e.target.value });
          console.log(input);
        }}
      />
      <TextField
        id="filled-basic"
        label={props.label2}
        variant="filled"
        style={{ marginTop: "0.5rem" }}
        onChange={(e) => {
          setInput({ ...input, input2: e.target.value });
          console.log(input);
        }}
      />
      <TextField
        id="filled-basic"
        label="Email Id"
        variant="filled"
        style={{ marginTop: "0.5rem" }}
        onChange={(e) => {
          setInput({ ...input, input3: e.target.value });
          console.log(input);
        }}
      />
      <TextField
        id="filled-basic"
        label="Phone Number"
        variant="filled"
        style={{ marginTop: "0.5rem" }}
        onChange={(e) => {
          setInput({ ...input, input4: e.target.value });
          console.log(input);
        }}
      />
      <TextField
        id="filled-basic"
        label="Password"
        variant="filled"
        type="password"
        style={{ marginTop: "0.5rem" }}
        onChange={(e) => {
          setInput({ ...input, input5: e.target.value });
          console.log(input);
        }}
      />
      <Button
        variant="contained"
        size="large"
        style={{ width: "13.5rem", margin: "10px" }}
        onClick={() => {
          if (
            input.input1 &&
            input.input2 &&
            input.input3 &&
            input.input4 &&
            input.input5
          ) {
            setRequired(false);
            addUser();
          } else {
            setRequired(true);
          }
        }}
      >
        Signup
      </Button>
      <Link to={props.user == "student" ? "/stdlogin" : "/ownerlogin"}>
        <Button
          variant="text"
          size="large"
          style={{ width: "13.5rem", margin: "10px" }}
        >
          Login
        </Button>
      </Link>
      {required && (
        <Button variant="text" color="error">
          All field are required*
        </Button>
      )}
    </div>
  );
};

export default LoginSection;
