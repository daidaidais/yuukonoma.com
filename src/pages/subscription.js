import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Helmet } from "react-helmet";
import { Row, Col } from "react-bootstrap";
import SubscriptionContent from "../components/SubscriptionContent";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const Subscription = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulSubscription {
        nodes {
          fee
          intro {
            raw
          }
          explanation {
            raw
          }
          contents {
            explanation {
              raw
            }
            image {
              gatsbyImageData
              file {
                fileName
              }
            }
            title
            subtitle
          }
          link
        }
      }
    }
  `);

  const [windowBottom, setWindowBottom] = useState(0);
  const [docHeight, setDocHeight] = useState(0);
  const [popIn, setPopIn] = useState(false);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setWindowBottom(window.pageYOffset + window.innerHeight);
        setDocHeight(window.document.body.offsetHeight);
      };
    }
  }, []);

  if (docHeight - windowBottom < 100 && popIn === false) setPopIn(true);
  else if (docHeight - windowBottom >= 100 && popIn === true) setPopIn(false);

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
    <Layout popIn={popIn}>
      <SEO title="Subscription" />
      <Row className="section-subscriptionAbout">
        <Col
          xs={12}
          sm={{ span: 11, offset: 1 }}
          md={{ span: 11, offset: 1 }}
          lg={{ span: 7, offset: 1 }}
        >
          <p className="subscription-title">
            サブスク
            <br />
            はじめました。
          </p>
          <p className="subscription-explanation">
            {renderRichText(
              data.allContentfulSubscription.nodes[0].intro,
              options
            )}
          </p>
          <a
            href={data.allContentfulSubscription.nodes[0].link}
            className="btn-subscription"
            target="_blank"
            rel="noreferrer"
          >
            サブスクリプションに申し込む
          </a>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={4}
          className="subscription-icon-wrapper"
        >
          <p className="subscription-icon">月額三千円</p>
        </Col>
      </Row>
      <Row className="section-subscriptionContents">
        <Col
          sm={12}
          md={12}
          lg={12}
          className="subscriptionContents-title-wrapper"
        >
          <div className="subscriptionContents-title-line"></div>
          <p className="subscriptionContents-title">サブスクリプションの内容</p>
          <div className="subscriptionContents-title-line"></div>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={12}
          className="subscriptionContents-title-wrapper"
        >
          <p className="subscriptionContents-explanation">
            {renderRichText(
              data.allContentfulSubscription.nodes[0].explanation,
              options
            )}
          </p>
        </Col>
        {data.allContentfulSubscription.nodes[0].contents.map(
          ({ title, subtitle, explanation, image }, index) => (
            <Col
              sm={12}
              md={{ span: 10, offset: 1 }}
              lg={{ span: 4, offset: 0 }}
              className="subscriptionContent-wrapper"
              key={index}
            >
              <SubscriptionContent
                title={title}
                subtitle={subtitle}
                explanation={explanation}
                image={image}
                index={index}
                key={index}
              />
            </Col>
          )
        )}
        <Col sm={12} className="subscriptionContents-fee-wrapper">
          <p className="subscriptionContents-fee-pretext">全て含めて</p>
          <span className="subscriptionContents-fee-small">月額</span>
          <span className="subscriptionContents-fee-large">
            {data.allContentfulSubscription.nodes[0].fee}
          </span>
          <span className="subscriptionContents-fee-small">円</span>
        </Col>
      </Row>
      <Row className="section-subscriptionWarning">
        <Col
          sm={{ span: 10, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 8, offset: 2 }}
          className="subscriptionWarning-wrapper"
        >
          <p className="subscription-warning-title">注意事項</p>
          <ul className="subscription-warning-list">
            <li className="subscription-warning-content">
              レッスンは全てオンラインで行います。
            </li>
            <li className="subscription-warning-content">
              MOSH上で月額の支払い登録を行っていただきます。
            </li>
            <li className="subscription-warning-content">
              ご登録頂いた当日に初回の決済が発生致します。翌月以降も自動的に同じ日に決済となります。
            </li>
            <li className="subscription-warning-content">
              解約はいつでも行っていただけます。
            </li>
          </ul>
          <a
            href={data.allContentfulSubscription.nodes[0].link}
            className="subscription-CTA"
            target="_blank"
            rel="noreferrer"
          >
            サブスクリプションに申し込む
          </a>
        </Col>
      </Row>
    </Layout>
  );
};

export default Subscription;
