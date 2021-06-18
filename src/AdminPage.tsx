import { Grid, Box } from "@material-ui/core/";

import { createStyles, makeStyles } from "@material-ui/core/styles";

import DisplayCities from "./DisplayCities";
import DisplayRoutes from "./DisplayRoutes";

export default function AdminPage() {
  const useStyles = makeStyles((theme) =>
    createStyles({
      box: {
        position: "relative",
        top: 50,
        left: 400,
        border: "1px",
      },
    })
  );

  const classes = useStyles();
  return (
    <div className={classes.box}>
      <Box>
        <Grid container direction="column" spacing={2}>
          <Grid item lg={6}>
            <DisplayCities />
          </Grid>

          <Grid item lg={6}>
            <DisplayRoutes />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
