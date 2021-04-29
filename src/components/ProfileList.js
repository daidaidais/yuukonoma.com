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
          sm={{ span: 5, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          xl={{ span: 5, offset: 1 }}
        >
          <span className="say-hi-text">
            イベント出演、ワークショップ、出張クラス等、
            お気軽にご相談ください。
          </span>
        </Col>
        <Col sm={5} md={5} xl={5} className="say-hi-icons">
          <a href="mailto:yuukonoma@gmail.com">
            <svg
              className="say-hi-icon"
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 15.625C10.7884 15.625 9.375 17.0384 9.375 18.75V56.25C9.375 57.9616 10.7884 59.375 12.5 59.375H62.5C64.2116 59.375 65.625 57.9616 65.625 56.25V18.75C65.625 17.0384 64.2116 15.625 62.5 15.625H12.5ZM3.125 18.75C3.125 13.5866 7.33661 9.375 12.5 9.375H62.5C67.6634 9.375 71.875 13.5866 71.875 18.75V56.25C71.875 61.4134 67.6634 65.625 62.5 65.625H12.5C7.33661 65.625 3.125 61.4134 3.125 56.25V18.75Z"
                fill="#001652"
              />
              <path
                d="M3.68992 16.958C4.67966 15.5441 6.62819 15.2002 8.04209 16.1899L37.5 36.8105L66.958 16.1899C68.3719 15.2002 70.3204 15.5441 71.3101 16.958C72.2999 18.3719 71.956 20.3204 70.5421 21.3101L39.2921 43.1851C38.2161 43.9383 36.784 43.9383 35.708 43.1851L4.45795 21.3101C3.04405 20.3204 2.70019 18.3719 3.68992 16.958Z"
                fill="#001652"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/yuukonoma/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              viewBox="0 0 27 28"
              xmlns="http://www.w3.org/2000/svg"
              className="say-hi-icon"
            >
              <path d="M19.0735 27.6333H7.58913C3.40504 27.6333 0 24.1043 0 19.7679V7.86542C0 3.529 3.40504 0 7.58913 0H19.0735C23.2576 0 26.6627 3.529 26.6627 7.86542V19.7699C26.6627 24.1043 23.2576 27.6333 19.0735 27.6333ZM7.58913 2.36908C4.66482 2.36908 2.28586 4.83465 2.28586 7.86542V19.7699C2.28586 22.8007 4.66482 25.2662 7.58913 25.2662H19.0735C21.9978 25.2662 24.3768 22.8007 24.3768 19.7699V7.86542C24.3768 4.83465 21.9978 2.36908 19.0735 2.36908H7.58913V2.36908Z" />
              <path d="M13.3313 20.8924C9.56717 20.8924 6.50415 17.7179 6.50415 13.8167C6.50415 9.91549 9.56717 6.74097 13.3313 6.74097C17.0955 6.74097 20.1585 9.91549 20.1585 13.8167C20.1585 17.7179 17.0955 20.8924 13.3313 20.8924ZM13.3313 9.11004C10.827 9.11004 8.79002 11.2211 8.79002 13.8167C8.79002 16.4122 10.827 18.5233 13.3313 18.5233C15.8357 18.5233 17.8727 16.4122 17.8727 13.8167C17.8727 11.2211 15.8357 9.11004 13.3313 9.11004Z" />
              <path d="M22.0909 6.33725C22.0909 7.27661 21.3555 8.03677 20.451 8.03677C19.5447 8.03677 18.8093 7.27464 18.8093 6.33725C18.8093 5.39789 19.5447 4.63577 20.451 4.63577C21.3574 4.63577 22.0909 5.39789 22.0909 6.33725Z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/yuuko.noma"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 29 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="say-hi-icon"
            >
              <path
                d="M19.0909 19.1886V14.0455C19.0909 11.5824 20.7001 10.9885 21.8396 10.9885C22.929 10.9885 28.7912 10.9885 28.7912 10.9885V0H19.1958C8.56091 0 6.17205 8.14846 6.17205 13.4V19.1886H0V26.9085V32H6.22702C6.22702 46.5257 6.22702 64 6.22702 64H18.6261C18.6261 64 18.6261 46.314 18.6261 32H27.8067L28.2215 26.9601L28.9462 19.1886H19.0909Z"
                fill="#001652"
              />
            </svg>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default ProfileList;
