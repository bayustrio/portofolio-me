import { TypeScriptConfig } from "next/dist/server/config-shared";
import { type } from "os";
import { GET_THEME, HANDLE_THEME } from "./TypeThemeAct";
export interface IThemeStore {
  theme: string | any;
  //   setTHeme: (c: string) => void;
}

export type IPayloadTheme = {
  type: typeof HANDLE_THEME;
  payload: string;
};

export interface GetPayloadTheme {
  type: typeof GET_THEME;
  payload: string;
}

export type DispatchTheme = IPayloadTheme | GetPayloadTheme;
