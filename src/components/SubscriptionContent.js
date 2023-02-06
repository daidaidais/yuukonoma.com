import React, { useRef, useEffect } from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { GatsbyImage } from "gatsby-plugin-image";

const SubscriptionContent = (props) => {
  const wrapperRef = useRef();
  useEffect(() => {}, [props]);

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
    <div className="subscriptionContent-border" ref={wrapperRef}>
      <div className="subscriptionContent-index">{props.index + 1}</div>
      <p className="subscriptionContent-title">{props.title}</p>
      <p className="subscriptionContent-subtitle">{props.subtitle}</p>
      <p className="subscriptionContent-explanation">
        {renderRichText(props.explanation, options)}
      </p>
      <GatsbyImage
        image={props.image.gatsbyImageData}
        alt={props.image.file.fileName}
        className="subscriptionContent-image"
        placeholder="blurred"
      />
    </div>
  );
};

export default SubscriptionContent;
