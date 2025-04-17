import {
  AppBar,
  Box,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import WelcomeMessage from "../Common/WelcomeMessage";
import { SetStateAction, useState } from "react";
const Navbar = () => {
  const [position, setPosition] = useState<string>("Fullstack developer");

  const handleChangePosition = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPosition(event.target.value);
  };
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width={1} py={2}>
          <Typography variant="h6">My movies app</Typography>
          <Box textAlign={"center"}>
            <WelcomeMessage position={position}></WelcomeMessage>
            <Box mt={1}>
              <FormControl variant="outlined">
                <Select value={position} onChange={handleChangePosition}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
