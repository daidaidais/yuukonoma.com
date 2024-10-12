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
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ogp_image from "../images/ogp-osandojo.jpg";

const Osandojo = () => {
    const coverGradient =
    "linear-gradient(30deg, rgba(255,170,123,1) 0%, rgba(255,244,203,1) 100%)";

    const data = useStaticQuery(graphql`
    {
      contentfulOdandojo {
        vision
        earlybirdDeadline
        intro {
          raw
        }
        aboutCoaching {
          raw
        }
        linkTrial
        dates {
          date
          content
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

    const scheduleHeadings = ["第一回","第二回","第三回","第四回","第五回","第六回","第七回"];

    return (
        <Layout popIn={popIn}>
            <SEO
                title="Yuuko Noma | お産道場"
                image={ogp_image}
                description="《すべての女性に自信を与えること》をビジョンに、『お産道場』を開催しております。満足のいくお産を叶え、お産を機になりたいわたしになる。そのために自信を持ってお産に臨み産後より綺麗になるための、知識とテクニックと体力を手に入れる。それがお産道場です。"
            />

            <Row className="section-osandojoHero">
                <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                >
                    <div className="osandojoHero-title-wrapper">
                        <p className="osandojoHero-subtitle">
                            満足のいくお産を叶え
                            <br />
                            お産を機に、なりたい私になる
                        </p>
                        <p className="osandojoHero-title">
                            お産道場
                        </p>
                    </div>
                    <StaticImage
                    src="../images/circle-green.png"
                    alt="circle-green.png"
                    className="osandojoHero-circle"
                    loading="eager"
                    placeholder="blurred"
                    />
                    <StaticImage
                    src="../images/blob-blue.png"
                    alt="blob-blue.png"
                    className="osandojoHero-blob-blue"
                    loading="eager"
                    placeholder="blurred"
                    />
                    <StaticImage
                    src="../images/blob-orange.png"
                    alt="blob-orange.png"
                    className="osandojoHero-blob-orange"
                    loading="eager"
                    placeholder="blurred"
                    />
                    <StaticImage
                    src="../images/blob-yellow.png"
                    alt="blob-yellow.png"
                    className="osandojoHero-blob-yellow"
                    loading="eager"
                    placeholder="blurred"
                    />
                    <div className="osandojoHero-pill-wrapper">
                        <span className="osandojoHero-pill">安産</span>
                        <span className="osandojoHero-pill">リラックス</span>
                        <span className="osandojoHero-pill">自己信頼</span>
                        <span className="osandojoHero-pill">美しさ</span>
                    </div>
                </Col>
            </Row>

            <Row className="section-osandojoVision">
                <Col
                    sm={12}
                    md={12}
                    lg={12}
                >
                    <Fade bottom>
                        <p className="osandojoVision-title">{data.contentfulOdandojo.vision}</p> 
                    </Fade>
                    <Fade bottom>
                        <p className="osandojoVision-text">
                            {renderRichText(
                                        data.contentfulOdandojo.intro,
                                        options
                                    )}
                        </p>
                    </Fade>
                    <Fade bottom>
                            <a
                            href={data.contentfulOdandojo.link}
                            className="btn-subscription large"
                            target="_blank"
                            rel="noreferrer"
                        >
                            お申し込みはこちら
                            </a>
                    </Fade>
                </Col>
            </Row>

            <Row className="section-osandojoMessage">
                <Col
                xs={12}
                sm={10}
                md={10}
                lg={10}
                className="osandojoMessage-photo-wrapper"
                >
                    <Fade bottom>
                    <p className="osandojoMessage-text">
                        「痛くないお産がしたい」<br/>
                        「恐怖心を手放して安心してお産に挑みたい」<br/>
                        これは多くの妊婦さんが思うことではないでしょうか。<br/>
                        <br/>
                        そもそも人は《分からないこと》に一番恐怖を感じます。<br/>
                        そんな《分からないこと》が多いと感じるのが出産と産後ではないでしょうか。<br/>
                        だからこそまずは、確かな知識をつけていくことは恐怖心を大きく和らげることを助けます。
                    </p>
                    </Fade>
                </Col>
                <Col
                xs={12}
                sm={2}
                md={2}
                lg={2}
                className="osandojoMessage-circle-wrapper"
                >
                    <StaticImage
                    src="../images/circle-orange.png"
                    alt="circle-orange.png"
                    className="osandojoMessage-circle-orange"
                    loading="eager"
                    placeholder="blurred"
                    />
                    <StaticImage
                    src="../images/circle-green.png"
                    alt="circle-green.png"
                    className="osandojoMessage-circle-green"
                    loading="eager"
                    placeholder="blurred"
                    />
                </Col>
            </Row>
            
            
            <Row className="section-osandojoPain">
                <Col
                sm={12}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 10, offset: 1 }}
                className="osanDojoPain-wrapper"
                >
                    <Fade bottom>
                    <div className="subscriptionContents-title-wrapper">
                        <div className="subscriptionContents-title-line line-white"></div>
                        <p className="subscriptionContents-title text-white">こんな不安はありませんか？</p>
                        <div className="subscriptionContents-title-line line-white"></div>
                    </div>
                    </Fade>
                    <div className="osandojoPain-bullets-wrapper">
                        <Bullet text="どれだけの痛みが待っているのかという恐怖" textColor="white"/>
                        <Bullet text="痛みに弱いから絶対に陣痛なんて耐えられない" textColor="white"/>
                        <Bullet text="お産で薬を使われるのも怖い" textColor="white"/>
                        <Bullet text="お産を乗り切れる自信がない" textColor="white"/>
                        <Bullet text="自分の気持ちを伝えることが苦手で満足いくお産ができる気がしない" textColor="white"/>
                        <Bullet text="産後の身体がちゃんと戻るのか不安" textColor="white"/>
                        <Bullet text="どうやってママになればいいのか分からない" textColor="white"/>
                    </div>
                    <StaticImage
                    src="../images/cutout-1.png"
                    alt="cutout-1.png"
                    className="osandojoPain-cutout"
                    loading="eager"
                    placeholder="blurred"
                    />
                    <StaticImage
                    src="../images/blob-yellow.png"
                    alt="blob-yellow.png"
                    className="osandojoPain-blob"
                    loading="eager"
                    placeholder="blurred"
                    />
                </Col>
            </Row>

            <Row className="section-osandojoAbout">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="subscriptionContents-title-wrapper"
                >
                    <Fade bottom>
                    <div className="subscriptionContents-title-line"></div>
                    <p className="subscriptionContents-title">お産道場で手に入れられること</p>
                    <div className="subscriptionContents-title-line"></div>
                    </Fade>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                className="osandojoAbout-wrapper"
                > 
                     <Fade bottom>
                    <div className="osandojoAbout-title-wrapper">
                        <p className="osandojoAbout-title">自信を持ってお産に臨める知識とテクニックと体力、そして産後より綺麗になるための知識</p>
                        <p className="osandojoAbout-subtitle">これらを手に入れた女性が《満足のいくお産を叶え、お産を機になりたいわたしになる》と考えています。</p>
                    </div>
                    </Fade>
                    <div className="osandojoAbout-bullets-wrapper">
                        <Bullet text="知識を得ることで“痛み”についての捉え方が大きく変わる" color="navy"/>
                        <Bullet text="痛みから離れて心地よさの中でお産をする方法が知れる" color="navy"/>
                        <Bullet text="自己信頼が高まりお産が楽しみになる" color="navy"/>
                        <Bullet text="お産を通じて自分の声を大切にできるようになる" color="navy"/>
                        <Bullet text="不必要な医療介入を受けずに自然な方法でのお産が叶う" color="navy"/>
                        <Bullet text="妊娠出産の心身の変化をママとパパ二人が同じ目線で共有することで夫婦の絆がより深まる" color="navy"/>
                        <Bullet text="産後のママの心身の知識と過ごし方を知っておくことで産後はより綺麗に" color="navy"/>
                        <Bullet text="自己信頼を育むことで自然とママになる自信が湧いてくる" color="navy"/>
                        <Bullet text="お腹の中の赤ちゃんとのコミュニケーションを知ることで愛情をより育んでいける" color="navy"/>
                    </div>
                </Col>
                <StaticImage
                    src="../images/blur-white.png"
                    alt="blur-white.png"
                    className="osandojoAbout-blur"
                    loading="eager"
                    placeholder="blurred"
                />
                <StaticImage
                    src="../images/cutout-2.png"
                    alt="cutout-2.png"
                    className="osandojoAbout-cutout"
                    loading="eager"
                    placeholder="blurred"
                />
                <StaticImage
                    src="../images/curve-orange.png"
                    alt="curve-orange.png"
                    className="osandojoAbout-curve"
                    loading="eager"
                    placeholder="blurred"
                />
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
                    <p className="subscriptionContents-title">お産道場の３つの柱</p>
                    <div className="subscriptionContents-title-line"></div>
                    </Fade>
                </Col>
                <Col
                xs={{ span: 10, offset: 1 }}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 4, offset: 1 }}
                xl={{ span: 5, offset: 1 }}
                className="osandojoFeatures-text"
                >
                    お産に対する知識とテクニック、産前産後の心身に対する知識そして身体作り、この３つが揃ったとき満足のいく「あなたらしいお産」が叶います。
                </Col>
                <Col
                xs={{ span: 10, offset: 1 }}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={6}
                xl={5}
                className="osandojoFeatures-diagram"
                >
                    <Fade bottom>
                    <div className="osandojoFeatures-circle">
                        <div className="osandojoFeatures-diagram-green-wrapper">
                            <span className="osandojoFeatures-diagram-text">ヒプノバーシング<br/>出産準備クラス</span>
                            <StaticImage
                            src="../images/blob-green.png"
                            alt="blob-green.png"
                            className="osandojoFeatures-diagram-green"
                            loading="eager"
                            placeholder="blurred"
                            />
                        </div>
                        <div className="osandojoFeatures-diagram-orange-wrapper">
                            <span className="osandojoFeatures-diagram-text">夫婦で<br/>マタニティヨガ</span>
                            <StaticImage
                            src="../images/blob-orange.png"
                            alt="blob-orange.png"
                            className="osandojoFeatures-diagram-orange"
                            loading="eager"
                            placeholder="blurred"
                            />
                        </div>
                        <div className="osandojoFeatures-diagram-purple-wrapper">
                            <span className="osandojoFeatures-diagram-text">産前産後の心身の講座<br/>(動画教材)</span>
                            <StaticImage
                            src="../images/blob-purple.png"
                            alt="blob-purple.png"
                            className="osandojoFeatures-diagram-purple"
                            loading="eager"
                            placeholder="blurred"
                            />
                        </div>
                    </div>
                    </Fade>
                </Col>
                <Col
                xs={{ span: 10, offset: 1 }}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 5, offset: 1 }}
                className="osandojoFeature-left"
                >
                    <span className="osandojoFeature-left-title">ヒプノバーシング<br/>出産準備クラス</span>
                    <StaticImage
                    src="../images/blob-green.png"
                    alt="blob-green.png"
                    className="osandojoFeature-left-blob"
                    loading="eager"
                    placeholder="blurred"
                    />
                </Col>
                <Col
                xs={{ span: 10, offset: 1 }}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 5, offset: 0 }}
                className="osandojoFeature-right"
                >
                    <p className="osandojoFeature-right-title">満足のいくお産を叶えるための<br/>《ヒプノバーシング出産準備クラス》</p>
                    <p className="osandojoFeature-right-text">
                        ヒプノバーシングは現在48カ国で広まっているお産の方法です。キャサリン妃や女優のジェシカ・アルバさんもヒプノバーシングでお産をしています。ヒプノバーシングはお母さんが楽に快適に、そして赤ちゃんを優しくこの世界に導くために考案された１２．５時間のプログラムです。お母さんが健康であれば、もうすでに備わっている自然な力を取り戻すことでより楽に快適に、 ときには痛みのない出産ができるという様々なエビデンスに基づきます。
                        </p>
                    <div className="osandojoFeature-right-merits-wrapper">
                        <p className="osandojoFeature-right-merits-title">得られるメリット</p>
                        <Bullet text="会陰切開やその他の医療介入の必要性が少なくなる" color="navy"/>
                        <Bullet text="お産における痛みが減る" color="navy"/>
                        <Bullet text="お産にかかる時間を短くする" color="navy"/>
                    </div>
                    <AniLink
                        cover
                        direction="right"
                        bg={coverGradient}
                        to="/hypnobirthing"
                        className="btn-hypnobirthing"
                        >
                        ヒプノバーシング単体での受講はこちら
                    </AniLink>
                </Col>
                <Col
                xs={{ span: 10, offset: 1 }}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 5, offset: 1 }}
                className="osandojoFeature-left"
                >
                    <span className="osandojoFeature-left-title">産前産後の心身の講座<br/>(動画教材)</span>
                    <StaticImage
                    src="../images/blob-purple.png"
                    alt="blob-purple.png"
                    className="osandojoFeature-left-blob blob-purple"
                    loading="eager"
                    placeholder="blurred"
                    />
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 5, offset: 0 }}
                className="osandojoFeature-right"
                >
                    <p className="osandojoFeature-right-title">産後の綺麗を叶えるための動画教材<br/>《妊娠中の身体の変化、産後の身体について講座》</p>
                    <p className="osandojoFeature-right-text">
                        妊娠出産における心身の変化をしっかりと理解することで、安産に必要な心と身体の知識を得ます。そこで妊娠中から衰えさせてはいけない筋肉を明確に理解し、産後いち早く復活させたい筋肉(骨盤底筋群)の扱い方を知ることで、産後の身体の戻りに対する不安を取り払います。    
                    </p>
                    <div className="osandojoFeature-right-merits-wrapper">
                        <p className="osandojoFeature-right-merits-title">得られるメリット</p>
                        <Bullet text="お産へ向かうための身体の準備方法がわかる" color="navy"/>
                        <Bullet text="産後をどう過ごせば身体の戻りが早いのか明確になる" color="navy"/>
                    </div>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 5, offset: 1 }}
                className="osandojoFeature-left"
                >
                    <span className="osandojoFeature-left-title">夫婦で<br/>マタニティヨガ</span>
                    <StaticImage
                    src="../images/blob-orange.png"
                    alt="blob-orange.png"
                    className="osandojoFeature-left-blob blob-orange"
                    loading="eager"
                    placeholder="blurred"
                    />
                </Col>
                <Col
                xs={{ span: 10, offset: 1 }}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 5, offset: 0 }}
                className="osandojoFeature-right"
                >
                    <p className="osandojoFeature-right-title">母体を安産へ導くための<br/>《マタニティヨガ》</p>
                    <p className="osandojoFeature-right-text">
                        お産で体力を使い果たすことなくスムーズに育児に移行できるような身体作りをしていきます。妊娠中の心身の変化からくる心配も不安も恐れもわくわくも全てを感じきりながら、ご自身の身体と心にたくさんの愛を持って接せるようになるために心を解きほぐすような時間をご提供します。
                    </p>
                    <div className="osandojoFeature-right-merits-wrapper">
                        <p className="osandojoFeature-right-merits-title">得られるメリット</p>
                        <Bullet text="妊娠中の不定愁訴を減らす(不安・性欲減退・睡眠障害)" color="navy"/>
                        <Bullet text="大きすぎる小さすぎる赤ちゃんを減らす" color="navy"/>
                        <Bullet text="安産に最も必要な呼吸力がつく" color="navy"/>
                        <Bullet text="妊娠に対して夫婦で同じ目線を共有できる" color="navy"/>
                    </div>
                </Col>
                <StaticImage
                    src="../images/cutout-3.png"
                    alt="cutout-3.png"
                    className="osandojoFeatures-cutout"
                    loading="eager"
                    placeholder="blurred"
                />
            </Row>
            <Row className="section-osandojoSchedule">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="subscriptionContents-title-wrapper"
                >
                    <Fade bottom>
                    <div className="subscriptionContents-title-line"></div>
                    <p className="subscriptionContents-title">お産道場スケジュール</p>
                    <div className="subscriptionContents-title-line"></div>
                    </Fade>
                </Col>
                <Col
                xs={{ span: 10, offset: 1 }}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 1 }}
                lg={{ span: 6, offset: 1 }}
                xl={{ span: 5, offset: 2 }}
                className="osandojoSchedule-left"
                >
                    <div className="osandojoSchedule-block-wrapper">
                        <p className="osandojoSchedule-block-title">
                            講座日程
                        </p>
                        {data.contentfulOdandojo.dates.map((date,index) => (
                            <Fade bottom>
                                <div className="osandojoSchedule-block-text-wrapper">
                                    <span className="osandojoSchedule-block-heading">{scheduleHeadings[index]}</span>
                                    <div className="osandojoSchedule-block-right-wrapper">
                                        <p className="osandojoSchedule-block-text">{date.date}</p>
                                        <p className="osandojoSchedule-block-date">{date.content}</p>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                    <div className="osandojoSchedule-block-wrapper">
                        <p className="osandojoSchedule-block-title">
                            マタニティヨガ
                        </p>
                        <div className="osandojoSchedule-block-text-wrapper">
                            <span className="osandojoSchedule-block-text">毎週1回開催しているマタニティヨガへ3ヶ月間受け放題</span>
                        </div>
                        <div className="osandojoSchedule-block-text-wrapper">
                            <span className="osandojoSchedule-block-text small">※スタートは安定期に入っていればいつからスタートされてもOK</span>
                        </div>
                    </div>
                    <div className="osandojoSchedule-block-wrapper">
                        <p className="osandojoSchedule-block-title">
                            最高の産後のスタートを切るためのマインドセット
                        </p>
                        <div className="osandojoSchedule-block-text-wrapper">
                            <span className="osandojoSchedule-block-text">産後は急激なホルモン変化によって、産後2、3日〜数週間以内に生じるとされる一過性の情緒不安定(マタニティブルー)。これは約半数の方に訪れるといわれます。その際の辛さや悲しさモヤモヤを解消できないことで産後うつへと繋がることがあるとされています。だからこそ産後のそうしたモヤモヤや焦りに繋がりうる考え方や価値観を産前から解消し、より楽ちんに育児に向かうためにこのセッションがあります。</span>
                        </div>
                        {/* <div className="osandojoSchedule-block-text-wrapper">
                            <span className="osandojoSchedule-block-text small">※ 通常1セッション￥20.000-</span>
                        </div> */}
                    </div>
                    <div className="osandojoSchedule-block-wrapper">
                        <p className="osandojoSchedule-block-title">
                            動画教材
                        </p>
                        <div className="osandojoSchedule-block-text-wrapper">
                            <span className="osandojoSchedule-block-text">■妊娠期の身体の変化について</span>
                        </div>
                        <div className="osandojoSchedule-block-text-wrapper">
                            <span className="osandojoSchedule-block-text">■産後の身体と心について</span>
                        </div>
                        <div className="osandojoSchedule-block-text-wrapper">
                            <span className="osandojoSchedule-block-text">■産後すぐから取り組んで欲しいこと(産後ヨガと瞑想)</span>
                        </div>
                        <div className="osandojoSchedule-block-text-wrapper">
                            <span className="osandojoSchedule-block-text small">※動画はVimeoでのお渡しとなります。</span>
                        </div>
                    </div>
                    {/* <div className="osandojoSchedule-block-wrapper">
                        <p className="osandojoSchedule-block-title">
                            費用
                        </p>
                    </div> */}
                    {/* <Fade bottom>
                        <div className="meditationFee-item">
                            <p className="meditationFee-number osandojo">1</p>
                            <div className="osandojoFee-wrapper">
                                <p className="meditationFee-title">お産道場＋産後コーチング</p>
                                <p className="meditationFee-explanation osandojo">通常価格：<span className="bold">{data.contentfulOdandojo.feeWithCoachingRegular}</span></p>
                                <p className="meditationFee-explanation osandojo">{data.contentfulOdandojo.earlybirdDeadline}までの早割価格：<span className="highlight-navy">{data.contentfulOdandojo.feeWithCoachingEarlybird}</span></p>
                                <p className="osandojoFee-note">
                                    <p className="osandojoFee-note-heading">※産後コーチングとは？</p>
                                    {renderRichText(
                                        data.contentfulOdandojo.aboutCoaching,
                                        options
                                    )}
                                </p>
                                <a
                                    href={data.contentfulOdandojo.linkWithCoaching}
                                    className="btn-subscription"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    お申し込みはこちら
                                </a>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="meditationFee-item">
                            <p className="meditationFee-number osandojo">2</p>
                            <div className="osandojoFee-wrapper">
                                <p className="meditationFee-title">お産道場のみ</p>
                                <p className="meditationFee-explanation osandojo">通常価格：<span className="bold">{data.contentfulOdandojo.feeRegular}</span></p>
                                <p className="meditationFee-explanation osandojo">{data.contentfulOdandojo.earlybirdDeadline}までの早割価格：<span className="highlight-navy">{data.contentfulOdandojo.feeEarlybird}</span></p>
                                <a
                                    href={data.contentfulOdandojo.link}
                                    className="btn-subscription"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    お申し込みはこちら
                                </a>
                            </div>
                        </div>
                    </Fade> */}
                </Col>
                <Col
                sm={12}
                md={12}
                lg={5}
                xl={5}
                className="osandojoSchedule-right"
                >
                    <div className="osandojoSchedule-cutout-wrapper">
                        <StaticImage
                        src="../images/cutout-4.png"
                        alt="cutout-4.png"
                        className="osandojoSchedule-cutout-front"
                        loading="eager"
                        placeholder="blurred"
                        />
                        <StaticImage
                        src="../images/cutout-5.png"
                        alt="cutout-5.png"
                        className="osandojoSchedule-cutout-back"
                        loading="eager"
                        placeholder="blurred"
                        />
                    </div>
                    <StaticImage
                    src="../images/blob-orange.png"
                    alt="blob-orange.png"
                    className="osandojoSchedule-blob-orange"
                    loading="eager"
                    placeholder="blurred"
                    />
                    <StaticImage
                    src="../images/blob-blue.png"
                    alt="blob-blue.png"
                    className="osandojoSchedule-blob-blue"
                    loading="eager"
                    placeholder="blurred"
                    />
                    <StaticImage
                    src="../images/blob-purple.png"
                    alt="blob-purple.png"
                    className="osandojoSchedule-blob-purple"
                    loading="eager"
                    placeholder="blurred"
                    />
                </Col>
            </Row>

            {/* <Row className="section-meditationTrial">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="meditationCta-wrapper"
                >
                    <Fade bottom>
                    <p className="meditationTrial-title">無料相談会実施中</p>
                    <p className="meditationTrial-text"><span className="osandojoSchedule-earlybirdDeadline">{data.contentfulOdandojo.earlybirdDeadline}</span>までの相談会へのご参加で特別価格にてご案内中！</p>
                    <a
                        href={data.contentfulOdandojo.linkTrial}
                        className="btn-subscription large trial"
                        target="_blank"
                        rel="noreferrer"
                    >
                        相談会お申し込みはこちら
                    </a>
                    </Fade>
                </Col>
            </Row> */}
        </Layout>
      );
}

export default Osandojo;