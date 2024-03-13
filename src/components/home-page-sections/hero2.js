import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import ScrollAnimation from "./scrollAnimation"

const Wrapper = styled.div`
display: grid;
justify-content: center;
align-items: center;
background-color: #424a34;
height: 100vh;
width: 100%;
box-sizing: border-box;
overflow: hidden;
// padding-top: 100px;
.background-image {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    filter: brightness(30%);
    border-radius: 10px;
    height: 80vh;
    grid-area: 1/1;
    width: 90vw;
    margin: 50px auto 0 auto;
    padding: 0;
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
    padding-bottom: 100px;
}
.main-content {
    transform: scale(1.4);
    width:700px;
    // height: 300px;
    h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 40px;
        font-weight: 400px;
        color: white;
        text-align: center;
    }
    p {
        padding: 10px;
        margin: auto;
        max-width: 400px;
        text-align: center;
        color: white;
        font-size: 18px;
    }
}
@media(max-width: 710px){
    .content-wrapper {
        width: 90vw;
    }
    .main-content {
        transform: scale(1);
        width: 90vw;
        padding: 0px;
        box-sizing: border-box;
        h1 {
            font-size: 42px;
            text-align: center
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
                    <h1>
                        Kokatahi Accomodation
                        {/* {c.heroTitle} */}
                        </h1>
                    <p>The Perfect spot for your Hokitika exploration, family holiday, or outdoors escape. </p>
                    <ScrollAnimation/>
                </div>
            </div>
        </Wrapper>
  )
}

