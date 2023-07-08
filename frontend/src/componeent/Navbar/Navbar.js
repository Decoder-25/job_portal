import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
    // rgbToHex,
  } from "@material-ui/core";
  import { useNavigate } from "react-router-dom";
  
  // import { green } from "@mui/material/colors";
  
  // import isAuth, { userType } from "../lib/isAuth";
  
  const useStyles = makeStyles((theme) => ({
    // palette: {
    //   primary: {
    //     main: green[900],
    //   },
    //   secondary: {
    //     main: '#c8e6c9',
    //   },
    // },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const Navbar = (props) => {
    const classes = useStyles();
    let history = useNavigate();
  
    const handleClick = (location) => {
      console.log(location);
      history(location);
    };
  
    return (
      <AppBar position="fixed" style={{backgroundColor: 'green' }}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            HELPER
          </Typography>
          {/* {isAuth() ? (
            userType() === "helper" ? (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")}>
                  Home
                </Button>
                <Button color="inherit" onClick={() => handleClick("/addjob")}>
                  Add Jobs
                </Button>
                <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                  My Jobs
                </Button>
                <Button color="inherit" onClick={() => handleClick("/employees")}>
                  Employees
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")}>
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/applications")}
                >
                  Applications
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            )
          ) : ( */}
            <>
              <Button color="inherit" onClick={() => handleClick("/login")}>
                Login
              </Button>
              <Button color="inherit" onClick={() => handleClick("/signup")}>
                Signup
              </Button>
            </>
          {/* )} */}
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;
  