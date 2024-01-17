import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import ScrollAnimation from "./scrollAnimation"

const Wrapper = styled.div`
display: grid;
justify-content: center;
align-items: center;
background-color: grey;
height: 100vh;
width: 100%;
box-sizing: border-box;
overflow: hidden;
// padding-top: 100px;
::before {
    z-index: 100;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8); /* Change the color and opacity as needed */
}
.background-image {
    grid-area: 1/1;
    width: 100vw;
    margin: 0;
    padding: 0;
    height: 100vh;
    object-fit: cover;
}

.content-wrapper {
    z-index: 200;
    grid-area: 1/1;
    position: relative;
    place-items: center;
    display: grid;
    width: 100vw;
    max-height: 100vh;
}
.main-content {
    width: 700px;
    height: 300px;
    h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 52px;
        font-weight: 400px;
        color: white;
        text-align: center;
    }
}
@media(max-width: 1000px){
    .main-content {
        padding-right: 0; 
    }
}
@media(max-width: 640px){
    .main-content {
        width: 95%;
        padding: 40px;
        box-sizing: border-box;
        h1 {
            font-size: 42px;
            text-align: center
        }
        p {
            text-align: center;
        }
        button {
            width: 100%;
        }
    }
}
@media(max-width: 387px){
    .main-content {
        h1 {
            font-size: 37px;
        }
    }
`

export default function Hero(){
    const data = useStaticQuery(graphql`
    query HomeHeroQuery {
        datoCmsHomePage {
            heroTitle
            heroBackground {
              gatsbyImageData
            }
          }
    }
`)
let c = data.datoCmsHomePage;
console.log("hello: ", data)
  return(
    <Wrapper>
            <GatsbyImage className="background-image" image={getImage(c.heroBackground.gatsbyImageData)} alt={c.heroBackground.alt} placeholder="blur"/>
            {/* <video className="background-image"
              disablePictureInPicture 
              controlsList="nodownload"
              id="BgVideo"
              title="Phil MX"
              height="100vh"
              width="100%"
              loop
              muted
              autoPlay={true}
              playsInline 
              preload="auto"
            >
                <source src={VideoSRC} disablePictureInPicture  type="video/mp4" />
            </video> */}
            <div className="content-wrapper">
                <div className="main-content">
                    <h1>{c.heroTitle}</h1>
                    <ScrollAnimation/>
                </div>
            </div>
        </Wrapper>
  )
}

