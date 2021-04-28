import React from "react";
import SlickSlider from "../components/Slider";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";

const Lesson = (props) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `);

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
  };

  return (
    <div className="class-wrapper">
      <Row>
        <Col
          sm={{ span: 4, offset: 2 }}
          md={{ span: 8, offset: 2 }}
          xl={{ span: 4, offset: 2 }}
          className="class-text-wrapper"
        >
          <p className="class-title">{props.title}</p>
          {props.time &&
            props.time.map((item, index) => (
              <p className="class-time" key={index}>
                {item}
              </p>
            ))}
          <p className="class-explanation">
            {renderRichText(props.explanation, options)}
          </p>
          {props.isOnline && (
            <p>
              <b>この講座はオンラインで行います。</b>
            </p>
          )}
          {props.fee &&
            renderRichText(props.fee, options)[0].props.children[0] !== " " && (
              <p className="class-fee">
                FEE: {renderRichText(props.fee, options)}
              </p>
            )}
        </Col>
        <Col sm={4} md={{ span: 8, offset: 2 }} xl={{ span: 4, offset: 0 }}>
          <SlickSlider image={props.image} className="class-image-wrapper" />
          {props.link !== " " && (
            <div className="btn-book-wrapper">
              <a
                href={props.link}
                className="btn-book"
                target="_blank"
                rel="noreferrer"
              >
                申し込む
              </a>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Lesson;