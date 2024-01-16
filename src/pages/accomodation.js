import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import StayOptions from "../components/stay-options"


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