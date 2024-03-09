import React, { useRef } from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
// import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { StructuredText } from 'react-datocms';
// import VideoSRC from "../images/kids-motoschool.mp4"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Wrapper = styled.div`
display: grid;
.intro-ani {
    z-index: 100;
    grid-area: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: linear-gradient(to left, rgba(83, 93, 65, 0.5), rgba(100, 112, 78, 1));
    background: linear-gradient(to left, rgba(83, 93, 65, 0), rgba(100, 112, 78, 0));
    // background-color: #535d41;
    color: white;
    width: 100vw;
    padding: 100px 0;
    p {
        div {
            font-family: "PP Woodland",serif;
            background: linear-gradient(to right, #e3e3c4 49%, #434b34 51%);
            background-size: 210% auto;
            background-position: -95% center;
            background-clip: text;
            color: transparent;
            text-align: center;
            max-width: 720px;
            font-size: 80px;
            transition: .8s;
        }
       
    }
}

.active {
    background-position: -190% center;
}
.background {
    grid-area: 1/1;
    background-size: cover;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1536' height='970' preserveAspectRatio='none' viewBox='0 0 1536 960'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1023%26quot%3b)' fill='none'%3e%3crect width='1536' height='960' x='0' y='0' fill='rgba(83%2c 93%2c 65%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c552.291C101.296%2c570.121%2c190.716%2c486.994%2c276.746%2c430.625C362.077%2c374.714%2c454.523%2c319.725%2c496.704%2c226.837C538.85%2c134.024%2c523.15%2c27.706%2c505.281%2c-72.649C487.899%2c-170.268%2c470.162%2c-277.506%2c395.32%2c-342.546C322.592%2c-405.749%2c215.972%2c-403.384%2c119.716%2c-407.716C41.24%2c-411.248%2c-29.935%2c-379.224%2c-107.222%2c-365.165C-195.911%2c-349.032%2c-294.526%2c-371.035%2c-368.119%2c-318.977C-447.789%2c-262.62%2c-509.069%2c-171.662%2c-518.132%2c-74.496C-527.089%2c21.535%2c-471.553%2c111.246%2c-415.575%2c189.787C-366.581%2c258.528%2c-284.11%2c287.611%2c-220.497%2c343.101C-142.57%2c411.076%2c-101.842%2c534.365%2c0%2c552.291' fill='%23424a34'%3e%3c/path%3e%3cpath d='M1536 1290.741C1601.528 1281.548 1667.751 1286.251 1727.785 1258.423 1794.083 1227.691 1869.245 1192.367 1895.414 1124.1390000000001 1921.4479999999999 1056.263 1862.753 986.048 1860.1190000000001 913.399 1857.024 828.048 1921.308 737.0699999999999 1878.694 663.054 1836.547 589.85 1738.82 561.8530000000001 1654.532 556.317 1577.155 551.235 1514.223 610.671 1440.355 634.262 1368.82 657.107 1282.952 642.044 1227.509 692.691 1170.593 744.684 1163.667 828.96 1145.27 903.822 1124.926 986.605 1083.612 1073.039 1114.5149999999999 1152.4859999999999 1145.717 1232.7 1224.426 1290.738 1306.208 1317.564 1380.999 1342.097 1458.051 1301.676 1536 1290.741' fill='%2364704e'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1023'%3e%3crect width='1536' height='960' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}
@media(max-width: 740px){
    .text {
        font-size: 40px!important;
    }
}
`

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Intro(){
    const textbox = useRef();
    useGSAP(
        () => {
          let boxes = gsap.utils.toArray('.text');
          console.log(boxes)
          boxes.forEach((box) => {
            gsap.to(box, {
                backgroundPositionX: "-190%",
              scrollTrigger: {
                trigger: box,
                start: 'top 70%',
                end: 'bottom 70%',
                scrub: true,
              },
            });
          });
          gsap.to(".intro-ani", {
            // background: "linear-gradient(to left, rgba(83, 93, 65, 0), rgba(100, 112, 78, 0))",
            background: "linear-gradient(to left, rgba(83, 93, 65, 0.5), rgba(100, 112, 78, 1))",
            scrollTrigger: {
                  trigger: ".intro-ani",
                  start: 'top center',
                  end: 'center 50%',
                  scrub: true,
            }
          });
        },
        { scope: textbox }
    );
    return(
        <Wrapper ref={textbox}>
            <div className="intro-ani">
                <p>       
                <div className="text">We’re a 10 minute</div>
                <div className="text">drive from Hokitika</div>
                <div className="text">and offer a peaceful,</div>
                <div className="text">family friendly space</div>
                <div className="text">to cook, have a game</div>
                <div className="text">of pool/table tennis,</div>
                <div className="text">or just relax before</div>
                <div className="text">the next outing.</div>
                </p>
            </div>
            <div className="background"/>
        </Wrapper>
    )
}