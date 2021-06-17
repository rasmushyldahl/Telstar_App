import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Tooltip from "@material-ui/core/Tooltip";

export default function NavigationBar() {
  function handleLogoClick() {
    //insert logic for redirect to booking page
  }

  function handleLogOut() {
    //insert logic for log out her
  }

  return (
    <div>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Tooltip title="Booking">
            <ButtonBase onClick={handleLogoClick}>
              <img src="TelstarLogo.png" width="49" height="49" />
            </ButtonBase>
          </Tooltip>

          <Grid container justify="flex-end" item xs={12}>
            <Grid item xs={2}>
              <Button size="large" variant="contained" color="inherit">
                Booking
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button size="large" variant="contained" color="inherit">
                Admin
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button size="large" variant="contained" color="inherit">
                Statistics
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item xs={1}>
              <Button
                size="medium"
                variant="contained"
                color="inherit"
                onClick={handleLogOut}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
