import React from "react"
import styled from "@emotion/styled"
import Navbar from "./navbar"
import Footer from "./footer"

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

