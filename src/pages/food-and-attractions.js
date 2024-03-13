import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import FoodAttractionsFull from "../components/food-attraction-full"
import SEO from "../components/seo"
import CTA from "../components/home-page-sections/cta"

const FoodAttractionsIntro = styled.div`
// background-color: #535d41;
color: white;
display: flex;
justify-content: center;
// border-bottom: 20px solid #5d6849;
// padding-top: 100px;
// padding-bottom: 50px;
// padding-right: 400px;
// margin: 100px auto 0;
div {
  margin: 180px auto 50px auto;
  max-width: 800px;
  width: 90vw;
}
h1 {
  margin: 0;
  font-size: 40px;
  font-weight: 700;
}
h1, p {
  text-align: center;
}
p {
  font-size: 16px;
  padding-right: 50px;
}
.nav-menu {
  display: none;
}
@media(max-width:1220px){
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding-right: 0;
// margin-left: 5vw;
h1, p {
  padding-left: 0;
  margin: auto;
  width: 100%;
}
p {
  padding-right: 0;
}
.nav-menu {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  a {
    color: white;
    padding: 20px 10px;
    background-color: black;
    text-decoration: none;
    margin: 0 10px 10px 0;
  }
}
}
`


export default function AttractionsOutdoors(){
  const data = useStaticQuery(graphql`
  query AllFoodAttractionsOptionsQuery {
      datoCmsHomePage {
          attractionsOutdoorsTitle
          localDiningCuisineTitle
      }
      allDatoCmsAttractionOutdoorItem(
        sort: {position:ASC}
      ) {
        nodes {
          position
          title
          blurb
          image {
            gatsbyImageData
            alt
          }
          
        }
      }
      allDatoCmsDiningCusineItem(
        sort: {position:ASC}
      ) {
        nodes {
          position
          title
          blurb
          image {
            gatsbyImageData
            alt
          }
          
        }
      }
    }
`)
let attractions = data.allDatoCmsAttractionOutdoorItem.nodes
let dining = data.allDatoCmsDiningCusineItem.nodes
  return(
    <Layout>
        <FoodAttractionsIntro>
          <div>
            <h1>Best of the West: Food & Activities</h1>
            {/* <p>There’s a variety of activities and attractions to keep you busy in the West Coast. Everything from great bars, cafes, and restaurants to historic sites, trails, lakes, hunting and fishing spots etc. Check out some of our favourites below.</p> */}
          </div>
          <div className="nav-menu">
              <a href={"#dining-and-cuisine"}>Dining & Cuisine</a>
              <a href={"#attractions-and-outdoors"}>Attractions & Outdoors</a>
            </div>
        </FoodAttractionsIntro>
        <FoodAttractionsFull id="dining-and-cuisine" attractions={dining} title={data.datoCmsHomePage.localDiningCuisineTitle}/>
        <FoodAttractionsFull id="attractions-and-outdoors" attractions={attractions} title={data.datoCmsHomePage.attractionsOutdoorsTitle}/>
        <CTA/>
    </Layout>
  )
}

export const Head = () => <SEO
title="Hokitika Food and Attractions | Kokatahi Accommodation"
description="Check out our reccomended resturants, cafes, attractions and activities in Hokitika and around the West Coast."
/>