import { Fab } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Fab
      color={theme}
      variant="extended"
      onClick={() => toggleTheme(theme === "primary" ? "secondary" : "primary")}
    >
      Toggle theme
    </Fab>
  );
};

export default ToggleThemeButton;
