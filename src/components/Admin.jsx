import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';

export default function Admin() {
  return (
    <>
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
        <h1>Hostel List</h1>
        <Button startIcon={<AddIcon />} variant='contained'>Hostels</Button>
    </div>
      <div style={{ marginTop: "1rem" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Accordion Actions
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button variant="contained">verify</Button>
          </AccordionActions>
        </Accordion>
      </div>
    </>
  );
}
