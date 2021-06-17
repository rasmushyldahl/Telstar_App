import { TextField, Card, CardHeader, Grid } from "@material-ui/core/";

import Autocomplete from "@material-ui/lab/Autocomplete";

import { cities, packageTypes } from "../src/MockData";

import DeliveryTextFields from "./DeliveryTextFields";

import Checkbox from "@material-ui/core/Checkbox";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function BookingPage() {
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: "75vh" }}
      item
      lg={12}
    >
      <Card>
        <CardHeader title={"Delivery information"} />
        <Grid container direction="row" spacing={10}>
          <Grid item lg={6}>
            <Autocomplete
              id="combo-box-demo"
              options={cities}
              getOptionLabel={(option) => option.name}
              style={{ width: 250 }}
              renderInput={(params) => (
                <TextField {...params} label="Combo box" variant="outlined" />
              )}
            />
          </Grid>

          <Grid item lg={6}>
            <Autocomplete
              id="combo-box-demo"
              options={cities}
              getOptionLabel={(option) => option.name}
              style={{ width: 250 }}
              renderInput={(params) => (
                <TextField {...params} label="Combo box" variant="outlined" />
              )}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={10}>
          <Grid item lg={6}>
            <Autocomplete
              id="combo-box-demo"
              options={packageTypes}
              getOptionLabel={(option) => option.type}
              style={{ width: 250 }}
              renderInput={(params) => (
                <TextField {...params} label="Combo box" variant="outlined" />
              )}
            />
          </Grid>

          <Grid item lg={6}>
            <FormControl component="fieldset">
              <FormControlLabel
                value="start"
                control={<Checkbox color="primary" />}
                label="Recommended"
                labelPlacement="start"
              />
            </FormControl>
          </Grid>
        </Grid>

        <DeliveryTextFields />
      </Card>
    </Grid>
  );
}
