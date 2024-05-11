import * as React from "react";
import { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
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

export default function OwnerList(props) {
  const [hostels, setHostels] = React.useState([{}]);
  const [update, setUpdate] = React.useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const Owner_Id = user.Owner_Id;
  console.log(Owner_Id);
  const dataRef = collection(db, "hostels");
  useEffect(() => {
    const getHostels = async () => {
      if (props.user === "owner") {
        console.log(Owner_Id);
        const q = query(dataRef, where("owner", "==", Owner_Id));
        try {
          const data = await getDocs(q);
          const arr = [];
          await data.forEach((hostel) => {
            arr.push(hostel.data());
          });
          console.log(arr);
          setHostels(arr);
        } catch (error) {
          console.log(error);
        }
      } else {
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
      }
    };
    getHostels();
  }, [update]);
  const deleteHostel = async (id) => {
    const q = query(dataRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
      console.log("data deleted");
      setUpdate(Date.now());
    });
  };
  const verify = async (id)=> {
    const q = query(dataRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      updateDoc(doc.ref, {verified: true});
      console.log("data verified");
      setUpdate(Date.now());
    });
  }
  return (
    <div >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
        {props.user === "owner" && (
          <Link to="/addhostel">
            <Button startIcon={<AddIcon />} variant="contained" style={{paddingLeft: "1rem"}}>
              Add Hostel
            </Button>
          </Link>
        )}
      </div>
      <div style={{ marginTop: "1rem" }}>
        {hostels.map((hostel) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              {hostel.name}
            </AccordionSummary>
            <AccordionDetails>
              <b>Vacancy</b> : {hostel.vacancy} <br />
              <b>Rent</b> : Rs {hostel.rent} <br />
              <b>Mess</b> : {hostel.mess} <br />
              <b>Contact Number</b> : {hostel.contact_number} <br />
            </AccordionDetails>
            <AccordionActions>
              {props.user === "owner" ? (
                <Button variant="contained">update</Button>
              ) : (
                <Button variant="contained" onClick={()=> verify(hostel.id)}>verify</Button>
              )}

              <Button
                variant="contained"
                color="error"
                onClick={() => deleteHostel(hostel.id)}
              >
                Delete
              </Button>
            </AccordionActions>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
