import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

interface LoginProps {
  setLoginOpen: any;
}
const Login = ({ setLoginOpen }: LoginProps) => {
  const { onToggleAuth } = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");
  const handleGetUsername = (e: any) => {
    setUsername(e.target.value);
  };
  const handleLoginUser = () => {
    onToggleAuth(username);
    setUsername("");
    setLoginOpen(false);
  };
  return (
    <Dialog open onClose={() => setLoginOpen(false)}>
      <DialogContent>
        <TextField
          label="Username"
          onChange={handleGetUsername}
          value={username}
        ></TextField>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          onClick={handleLoginUser}
          disabled={username === ""}
        >
          Login now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
