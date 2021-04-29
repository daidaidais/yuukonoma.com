import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const IEContext = React.createContext("");

const Layout = ({ popIn, children }) => {
  let isIE = false;
  if (typeof window !== `undefined`) {
    isIE = !!window.MSInputMethodContext && !!document.documentMode;
  }

  return (
    <IEContext.Provider value={isIE}>
      <Container fluid>
        <Header />
        {children}
        <Footer popIn={popIn} />
      </Container>
    </IEContext.Provider>
  );
};

export default Layout;
