import React, { ReactNode } from "react";
import NavBar from "../components/navigation/NavBar";
import Box from "@material-ui/core/Box";
import { Container} from "@material-ui/core";



interface IProps {
  children: ReactNode;
  // any other props that come into the component
}

const TestLayout = ({ children }: IProps) => {
  return (
    <Box>
      <NavBar />
      <Container>
        <Box>{children}</Box>
      </Container>
    </Box>
  );
};

export default TestLayout;
