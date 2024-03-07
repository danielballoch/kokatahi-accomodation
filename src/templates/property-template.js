import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/property-page-sections/new-hero"
import MainContent from "../components/property-page-sections/main-content"
import BookingSection from "../components/property-page-sections/booking-section"
import SEO from "../components/seo"



export default function TheFullSuite({pageContext}){
  console.log(pageContext)
  const propertiesData = useStaticQuery(graphql`
  query PropertiesQuery {
      datoCmsHostsSection {
        image {
          gatsbyImageData
          alt
        }
        content {
          value
        }
      }
      allDatoCmsBookedDate {
        nodes {
          bookedDate
          endDate
        }
      }
      datoCmsStayOption1 {
        title
        blurb
        featuredPrice
        rooms
        toilets
        sleeps
        mainContent {
          value
        }
        gallery {
          gatsbyImageData
          alt
        }
      }
      datoCmsStayOption2 {
        title
        blurb
        featuredPrice
        rooms
        toilets
        sleeps
        mainContent {
          value
        }
        gallery {
          gatsbyImageData
          alt
        }
      }
      datoCmsStayOption3 {
        title
        blurb
        featuredPrice
        rooms
        toilets
        sleeps
        mainContent {
          value
        }
        gallery {
          gatsbyImageData
          alt
        }
      }
  }
`)
let properties = [propertiesData.datoCmsStayOption1, propertiesData.datoCmsStayOption2, propertiesData.datoCmsStayOption3]
let property = properties[pageContext.id]
let hostData = propertiesData.datoCmsHostsSection
let bookedDates = propertiesData.allDatoCmsBookedDate.nodes
console.log(properties)
  return(
    <Layout>
        <Hero images={property.gallery} title={property.title} blurb={property.blurb}/>
        <MainContent content={property.mainContent.value} hostData={hostData}/>
        <BookingSection datesUnavailable={bookedDates}/>
    </Layout>
  )
}

export const Head = ({pageContext}) => <SEO
title={"Stay Option " + Number(pageContext.id + 1)  + " | Kokatahi Accommodation"}
description={"Stay Option " + Number(pageContext.id + 1)  + " could be perfect for your West Coast or Hokitika trip."}
/>

