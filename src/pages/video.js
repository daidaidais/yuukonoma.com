import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Bullet from "../components/Bullet";
import SubscriptionContent from "../components/SubscriptionContent";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Fade from 'react-reveal/Fade';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

const Video = () => {
    const coverGradient =
        "linear-gradient(30deg, rgba(255,170,123,1) 0%, rgba(255,244,203,1) 100%)";

    const data = useStaticQuery(graphql`
    {
      contentfulVideo {
        contents {
          explanation {
            raw
          }
          title
          details
          link
          image {
            gatsbyImageData
            file {
              fileName
            }
          }
        }
        explanation {
          explanation
        }
        features {
          subtitle
          title
          explanation {
            raw
          }
          image {
            gatsbyImageData
            file {
              fileName
            }
          }
        }
      }
    }
  `)

    const [windowBottom, setWindowBottom] = useState(0);
    const [docHeight, setDocHeight] = useState(0);
    const [popIn, setPopIn] = useState(false);

    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.onscroll = () => {
                setWindowBottom(window.scrollY + window.innerHeight);
                setDocHeight(window.document.body.offsetHeight);
            };
        }
    }, []);

    if (docHeight - windowBottom < 100 && popIn === false) setPopIn(true);
    else if (docHeight - windowBottom >= 100 && popIn === true) setPopIn(false)

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
            [BLOCKS.UL_LIST]: (node, children) => (
                <ul className="meditationCurriculum-list">{children}</ul>
            ),
        },
        renderText: text => {
            return text.split('\n').reduce((children, textSegment, index) => {
                return [...children, index > 0 && <br key={index} />, textSegment];
            }, []);
        },
    };

    return (
        <Layout popIn={popIn} hoverColor="orange">
            <SEO
                title="Yuuko Noma | 動画教材"
                description="のべ1000名以上に指導してきた講座やレッスンを、いつでも学びたいときに学べる動画教材としてご用意しております。"
            />

            <Row className="section-videoHero">
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                >
                    <div className="videoHero-title-wrapper">
                        <p className="videoHero-subtitle">
                            いつでも学びたいときに学べる<br />動画教材をご用意しております。
                        </p>
                        <p className="videoHero-title">
                            動画教材
                        </p>
                    </div>
                    <StaticImage
                        src="../images/circle-green.png"
                        alt="circle-green.png"
                        className="videoHero-circle-green"
                        loading="eager"
                        placeholder="blurred"
                    />
                    <StaticImage
                        src="../images/circle-orange.png"
                        alt="circle-orange.png"
                        className="videoHero-circle-orange"
                        loading="eager"
                        placeholder="blurred"
                    />
                    <StaticImage
                        src="../images/mockup-yellow-small.png"
                        alt="Mockup image of tutorial video"
                        className="videoHero-mockup"
                        loading="eager"
                        placeholder="blurred"
                    />
                </Col>
            </Row>

            <Row className="section-videoAbout">
                <Col
                    sm={12}
                    md={12}
                    lg={12}
                    className="subscriptionContents-title-wrapper"
                >
                    <Fade bottom>
                        <div className="subscriptionContents-title-line"></div>
                        <p className="subscriptionContents-title">動画教材の特徴</p>
                        <div className="subscriptionContents-title-line"></div>
                    </Fade>
                </Col>
                <Col
                    sm={12}
                    md={12}
                    lg={12}
                    className="subscriptionContents-title-wrapper"
                >
                    <Fade bottom>
                        <p className="subscriptionContents-explanation">
                            {data.contentfulVideo.explanation.explanation}
                        </p>
                    </Fade>
                </Col>
                {data.contentfulVideo.features.map(
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
                                color="navyBorder"
                            />
                        </Col>
                    )
                )}
            </Row>

            <Row className="section-osandojoFeatures">
                <Col
                    sm={12}
                    md={12}
                    lg={12}
                    className="subscriptionContents-title-wrapper"
                >
                    <Fade bottom>
                        <div className="subscriptionContents-title-line"></div>
                        <p className="subscriptionContents-title">販売中の教材</p>
                        <div className="subscriptionContents-title-line"></div>
                    </Fade>
                </Col>

                {data.contentfulVideo.contents.map(
                    ({ title, explanation, details, link, image }, index) => (
                        <Fade bottom key={index}>
                            <div className="videoFeature-wrapper">
                                <div className="videoFeature-left">
                                    <GatsbyImage
                                        image={image.gatsbyImageData}
                                        alt={image.file.fileName}
                                        className="videoFeature-left-image"
                                        loading="eager"
                                        placeholder="blurred"
                                    />
                                </div>
                                <div className="videoFeature-right"
                                >
                                    <p className="osandojoFeature-right-title">{title}</p>
                                    <p className="osandojoFeature-right-text">
                                        {renderRichText(
                                            explanation,
                                            options
                                        )}
                                    </p>
                                    <div className="osandojoFeature-right-merits-wrapper">
                                        <p className="osandojoFeature-right-merits-title">教材内容</p>
                                        {details.map((value, index) => (
                                            <Bullet text={value} key={index} color="navy" />
                                        ))}
                                    </div>
                                    <a
                                        // href={link}
                                        href=""
                                        className="btn-video"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        ただいま準備中
                                    </a>
                                </div>
                            </div>
                        </Fade>
                    )
                )}

                <StaticImage
                    src="../images/cutout-3.png"
                    alt="cutout-3.png"
                    className="osandojoFeatures-cutout"
                    loading="eager"
                    placeholder="blurred"
                />
            </Row>

            <Row className="section-meditationTrial video">
                <Col
                    sm={12}
                    md={12}
                    lg={12}
                    className="meditationCta-wrapper"
                >
                    <Fade bottom>
                        <p className="meditationTrial-title video">パーソナルレッスンやコーチングセッションをご希望の方</p>
                        <p className="meditationTrial-text video">常時受け付けていますのでお気軽にDMください！</p>
                        <a
                            href="https://www.instagram.com/yuukonoma/"
                            className="btn-subscription large trial video"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagramアカウントへ
                        </a>
                    </Fade>
                </Col>
            </Row>
        </Layout>
    );
}

export default Video;