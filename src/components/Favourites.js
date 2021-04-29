import React, { useRef, useState, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { IEContext } from "./Layout";

const Favourites = (props) => {
  const wrapperRef = useRef();
  useEffect(() => {
    if (wrapperRef.current) {
      props.setHeight(
        props.index,
        wrapperRef.current.getBoundingClientRect().height
      );
    }
    window.addEventListener("resize", () => {
      props.setHeight(
        props.index,
        wrapperRef.current.getBoundingClientRect().height
      );
    });
  }, []);

  const isIE = React.useContext(IEContext);

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
    <Row className={wrapperClass} ref={wrapperRef}>
      <Col sm={{ span: 5, offset: 1 }}>
        {!flipped ? (
          <div
            className={
              props.showFavourites[props.index] || props.index === 0
                ? "favourites-text-wrapper"
                : "favourites-text-wrapper fade"
            }
          >
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
          <div
            className={
              props.showFavourites[props.index] || props.index === 0
                ? "favourites-image-wrapper"
                : "favourites-image-wrapper fade"
            }
          >
            {isIE ? (
              <img src={props.image.file.url} alt={props.image.file.fileName} />
            ) : (
              <GatsbyImage
                image={props.image.gatsbyImageData}
                alt={props.image.file.fileName}
                className="favourites-image"
              />
            )}
          </div>
        )}
      </Col>
      <Col sm={5}>
        {!flipped ? (
          <div
            className={
              props.showFavourites[props.index] || props.index === 0
                ? "favourites-image-wrapper"
                : "favourites-image-wrapper fade"
            }
          >
            {isIE ? (
              <img src={props.image.file.url} alt={props.image.file.fileName} />
            ) : (
              <GatsbyImage
                image={props.image.gatsbyImageData}
                alt={props.image.file.fileName}
                className="favourites-image"
              />
            )}
          </div>
        ) : (
          <div
            className={
              props.showFavourites[props.index] || props.index === 0
                ? "favourites-text-wrapper"
                : "favourites-text-wrapper fade"
            }
          >
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
