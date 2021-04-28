module.exports = {
  siteMetadata: {
    title: "yuukonoma",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "ye0oIhribg1ifniL6QxqXpYJVeT1a5BZHP2EHL4Q7To",
        spaceId: "57dkjpum7da6",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-84000178-4",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
