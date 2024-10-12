import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Schedule from "../components/Schedule";
import Hero from "../components/Hero";
import SEO from "../components/Seo";
import { useStaticQuery, graphql } from "gatsby";
import Archives from "../components/Archives";

const Index = () => {
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

  const data = useStaticQuery(graphql`
    {
      contentfulSchedule {
        title
      }
      contentfulArchives {
        title
      }
    }
  `);

  return (
    <Layout popIn={popIn}>
      <SEO title="Top" />
      <Hero />
      <Schedule title={data.contentfulSchedule.title} />
      <Archives title={data.contentfulArchives.title} />
    </Layout>
  );
};

export default Index;
