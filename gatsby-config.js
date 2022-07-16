/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "my favorite recipes",
    description: "gluten free, dairy free and soy free recipes that are easy to make",
    author: "pia",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path:`${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ducdfztnqg14`,
        accessToken: process.env.CONTENTFUL_API_KEY
      }
    },
  ],
}
