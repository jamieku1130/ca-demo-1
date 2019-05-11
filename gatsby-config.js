/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Coding Adventurer`,
    description: `Building creative apps in iOS, Android and Web platform, we are a  creative startup which can help you design and develop your dream app hand by hand and make it in time. Explore our website to know more about us.`,
    excerpt: "Join the mail list below to get the latest activity",
    author: `Vic Huang`,
    createBy: `2019 Mar 6`
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    }
  ]
};
