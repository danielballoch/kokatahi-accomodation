import React, {useState} from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";

const Wrapper = styled.div`
height: 100vh;
min-height: 720px;
width: 100%;
background-color: #eee;
display: flex;
flex-direciton: column;
flex-direction: center;
align-items:center;
h1 {
  margin-top: 0;
}
hr {
 opacity: 0.3;
}
.center-div {
  max-width: 1200px;
  display: flex;
  align-items: center;
  // flex-direction: row-reverse;
  // border: solid 1px black;
  margin: auto;
  .content {
    margin-right: 600px;
    padding: 0 60px;
    box-sizing: border-box;
    height: fit-content;
    width: 600px;
    h2 {
      margin-top: 0;
      font-size: 40px;
    }
    .content-item {
      :hover {
        cursor: pointer;
      }
    }
    .active-p {
      font-weight: 600;
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
  }
  .main-image {
    border-radius: 5px;
    transition: .5s;
    opacity: 0;
    position: absolute;
    left: 50%;
    // padding: 60px;
    width: 600px;
    height: 600px;
    background-color: black;
  }
  .active {
    opacity: 1;
  }
}
.mobile-image {
  display: none!important;
}
@media(max-width: 1200px){
  padding: 200px 0;
  height: unset;
  .main-image {
    display: none;
  }
  hr {
    display: none;
  }
  .mobile-image {
    display: block!important;
    height: 300px;
  }
  .content-item {
    display: flex;
    flex-direction: column-reverse;
    margin: 50px 0;
    p {
      font-weight: 600;
      // margin-bottom: 80px;
      font-size: 22px;
    }
  }
  .main-button {
    margin-top: 0!important;
    margin: auto;
    padding: 20px 0!important;
    width: 100%;
    text-align: center;
  }
  .content {
    width: 90vw!important;
    margin: 0!important;
    max-width: 600px;
    padding: 0!important;
  }
}
.animate {
  opacity: 0;
}
`

export default function AttractionsOutdoors(){
  const [activeItem, setActiveItem] = useState(0)
  const data = useStaticQuery(graphql`
  query AttractionOutdoorsQuery {
      allDatoCmsHomePage {
        nodes {
          localCuisineAttractionsTitle
          localCuisineAttractionsBlurb
        }
      }
      allDatoCmsDiningCusineItem(
        sort: {position:ASC}
      ) {
        nodes {
          position
          title
          blurb
          image {
            gatsbyImageData
            alt
          }
          
        }
      }
      allDatoCmsAttractionOutdoorItem(
        sort: {position:ASC}
      ) {
        nodes {
          position
          title
          blurb
          image {
            gatsbyImageData
            alt
          }
          
        }
      }
    }
`)
let diningMain = data.allDatoCmsHomePage.nodes[0];
let dining = data.allDatoCmsDiningCusineItem.nodes
let outdoors = data.allDatoCmsAttractionOutdoorItem.nodes
console.log("DiningMain: ", diningMain)


    //animation
  const foodref = useRef();
  useGSAP(
      () => {
          const fooditem = gsap.utils.toArray(['.animate']);
          console.log(fooditem)
          fooditem.forEach((box, i) => {
              gsap.to(box, {
                  opacity: 1,
                  duration: 1,
                  scrollTrigger: {
                      trigger: box,
                      start: 'top 80%',
                      end: 'bottom 50%',
                  },
              });
              
          })
      
      },
      { scope: foodref }
  );



  return(
    <Wrapper id="local-dining-and-cuisine" ref={foodref}>
      <div className="center-div">
        <div className="content">
          <h2 className="animate">{diningMain.localCuisineAttractionsTitle}</h2>
          <p className="animate">{diningMain.localCuisineAttractionsBlurb}</p>
          <div>
            <div className="content-item animate" onMouseEnter={() => setActiveItem(0)}>
                <p className={0 === activeItem? "active-p" : ""}>{dining[0].title}</p>
                <GatsbyImage className="mobile-image" image={getImage(dining[0].image.gatsbyImageData)} alt={dining[0].image.alt} placeholder="blur"/>
                <hr/>
            </div>
            <div className="content-item animate" onMouseEnter={() => setActiveItem(1)}>
                <p className={1 === activeItem? "active-p" : ""}>{outdoors[1].title}</p>
                <GatsbyImage className="mobile-image" image={getImage(outdoors[1].image.gatsbyImageData)} alt={outdoors[1].image.alt} placeholder="blur"/>
                <hr/>
            </div>
            <div className="content-item animate" onMouseEnter={() => setActiveItem(9)}>
                <p className={9 === activeItem? "active-p" : ""}>{outdoors[9].title}</p>
                <GatsbyImage className="mobile-image" image={getImage(outdoors[9].image.gatsbyImageData)} alt={outdoors[9].image.alt} placeholder="blur"/>
                <hr/>
            </div>
          </div>
          <Link to="/food-and-attractions/#dining-and-cuisine" className="main-button animate">See More</Link>
        </div>
        <GatsbyImage className={activeItem === 0? "main-image active" : "main-image"} image={getImage(dining[0].image.gatsbyImageData)} alt={dining[0].image.alt} placeholder="blur"/>
        <GatsbyImage className={activeItem === 1? "main-image active" : "main-image"} image={getImage(outdoors[1].image.gatsbyImageData)} alt={outdoors[1].image.alt} placeholder="blur"/>
        <GatsbyImage className={activeItem === 9? "main-image active" : "main-image"} image={getImage(outdoors[9].image.gatsbyImageData)} alt={outdoors[9].image.alt} placeholder="blur"/>
      </div>
    </Wrapper>
  )
}
