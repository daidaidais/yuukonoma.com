import React from "react";
import SlickSlider from "../components/Slider";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Row, Col } from "react-bootstrap";

const Lesson = (props) => {
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
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return (
    <div className="class-wrapper">
      <Row>
        <Col
          sm={{ span: 8, offset: 2 }}
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
                <span style={{fontWeight: "bold"}}>FEE: </span>{renderRichText(props.fee, options)}
              </p>
            )}
        </Col>
        <Col
          sm={{ span: 8, offset: 2 }}
          md={{ span: 8, offset: 2 }}
          xl={{ span: 4, offset: 0 }}
        >
          <SlickSlider image={props.image} className="class-image-wrapper" />
            <div className="btn-book-wrapper">
              <a
                href={props.link}
                className="btn-book"
                target={props.link==="" ? "_self" : "_blank"}
                rel="noreferrer"
              >
                {props.linkText ? props.linkText : `申し込む`}
              </a>
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default Lesson;
