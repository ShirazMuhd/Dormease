import React, { useEffect } from "react";
import "./css/Hero.css";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const auth_status = JSON.parse(localStorage.getItem('auth_status'));
    if(auth_status === true) {
      console.log("logged in");
      const user = JSON.parse(localStorage.getItem('user')).user
      if (user === "student") {
        navigate("/stdhome")
        
      } else {
        navigate("/ownerhome")

      }
    }
  });
  return (
    <div style={{
      width: '-webkit-fill-available',
    }}>
      <div className="hero" style={{
        width: "100%",
      }}>
        <h1 style={{
          color: "#fff"
        }}>Find Your Best Stay</h1>
        <Link to="/stdlogin">
          <Button
            variant="contained"
            size="large"
            style={{ width: "15rem", marginTop: "2rem" }}
          >
            Login as student
          </Button>
        </Link>
        <Link to="/ownerlogin">
          <Button
            variant="contained"
            size="large"
            style={{ width: "15rem", marginTop: "0.5rem" }}
          >
            login as owner
          </Button>
        </Link>
        <Link to="/adminlogin">
          <Button
            variant="contained"
            size="large"
            style={{ width: "15rem", marginTop: "0.5rem" }}
          >
            login as admin
          </Button>
        </Link>
      </div>
    </div>
  );
};
