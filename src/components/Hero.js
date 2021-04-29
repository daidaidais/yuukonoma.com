import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Row, Col } from "react-bootstrap";

const Hero = () => {
  const [animationFinished, setAnimationFinished] = useState(false);

  const handleAnimationEnd = () => {
    setAnimationFinished(true);
  };

  return (
    <Row className="section-hero">
      <Col sm={{ span: 5, offset: 1 }}>
        <div className="hero-image-wrapper">
          <StaticImage
            src="../images/hero.png"
            alt="hero.png"
            className="hero-image"
            style={{ position: "absolute" }}
          />
          <StaticImage
            src="../images/hero-background.png"
            alt="hero-background.png"
            className="hero-image-background"
            style={{ position: "absolute" }}
          />
        </div>
      </Col>
      <Col sm={6}>
        <div className="hero-title-wrapper">
          <p className="hero-title" onAnimationEnd={handleAnimationEnd}>
            ユウコ
            <span className={animationFinished ? "hero-title-fill" : ""}>
              ノマ
            </span>
          </p>
          <p className="hero-subtitle">ヨガと本と山と映画と</p>
        </div>
      </Col>
    </Row>
  );
};

export default Hero;
