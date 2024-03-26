import React, { useState } from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";

const Wrapper = styled.div`
display: flex;
height: 100vh;
min-height: 720px;
background-color: #eee;
.content-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;  
}
.content {
    width: 550px;
    h2 {
        font-size: 40px;
    }
}
.main-button {
    display: inline-block;
    height: fit-content;
    padding: 18px 80px;
    border-radius: 5px;
    border: solid #535d41 1px;
    margin-top: 40px;
    margin-right: 20px;
    background-color: #535d41;
    color: white;
    text-decoration: none;
    transition: .3s;
    :hover {
        background-color: #3c5139;
    }
  }
  .gatsby-image-wrapper {
    flex-shrink: 0!important;
    width: 100%;
}
.active1 {
    transform: translateX(-100%);
}
.active2 {
    transform: translateX(-200%);
}
.image-wrapper {
    display: flex;
    position: relative;
    // overflow: scroll;
    background-color: grey;
    width: 50%;
    height: 100%;
    overflow: clip;
    .track {
        display: flex;
        transition: .3s;
    }
    img {
        width: 100%;
        height: 100%;
        background-size: cover!important;
    }
    .right {
        transform: rotate(180deg);
    }
    .availible {
        opacity: 1!important;
        :hover {
            cursor: pointer;
            transform: scale(1.2);
        }
    }
    .control-wrapper {
        position: absolute;
        bottom: 5%;
        left: 10%;
        transform: scale(2.5);
        button {
            opacity: 0.5;
            filter: invert(100%);
            border: none;
            background: unset;
            transition: .3s;
            
        }
    }
}
@media(max-width:1240px){
.content {
    max-width: 550px;
    width: 90%;
}
}
@media(max-width: 880px){
    height: auto;
    padding-bottom: 100px;
    flex-direction: column-reverse;
    .image-wrapper, .content-wrapper {
        width: 100%;
    }
    .content-wrapper {
        padding: 50px 0;
        text-align: center;
        h2 {
            font-size: 36px;
        }
        .main-button {
            width: 100%;
            text-align: center;
            box-sizing: border-box;
        }
    }
    .control-wrapper {
        left: unset!important;
        right: 10%!important;
        button {
            padding: 2px;
        }
    }
}
.animate {
    opacity: 0;
}
`

export default function AboutHokitika(){
  const [image, setImage] = useState(0)

  const aboutref = useRef();
    useGSAP(
        () => {
            const careertitles = gsap.utils.toArray(['.animate']);
            careertitles.forEach((box, i) => {
                gsap.to(box, {
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".animate"+i,
                        start: 'top 80%',
                        end: 'bottom 50%',
                    },
                });
                
            })
        
        },
        { scope: aboutref }
    );
  return(
    <Wrapper ref={aboutref}>
        <div className="content-wrapper">
            <div className="content">
                <h2 className="animate animate0">The Beautiful Land of the West Coast</h2>
                <p className="animate animate1">Hokitika has a rich history and beautiful landscape. With views of Mount Cook (the highest mountain in NZ) from the main streets, beautiful walks and reserves, glow worms, Hokitika Beach, and scenic lakes nearby - it’s long been the heart of West Land and a must visit for overseas and local travelers.</p>
                <p className="animate animate2">Hokitika was the center of the West Coast Gold Rush in 1864 and has a number of historical buildings in the city from the Woodstock Hotel (est 1870), Carnegie Building (1908), and Heritage Park among others.</p>
                <a href="/about-hokitika" className="main-button animate animate3">Learn More</a>
            </div>
        </div>
        <div className="image-wrapper">
            <div className={image === 0? "track" : image === 1? "track active1" : "track active2"}>
                <StaticImage src="../../images/HokitikaGorge.jpg" alt="A dinosaur" placeholder="blurred" />
                <StaticImage src="../../images/FoxGlacierBike.jpg" alt="A dinosaur" placeholder="blurred" />
                <StaticImage src="../../images/HokitikaDriftwood.jpg" alt="A dinosaur" placeholder="blurred" />
            </div>
            <div className="control-wrapper" >
                <button className={image > 0 ? "availible" : ""} onClick={() => {if (image > 0){setImage(image-1)}}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>
                </button>
                <button className={image < 2 ? "availible" : ""} onClick={() => {if(image < 2){setImage(image+1)}}}>
                    <svg className="right" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>
                </button>
            </div>
        </div>
    </Wrapper>
  )
}

