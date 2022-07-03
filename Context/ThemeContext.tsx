import React, { createContext, Dispatch, useEffect, useReducer } from "react";
import { ThemeReducer } from "./ThemeReducer";
import { IThemeStore, DispatchTheme } from "./Types/TypeTheme";

const initialState = {
  theme: "light",
  // typeof window !== "undefined" ? localStorage.getItem("theme") : "light",
};

export const ThemeContext = createContext<{
  state: IThemeStore;
  dispatch: Dispatch<DispatchTheme>;
}>({
  state: initialState,
  dispatch: () => null,
});

type IProps = {
  children: React.ReactNode;
};

const ThemeProv: React.FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProv;
