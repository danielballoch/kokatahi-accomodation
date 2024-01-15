import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import FoodAttractionsFull from "../components/food-attraction-full"

const FoodAttractionsIntro = styled.div`
padding-top: 200px;
padding-bottom: 50px;
padding-right: 400px;
margin:auto;
max-width: 800px;
h1 {
  font-weight: 300;
}
h1, p {
  padding-left: 60px;
}
p {
  padding-right: 200px;
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
    <Layout invert={true}>
        <FoodAttractionsIntro>
          <h1>Hokitika: The Beautiful Land of the West Coast</h1>
          <p>There’s a variety of activities and attractions to keep you busy in the West Coast. Everything from great bars, cafes, and restaurants to historic sites, trails, lakes, hunting and fishing spots etc.</p>
        </FoodAttractionsIntro>
        <FoodAttractionsFull attractions={dining} title={data.datoCmsHomePage.localDiningCuisineTitle}/>
        <FoodAttractionsFull attractions={attractions} title={data.datoCmsHomePage.attractionsOutdoorsTitle}/>
    </Layout>
  )
}