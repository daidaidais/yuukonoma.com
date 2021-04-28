import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = ({ popIn }) => {
  return (
    <Row className="section-footer pop-in">
      <Col sm={2} className="footer-text-wrapper">
        <p className="footer-credits">
          Icons by Cole Bemis from{" "}
          <a
            href="https://github.com/feathericons/feather"
            className="credits-link"
            target="_blank"
            rel="noreferrer"
          >
            Feather
          </a>
        </p>
      </Col>
      <Col sm={8} className="footer-text-wrapper">
        <p className={popIn ? "footer-text" : "footer-text-gone"}>ナマステ</p>
      </Col>
      <Col sm={2}>
        <p className="footer-copyright">&copy; Yuuko Noma</p>
      </Col>
    </Row>
  );
};

export default Footer;
