import React, {useState} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from 'gatsby-plugin-image'
import Hamburger from "./hamburger"

const Wrapper = styled.header`
display: flex;
justify-content: center;
// background-color: white;
width: 100vw;
// height: 100px;
.invert {
    background-color: rgba(255,255,255,.1)!important;
    
}
.wrapper {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background-color: rgba(0,0,0,.1);    
    // background-color: #535d41;
    // border-bottom: solid 3px rgba(0,0,0,0.3);
    // padding-top: 40px;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    border-radius: 10px;
    z-index: 500;
    position: absolute;
    // width: 100vw;
    max-width: 1020px;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    align-content: center;
    // height: 60px;
    margin: 20px auto;
    .logo {
        margin-right: auto;
    }
    .nav-logo {
        height: 100px;
        // width:240px;
        img {
            object-fit: contain!important;
        }
        // width: 250px;

        // border-radius: 100px;
    }
    .nav-middle {
        // margin-right: 25px;
    }
    .menu {
        display: none;
        margin: 0 40px 0 0;
        padding: 20px;
        z-index: 600;
    }
    a {
        color: white;
        text-decoration: none;
        font-size: 18px;
    }
    .invert-logo {
        color: black!important;
    }
    .logo {
        z-index: 800;
        color: white;
        font-size: 30px;
        font-weight: 500;
        span {
            // color: red;
        }
        // width: 100px;
        // height: 100px;
        // box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        // border-radius: 50%;
    }
    .contact-us {
        padding: 15px 45px;
        border: 2px solid white;
        border-radius: 1px;
        background-color: white;
        color: #333;
        transition: .3s;
        font-weight: 600;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        :hover {
            /* background-color: white ;
            color: #333; */
            background-color: #663199;
            border: 2px solid #663199;
            color: white;
            cursor: pointer;
        }
    }
    .nav-middle {
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            padding: 15px 25px;
            font-size: 16px;
            font-weight: 400; 
        }
        .arrow {
            padding-left: 5px;
            /* padding:0 5px; */
            transition: .3s;
        }
        // @media(max-width: 1080px) {
        //     display: none;
        // }
    }
    // .invert {
    //     a {
    //         color: black!important;
    //     }
    // }
    .services-dropdown {
        display: none;
        /* display:flex; */
        margin-top: 10px;
        position: absolute;
        flex-direction: column;
        background-color: white;
        width: 250px;
        z-index: 500;
        margin-left: 95px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        a {
            color: #111;
            transition: .3s;
            :hover {
                /* background-color: #f2ece6; */
                background-color: rgb(229, 86, 57);
                color: white!important;
                p {
                    color: white!important;
                }
            }
        }
        p {
            transition: .3s;
            font-size: 14px;
            font-weight: 200;
            color: #333;
        }
    }
    .services:hover {
        .arrow {
            transform: rotate(-180deg);
            padding-right: 5px;
            padding-left: 0;
        }
        .services-dropdown {
            display: flex;
        }
    }
    .side-drawer {
        padding-top: 75px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        right: 0;
        text-align: right;
        top: 0;
        // max-width: 400px;
        width: 100vw;
        height: 100vh;
        background-color: white;
        // z-index: 500;
        a {
            color: black!important;
            font-size: 26px;
            margin: 20px 60px;
        }
        .contact-info {
            a {
                display: flex;
                align-items: center;
                img {
                    margin-right: 10px;
                }
            }
        }
    }
    .hide {
        display:none; 
    }
}
.fixed {
    position: fixed;
}
@media(max-width: 700px) {
    justify-content: flex-end;
    .wrapper {
        margin-right: 35px;
        align-items: center;
        justify-content: center;
        width: 60px;
        padding-top: 0!important;
        .nav-middle {
            display: none!important;
        }
        .nav-logo {
            height: 100px;
            width:120px;
        }
    }
}
`

export default function Navbar({invert, location}) {
    const [menu, updateMenu] = useState(false);
    const [toggle, updateToggle] = useState(false);
    console.log("location", location)
    return (
    <Wrapper id="top">
            <div className={invert? "wrapper invert" : "wrapper"}>
                <div className="nav-middle">
                    <Link to="/">Home</Link>
                    <Link to="/accomodation">Our Stay Options</Link>
                    {/* <Link to="/about-hokitika">About Hokitika</Link> */}
                    <Link to="/food-and-attractions">Food & Attractions</Link>
                    <Link to="/support">Support</Link>
                </div>
                <Hamburger invert={invert} toggle={toggle} clickFunction={() => {updateMenu(!menu); updateToggle(!toggle)}}/>
                <div className={menu ? "side-drawer" : "hide"}>
                    <Link  onClick={() => { if (location === "/"){updateMenu(!menu); updateToggle(!toggle)}}} to="/">Home</Link>
                    <Link  onClick={() => { if (location === "/accomodation"){updateMenu(!menu);} updateToggle(!toggle)}} to="/accomodation">Accomodation</Link>
                    <Link onClick={() => { if (location === "/food-and-attractions"){updateMenu(!menu);} updateToggle(!toggle)}} to="/food-and-attractions">Food & Attractions</Link>
                    <Link onClick={() => { if (location === "/about-hokitika"){updateMenu(!menu);} updateToggle(!toggle)}} to="/about-hokitika">About Hokitika</Link>
                    <Link onClick={() => { if (location === "/support"){updateMenu(!menu); updateToggle(!toggle)}}} to="/support">Support</Link>
                </div>
            </div>
    </Wrapper>
  )
}