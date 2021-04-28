import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Row, Col } from "react-bootstrap";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const ProfileList = (props) => {
  const Text = ({ children }) => children;
  const InlineLink = ({ link, children }) => (
    <a href={link} className="class-link" target="_blank" rel="noreferrer">
      {children}
    </a>
  );

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [INLINES.HYPERLINK]: ({ data }, children) => (
        <InlineLink link={data.uri}>{children}</InlineLink>
      ),
    },
    renderText: (text) =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
  };

  return (
    <>
      <Row className="section-profile">
        <Col
          sm={{ span: 5, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          xl={{ span: 5, offset: 1 }}
        >
          <StaticImage
            src="../images/Tinted_Photography256.jpg"
            alt="Tinted_Photography256.jpg"
            className="profile-image"
          />
        </Col>
        <Col sm={5} md={{ span: 8, offset: 4 }} xl={{ span: 5, offset: 0 }}>
          <p className="profile-title">PROFILE</p>
          <p className="profile-text">
            {renderRichText(props.profile, options)}
          </p>
          <p className="events-title">イベント</p>
          <span className="events-text">
            <ul className="events-list">
              {props.events.map(({ year, explanation }, index) => (
                <li key={index}>
                  <span className="events-year">{year}</span>
                  {explanation}
                </li>
              ))}
            </ul>
          </span>
          <p className="events-title">メディア情報</p>
          <span className="events-text">
            <ul className="events-list">
              {props.media.map(({ year, explanation }, index) => (
                <li key={index}>
                  <span className="events-year">{year}</span>
                  {explanation}
                </li>
              ))}
            </ul>
          </span>
        </Col>
      </Row>
      <Row className="section-say-hi">
        <Col
          sm={{ span: 6, offset: 1 }}
          md={{ span: 6, offset: 1 }}
          xl={{ span: 6, offset: 1 }}
        >
          <span className="say-hi-text">
            イベント出演、ワークショップ、出張クラス等
            <br />
            お気軽にご相談ください。
          </span>
        </Col>
        <Col sm={4} md={{ span: 4, offset: 1 }} xl={4} className="say-hi-icons">
          <a href="mailto:yuukonoma@gmail.com">
            <StaticImage
              className="say-hi-icon"
              src="../images/mail.svg"
              alt="mail"
            />
          </a>
          <a
            href="https://www.instagram.com/yuukonoma/"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              className="say-hi-icon"
              src="../images/instagram.svg"
              alt="instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/yuuko.noma"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              className="say-hi-icon"
              src="../images/facebook.svg"
              alt="facebook"
            />
          </a>
        </Col>
      </Row>
    </>
  );
};

export default ProfileList;
