import React, { ReactNode } from "react";
import NavBar from "../components/navigation/NavBar";
import TestFooter from "../components/navigation/TestFooter";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}

const MainLayout = ({ children, ...props }: IProps) => {
  return (
    <Box>
      <NavBar />
      <Container maxWidth="xl">
        <Box mt={2}>{children}</Box>
      </Container>
      <TestFooter />
    </Box>
  );
};

export default MainLayout;
