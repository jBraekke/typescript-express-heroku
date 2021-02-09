import React, { ReactNode } from "react";

import TestFooter from "../components/navigation/TestFooter";
import Box from "@material-ui/core/Box";
import SleekNav from "../components/navigation/SleekNav";

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}
const MainLayout = ({ children }: IProps) => {
  //const classes = useStyles();
  return (
    <>
      <SleekNav />
      <Box>{children}</Box>
      <TestFooter />
    </>
  );
};

export default MainLayout;
