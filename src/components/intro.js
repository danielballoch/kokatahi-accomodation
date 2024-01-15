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
width: 100%;
.content {
    text-align: center;
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
        padding-top: 60px;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 46px;

    }
    h3 {
      margin-top: 60px;
      margin-bottom: 0;
      font-size: 30px;
    }
    p {
      font-size: 15px;
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
              <Link to="/" className="intro-button">{introData.introButtonText}</Link>
            </div>
        </Wrapper>
    )
}