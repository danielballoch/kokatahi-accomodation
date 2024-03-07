import React from "react"
import styled from "@emotion/styled"
import Navbar from "./navbar2"
import Footer from "./footer2"

const Wrapper = styled.div`
overflow: hidden;
`



export default function Layout({children, invert, location}){
  return (
    <Wrapper>
      <Navbar invert={invert} contact={"hello"} location={location}/>
      <main>{children}</main>
      <Footer/>
    </Wrapper>
  )
}

