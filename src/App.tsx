import "./App.css";

import BookingPage from "./BookingPage";
import StatisticsPage from "../src/StatisticsPage";
import LogInPage from "./LogInPage";

import AdminPage from "./AdminPage";
import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Tooltip from "@material-ui/core/Tooltip";
import { useState } from "react";

function App() {
  const [currentSite, setCurrentSite] = useState(BookingPage);
  const [currentSiteNumber, setCurrentSiteNumber] = useState(1);
  const [isAdmin, setIsAdmin] = useState(false);

  function handleLogoClick() {
    setCurrentSite(BookingPage);
    setCurrentSiteNumber(1);
  }
  function reDirectToBooking() {
    setCurrentSite(BookingPage);
    setCurrentSiteNumber(1);
  }

  function reDirectToAdmin() {
    setCurrentSite(AdminPage);
    setCurrentSiteNumber(2);
  }

  function reDirectToStatistics() {
    setCurrentSite(StatisticsPage);
    setCurrentSiteNumber(3);
  }

  function handleLogOut() {
    setCurrentSite(LogInPage);
    setCurrentSiteNumber(4);
  }

  const isLoggedIn = () => {
    if (currentSiteNumber === 4) {
      return false;
    } else return true;
  };

  return (
    <div>
      {!isLoggedIn() ? (
        <div>
          <AppBar position="static" color="inherit">
            <Toolbar>
              <div>
                <img src="TelstarLogo.png" width="49" height="49" />
              </div>
            </Toolbar>
          </AppBar>
          <LogInPage />
        </div>
      ) : (
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
                  {isAdmin && 
                  <Button
                    size="large"
                    variant="contained"
                    color="inherit"
                    onClick={reDirectToBooking}
                  >
                    Booking
                  </Button>}
                </Grid>
                <Grid item xs={2}>
                {isAdmin && 
                  <Button
                    size="large"
                    variant="contained"
                    color="inherit"
                    onClick={reDirectToAdmin}
                  >
                    Admin
                  </Button>}
                </Grid>
                <Grid item xs={2}>
                  {isAdmin && 
                  <Button
                    size="large"
                    variant="contained"
                    color="inherit"
                    onClick={reDirectToStatistics}
                  >
                    Statistics
                  </Button>}
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
          <div>{currentSite}</div>
        </div>
      )}
    </div>
  );
}

export default App;
