import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

const Wrapper = styled.div`
width: 100%;
padding-top: 100px;
color: white;
// background-color: white;
.intro {
  max-width: 800px;
  width: 90vw;
  margin: auto;
  text-align: center;
  margin-bottom: 100px;
  h1 {
    font-size: 50px;
    margin-bottom: 0;
  }
  .mini-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    a {
      color: white;
      background-color: black;
      padding: 20px 10px;
      margin: 5px;
      text-decoration: none;
      transition: .3s;
      border-bottom: solid 2px rgba(0,0,0,0);
    }
  }
}
#section1, #section2, #section3, #section4 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 760px;
  // max-width: 1280px;
  // margin: 100px auto;
  // border: solid 1px rgba(14, 30, 37, 0.12);
  // box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,rgba(0, 0, 0, 0.07) 0px 2px 4px,rgba(0, 0, 0, 0.07) 0px 4px 8px,rgba(0, 0, 0, 0.07) 0px 8px 16px,rgba(0, 0, 0, 0.07) 0px 16px 32px,rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
#section2, #section4 {
  flex-direction: row-reverse;
}
.main-image {
  // height: 600px;
  height: 100%;
  object-fit: cover;
  width: 50%;
// width: 50%;
// height: 100%;
}
.main-content {
  box-sizing: border-box;
  background-color: white;
  color: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text-section { 
    overflow-wrap: break-word;
    max-width: 500px;
    width: 100%;
  }
  h2 {
    font-size: 36px;
  }
  .sub {
    font-size: 18px;
    font-style: italic;
  }
  padding: 40px;
  width: 50%;
}
@media(max-width: 1040px){
  #section1, #section2, #section3, #section4 {
    flex-direction: column-reverse!important;
    .main-image {
      width: 100%;
      height: 100%;
    }
    .main-content{
      width: 100%;
    }
  }
}
`

export default function AboutHokitika(){
  const data = useStaticQuery(graphql`
  query AboutQuery {
    datoCmsAboutHokitikaPage {
      heading
      headingSubtext
      section1Title
      section1Content
      section1Image {
        gatsbyImageData
        alt
      }
      section2Title
      section2Content
      section2Image {
        gatsbyImageData
        alt
      }
      section3Title
      section3Content
      section3Image {
        gatsbyImageData
        alt
      }
      section4Title
      section4Content
      section4Image {
        gatsbyImageData
        alt
      }
    }
  }     
 `)
let content = data.datoCmsAboutHokitikaPage
console.log(content.section4Image)
  return(
    <Layout location={"/about-hokitika"}>
        <Wrapper>
          <div className="intro"> 
            <h1>{content.heading}</h1>
            <p className="mini-nav">
              <a href="#section1">{content.section1Title}</a>
              <a href="#section2">{content.section2Title}</a>
              <a href="#section3">{content.section3Title}</a>
              <a href="#section4">{content.section4Title}</a>
              </p>
            <p>{content.headingSubtext}</p>
          </div>
          <div id="section1">
            <div className="main-content">
              <div className="text-section">
                <h2>{content.section1Title}</h2>
                {/* <p className="sub">{content.section1Subheading}</p> */}
                {content.section1Content.split("\n").map((i,key) => {
                    return <p key={key}>{i}</p>;
                })}
              </div>
            </div>
            <GatsbyImage className="main-image" image={getImage(content.section1Image.gatsbyImageData)} alt={content.section1Image.alt} placeholder="blur"/>
          </div>
          <div id="section2">
            <div className="main-content">
              <div className="text-section">
              <h2>{content.section2Title}</h2>
              {/* <p className="sub">{content.section2Subheading}</p> */}
              {content.section2Content.split("\n").map((i,key) => {
                  return <p key={key}>{i}</p>;
              })}
              </div>
            </div>
            <GatsbyImage className="main-image" image={getImage(content.section2Image.gatsbyImageData)} alt={content.section2Image.alt} placeholder="blur"/>
          </div>
          <div id="section3">
            <div className="main-content">
             <div className="text-section">
              <h2>{content.section3Title}</h2>
              {/* <p className="sub">{content.section3Subheading}</p> */}
              {content.section3Content.split("\n").map((i,key) => {
                  return <p key={key}>{i}</p>;
              })}
              </div>
            </div>
            <GatsbyImage className="main-image" image={getImage(content.section3Image.gatsbyImageData)} alt={content.section3Image.alt} placeholder="blur"/>
          </div>
          <div id="section4">
            <div className="main-content">
             <div className="text-section">
              <h2>{content.section4Title}</h2>
              {/* <p className="sub">{content.section3Subheading}</p> */}
              {content.section4Content.split("\n").map((i,key) => {
                  return <p key={key}>{i}</p>;
              })}
              </div>
            </div>
            {content.section4Image.map((image, i)=>(
              <GatsbyImage className="main-image" image={getImage(image.gatsbyImageData)} alt={image.alt} placeholder="blur"/>
            ))}
            
          </div>
        </Wrapper>
    </Layout>
  )
}

export const Head = () => <SEO
title="About Hokitika | Kokatahi Accommodation"
description="Read a little bit about the history of Hokitika including original Māori natives, the West Coast Gold Rush and historic buildings."
/>