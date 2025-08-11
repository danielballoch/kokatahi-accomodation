import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/property-page-sections/new-hero"
import MainContent from "../components/property-page-sections/main-content"
import BookingSection from "../components/property-page-sections/booking-section"
import SEO from "../components/seo"
import CTA from "../components/home-page-sections/cta"



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
      allDatoCmsBookedStay1 {
          nodes {
            bookedDate
            endDate
        }
      }
      allDatoCmsBookedStay2 {
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
let bookedDatesAll = propertiesData.allDatoCmsBookedDate.nodes
let bookedDates1 = propertiesData.allDatoCmsBookedStay1.nodes
let bookedDates2 = propertiesData.allDatoCmsBookedStay2.nodes
console.log("page id: ", pageContext.id)
console.log("booked dates all: ", bookedDatesAll)
console.log("booked dates 1: ", bookedDates1)
console.log("booked dates 2: ", bookedDates2)
let datesToSend = [];
if (pageContext.id === 0){datesToSend = datesToSend.concat(bookedDatesAll, bookedDates1)}
else if (pageContext.id === 1){datesToSend = datesToSend.concat(bookedDatesAll, bookedDates2)}
else if (pageContext.id === 2){datesToSend = datesToSend.concat(bookedDatesAll, bookedDates1, bookedDates2)}
console.log("properties to send: ", datesToSend);
  return(
    <Layout invert={true}>
        <Hero images={property.gallery} title={property.title} blurb={property.blurb}/>
        <MainContent content={property.mainContent.value} hostData={hostData}/>
        <BookingSection datesUnavailable={datesToSend} property={Number(pageContext.id + 1)} />
        {/* <CTA/> */}
    </Layout>
  )
}


let titletags=[
  "Tui BnB – Kokatahi Holiday Home Near Hokitika | West Coast NZ",
  "Longford – West Coast Accommodation Near Hokitika | Kokatahi BnB",
  "The Full Suite BnB – Group Accommodation Near Hokitika, West Coast NZ"]
let metadescriptions=[
  "Relax in this classic Kiwi stay with 3 queen bedrooms, fireplace, and country views. Perfect West Coast accommodation near Hokitika.",
  "Spacious holiday home with pool table, sunny deck, and 4 bedrooms. Pet-friendly West Coast stay just minutes from Hokitika.",
  "Rent both Kokatahi properties for up to 14 guests. Ideal for groups visiting Hokitika & the West Coast, with fireplaces, decks, and country views."]

export const Head = ({pageContext}) => <SEO
title={titletags[Number(pageContext.id + 1)]}
description={metadescriptions[Number(pageContext.id + 1)]}
/>

