import React from "react";

import Container from "@mui/material/Container";

import Navbar from "./Navbar.component";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        <div>{children}</div>
      </Container>
    </>
  );
};

export default Layout;
