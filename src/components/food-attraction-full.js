import React,{useState} from "react"
import styled from "@emotion/styled"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";

const Wrapper = styled.div`
height: fit-content;
// min-height: 960px;
padding: 50px 0;
width: 100%;
background-color: white; 
// color: white;
display: flex;
flex-direciton: column;
flex-direction: center;
align-items:center;
h1 {
  margin-top: 0;
}
.center-div {
  max-width: 1200px;
  display: flex;
  // border: solid 1px black;
  margin: 20px auto;
  .content {
    padding: 0 60px;
    box-sizing: border-box;
    width: 600px;
    // width: 500px;
    h2 {
      margin-top: 0;
      // margin-bottom: 70px;
      font-size: 26px;
      font-weight: 600;
    }
  
    .main-button {
      display: inline-block;
      height: fit-content;
      padding: 10px 80px;
      border: solid black 1px;
      margin-top: 40px;
      margin-right: 20px;
      color: black;
      text-decoration: none;
    }
    .active-p {
      font-weight: 600;
    }
    .content-item {
        transition: .3s;
        hr {
          opacity: 0;
        }
        :hover {
            cursor: pointer;
        }
    }
  }
  .main-image {
    border-radius: 5px;
    width: 600px;
    height: 400px;
    background-color: black;
  }
  .content-right {
    width: 600px;
    // min-height: 960px;
  }
}
.nav-menu {
  display: none;
}
.mobile {
  display: none;
}
@media(max-width: 1220px){
  .mobile {
    display: block;
  }
  .nav-menu {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
    a {
      color: white;
      padding: 20px 10px;
      background-color: black;
      text-decoration: none;
      margin: 0 10px 10px 0;
    }
  }
  .content-right {
    display: none;
  }
  .content {
    width: 90vw!important;
    padding: 0!important;
    h2 {
      font-size: 28px!important;
      margin-bottom: 10px!important;
    }
  }
  .content-item {
    margin-bottom: 80px;
    p {
      :first-of-type {
        display: none;
      }
    }
    .main-image {
      width: 100%;
    }
    h3 {
      margin-bottom: 0!important;
      margin-top: 20px!important;
    }
    hr {
      display: none;
    }
  }
}
.animate {
  opacity: 0;
}
.animateright {
  opacity: 0;
  transform: translateX(40px);
}
`

export default function AttractionsOutdoors({attractions, title, id}){
  const [activeItem, setActiveItem] = useState(0)

  const foodoptions = useRef();

  useGSAP(
    () => {
        const fooditems = gsap.utils.toArray(['.animate']);
        fooditems.forEach((box, i) => {
            gsap.to(box, {
                opacity: 1,
                delay: .3,
                duration: 1,
                scrollTrigger: {
                  trigger: box,
                  start: 'top 95%',
                  end: 'bottom 50%',
              },
            });
        })
        const fooditems2 = gsap.utils.toArray(['.animate2']);
        fooditems2.forEach((box, i) => {
            gsap.to(box, {
                opacity: 0.3,
                delay: .3,
                duration: 1,
                scrollTrigger: {
                  trigger: box,
                  start: 'top 95%',
                  end: 'bottom 50%',
              },
            });
        })
        const itemsright = gsap.utils.toArray(['.animateright']);
        itemsright.forEach((box, i) => {
            gsap.to(box, {
                opacity: 1,
                translateX: 0,
                duration: 1,
                scrollTrigger: {
                  trigger: box,
                  start: 'top 80%',
                  end: 'bottom 50%',
              },
            });
        })
       
    },
    { scope: foodoptions }
  );
  return(
        <Wrapper ref={foodoptions}>
        <div className="center-div" id={id}>
            <div className="content">
            <h2 className="animate">{title}</h2>
            <div className="nav-menu">
            {attractions.map((attraction, i)=>(
              <a href={"#"+id+i}>{attraction.title}</a>
            ))}
            </div>
            <div>
                {attractions.map((attraction, i)=>(
                <div id={id+i} className="content-item" onMouseEnter={() => setActiveItem(i)} key={"level "+i}>
                    <p className={i === activeItem? "active-p animate" : "animate"}>{attraction.title}</p>
                    <GatsbyImage className="main-image mobile" image={getImage(attraction.image.gatsbyImageData)} alt={attractions[0].image.alt} placeholder="blur"/>
                    <h3 className="mobile">{attraction.title}</h3>
                    <p className="mobile">{attraction.blurb}</p>
                    <hr className="animate2"/>
                </div>
                
                ))}
            </div>
            {/* <a className="main-button">See More Local Attractions</a> */}
            </div>
            <div className="content-right">
              <GatsbyImage className="main-image animateright" image={getImage(attractions[activeItem].image.gatsbyImageData)} alt={attractions[0].image.alt} placeholder="blur"/>
              <h2 className="animateright">{attractions[activeItem].title}</h2>
              <p className="animateright">{attractions[activeItem].blurb}</p>
            </div>
        </div>
        </Wrapper>
  )
}