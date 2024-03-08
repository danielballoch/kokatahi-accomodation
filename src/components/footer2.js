import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from 'gatsby-plugin-image'

const Wrapper = styled.footer`
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
position: relative;
background-color: #424a34;
box-sizing: border-box;
color: white;
width: 100vw;
max-width: 100vw;
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
align-content: center;
bottom: 0;
margin: auto;
a {
    color: white;
    margin: 10px 0;
    box-sizing: border-box;
    // padding: 10px;
    text-decoration: none;
}
.logo-wrap {
    margin: 10px 60px;
    max-width: 380px;
    h2 {
        font-size: 30px;
        padding: 0;
    }
}
.footer-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding: 40px;
    height: auto;
    margin: 0;
    .nav {
        display: flex;
        flex-direction: column;
        border-left: solid white 2px;
        padding: 0 60px;
        h3 {
            margin: 10px 15px;
        }
        a {
            font-size: 18px;
            margin: 5px 15px;
            
        }
    }
}
.bottom-footer {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #424a34;
    width: 100%;
    // margin-top: 80px;
    a {
        margin: 10px 15px;
    }
}
@media(max-width: 700px){
    h2 {
        text-align: center;
    }
    .nav {
        flex-direction: column !important;
        align-items: center;
        margin-bottom: 50px;
    }
}
@media(max-width: 460px){
    .bottom-footer {
        display: flex;
        text-align: center;
        flex-direction: column;
        box-sizing: border-box;
    }
}
`

export default function Footer() {
  return (
    <Wrapper>
        <div className="footer-content">
            <div className="logo-wrap">
                <Link to="/"><h2><span>Kokatahi</span> Accomodation</h2></Link>
                <p>The Perfect spot for your Hokitika exploration, family holiday, or outdoors escape. <Link to="/accomodation#top">Book a stay at one of our properties today!</Link></p>
            </div>
            <div className="nav">
                    <h3>Navigate</h3>
                   <Link to="/accomodation#top">Accomodation</Link>
                   <Link to="/food-and-attractions">Food & Attractions</Link>
                   <Link to="/about-hokitika">About Hokitika</Link>
                   <Link to="/">Homepage</Link>
            </div>
            <div className="nav">
            <h3>Get Help</h3>
                <Link to="/terms-and-conditions#top">Terms and Conditions</Link>
                <Link to="/support">Support</Link>
            </div>
        </div>
        <div className="bottom-footer">
            <Link to="/">© Kokatahi Accomodation 2024</Link>
            <Link to="/terms-and-conditions">Website by thoughtfulHQ</Link>
        </div>
        
    </Wrapper>
  )
}