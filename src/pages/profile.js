import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import SEO from "../components/Seo";
import { Helmet } from "react-helmet";
import Favourites from "../components/Favourites";
import ProfileList from "../components/ProfileList";
import { useStaticQuery, graphql } from "gatsby";

const Profile = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProfile {
        nodes {
          profile {
            raw
          }
          events {
            year
            explanation
          }
          media {
            explanation
            year
          }
          favourites {
            explanation {
              raw
            }
            title
            image {
              gatsbyImageData
              file {
                fileName
              }
            }
            link
            buttonText
          }
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
      };
      setDocHeight(window.document.body.offsetHeight);
    }
  }, []);

  const [favouritesHeight, setFavouritesHeight] = useState([]);
  const handleFavouritesHeight = (index, height) => {
    favouritesHeight[index] = height;
  };

  const [showFavourites, setShowFavourites] = useState([]);
  let heightFromTop = 0;
  for (let i = 0; i < favouritesHeight.length; i++) {
    heightFromTop += favouritesHeight[i];
    if (windowBottom + 500 > heightFromTop) showFavourites[i] = true;
    else showFavourites[i] = false;
  }

  console.log(showFavourites);

  if (docHeight - windowBottom < 100 && popIn === false) setPopIn(true);
  else if (docHeight - windowBottom >= 100 && popIn === true) setPopIn(false);

  return (
    <Layout popIn={popIn}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700&display=swap&subset=japanese"
          rel="stylesheet"
        />
      </Helmet>
      <SEO title="Profile" />
      {data.allContentfulProfile.nodes[0].favourites.map(
        ({ title, explanation, buttonText, link, image }, index) => (
          <Favourites
            title={title}
            explanation={explanation}
            link={link}
            buttonText={buttonText}
            image={image}
            index={index}
            key={index}
            windowBottom={windowBottom}
            setHeight={handleFavouritesHeight}
            showFavourites={showFavourites}
          />
        )
      )}
      <p className="credits-profile">
        Photo by{" "}
        <a
          href="https://tintedphotography.com/"
          target="_blank"
          rel="noreferrer"
        >
          Tinted Photography
        </a>
      </p>
      <ProfileList
        profile={data.allContentfulProfile.nodes[0].profile}
        events={data.allContentfulProfile.nodes[0].events}
        media={data.allContentfulProfile.nodes[0].media}
      />
    </Layout>
  );
};

export default Profile;
