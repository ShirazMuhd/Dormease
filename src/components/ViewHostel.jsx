import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import "./css/ViewHostel.css";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Button } from "@mui/material";
const ViewHostel = () => {
  const { Id } = useParams();
  const [details, setDetails] = useState("");
  useEffect(() => {
    const collectionRef = collection(db, "hostels");
    const fetchData = async () => {
      const q = query(collectionRef, where("id", "==", Number(Id)));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((data) => {
        setDetails(data.data());
      });
    };
    fetchData();
  }, []);
  return (
    <Box
      // height={400}
      width={600}
      my={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={0}
      p={0}
      sx={{ border: "2px solid grey" }}
      borderRadius={2}
      flexDirection="column"
    >
      <img
        src={details.image}
        style={{
          display: "block",
          objectFit: "contain",
          width: "100%",
          height: "100%",
          borderRadius: "5px 5px 0 0",
        }}
      />
      <Box
        p={1}
        sx={{ backgroundColor: "#fff" }}
        borderRadius="0 0 5px 5px"
        display="flex"
        flexDirection="column"
        color="#111"
      >
        <h2>{details.name}</h2>
        <div style={{ marginTop: "0.5rem" }}>
          {details.name} is a leading hostel which is much popular in the city.
          Here you have {details.mess !== "Available" && "no"} availability of
          mess. This hostel looks much affordable and you just have to pay
          rupees {details.rent} per month for a full one month joyful stay in
          this hostel. This hostel has a limitted vacancy of {details.vacancy}{" "}
          rooms. So if this choice looks like it fulsills your entire needs.
          Kindly book a slot here!
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="">Book</Button>
        </div>
      </Box>
    </Box>
  );
};

export default ViewHostel;
