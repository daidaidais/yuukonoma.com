import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Bullet from "../components/Bullet";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Fade from 'react-reveal/Fade';

const Meditation = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulMeditation {
        nodes {
          dates {
            title
            dates {
                raw
              }
            fee
          }
          link
          lineLink
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
        <Layout popIn={popIn}>
            <SEO title="Yuuko Noma | 瞑想講義" />

            <Row className="section-meditationHero">
                <Col
                xs={12}
                sm={{ span: 11, offset: 1 }}
                md={{ span: 5, offset: 2 }}
                lg={{ span: 4, offset: 2 }}
                xl={{ span: 3, offset: 3 }}
                >
                    <p className="meditationHero-title">
                        瞑想
                        <br />
                        指導者
                        <br />
                        養成講座
                    </p>
                    <Fade bottom>
                    <a
                        href={data.allContentfulMeditation.nodes[0].link}
                        className="btn-subscription"
                        target="_blank"
                        rel="noreferrer"
                    >
                        お申し込みはこちら
                    </a>
                    </Fade>
                </Col>
                <Col
                xs={12}
                sm={{ span: 11, offset: 1 }}
                md={{ span: 4 }}
                lg={{ span: 4 }}
                xl={{ span: 3 }}
                className="meditationHero-image-wrapper"
                >
                    <StaticImage
                    src="../images/meditation.png"
                    alt="meditation.png"
                    className="meditationHero-image"
                    loading="eager"
                    placeholder="blurred"
                />
                </Col>
            </Row>

            <Row className="section-meditationQuestion">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="subscriptionContents-title-wrapper"
                >   
                    <Fade bottom>
                    <div className="subscriptionContents-title-line"></div>
                    <p className="subscriptionContents-title">こんなお悩みありませんか？</p>
                    <div className="subscriptionContents-title-line"></div>
                    </Fade>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 6, offset: 3 }}
                className="meditationQuestion-list"
                >
                    <Fade bottom>
                    <Bullet text="他人軸な自分にはもうさよならして、自分の人生を自分の手に取り戻したい" />
                    <Bullet text="常にできない理由やらない理由を探すのではなく、より良くなるにはどうしたら良いかの思考法にシフトしたい" />
                    <Bullet text="不安や不足感からではなく、わくわくや希望や感謝から日常の全てを選択をしたい" />
                    <Bullet text="衝動的な感情を減らして、常に落ち着いて物事を対処したい" />
                    <Bullet text="直感力を上げてぶれない自分軸を養いたい" />
                    <Bullet text="仕事や私生活で抱えるストレスに負けない自分を作りたい" />
                    <Bullet text="何が起きても自分を立て直せる力(レジリエンス力)が欲しい" />
                    <Bullet text="瞑想のスキルをただ学ぶだけではなくて自分の内面から深く整えたい" />
                    <Bullet text="その先で大切な人にも瞑想を伝えていきたい" />
                    </Fade>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 6, offset: 3}}
                >
                    <Fade bottom>
                    <StaticImage
                    src="../images/meditation1.jpg"
                    alt="meditation1.jpg"
                    className="meditation-slide-image"
                    loading="eager"
                    placeholder="blurred"
                />
                    </Fade>
                </Col>
            </Row>

            <Row className="section-meditationAbout">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="subscriptionContents-title-wrapper"
                >
                    <Fade bottom>
                    <div className="subscriptionContents-title-line"></div>
                    <p className="subscriptionContents-title">この講座を通じて行うこと</p>
                    <div className="subscriptionContents-title-line"></div>
                    </Fade>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 6, offset: 3 }}
                className="meditationQuestion-list"
                >
                    <Fade bottom>
                    <p className="meditationAbout-title">
                        瞑想×仏教×呼吸×コーチング
                    </p>
                    <p className="meditationAbout-text">
                        瞑想指導をする人自身がまずは、自己受容から変容へ向かう必要があります。
                        そのために、まず自分自身が自分の人生の主人公に舞い戻る。
                        そこから大切な人へと光を繋いでいく、その循環を生み出すお手伝いをさせていただきます。
                        <br /><br />
                        自己受容と変容をもたらす<span className="highlight-navy">瞑想</span>と<span className="highlight-navy">仏教</span>。
                        そしてそこにある《在りたい姿》へと大きく後押しする<span className="highlight-navy">呼吸</span>と<span className="highlight-navy">コーチング</span>。
                        自分が《どう在りたいのか》という《誓願》を立てること。
                        それをうちたてるには、悪習慣を良い習慣で塗り替えていく必要があります。
                        <br /><br />
                        その力を持つのが『瞑想』であり『仏教』です。
                        <br /><br />
                        ブッタは、心の在り方・言葉の使い方・身の振り方によって、常に人と人とが関わる人生というのは上手く行ったり上手く行かなかったりということがあるんだということを深く観察しました。これら、心の在り方・言葉の使い方・身の振り方に変化を与えていくのが瞑想であり仏教の智慧です。
                        <br /><br />
                        そしてその変容をサポートするのが『呼吸』と『コーチング』です。
                        『呼吸』には身体と心に影響を与える力があります。呼吸を変えると心身に良い変化が起こるのです。
                        そして『コーチング』は、現状を見誤ることなく正しく知った上で、自分の本当に在りたい姿とのギャップを埋めていく作業です。
                        自分の『誓願』に自分を一気に近づける一種の飛び道具のようなものです。瞑想でも一番大切なのが”気づき”。
                        まず自分が何を持っているのか何を手放したいと思っているのか何がこの苦しさの根源なのかに気づかないと手放すことすらできません。
                        コーチングはその根源を探った上で手放すまでをサポートしていきます。
                    </p>
                    </Fade>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 6, offset: 3}}
                >
                    <Fade bottom>
                    <StaticImage
                    src="../images/meditation2.jpg"
                    alt="meditation2.jpg"
                    className="meditation-slide-image"
                    loading="eager"
                    placeholder="blurred"
                />
                    </Fade>
                </Col>
            </Row>

            <Row className="section-meditationCurriculum">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="subscriptionContents-title-wrapper"
                >
                    <Fade bottom>
                    <div className="subscriptionContents-title-line"></div>
                    <p className="subscriptionContents-title">講座カリキュラム</p>
                    <div className="subscriptionContents-title-line"></div>
                    </Fade>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                xl={{ span: 6, offset: 3 }}
                >
                    <Fade bottom>
                    <div className="meditationCurriculum-item">
                        <p className="meditationCurriculum-title">瞑想指導者養成講座2ヶ月講座<br />(修了書発行あり)</p>
                    </div>
                    <div className="meditationCurriculum-plus">+</div>
                    <div className="meditationCurriculum-item last">
                        <p className="meditationCurriculum-title dotted">月2回のコーチング(全6回)</p>
                        <p className="meditationCurriculum-note">※こちらはコーチングありの講座お申し込みの方に限ります。</p>
                    </div>
                    </Fade>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 6, offset: 3}}
                >
                    <Fade bottom>
                    <StaticImage
                    src="../images/meditation3.jpg"
                    alt="meditation3.jpg"
                    className="meditation-slide-image"
                    loading="eager"
                    placeholder="blurred"
                />
                    </Fade>
                </Col>
            </Row>

            <Row className="section-meditationFee">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="subscriptionContents-title-wrapper"
                >
                    <Fade bottom>
                    <div className="subscriptionContents-title-line"></div>
                    <p className="subscriptionContents-title">参加費用</p>
                    <div className="subscriptionContents-title-line"></div>
                    </Fade>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                xl={{ span: 8, offset: 4 }}
                xxl={{ span: 4, offset: 4 }}
                > 
                {data.allContentfulMeditation.nodes[0].dates.map((date,index) => (
                    <Fade bottom>
                        <div className="meditationFee-item">
                            <p className="meditationFee-number">{index+1}</p>
                            <div className="meditationFee-wrapper">
                                <p className="meditationFee-title">{date.title}</p>
                                <p className="meditationFee-explanation">通常価格：<span className="highlight-navy">{date.fee}</span></p>
                                {/* <p className="meditationFee-explanation">3/21までの早割価格：<span className="highlight-navy">26万円(税込)</span></p> */}
                                {renderRichText(
                                    date.dates,
                                    options
                                )}
                            </div>
                        </div>
                    </Fade>
                ))}
                </Col>
            </Row>

            <Row className="section-meditationCta">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="meditationCta-wrapper"
                >
                    <Fade bottom>
                    <a
                        href={data.allContentfulMeditation.nodes[0].link}
                        className="btn-subscription large"
                        target="_blank"
                        rel="noreferrer"
                    >
                        お申し込みはこちら
                    </a>
                    </Fade>
                </Col>
            </Row>

            <Row className="section-meditationTrial">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="meditationCta-wrapper"
                >
                    <Fade bottom>
                    <p className="meditationTrial-title">無料個別面談をご希望の方</p>
                    <p className="meditationTrial-text">こちらより、『個人面談希望』とご連絡くださいませ ✿</p>
                    <a
                        href={data.allContentfulMeditation.nodes[0].lineLink}
                        className="btn-subscription large trial"
                        target="_blank"
                        rel="noreferrer"
                    >
                        無料個別面談はこちら
                    </a>
                    </Fade>
                </Col>
            </Row>
        </Layout>
      );
}

export default Meditation;