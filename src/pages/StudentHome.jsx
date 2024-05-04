import React, { useEffect, useState } from "react";
import HostelList from "../components/HostelList";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
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
import { Button } from "@mui/material";
const StudentHome = () => {
  const [alignment, setAlignment] = React.useState("web");
  const [hostels, setHostels] = useState([{}]);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  }
  useEffect(() => {
    const getHostels = async () => {
      const dataRef = collection(db, "hostels");
      try {
        const data = await getDocs(dataRef);
        const arr = []
        await data.forEach((hostel) => {
          arr.push(hostel.data())
        });
        console.log(arr);
        setHostels(arr)
      } catch (error) {
        console.log(error);
      }
    };
    getHostels();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
      <div>
        <ToggleButtonGroup
          color="primary"
          style={{ backgroundColor: "#fff" }}
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="web">Boys</ToggleButton>
          <ToggleButton value="android">Girls</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {
          hostels.map(hostel => (
            <HostelList name={hostel.name} image={hostel.image} data={hostel}/>
          ))
        }
      </div>
    </div>
  );
};

export default StudentHome;
