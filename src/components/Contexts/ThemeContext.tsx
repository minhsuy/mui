import { createContext, useState } from "react";
interface ThemeContextDefaultValueType {
  theme: any;
  toggleTheme: (theme: string) => void;
}
interface ThemeContextProps {
  children: React.ReactNode;
}
const ThemeContextDefaultValue = {
  theme: "primary",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextDefaultValueType>(
  ThemeContextDefaultValue
);

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState(ThemeContextDefaultValue.theme);
  const toggleTheme = (theme: string) => {
    setTheme(theme);
  };
  const ThemeContextValue = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
