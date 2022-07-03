import { DispatchTheme, IThemeStore } from "./Types/TypeTheme";
import { HANDLE_THEME } from "./Types/TypeThemeAct";

export const ThemeReducer = (state: IThemeStore, action: DispatchTheme) => {
  switch (action.type) {
    case "HANDLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "GET_THEME":
      const themeLocal = localStorage.getItem("theme");
      return {
        ...state,
        theme: themeLocal
          ? themeLocal
          : themeLocal === undefined
          ? "light"
          : "dark",
      };
    default:
      return state;
  }
};
