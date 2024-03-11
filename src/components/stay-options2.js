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
padding: 40px 0 30px 0;
background-color: #535d41;
h2 {
  text-align: center;
  font-size: 40px;
  color: white;
  // padding-top: 60px;
  margin-top: 0px;
  margin-bottom: 20px;
}
.properties {
  display: flex;
  // max-width: 1280px;
  width: 100%;
  justify-content: center;
  // margin: auto;
}
.property-card {
  border-radius: 5px;
  position: relative;
  max-width: 420px;
  width: 100%;
  margin: 20px;
  // min-height: 500px;
  // box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  background-color: white;
  overflow: none;
  color: black!important;
  text-decoration: none;
  overflow: clip;
  h3 {
    font-size: 22px;
    margin-top: 0;
    font-weight: 600;
  }
  p {
    color: #333;
  }
  .view {
    font-weight: 600;
    transform: rotate(-180deg) translateX(-100%);
    transition: .3s;
    font-family: "open sans";
    border-radius: 0 5px 5px 0;
    color: #64704e;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    position: absolute;
    padding: 30px 5px;
    background-color: white;
    bottom: 50%;
    text-align: center;
    right: 0;
  }
  hr {
    color: #efefef;
    margin: 0;
  }
  
  .main-image {
    height: 340px;
    width: 100%;
    transition: .3s;
    // background-color: salmon;
    .gatsby-image-wrapper {
      img {
        width: 101%;
      }
    }
  }
  :hover {
    .view {
      transform: rotate(-180deg) translateX(-1%);
    }
    .main-image {
      opacity: 0.8;
    }
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
    width: 50%;
    text-align: center;
    padding: 10px 0;
    border: solid black 1px;
    margin-top: 20px;
    margin-right: 20px;
    color: black;
    text-decoration: none;
    background-color: white;
    transition: .3s;
    :hover {
      background-color: #f7f7f7;
    }
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
    .main-button {
      width: 100%;
    }
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
      <h2>{c.stayOptionsTitle}</h2>
      <div className="properties">
        {stayOptions ? stayOptions.map((stayOption, i) => (
            <Link to={"/"+stayOption.urlPath} className="property-card">
            <GatsbyImage className="main-image" image={getImage(stayOption.mainImage.gatsbyImageData)} alt={stayOption.mainImage.alt} placeholder="blur"/>
            <div className="property-info">
              <h3>{stayOption.title}</h3>
              <p>{stayOption.featuredPrice}</p>
              <p><span>{stayOption.rooms}</span><span>/</span><span>{stayOption.toilets}</span><span>/</span><span>{stayOption.sleeps}</span></p>
              <div className="view">view option</div>
              {/* <p>View Stay Option</p> */}
              {/* <div className="button-div">
                <Link to={"/"+stayOption.urlPath} className="main-button">Learn More</Link>
                <Link to={"/"+stayOption.urlPath} className="main-button">Book Property</Link>
              </div> */}
            </div>
          </Link>
        )) : <div/>}
      </div>
    </Wrapper>
  )
}

