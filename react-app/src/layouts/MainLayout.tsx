import React, { ReactNode } from "react";
import NavBar from "../components/navigation/NavBar";
import TestFooter from "../components/navigation/TestFooter";
import Box from "@material-ui/core/Box";
import { Container, makeStyles } from "@material-ui/core";
import SleekNav from "../components/navigation/SleekNav";
import theme from "../themes/theme";

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}
const useStyles = makeStyles({});
const MainLayout = ({ children, ...props }: IProps) => {
  const classes = useStyles();
  return (
    <>
      <SleekNav />
      <Box>{children}</Box>
      <TestFooter />
    </>
  );
};

export default MainLayout;
