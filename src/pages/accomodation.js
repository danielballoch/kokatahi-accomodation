import React from "react"
import Layout from "../components/layout"
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
`

export default function Accomodation(){
  return(
    <Layout invert={true}>
        <Wrapper>
            <h2>Accomodation</h2>
        </Wrapper>
    </Layout>
  )
}