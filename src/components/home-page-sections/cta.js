import React, { useState } from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import image1 from "../../images/HokitikaGorge.jpg"
import Button from "../button"

const Wrapper = styled.div`
display: flex;
flex-direction: row;
background-color: #64704e;
height: 300px;
justify-content: center;
align-items: center;
h2 {
    color: white;
    font-size: 30px;
}
`

export default function CTA(){
  return(
    <Wrapper>
        <h2>Get Your West Coast Trip Sorted!</h2>
        {/* <a href="/about-hokitika" className="main-button">View All Stay Options</a> */}
        <Button buttonText={"View All Stay Options"} buttonLink={"/accomodation#top"}/>
    </Wrapper>
  )
}

