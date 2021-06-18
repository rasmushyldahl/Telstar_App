import { Grid, Box } from "@material-ui/core/";

import { createStyles, makeStyles } from "@material-ui/core/styles";

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
        <Grid item lg={6}>
          Statistics here
        </Grid>
      </Box>
    </div>
  );
}
