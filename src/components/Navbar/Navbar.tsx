import {
  AppBar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import WelcomeMessage from "../Common/WelcomeMessage";
import { SetStateAction, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import ToggleThemeButton from "../Common/ToggleThemeButton";
import Login from "../Auth/Login";
import { AuthContext } from "../../Contexts/AuthContext";
const Navbar = () => {
  const { username, isAuthenticated, onToggleAuth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const [position, setPosition] = useState<string>("Fullstack developer");
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  const handleChangePosition = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPosition(event.target.value);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const handleAuthToggle = (isAuthenticated: boolean) => {
    if (!isAuthenticated) setLoginOpen(true);
    else onToggleAuth("");
  };
  return (
    <Box>
      <AppBar position="static" color={theme}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width={1} py={2}>
            <Typography variant="h6">My movies app</Typography>
            <Box textAlign={"center"}>
              <WelcomeMessage
                username={username}
                position={position}
              ></WelcomeMessage>
              <Box mt={1}>
                <FormControl variant="outlined">
                  <Select
                    value={position}
                    sx={{ color: "white" }}
                    onChange={handleChangePosition}
                  >
                    <MenuItem value="Fullstack developer">
                      Fullstack developer
                    </MenuItem>
                    <MenuItem value="Frontend developer">
                      Frontend developer
                    </MenuItem>
                    <MenuItem value="Backend developer">
                      Backend developer
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            {/* timer */}
            <Box textAlign={"center"}>
              <Box my={1}>
                <Typography variant="h6">
                  {time.toLocaleTimeString()}
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color={isAuthenticated ? "error" : "success"}
                  onClick={() => handleAuthToggle(isAuthenticated)}
                >
                  {isAuthenticated ? "Logout" : "Login"}
                </Button>
              </Box>
            </Box>
            {loginOpen && <Login setLoginOpen={setLoginOpen}></Login>}
          </Box>
        </Toolbar>
      </AppBar>
      <Box display={"flex"} justifyContent="end" mt={10}>
        <ToggleThemeButton></ToggleThemeButton>
      </Box>
    </Box>
  );
};

export default Navbar;
