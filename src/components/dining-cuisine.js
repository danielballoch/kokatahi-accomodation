import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
height: 100vh;
min-height: 960px;
width: 100%;
background-color: white; 
display: flex;
flex-direciton: column;
flex-direction: center;
align-items:center;
h1 {
  margin-top: 0;
}
.center-div {
  max-width: 1200px;
  display: flex;
  // border: solid 1px black;

  margin: auto;
  .content {
    padding: 60px;
    box-sizing: border-box;
    width: 600px;
    h2 {
      margin-top: 0;
      font-size: 60px;
    }
    .main-button {
      display: inline-block;
      height: fit-content;
      padding: 10px 80px;
      border: solid black 1px;
      margin-top: 40px;
      margin-right: 20px;
      color: black;
      text-decoration: none;
    }
  }
  .main-image {
    width: 600px;
    height: 600px;
    background-color: black;
  }
  
}
`

export default function AttractionsOutdoors(){
  const data = useStaticQuery(graphql`
  query DiningOptionsQuery {
      datoCmsHomePage {
          localDiningCuisineTitle
          localDiningCuisineBlurb
      }
      allDatoCmsDiningCusineItem(
        limit: 3
      ) {
        nodes {
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
let diningMain = data.datoCmsHomePage;
let dining = data.allDatoCmsDiningCusineItem.nodes
  return(
    <Wrapper>
      <div className="center-div">
        <div className="content">
          <h2>{diningMain.localDiningCuisineTitle}</h2>
          <p>{diningMain.localDiningCuisineBlurb}</p>
          <div>
            {dining.map((resturant, i)=>(
              <div>
                <p>{resturant.title}</p>
                <hr/>
              </div>
              
            ))}
          </div>
          <a className="main-button">See More Local Favourites</a>
        </div>
        <GatsbyImage className="main-image" image={getImage(dining[0].image.gatsbyImageData)} alt={dining[0].image.alt} placeholder="blur"/>
      </div>
    </Wrapper>
  )
}
