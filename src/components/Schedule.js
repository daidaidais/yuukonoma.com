import React from "react";
import Lesson from "../components/Lesson";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";

const Schedule = (props, { children }) => {
  const data = useStaticQuery(graphql`
    query allContentfulUser {
      allContentfulSchedule {
        nodes {
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
            id
            image {
              file {
                fileName
              }
              fluid {
                src
              }
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return (
    <Row id="section-schedule" className="section-schedule">
      <Col
        sm={{ span: 8, offset: 1 }}
        md={{ span: 8, offset: 1 }}
        xl={{ span: 8, offset: 1 }}
      >
        <div className="schedule-title">
          <p className="title-menu">{props.title}</p>
        </div>
      </Col>
      {data.allContentfulSchedule.nodes[0].lessons.map(
        ({ id, title, time, explanation, fee, link, image, isOnline }) => (
          <Lesson
            key={id}
            title={title}
            time={time}
            explanation={explanation}
            fee={fee}
            image={image}
            link={link}
            isOnline={isOnline}
          />
        )
      )}
    </Row>
  );
};

export default Schedule;
