import { createContext, useContext } from "react";
import useTheme from "../hooks/useTheme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const themeControl = useTheme();
  return (
    <ThemeContext.Provider value={themeControl}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
