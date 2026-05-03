import Navebar from "@/components/shared/Navebar";
import React from "react";

const MainLayout = ({ children }) => {
  return <>
  <Navebar></Navebar>
  {children}
  </>;
};

export default MainLayout;
