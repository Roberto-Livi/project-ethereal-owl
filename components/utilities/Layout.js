import React from "react";
import { Container } from "semantic-ui-react";
import NavHeader from "./NavHeader";
import "semantic-ui-css/semantic.min.css";

const Layout = (props) => {
  return (
    <Container>
      <NavHeader />
      {props.children}
    </Container>
  );
};

export default Layout;
