import React, { FC } from "react";
import Navs from "../components/Navs";
import ThemeProv from "../Context/ThemeContext";
type IProps = {
  children: React.ReactNode;
};

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Navs />
      {children}
    </>
  );
};

export default Layout;
