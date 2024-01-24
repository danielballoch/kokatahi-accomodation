import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
// import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { StructuredText } from 'react-datocms';
// import VideoSRC from "../images/kids-motoschool.mp4"

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #17181C;
color: white;
height: 100vh;
min-height: 860px;
width: 100vw;
.button {
    padding: 15px 100px;
    border: 2px solid white;
    background-color: #17181C;
    background-color: white;
    color: black;
    text-decoration: none;
    display: inline-block;
    transition: .3s;
    border-radius: 3px;
    :hover {
        background-color: #f7f7f7;
    }
}
.content {
    text-align: center;
    width: 100%;
    max-width: 540px;
    .intro-button {
      padding: 20px 100px;
      // background-color: red;
      border: 2px solid white;
      color: white;
      text-decoration: none;
      display: inline-block;
    }
    h2 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 46px;
        // padding: 60px 20px 0 20px;
    }
    h3 {
      margin-top: 60px;
      margin-bottom: 0;
      font-size: 30px;
      padding: 0 20px;
    }
    p {
      font-size: 15px;
      padding: 0 20px;
      margin-bottom: 40px;
    }
  }
`

export default function Intro(){
    const data = useStaticQuery(graphql`
        query HomepageIntroQuery {
            datoCmsHomePage {
                introText {
                    value
                }
                introButtonText
            }
        }
    `)
    let introData = data.datoCmsHomePage;
    return(
        <Wrapper>
            {/* <GatsbyImage className="content-left" image={getImage(c.introImage.gatsbyImageData)} alt={c.introImage.alt} placeholder="blur"/> */}
            {/* <video className="content-left"
              controls
              disablePictureInPicture 
              controlsList="nodownload"
              id="BgVideo"
              title="Phil MX"
              height="100%"
              width="100%"
              loop
              muted
              autoPlay={true}
              playsInline 
              preload="auto"
            >
                <source  src={VideoSRC} disablePictureInPicture  type="video/mp4" />
            </video> */}
            {/* <div className="content-left">Image Placeholder</div> */}
            <div className="content">
              <StructuredText
                  data={introData.introText.value}
                  renderInlineRecord={({ record }) => {
                      switch (record.__typename) {
                      case 'DatoCmsArticle':
                          return <a href={`/articles/${record.slug}`}>{record.title}</a>;
                      default:
                          return null;
                      }
                  }}
              />
              <Link to="/about-hokitika" className="button">{introData.introButtonText}</Link>
            </div>
        </Wrapper>
    )
}