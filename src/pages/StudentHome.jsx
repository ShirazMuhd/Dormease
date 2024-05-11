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
  const [alignment, setAlignment] = React.useState("");
  const [hostels, setHostels] = useState([{}]);
  const [classData, setClassData] = useState(null);
  useEffect(() => {
    const getHostels = async () => {
      const dataRef = collection(db, "hostels");
      try {
        const data = await getDocs(dataRef);
        const arr = [];
        await data.forEach((hostel) => {
          arr.push(hostel.data());
        });
        console.log(arr);
        setHostels(arr);
      } catch (error) {
        console.log(error);
      }
    };
    getHostels();
  }, []);

  const handleChange = async (event, newAlignment) => {
    await setAlignment(newAlignment);
    changeData();
  };
  const changeData = () => {
    console.log(alignment);
    const data = hostels;
    const newData = data.filter((hostel) => hostel.gender === alignment);
    console.log(newData);
    setClassData(newData);
  };
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
          <ToggleButton value="girls">Boys</ToggleButton>
          <ToggleButton value="boys">Girls</ToggleButton>
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
        {classData === null
          ? hostels.map((hostel) => (
              <HostelList
                name={hostel.name}
                image={hostel.image}
                data={hostel}
              />
            ))
          : classData.map((hostel) => (
              <HostelList
                name={hostel.name}
                image={hostel.image}
                data={hostel}
              />
            ))}
      </div>
    </div>
  );
};

export default StudentHome;
