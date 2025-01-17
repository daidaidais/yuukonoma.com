import React from "react";
import Lesson from "./Lesson";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";

const Archives = (props, { children }) => {
  const data = useStaticQuery(graphql`
    {
      contentfulArchives {
        lessons {
          isOnline
          title
          time
          explanation {
              raw
            }
          fee {
              raw
            }
          link
          linkText
          id
          image {
            file {
              fileName
            }
            gatsbyImageData
          }
        }
      }
    }
  `);

  return (
    <Row className="section-schedule archives">
      <Col
        sm={{ span: 8, offset: 1 }}
        md={{ span: 8, offset: 1 }}
        xl={{ span: 8, offset: 1 }}
      >
        <div className="schedule-title">
          <p className="title-menu">{props.title}</p>
        </div>
      </Col>
      {data.contentfulArchives.lessons.map(
        ({ id, title, time, explanation, fee, link, linkText, image, isOnline }) => (
          <Lesson
            key={id}
            title={title}
            explanation={explanation}
            image={image}
            link={link}
            linkText={linkText}
            isOnline={isOnline}
          />
        )
      )}
    </Row>
  );
};

export default Archives;
