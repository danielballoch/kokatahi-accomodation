import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import StayOptions from "../components/stay-options"
import SEO from "../components/seo"


const Wrapper = styled.div`
margin-top: 100px;
`

export default function Accomodation(){
  return(
    <Layout invert={true}>
        <Wrapper>
            <StayOptions/>
        </Wrapper>
    </Layout>
  )
}

export const Head = () => <SEO
title="All Stay Options | Kokatahi Accommodation"
description="View all of our Kokatahi Accomodation stay options. Ranging from 3-7 rooms and starting at $145 per night."
/>