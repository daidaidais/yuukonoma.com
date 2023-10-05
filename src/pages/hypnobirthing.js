import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Bullet from "../components/Bullet";
import HypnobirthContent from "../components/HypnobirthContent";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Fade from 'react-reveal/Fade';

const Hypnobirthing = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulHypnobirthing {
        nodes {
          about {
            raw
          }
          intro {
            raw
          }
          dates {
            title
            explanation {
                raw
              }
            dates
            notes {
              raw
            }
            link
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

    const options1 = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [INLINES.HYPERLINK]: ({ data }, children) => (
                <InlineLink link={data.uri}>{children}</InlineLink>
            ),
            [BLOCKS.UL_LIST]: (node, children) => (
                <ul className="hypnobirthDetails-explanation-bullets">{children}</ul>
              ),
        },
        renderText: text => {
            return text.split('\n').reduce((children, textSegment, index) => {
              return [...children, index > 0 && <br key={index} />, textSegment];
            }, []);
          },
    };

    const options2 = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [INLINES.HYPERLINK]: ({ data }, children) => (
                <InlineLink link={data.uri}>{children}</InlineLink>
            ),
            [BLOCKS.UL_LIST]: (node, children) => (
                <ul className="hypnobirthDetails-notes">{children}</ul>
              ),
        },
        renderText: text => {
            return text.split('\n').reduce((children, textSegment, index) => {
              return [...children, index > 0 && <br key={index} />, textSegment];
            }, []);
          },
    };

    const contentTitle = [
        "心地いいお産への心の土台作り",
        "赤ちゃんと恋に落ちよう",
        "赤ちゃんと共により深いリラクゼーションへ",
        "お産の流れを知ろう",
        "赤ちゃんの誕生と絆を深めるとき"
    ]

    const contentBullet1 = [
        "ヒプノバーシングの哲学とそのはじまり",
        "女性と出産の歴史",
        "出産のときに子宮はどう動くの？",
        "お産の問題点",
        "恐怖心はお産にどう影響する？",
        "お産の恐怖心と痛みはどこからくる？",
        "心(マインド)のちから",
        "心(マインド)の変化の法則",
        "心(マインド)と身体のつながり",
        "サイコフィジカル アソシエーション",
        "呼吸法とリラクゼーション",
        "出産にポジティブなイメージを持つ"
    ];

    const contentBullet2 = [
        "出産前からはじまる子育て",
        "出産前、出産時、出産後の絆づくり",
        "胎児学から分かること",
        "ケアギバーの選択の大切さ",
        "お産に向けた心の準備",
        "ヒプノシスによるディープ二ングと視覚化",
        "恐れを手放す",
        "お産に向けた身体の準備",
        "ケアギバーとの関係づくり",
    ];

    const contentBullet3 = [
        "お産のイメージング",
        "逆子の向きを変えるために",
        "予定日について",
        "人工的な誘発や促進を避けるために",
        "バースプランの準備",
        "身体はお産に向けてどんな準備をしている？",
        "自然にお産を開始するために",
        "身体がすでに持つ完璧なデザインについて",
        "恐れと思い込みの開放",
    ];

    const contentBullet4 = [
        "お産のウォームアップ",
        "お産のはじまり",
        "バースパートナーの唯一無二の役割",
        "子宮口が薄くなり開く時",
        "お産が長引いたら？",
        "お産にまつわる誤解",
        "お産に必要な3つの呼吸法",
        "出産リハーサル",
    ];

    const contentBullet5 = [
        "子宮口が開大に近づくとき",
        "出産時の赤ちゃんのベストなポジションとは",
        "お産の間、赤ちゃんが降りてくる時、生み出す時の姿勢",
        "赤ちゃんが降りてくる時の呼吸",
        "お産の完璧なデザインについて",
        "母乳育児について",
        "産後の３ヶ月について",
    ];

    const contentBullet = [
        contentBullet1,
        contentBullet2,
        contentBullet3,
        contentBullet4,
        contentBullet5
    ]

    return (
        <Layout popIn={popIn}>
            <SEO title="Yuuko Noma | HYPNOBIRTHING" />
            <Row className="section-hypnobirthHero">
                <Col
                xs={12}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 6, offset: 2 }}
                lg={{ span: 6, offset: 2 }}
                xl={{ span: 4, offset: 3 }}
                >
                    <p className="hypnobirthHero-title">
                        HypnoBirthing®
                    </p>
                    <p className="hypnobirthHero-subtitle">
                        the Mongan Method
                    </p>
                    <p className="hypnobirthHero-explanation">
                    {renderRichText(
                        data.allContentfulHypnobirthing.nodes[0].intro,
                        options2
                    )}
                    </p>
                    <Fade bottom>
                    <a
                        href={data.allContentfulHypnobirthing.nodes[0].dates[0].link}
                        className="btn-subscription block"
                        target="_blank"
                        rel="noreferrer"
                    >
                        お申し込みはこちら
                    </a>
                    </Fade>
                </Col>
                <Col
                xs={12}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 2 }}
                lg={{ span: 2 }}
                xl={{ span: 2 }}
                className="hypnobirthHero-image-wrapper"
                >
                    <StaticImage
                    src="../images/hypnobirthing.png"
                    alt="hypnobirthing.png"
                    className="hypnobirthHero-image"
                    loading="eager"
                    placeholder="blurred"
                />
                </Col>
            </Row>
            
            <Row className="section-hypnobirthAbout">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="subscriptionContents-title-wrapper"
                >
                    <Fade bottom>
                    <div className="subscriptionContents-title-line"></div>
                    <p className="subscriptionContents-title">ヒプノバーシングについて</p>
                    <div className="subscriptionContents-title-line"></div>
                    </Fade>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                xl={{ span: 6, offset: 3 }}
                className="meditationQuestion-list"
                >
                    <Fade bottom>
                    <p className="hypnobirthAbout-explanation">
                    {renderRichText(
                        data.allContentfulHypnobirthing.nodes[0].about,
                        options2
                    )}
                    </p>
                    </Fade>
                </Col>
            </Row>
            
            <Row className="section-hypnobirthMerits">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="subscriptionContents-title-wrapper"
                >
                    <Fade bottom>
                    <div className="subscriptionContents-title-line"></div>
                    <p className="subscriptionContents-title">ヒプノバーシングのメリット</p>
                    <div className="subscriptionContents-title-line"></div>
                    </Fade>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 6, offset: 3 }}
                xl={{ span: 4, offset: 4 }}
                className="meditationQuestion-list"
                >
                    <Fade bottom>
                    <Bullet text="会陰切開やその他の医療介入の必要性が少なくなる"/>
                    <Bullet text="お産における痛みが減る"/>
                    <Bullet text="お産にかかる時間を短くする"/>
                    <Bullet text="小さすぎる、大きすぎる赤ちゃんが減る"/>
                    <Bullet text="お産の間の疲労が軽減する"/>
                    <Bullet text="お産において骨盤底筋群もダメージを受けにくくなる"/>
                    <Bullet text="パートナーとの絆が深まる"/>
                    <Bullet text="産後の回復がスムーズ"/>
                    </Fade>
                </Col>
            </Row>

            <Row className="section-hypnobirthContent">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="subscriptionContents-title-wrapper"
                >
                    <Fade bottom>
                    <div className="subscriptionContents-title-line"></div>
                    <p className="subscriptionContents-title">ヒプノバーシングのクラス内容</p>
                    <div className="subscriptionContents-title-line"></div>
                    </Fade>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                xl={{ span: 6, offset: 3 }}
                className="meditationQuestion-list"
                >
                    <Fade bottom>
                    <p className="hypnobirthContent-text">
                    ５日間を通してお産当日に心と身体を深いリラックスへ導けるようになるための実践的なテクニックを
                    お伝えして練習を繰り返していきます。そうして身体・意識・感情・心の準備をしていくのがこの5日間のプログラムです。
                    </p>
                    </Fade>
                </Col>
                {contentTitle.map((title, index) => (
                    <Col
                    sm={12}
                    md={{ span: 8, offset: 2 }}
                    lg={{ span: 8, offset: 2 }}
                    xl={{ span: 6, offset: 3 }}
                    className="subscriptionContent-wrapper"
                    >   
                        <HypnobirthContent
                            title={title}
                            bullets={contentBullet[index]}
                            index={index}
                            key={index}
                        />
                    </Col>
                ))}          
            </Row>

            <Row className="section-hypnobirthDetails">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="subscriptionContents-title-wrapper"
                >
                    <Fade bottom>
                    <div className="subscriptionContents-title-line"></div>
                    <p className="subscriptionContents-title">開催日時</p>
                    <div className="subscriptionContents-title-line"></div>
                    </Fade>
                </Col>
                <Col
                sm={{ span: 8, offset: 2 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                xl={{ span: 4, offset: 2 }}
                >
                    <Fade bottom>
                    <div className="hypnobirthDetails-item">
                        <p className="hypnobirthDetails-title">{data.allContentfulHypnobirthing.nodes[0].dates[0].title}</p>
                        <p className="hypnobirthDetails-explanation">
                            {renderRichText(
                                data.allContentfulHypnobirthing.nodes[0].dates[0].explanation,
                                options1
                            )}
                        </p>
                        {data.allContentfulHypnobirthing.nodes[0].dates[0].dates.map((date,index) => (
                            <div className="hypnobirthDetails-date">
                                <span className="hypnobirthDetails-date-left">{`DAY ${index+1}`}</span>
                                <span className="hypnobirthDetails-date-right">{date}</span>
                            </div>
                            ))}
                        <p className="hypnobirthDetails-notes-heading">&lt;講座詳細&gt;</p>
                        {renderRichText(
                            data.allContentfulHypnobirthing.nodes[0].dates[0].notes,
                            options2
                        )}
                        <a
                            href={data.allContentfulHypnobirthing.nodes[0].dates[0].link}
                            className="btn-subscription large"
                            target="_blank"
                            rel="noreferrer"
                        >
                            お申し込みはこちら
                        </a>
                    </div>
                    </Fade>
                </Col>
                <Col
                sm={{ span: 8, offset: 2 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                xl={{ span: 4, offset: 0 }}
                >
                    <Fade bottom>
                    <div className="hypnobirthDetails-item">
                        <p className="hypnobirthDetails-title">{data.allContentfulHypnobirthing.nodes[0].dates[1].title}</p>
                        <p className="hypnobirthDetails-explanation">
                            {renderRichText(
                                data.allContentfulHypnobirthing.nodes[0].dates[1].explanation,
                                options1
                            )}
                        </p>
                        <p className="hypnobirthDetails-notes-heading">&lt;講座詳細&gt;</p>
                        {renderRichText(
                            data.allContentfulHypnobirthing.nodes[0].dates[1].notes,
                            options2
                        )}
                        <a
                            href={data.allContentfulHypnobirthing.nodes[0].dates[1].link}
                            className="btn-subscription large"
                            target="_blank"
                            rel="noreferrer"
                        >
                            お申し込みはこちら
                        </a>
                    </div>
                    </Fade>
                </Col>
            </Row>

            <Row className="section-hypnobirthCta">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="meditationCta-wrapper"
                >
                    <Fade bottom>
                    
                    </Fade>
                </Col>
            </Row>
        </Layout>
      );
}

export default Hypnobirthing;