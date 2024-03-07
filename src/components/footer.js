import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from 'gatsby-plugin-image'

const Wrapper = styled.footer`
position: relative;
background-color: black;
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
h2 {
    font-size: 50px;
    margin: 30px auto 10px auto;
    span {
        // color: red;
    }
}
a {
    color: white;
    margin: 10px 0;
    box-sizing: border-box;
    // padding: 10px;
    text-decoration: none;
}
.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 0;
    height: auto;
    margin: 0;
    .nav {
        display: flex;
        flex-direction: row;
        a {
            font-size: 18px;
            margin: 10px 15px;
            
        }
    }
}
.bottom-footer {
    padding-bottom: 10px;
    margin-top: 80px;
    a {
        margin: 15px;
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
            <Link to="/">
            <h2><span>Kokatahi</span> Accomodation</h2>
            {/* <StaticImage alt="coast sweep chimney cleaning - in circle wrapped around chimney cleaner cartoon" placeholder="blurred" className="nav-logo" src="../images/moto-school-logo-invert.png"/> */}
            </Link>
            <div className="nav">
                   <Link to="/">Home</Link>
                   <Link to="/accomodation">Accomodation</Link>
                   <Link to="/about-hokitika">About Hokitika</Link>
                   <Link to="/food-and-attractions">Food & Attractions</Link>
                   <Link to="/support">Support</Link>
            </div>

        </div>
        <div className="bottom-footer">
            <Link to="/">© Kokatahi Accomodation 2023</Link>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </div>
        
    </Wrapper>
  )
}