import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Tooltip from "@material-ui/core/Tooltip";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";

export default function NavigationBar() {
  function handleLogoClick() {
    //insert logic for redirect to booking page
  }

  function handleLogOut() {
    //insert logic for log out her
  }

  return (
    <div>
      <Drawer variant="permanent" anchor="left">
        <Tooltip title="Booking">
          <ButtonBase onClick={handleLogoClick}>
            <img src="TelstarLogo.png" width="49" height="49" />
          </ButtonBase>
        </Tooltip>

        <div>
          <Button
            size="medium"
            variant="contained"
            color="inherit"
            onClick={handleLogOut}
          >
            Logout
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
