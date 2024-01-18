import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
width: 100%;
margin-top: 200px;
.intro {
  max-width: 800px;
  margin: auto;
  text-align: center;
  h1 {
    font-size: 50px;
  }
  .mini-nav {
    font-size: 18px;
    a {
      color: black;
      text-decoration: none;
      transition: .3s;
      border-bottom: solid 2px rgba(0,0,0,0);
      :hover {
        border-bottom: solid 2px black;
      }
    }
  }
}
#section1, #section2, #section3 {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: 100px auto;
  border: solid 1px rgba(14, 30, 37, 0.12);
  // box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,rgba(0, 0, 0, 0.07) 0px 2px 4px,rgba(0, 0, 0, 0.07) 0px 4px 8px,rgba(0, 0, 0, 0.07) 0px 8px 16px,rgba(0, 0, 0, 0.07) 0px 16px 32px,rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
#section2 {
  flex-direction: row-reverse;
}
.main-image {
  height: 600px;
  object-fit: cover;
  width: 50%;
// width: 50%;
// height: 100%;
}
.main-content {
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
`

export default function AboutHokitika(){
  const data = useStaticQuery(graphql`
  query AboutQuery {
    datoCmsAboutHokitikaPage {
      heading
      headingSubtext
      section1Title
      section1Subheading
      section1Content
      section1Image {
        gatsbyImageData
        alt
      }
      section2Title
      section2Subheading
      section2Content
      section2Image {
        gatsbyImageData
        alt
      }
      section3Title
      section3Subheading
      section3Content
      section3Image {
        gatsbyImageData
        alt
      }
    }
  }     
 `)
let content = data.datoCmsAboutHokitikaPage
console.log(content)
  return(
    <Layout invert={true}>
        <Wrapper>
          <div className="intro"> 
            <h1>{content.heading}</h1>
            <p className="mini-nav"><a href="#section1">{content.section1Title}</a> - <a href="#section2">{content.section2Title}</a> - <a href="#section3">{content.section3Title}</a></p>
            <p>{content.headingSubtext}</p>
          </div>
          <div id="section1">
            <div className="main-content">
              <h2>{content.section1Title}</h2>
              <p className="sub">{content.section1Subheading}</p>
              {content.section1Content.split("\n").map((i,key) => {
                  return <p key={key}>{i}</p>;
              })}
            </div>
            <GatsbyImage className="main-image" image={getImage(content.section1Image.gatsbyImageData)} alt={content.section1Image.alt} placeholder="blur"/>
          </div>
          <div id="section2">
            <div className="main-content">
              <h2>{content.section2Title}</h2>
              <p className="sub">{content.section2Subheading}</p>
              {content.section2Content.split("\n").map((i,key) => {
                  return <p key={key}>{i}</p>;
              })}
            </div>
            <GatsbyImage className="main-image" image={getImage(content.section2Image.gatsbyImageData)} alt={content.section2Image.alt} placeholder="blur"/>
          </div>
          <div id="section3">
            <div className="main-content">
              <h2>{content.section3Title}</h2>
              <p className="sub">{content.section3Subheading}</p>
              {content.section3Content.split("\n").map((i,key) => {
                  return <p key={key}>{i}</p>;
              })}
            </div>
            <GatsbyImage className="main-image" image={getImage(content.section3Image.gatsbyImageData)} alt={content.section3Image.alt} placeholder="blur"/>
          </div>
        </Wrapper>
    </Layout>
  )
}