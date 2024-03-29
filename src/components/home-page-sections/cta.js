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
  // background: linear-gradient(to top, rgba(83, 93, 65, 0.5), rgba(100, 112, 78, 0.9));
  // background: linear-gradient(to top, rgba(83, 93, 65, 0), rgba(100, 112, 78, 0));
  background: rgba(100, 112, 78, 0.7);
  button {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
  h2 {
      color: white;
      font-size: 30px;
  }
}
.background {
  grid-area: 1/1;
  height: 100%;
  width: 100%;
  background-size: 100% 100%!important;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1536' height='300' preserveAspectRatio='none' viewBox='0 0 1536 300'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1536' height='300' x='0' y='0' fill='rgba(100%2c 112%2c 78%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c397.593C71.649%2c380.947%2c111.571%2c308.702%2c168.294%2c261.871C217.07%2c221.601%2c287.144%2c200.555%2c310.063%2c141.601C332.783%2c83.159%2c302.092%2c19.493%2c286.092%2c-41.134C271.835%2c-95.158%2c247.097%2c-142.422%2c221.941%2c-192.313C188.086%2c-259.457%2c183.235%2c-357.92%2c112.921%2c-384.574C43.86%2c-410.754%2c-19.988%2c-330.147%2c-91.338%2c-311.069C-165.234%2c-291.31%2c-261.287%2c-327.6%2c-312.534%2c-270.813C-363.613%2c-214.211%2c-330.67%2c-123.58%2c-329.326%2c-47.35C-328.197%2c16.709%2c-321.084%2c77.332%2c-305.302%2c139.427C-286.186%2c214.639%2c-286.626%2c303.685%2c-227.369%2c353.793C-167.214%2c404.661%2c-76.735%2c415.42%2c0%2c397.593' fill='%23505a3e'%3e%3c/path%3e%3cpath d='M1536 742.9359999999999C1623.711 736.514 1713.583 738.746 1790.078 695.3530000000001 1868.923 650.627 1920.208 574.2149999999999 1968.575 497.55 2023.488 410.51 2105.375 322.103 2089.732 220.385 2074.091 118.68 1970.439 57.762 1890.901-7.524000000000001 1822.667-63.531000000000006 1743.134-94.74700000000001 1662.376-130.39600000000002 1568.658-171.76600000000002 1474.168-272.231 1379.405-233.31399999999996 1281.895-193.269 1309.751-35.51400000000001 1239.6480000000001 43.20999999999998 1167.9180000000001 123.75999999999999 1019.374 120.68100000000001 976.167 219.50799999999998 932.895 318.484 973.74 438.318 1025.44 533.165 1075.373 624.771 1160.326 694.749 1256.829 734.399 1344.724 770.512 1441.229 749.875 1536 742.9359999999999' fill='%2378865e'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1536' height='300' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}
@media(max-width: 900px){
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
}
`

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CTA(){
  const cta = useRef();
  useGSAP(
    () => {
        gsap.to(".content", {
          // background: "linear-gradient(to top, rgba(83, 93, 65, 0), rgba(100, 112, 78, 0))",
          background: "rgba(100, 112, 78, 0)",
          // background: "linear-gradient(to top, rgba(83, 93, 65, 0), rgba(100, 112, 78, 0.5))",
          scrollTrigger: {
                trigger: ".content",
                start: 'top 60%',
                end: 'bottom 60%',
                scrub: true,
          }
        });
      },{ scope: cta}
  )
  return(
    <Wrapper ref={cta}>
        <div className="content">
          <h2>Get Your West Coast Trip Sorted!</h2>
          <Button buttonText={"View All Stay Options"} buttonLink={"/accomodation#top"}/>
        </div>
        <div className="background"/>
    </Wrapper>
  )
}

