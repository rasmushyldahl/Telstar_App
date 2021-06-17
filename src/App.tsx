import "./App.css";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Tooltip from "@material-ui/core/Tooltip";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";

function App() {
  function handleLogoClick() {}

  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      button: {
        marginRight: theme.spacing(12),
      },
      title: {
        flexGrow: 1,
      },
    })
  );

  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Grid container justify="flex-end" spacing={1}>
              <Grid item xs={1}>
                <Button size="large" variant="contained" color="inherit">
                  Booking
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button size="large" variant="contained" color="inherit">
                  Admin
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button size="large" variant="contained" color="inherit">
                  Statistics
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" anchor="left">
          <div />

          <List>
            <Tooltip title="Booking">
              <ButtonBase onClick={handleLogoClick}>
                <img src="TelstarLogo.png" width="49" height="49" />
              </ButtonBase>
            </Tooltip>
          </List>

          <Button size="large" variant="contained" color="inherit">
            Logout
          </Button>
        </Drawer>
      </div>
    </div>
  );
}

export default App;
