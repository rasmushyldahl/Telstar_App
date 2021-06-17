import { TextField, Grid } from "@material-ui/core/";

export default function DeliveryTextFields() {
  return (
    <div>
      <Grid container direction="row" spacing={10}>
        <Grid item xl={6}>
          <TextField label="Weight" defaultValue="Weight" variant="outlined" />
        </Grid>

        <Grid item xl={6}>
          <TextField label="Height" defaultValue="Height" variant="outlined" />
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={10}>
        <Grid item xs={6}>
          <TextField label="Length" defaultValue="Length" variant="outlined" />
        </Grid>

        <Grid item xs={6}>
          <TextField label="Width" defaultValue="Width" variant="outlined" />
        </Grid>
      </Grid>
    </div>
  );
}
