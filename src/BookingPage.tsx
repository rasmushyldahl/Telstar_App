import { Grid, Box } from "@material-ui/core/";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import DeliveryTextFields from "./DeliveryTextFields";
import DeliveryDropdowns from "./DeliveryDropdowns";
import Button from "@material-ui/core/Button";

export default function BookingPage() {
  const useStyles = makeStyles((theme) =>
    createStyles({
      box: {
        position: "relative",
        top: 150,
        left: 130,
        border: "1px",
      },
      button: {
        position: "relative",
        top: 50,
        border: "1px",
      },
    })
  );

  function calculateRoutes() {
    //insert logic for triggering calculations
  }

  const classes = useStyles();
  return (
    <div className={classes.box}>
      <Box>
        <Grid container direction="row" spacing={2}>
          <Grid item lg={6}>
            <DeliveryDropdowns />
          </Grid>

          <Grid item lg={6}>
            <DeliveryTextFields />
          </Grid>
        </Grid>
        <div className={classes.button}>
        <Grid item lg={6}>
          <Button
            size="large"
            variant="contained"
            color="inherit"
            onClick={calculateRoutes}
          >
            Calulate routes
          </Button>
        </Grid>
        </div>
      </Box>
    </div>
  );
}
