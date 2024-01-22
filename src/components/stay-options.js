import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"

const Wrapper = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// background-color: lightgrey;
h1 {
  text-align: center;
  padding-top: 60px;
  // margin-top: 0;
}
.properties {
  display: flex;
  max-width: 1280px;
  width: 100%;
  justify-content: space-around;
  // margin: auto;
}
.property-card {
  max-width: 410px;
  width: 100%;
  margin: 20px;
  min-height: 500px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  background-color: white;
  .main-image {
    height: 260px;
    width: 100%;
    // background-color: salmon;
  }
  .property-info {
    padding: 20px;
    span {
      margin-right: 20px;
    }
  }
  .button-div {
    display: flex;
  }
  .main-button {
    display: inline-block;
    height: fit-content;
    padding: 10px 20px;
    border: solid black 1px;
    margin-top: 20px;
    margin-right: 20px;
    color: black;
    text-decoration: none;
  }
}
@media(max-width: 1190px){
  .properties {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
  }
}
@media(max-width: 387px){
  .button-div {
    flex-direction: column;
  }
  .property-card {

  }
}
`

export default function StayOptions(){
  const stayOptionData = useStaticQuery(graphql`
  query HomepageStayOptionsQuery {
      datoCmsHomePage {
          stayOptionsTitle
      }
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
let c = stayOptionData.datoCmsHomePage;
let stayOptions = []
console.log("stay options data: ", stayOptionData)
if(stayOptionData.datoCmsStayOption1){
  stayOptions = [stayOptionData.datoCmsStayOption1, stayOptionData.datoCmsStayOption2, stayOptionData.datoCmsStayOption3]
}
// let stayOptions = [data.datoCmsStayOption1, data.datoCmsStayOption2, data.datoCmsStayOption3]
console.log("stay options:", stayOptions)
  return(
    <Wrapper>
      <h1>{c.stayOptionsTitle}</h1>
      <div className="properties">
        {stayOptions ? stayOptions.map((stayOption, i) => (
            <div className="property-card">
            <GatsbyImage className="main-image" image={getImage(stayOption.mainImage.gatsbyImageData)} alt={stayOption.mainImage.alt} placeholder="blur"/>
            <div className="property-info">
              <h3>{stayOption.title}</h3>
              <p>{stayOption.featuredPrice}</p>
              <p><span>{stayOption.rooms}</span><span>{stayOption.toilets}</span><span>{stayOption.sleeps}</span></p>
              <div className="button-div">
                <Link to={"/"+stayOption.urlPath} className="main-button">Book Property</Link>
                <Link to={"/"+stayOption.urlPath} className="main-button">Learn More</Link>
              </div>
            </div>
          </div>
        )) : <div/>}
      </div>
    </Wrapper>
  )
}

