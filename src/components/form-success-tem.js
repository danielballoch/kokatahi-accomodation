import React, { useEffect } from "react"
import styled from "@emotion/styled"
import JSConfetti from 'js-confetti'
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";
import Button from "../components/button"



const Wrapper = styled.div`
display: flex;
padding: 150px 0;
min-height: 100vh;
box-sizing: border-box;
width: 100vw;
justify-content: center;
align-items: center;
overflow: clip;
.main-content {
    overflow: clip;
    min-height: 366px;
    border-radius: 5px;
    background-color: #74815b;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width:700px;
    margin: 10px;
    box-sizing: border-box;
    padding: 70px 0;
    h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 40px;
        font-weight: 400px;
        color: white;
        text-align: center;
    }
    p {
        box-sizing: border-box;
        padding: 20px 40px;
        margin: 10px auto;
        text-align: center;
        color: white;
        font-size: 16px;
    }
}
.animate {
    opacity: 0;
}
@media(max-width: 420px){
    .main-content {
        h1 {
            font-size: 34px;
        }
    }
}
`





gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero({title, message}){
    
const heroref = useRef();

useEffect(()=> {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
},[])

useGSAP(
    () => {
        gsap.to('.animatebg', {
            scale: 1,
            opacity: 1,
            duration: .5,
        });
        const careertitles = gsap.utils.toArray(['.animate']);
        careertitles.forEach((box, i) => {
            gsap.to(box, {
                opacity: 1,
                delay: .2 + i * 0.3,
                duration: 1,
            });
        })
       
    },
    { scope: heroref }
);
  return(
    <Wrapper ref={heroref}>
        <div className="main-content" >
            <h1 className="animate">{title} Form Sent</h1>
            <p className="animate">{message}</p>
            <Button  buttonText={"Back to Homepage"} buttonLink={"/"}/>
        </div>
    </Wrapper>
  )
}

