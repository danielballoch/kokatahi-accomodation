import React, { useRef } from "react"
import styled from "@emotion/styled"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from "../button"


const Wrapper = styled.div`
display: grid;
height: 300px;
.content {
  z-index: 100;
  grid-area: 1/1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(83, 93, 65, 0.5), rgba(100, 112, 78, 1));
  h2 {
      color: white;
      font-size: 30px;
  }
}
.background {
  grid-area: 1/1;
  svg {
    width: 100%;
  }
}
@media(max-width: 900px){
    box-sizing: border-box;
    height: fit-content;
    height: 500px;
  .content {
    height: 100%;
    text-align: center;
    flex-direction: column;
    h2 {
      margin: 0 10px;
    }
    button {
      margin: 40px 10px;
      height: 84px;
      padding: 18px 40px;
    }
  }
  .background {
    height: 100%;
    svg {
      height: 100%;
    }
  }
}
`

export default function CTA(){
  const cta = useRef();
  useGSAP(
    () => {
        let b1 = "linear-gradient(rgba(83, 93, 65, 0.5), rgba(100, 112, 78, 1))"
        let b2 = "linear-gradient(rgba(83, 93, 65, 0), rgba(100, 112, 78, 0))"
        gsap.to(".ani-content", {
          background: "linear-gradient(rgba(83, 93, 65, 0), rgba(100, 112, 78, 0))",
          scrollTrigger: {
                trigger: ".ani-content",
                start: 'top center',
                end: 'bottom 50%',
                scrub: true,
          }
        });
      }
  )
  return(
    <Wrapper ref={cta}>
        <div className="content ani-content">
          <h2>Get Your West Coast Trip Sorted!</h2>
          <Button buttonText={"View All Stay Options"} buttonLink={"/accomodation#top"}/>
        </div>
        <div className="background">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" width="1536" height="300" preserveAspectRatio="none" viewBox="0 0 1536 300">
          <g mask="url(&quot;#SvgjsMask1108&quot;)" fill="none">
              <rect width="1536" height="300" x="0" y="0" fill="rgba(100, 112, 78, 1)"></rect>
              <path d="M0,397.593C71.649,380.947,111.571,308.702,168.294,261.871C217.07,221.601,287.144,200.555,310.063,141.601C332.783,83.159,302.092,19.493,286.092,-41.134C271.835,-95.158,247.097,-142.422,221.941,-192.313C188.086,-259.457,183.235,-357.92,112.921,-384.574C43.86,-410.754,-19.988,-330.147,-91.338,-311.069C-165.234,-291.31,-261.287,-327.6,-312.534,-270.813C-363.613,-214.211,-330.67,-123.58,-329.326,-47.35C-328.197,16.709,-321.084,77.332,-305.302,139.427C-286.186,214.639,-286.626,303.685,-227.369,353.793C-167.214,404.661,-76.735,415.42,0,397.593" fill="#505a3e"></path>
              <path d="M1536 742.9359999999999C1623.711 736.514 1713.583 738.746 1790.078 695.3530000000001 1868.923 650.627 1920.208 574.2149999999999 1968.575 497.55 2023.488 410.51 2105.375 322.103 2089.732 220.385 2074.091 118.68 1970.439 57.762 1890.901-7.524000000000001 1822.667-63.531000000000006 1743.134-94.74700000000001 1662.376-130.39600000000002 1568.658-171.76600000000002 1474.168-272.231 1379.405-233.31399999999996 1281.895-193.269 1309.751-35.51400000000001 1239.6480000000001 43.20999999999998 1167.9180000000001 123.75999999999999 1019.374 120.68100000000001 976.167 219.50799999999998 932.895 318.484 973.74 438.318 1025.44 533.165 1075.373 624.771 1160.326 694.749 1256.829 734.399 1344.724 770.512 1441.229 749.875 1536 742.9359999999999" fill="#78865e"></path>
          </g>
          <defs>
              <mask id="SvgjsMask1108">
                  <rect width="1536" height="300" fill="#ffffff"></rect>
              </mask>
          </defs>
        </svg>
      </div>
    </Wrapper>
  )
}

