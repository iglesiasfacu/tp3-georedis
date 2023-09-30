import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Container,
  FormGroup,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";

export default function SearchBar() {
  const [latitude, setLatitude] = useState(-58.23);
  const [longitude, setLongitude] = useState(-32.48);
  const [groups, setGroups] = useState();
  const [allChecked, setAllChecked] = useState(true);
  const [breweryChecked, setBreweryChecked] = useState(true);
  const [facultiesChecked, setFacultiesChecked] = useState(true);
  const [pharmacyChecked, setPharmacyChecked] = useState(true);
  const [healthCentersChecked, setHealthCentersChecked] = useState(true);
  const [supermarketsChecked, setSupermarketsChecked] = useState(true);

  console.log(groups);

  /*console.log("allChecked", allChecked);
  console.log("breweryChecked", breweryChecked);
  console.log("facultiesChecked", facultiesChecked);
  console.log("pharmacyChecked", pharmacyChecked);
  console.log("healthCentersChecked", healthCentersChecked);
  console.log("supermarketsChecked", supermarketsChecked);
  console.log("-------------------------------");*/

  const listGroups = async (longitude, latitude) => {
    const array_groups = setArrayGroups();
    let groupsToSearch = {};
    let dataGroups;

    if (
      allChecked ||
      (!allChecked &&
        !breweryChecked &&
        !facultiesChecked &&
        !pharmacyChecked &&
        !healthCentersChecked &&
        !supermarketsChecked)
    ) {
      dataGroups = await axios.get(
        `http://localhost:3003/group/groups?lon=${longitude}&lat=${latitude}`
      );
      groupsToSearch = dataGroups.data.data;
    } else {
      for (const group of array_groups) {
        switch (group) {
          case "brewery":
            dataGroups = await axios.get(
              `http://localhost:3003/group/breweries?lon=${longitude}&lat=${latitude}`
            );
            groupsToSearch.breweries = dataGroups.data.data;
            break;

          case "faculty":
            dataGroups = await axios.get(
              `http://localhost:3003/group/faculties?lon=${longitude}&lat=${latitude}`
            );
            groupsToSearch.faculties = dataGroups.data.data;
            break;

          case "health_center":
            dataGroups = await axios.get(
              `http://localhost:3003/group/health-centers?lon=${longitude}&lat=${latitude}`
            );
            groupsToSearch.health_centers = dataGroups.data.data;
            break;

          case "pharmacy":
            dataGroups = await axios.get(
              `http://localhost:3003/group/pharmacies?lon=${longitude}&lat=${latitude}`
            );
            groupsToSearch.pharmacies = dataGroups.data.data;
            break;

          case "supermarket":
            dataGroups = await axios.get(
              `http://localhost:3003/group/supermarkets?lon=${longitude}&lat=${latitude}`
            );
            groupsToSearch.supermarkets = dataGroups.data.data;
            break;

          default:
            break;
        }
      }
    }
    setGroups(groupsToSearch);
  };

  const setArrayGroups = () => {
    const current_ubications = [
      "brewery",
      "faculty",
      "pharmacy",
      "health_center",
      "supermarket",
    ];
    const ubications = [];

    if (allChecked) {
      return current_ubications;
    } else {
      if (breweryChecked) {
        ubications.push(current_ubications[0]);
      }
      if (facultiesChecked) {
        ubications.push(current_ubications[1]);
      }
      if (pharmacyChecked) {
        ubications.push(current_ubications[2]);
      }
      if (healthCentersChecked) {
        ubications.push(current_ubications[3]);
      }
      if (supermarketsChecked) {
        ubications.push(current_ubications[4]);
      }
    }

    return ubications;
  };

  return (
    <>
      <Container
        maxWidth="sm"
        style={{ width: "500px", backgroundColor: "#fff" }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Filtrar por:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={allChecked}
                    onChange={(e) => setAllChecked(e.target.checked)}
                  />
                }
                label="Todos"
              />
              <FormControlLabel
                disabled={allChecked}
                control={
                  <Checkbox
                    checked={breweryChecked || allChecked}
                    onChange={(e) => setBreweryChecked(e.target.checked)}
                  />
                }
                label="Cervecerías artesanales"
              />
              <FormControlLabel
                disabled={allChecked}
                control={
                  <Checkbox
                    checked={facultiesChecked || allChecked}
                    onChange={(e) => setFacultiesChecked(e.target.checked)}
                  />
                }
                label="Universidades"
              />
              <FormControlLabel
                disabled={allChecked}
                control={
                  <Checkbox
                    checked={pharmacyChecked || allChecked}
                    onChange={(e) => setPharmacyChecked(e.target.checked)}
                  />
                }
                label="Farmacias"
              />
              <FormControlLabel
                disabled={allChecked}
                control={
                  <Checkbox
                    checked={healthCentersChecked || allChecked}
                    onChange={(e) => setHealthCentersChecked(e.target.checked)}
                  />
                }
                label="Centros de atención de emergencias"
              />
              <FormControlLabel
                disabled={allChecked}
                control={
                  <Checkbox
                    checked={supermarketsChecked || allChecked}
                    onChange={(e) => setSupermarketsChecked(e.target.checked)}
                  />
                }
                label="Supermercados"
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>

        <TextField
          id="outlined-required"
          label="Longitud"
          value={longitude}
          multiline
          onChange={(e) => setLongitude(e.target.value)}
        />
        <TextField
          id="outlined-required"
          label="Latitud"
          value={latitude}
          multiline
          onChange={(e) => setLatitude(e.target.value)}
        />
        <Button
          variant="outlined"
          onClick={() => listGroups(longitude, latitude)}
          disabled={!latitude || !longitude}
        >
          Buscar
        </Button>
      </Container>
    </>
  );
}
