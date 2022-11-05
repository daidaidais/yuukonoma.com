import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = ({ popIn }) => {
  return (
    <Row className="section-footer pop-in">
      <Col sm={{ span: 8, offset: 2 }} className="footer-text-wrapper">
        <p className={popIn ? "footer-text" : "footer-text-gone"}>ナマステ</p>
        <p className="footer-copyright">&copy; Yuuko Noma</p>
      </Col>
    </Row>
  );
};

export default Footer;
