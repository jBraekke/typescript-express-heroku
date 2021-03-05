import React, { ReactNode } from "react";
import SleekFooter from "../components/navigation/SleekFooter";
import Box from "@material-ui/core/Box";
import SleekNav from "../components/navigation/SleekNav";


interface IProps {
  children: ReactNode;
  // any other props that come into the component
}
const MainLayout = ({ children }: IProps) => {
  return (
    <>
      <SleekNav />
      <Box>{children}</Box>
      <SleekFooter />
    </>
  );
};

export default MainLayout;
