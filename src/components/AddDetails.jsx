import React, { useState } from "react";
import "./css/AddDetails.css";
import { TextField, Button } from "@mui/material";
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

const AddDetails = () => {
  const [details, setDetails] = useState({});
  const hostelCollectionRef = collection(db, "hostels");
  const owner = JSON.parse(localStorage.getItem("user")).Owner_Id
  const addHostel = async () => {
    const data = {...details, owner,id: Date.now()}
    await addDoc(hostelCollectionRef, data);
  };
  return (
    <>
      <div className="addDetails">
        <h1>Add new hostel</h1>
        <TextField
          id="filled-basic"
          label="Hostel Name"
          variant="filled"
          style={{ margin: "0.5rem" }}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
        />
        <TextField
          id="filled-basic"
          label="Vacancy"
          variant="filled"
          style={{ margin: "0.5rem" }}
          onChange={(e) => setDetails({ ...details, vacancy: e.target.value })}
        />
        <TextField
          id="filled-basic"
          label="Contact Number"
          variant="filled"
          style={{ margin: "0.5rem" }}
          onChange={(e) =>
            setDetails({ ...details, contact_number: e.target.value })
          }
        />
        <TextField
          id="filled-basic"
          label="Mess"
          variant="filled"
          style={{ margin: "0.5rem" }}
          onChange={(e) => setDetails({ ...details, mess: e.target.value })}
        />
        <TextField
          id="filled-basic"
          label="image-link"
          variant="filled"
          style={{ margin: "0.5rem" }}
          onChange={(e) => setDetails({ ...details, image: e.target.value })}
        />
        <TextField
          id="filled-basic"
          label="Rent Details"
          variant="filled"
          style={{ margin: "0.5rem" }}
          onChange={(e) => setDetails({ ...details, rent: e.target.value })}
        />
        <Button
          variant="contained"
          size="large"
          style={{ width: "13.5rem", margin: "10px" }}
          onClick={addHostel}
        >
          Add Hostel
        </Button>
        <Link to="/ownerhome">
          <Button variant="text">Go to Home</Button>
        </Link>
      </div>
    </>
  );
};

export default AddDetails;
