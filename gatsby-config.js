require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "乃万 由芙子 | Yuuko Noma",
    description:
      "ヨガ講師・瞑想家　乃万由芙子（Yuuko Noma) のウェブサイト。自分の身体や心を正しく活かすことでより生き易く、より人と穏やかに繋がる為のヨーガや日常を伝えている。",
    author: `Daisuke Yukita`,
    image: `/images/ogp.png`,
    siteUrl: `https://yuukonoma.com`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "bootstrap",
    "react",
    "react-bootstrap",
    "react-dom",
    "react-helmet",
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: "57dkjpum7da6",
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_ID],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `乃万 由芙子 | Yuuko Noma`,
        short_name: `Yuuko Noma`,
        start_url: `/`,
        background_color: `#ffaa7b`,
        theme_color: `#ffaa7b`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Serif JP`,
        ],
        display: 'swap'
      }
    }
  ],
};
