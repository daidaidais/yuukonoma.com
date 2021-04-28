import React, { useRef, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { GatsbyImage } from "gatsby-plugin-image";

const Favourites = (props) => {
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

  let wrapperClass = "section-favourites";
  let flipped = false;
  if (props.index === 0) wrapperClass += " first";
  if (props.index > 0 && props.index % 2 === 1) {
    flipped = true;
    wrapperClass += " orange";
  }

  return (
    <Row className={wrapperClass}>
      <Col sm={{ span: 5, offset: 1 }}>
        {!flipped ? (
          <div className="favourites-text-wrapper">
            <p className="favourites-title">{props.title}</p>
            <p className="favourites-text">
              {renderRichText(props.explanation, options)}
            </p>
            {props.buttonText && (
              <div className="btn-favourite-wrapper">
                <a href={props.link} className="btn-favourite">
                  {props.buttonText}
                </a>
              </div>
            )}
          </div>
        ) : (
          <div className="favourites-image-wrapper">
            <GatsbyImage
              image={props.image.gatsbyImageData}
              alt={props.image.file.fileName}
              className="favourites-image"
            />
          </div>
        )}
      </Col>
      <Col sm={5}>
        {!flipped ? (
          <div className="favourites-image-wrapper">
            <GatsbyImage
              image={props.image.gatsbyImageData}
              alt={props.image.file.fileName}
              className="favourites-image"
            />
          </div>
        ) : (
          <div className="favourites-text-wrapper">
            <p className="favourites-title">{props.title}</p>
            <p className="favourites-text">
              {renderRichText(props.explanation, options)}
            </p>
            {props.buttonText && (
              <div className="btn-favourite-wrapper">
                <a href={props.link} className="btn-favourite">
                  {props.buttonText}
                </a>
              </div>
            )}
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Favourites;
