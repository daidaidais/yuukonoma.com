import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Schedule from "../components/Schedule";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet";
import SEO from "../components/Seo";
import { useStaticQuery, graphql } from "gatsby";

const Index = () => {
  const [windowBottom, setWindowBottom] = useState(0);
  const [docHeight, setDocHeight] = useState(0);
  const [popIn, setPopIn] = useState(false);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setWindowBottom(window.pageYOffset + window.innerHeight);
      };
      setDocHeight(window.document.body.offsetHeight);
    }
  }, []);

  if (docHeight - windowBottom < 100 && popIn === false) setPopIn(true);
  else if (docHeight - windowBottom >= 100 && popIn === true) setPopIn(false);

  const data = useStaticQuery(graphql`
    {
      contentfulSchedule {
        title
      }
    }
  `);

  return (
    <Layout popIn={popIn}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700&display=swap&subset=japanese"
          rel="stylesheet"
        />
      </Helmet>
      <SEO title="Top" />
      <Hero />
      <Schedule title={data.contentfulSchedule.title} />
    </Layout>
  );
};

export default Index;
