import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage} from "gatsby-plugin-image"

export default function TheFullSuite({pageContext}){
  console.log(pageContext)
  const propertiesData = useStaticQuery(graphql`
  query PropertiesQuery {
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
let properties = [propertiesData.datoCmsStayOption1, propertiesData.datoCmsStayOption2, propertiesData.datoCmsStayOption3]
let property = properties[pageContext.id]
console.log(properties)
  return(
    <Layout>
        <GatsbyImage className="main-image" image={getImage(property.mainImage.gatsbyImageData)} alt={property.mainImage.alt} placeholder="blur"/>
        <h1>{property.title}</h1>
    </Layout>
  )
}

export const Head = () => <title>The Full Suite</title>
