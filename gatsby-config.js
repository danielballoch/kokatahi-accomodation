require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `kokatahi-accomodation`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Open Sans`,
          file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
        },
        {
          name: `Oswald`,
          file: `https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap`,
        },
        {
          name: `Roboto`,
          file: `https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap`,
        },
        {
          name: `Montserrat`,
          file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap`,
        },
      ],
    },
  },{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "e4281f042174f4fb66c0bbb2961eb9"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-emotion", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        "G-3D2W4JD41F", // Google Analytics / GA
        "AW-CONVERSION_ID", // Google Ads / Adwords / AW
        "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
      ],
      gtagConfig: {
        optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      pluginConfig: {
        head: false,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        origin: "YOUR_SELF_HOSTED_ORIGIN",
        delayOnRouteUpdate: 0,
      },
    },
  },

]
};