import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ popIn, children }) => {
  return (
    <Container fluid>
      <Header />
      {children}
      <Footer popIn={popIn} />
    </Container>
  );
};

export default Layout;
