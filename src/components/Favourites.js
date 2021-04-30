import React, { useRef, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { IEContext } from "./Layout";
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
      if (wrapperRef.current) {
        props.setHeight(
          props.index,
          wrapperRef.current.getBoundingClientRect().height
        );
      }
    });
  }, [props]);

  const isIE = useContext(IEContext);

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

  const favouritesText = (
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
          {props.link ===
          "https://yuukonoma.com/index.html#section-schedule" ? (
            <AnchorLink
              to="/#section-schedule"
              title={props.buttonText}
              className="btn-favourite"
            />
          ) : (
            <a href={props.link} className="btn-favourite">
              {props.buttonText}
            </a>
          )}
        </div>
      )}
    </div>
  );

  const favouritesImage = (
    <div
      className={
        props.showFavourites[props.index] || props.index === 0
          ? "favourites-image-wrapper"
          : "favourites-image-wrapper fade"
      }
    >
      {isIE ? (
        <img
          src={props.image.fluid.src}
          height="200"
          alt={props.image.file.fileName}
        />
      ) : (
        <GatsbyImage
          image={props.image.gatsbyImageData}
          alt={props.image.file.fileName}
          className="favourites-image"
          placeholder="blurred"
        />
      )}
    </div>
  );

  return (
    <Row className={wrapperClass} ref={wrapperRef}>
      <Col sm={{ span: 5, offset: 1 }}>
        {!flipped ? favouritesText : favouritesImage}
      </Col>
      <Col sm={5}>{!flipped ? favouritesImage : favouritesText}</Col>
    </Row>
  );
};

export default Favourites;
