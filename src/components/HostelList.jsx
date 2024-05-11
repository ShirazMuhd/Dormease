import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";

export default function HostelList(props) {
  const navigate = useNavigate()
  
  return (
    <div style={{ margin: "1rem" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Vacancy</b> : {props.data.vacancy} <br />
            <b>Rent</b> : Rs {props.data.rent} <br />
            <b>Mess</b> : {props.data.mess} <br />
            <b>Gender</b> : {props.data.gender} <br />
            <b>Contact Number</b> : {props.data.contact_number} <br />
            {/* <Rating name="read-only" value={3.2} readOnly /> */}
            {props.data.verified && (
              <Button variant="text" color="success">Verified</Button>
            )}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" onClick={()=> {
            navigate(`/viewhostel/${props.data.id}`)
          }}>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
