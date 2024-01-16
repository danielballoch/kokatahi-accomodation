//Working create page

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for blog post
const template = path.resolve(`./src/templates/property-template.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      datoCmsStayOption1 {
        urlPath
        title
        featuredPrice
        rooms
        toilets
        sleeps
        mainImage {
          gatsbyImageData
          alt
        }
      }
      datoCmsStayOption2 {
        urlPath
        title
        featuredPrice
        rooms
        toilets
        sleeps
        mainImage {
          gatsbyImageData
          alt
        }
      }
      datoCmsStayOption3 {
        urlPath
        title
        featuredPrice
        rooms
        toilets
        sleeps
        mainImage {
          gatsbyImageData
          alt
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }
  const properties = [result.data.datoCmsStayOption1, result.data.datoCmsStayOption2, result.data.datoCmsStayOption3]
  console.log(properties)
//   Create blog posts pages
//   But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
//   `context` is available in the template as a prop and as a variable in GraphQL
  if (properties.length > 0) {
    properties.forEach((property, index) => {
            createPage({
                path: property.urlPath,
                component: template,
                context: {
                  id: index,
                },
              })
    })
  }
}