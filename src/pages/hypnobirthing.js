import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Helmet } from "react-helmet";
import { Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Bullet from "../components/Bullet";
import HypnobirthContent from "../components/HypnobirthContent";

const Hypnobirthing = () => {
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

    return (
        <Layout popIn={popIn}>
            <Helmet>
                <link
                href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700&display=swap&subset=japanese"
                rel="stylesheet"
                />
            </Helmet>
            <SEO title="Hypnobirthing" />

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
                    穏やかなお産のためにできること。<br/><br/>
                    お母さんは楽に快適に、そして赤ちゃんを優しくこの世界に導くために。<br/><br/>
                    ヒプノバーシングはお母さんがもともと持つ自然分娩能力を最大限に引き出し、お産を『より自然に、安全に、快適なもの』へと導いてくれる米国生まれのメソッドです。<br/><br/>
                    このクラスでは、お母さんと赤ちゃんが深いリラックスの中でお産を迎えられるように研究された12.5時間の総合的な出産準備プログラムです。
                    </p>
                    <a
                        href="https://checkout.square.site/buy/QERWN36QXRJLYY2Q6LAJURTN"
                        className="btn-subscription block"
                        target="_blank"
                        rel="noreferrer"
                    >
                        お申し込みはこちら
                    </a>
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
                    <div className="subscriptionContents-title-line"></div>
                    <p className="subscriptionContents-title">ヒプノバーシングについて</p>
                    <div className="subscriptionContents-title-line"></div>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                xl={{ span: 6, offset: 3 }}
                className="meditationQuestion-list"
                >
                    <p className="hypnobirthAbout-explanation">
                    ヒプノバーシングはお母さんがもともと持つ自然分娩能力を最大限に引き出し、
                    お産を『より自然に、安全に、快適なもの』へと導いてくれる米国生まれのメソッドで、1984年に始まり現在では48カ国に広がっています。<br/><br/>
                    ヒプノバーシングはお母さんが健康であれば、もうすでに備わっている自然な力を取り戻すことでより楽に、快適に、
                    ときには痛みのない出産ができるという様々なエビデンスに基づきます。ヒプノバーシングのヒプノとはヒプノシス(催眠)から来ています。
                    つまり、自らを深いリラックス状態にすること(自己催眠)により緊張と痛みから開放し心地よいお産へと導くものです。
                    </p>
                </Col>
            </Row>

            <Row className="section-hypnobirthMerits">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="subscriptionContents-title-wrapper"
                >
                    <div className="subscriptionContents-title-line"></div>
                    <p className="subscriptionContents-title">ヒプノバーシングのメリット</p>
                    <div className="subscriptionContents-title-line"></div>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 6, offset: 3 }}
                xl={{ span: 4, offset: 4 }}
                className="meditationQuestion-list"
                >
                    <Bullet text="会陰切開やその他の医療介入の必要性が少なくなる"/>
                    <Bullet text="お産における痛みが減る"/>
                    <Bullet text="お産にかかる時間を短くする"/>
                    <Bullet text="小さすぎる、大きすぎる赤ちゃんが減る"/>
                    <Bullet text="お産の間の疲労が軽減する"/>
                    <Bullet text="お産において骨盤底筋群もダメージを受けにくくなる"/>
                    <Bullet text="パートナーとの絆が深まる"/>
                    <Bullet text="産後の回復がスムーズ"/>
                </Col>
            </Row>

            <Row className="section-hypnobirthContent">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="subscriptionContents-title-wrapper"
                >
                    <div className="subscriptionContents-title-line"></div>
                    <p className="subscriptionContents-title">ヒプノバーシングのクラス内容</p>
                    <div className="subscriptionContents-title-line"></div>
                </Col>
                <Col
                sm={{ span: 10, offset: 1 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                xl={{ span: 6, offset: 3 }}
                className="meditationQuestion-list"
                >
                    <p className="hypnobirthContent-text">
                    ５日間を通してお産当日に心と身体を深いリラックスへ導けるようになるための実践的なテクニックを
                    お伝えして練習を繰り返していきます。そうして身体・意識・感情・心の準備をしていくのがこの5日間のプログラムです。
                    </p>
                </Col>
                <Col
                sm={12}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                xl={{ span: 6, offset: 3 }}
                className="subscriptionContent-wrapper"
                >
                    <HypnobirthContent
                        title="心地いいお産への心の土台作り"
                        bullets={contentBullet1}
                        index={0}
                        key={0}
                    />
                </Col>
                <Col
                sm={12}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                xl={{ span: 6, offset: 3 }}
                className="subscriptionContent-wrapper"
                >
                    <HypnobirthContent
                        title="赤ちゃんと恋に落ちよう"
                        bullets={contentBullet2}
                        index={1}
                        key={1}
                    />
                </Col>
                <Col
                sm={12}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                xl={{ span: 6, offset: 3 }}
                className="subscriptionContent-wrapper"
                >
                    <HypnobirthContent
                        title="赤ちゃんと共により深いリラクゼーションへ"
                        bullets={contentBullet3}
                        index={2}
                        key={2}
                    />
                </Col>
                <Col
                sm={12}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                xl={{ span: 6, offset: 3 }}
                className="subscriptionContent-wrapper"
                >
                    <HypnobirthContent
                        title="お産の流れを知ろう"
                        bullets={contentBullet4}
                        index={3}
                        key={3}
                    />
                </Col>
                <Col
                sm={12}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 8, offset: 2 }}
                xl={{ span: 6, offset: 3 }}
                className="subscriptionContent-wrapper"
                >
                    <HypnobirthContent
                        title="赤ちゃんの誕生と絆を深めるとき"
                        bullets={contentBullet5}
                        index={4}
                        key={4}
                    />
                </Col>            
            </Row>

            <Row className="section-hypnobirthDetails">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="subscriptionContents-title-wrapper"
                >
                    <div className="subscriptionContents-title-line"></div>
                    <p className="subscriptionContents-title">開催日時</p>
                    <div className="subscriptionContents-title-line"></div>
                </Col>
                <Col
                sm={{ span: 8, offset: 2 }}
                md={{ span: 6, offset: 3 }}
                lg={{ span: 6, offset: 3 }}
                xl={{ span: 6, offset: 3 }}
                >
                    <div className="hypnobirthDetails-item">
                        <p className="hypnobirthDetails-title">5月日曜日クラス</p>
                        <div className="hypnobirthDetails-date">
                            <span className="hypnobirthDetails-date-left">DAY 1</span>
                            <span className="hypnobirthDetails-date-right">5/21(日)  9：00〜12：30</span>
                        </div>
                        <div className="hypnobirthDetails-date">
                            <span className="hypnobirthDetails-date-left">DAY 2</span>
                            <span className="hypnobirthDetails-date-right">5/28(日) 9：00〜11：30</span>
                        </div>
                        <div className="hypnobirthDetails-date">
                            <span className="hypnobirthDetails-date-left">DAY 3</span>
                            <span className="hypnobirthDetails-date-right">6/04(日) 9：00〜11：30</span>
                        </div>
                        <div className="hypnobirthDetails-date">
                            <span className="hypnobirthDetails-date-left">DAY 4</span>
                            <span className="hypnobirthDetails-date-right">6/11(日) 9：00〜11：30</span>
                        </div>
                        <div className="hypnobirthDetails-date">
                            <span className="hypnobirthDetails-date-left">DAY 5</span>
                            <span className="hypnobirthDetails-date-right">6/18(日) 9：00〜11：30</span>
                        </div>
                        <ul className="hypnobirthDetails-notes">
                            <li><b>初回のみ3.5時間</b>となります</li>
                            <li>レッスンは<b>全てオンライン（Zoom）</b>にて開催致します。</li>
                            <li>お申し込み期日：<b>5/15まで</b></li>
                            <li>価格：<b>￥60,500（税込）</b></li>
                        </ul>
                    </div>
                </Col>
            </Row>

            <Row className="section-hypnobirthCta">
                <Col
                sm={12}
                md={12}
                lg={12}
                className="meditationCta-wrapper"
                >
                    <a
                        href="https://checkout.square.site/buy/QERWN36QXRJLYY2Q6LAJURTN"
                        className="btn-subscription large"
                        target="_blank"
                        rel="noreferrer"
                    >
                        お申し込みはこちら
                    </a>
                </Col>
            </Row>
        </Layout>
      );
}

export default Hypnobirthing;