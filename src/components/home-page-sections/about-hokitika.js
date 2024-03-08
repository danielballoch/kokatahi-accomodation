import React, { useState } from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
display: flex;
height: 100vh;
min-height: 720px;
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
`

export default function AboutHokitika(){
  const [image, setImage] = useState(0)

  return(
    <Wrapper>
        <div className="content-wrapper">
            <div className="content">
                <h2>The Beautiful Land of the West Coast</h2>
                <p>Hokitika has a rich history and beautiful landscape. With views of Mount Cook (the highest mountain in NZ) from the main streets, beautiful walks and reserves, glow worms, Hokitika Beach, and scenic lakes nearby - it’s long been the heart of West Land and a must visit for overseas and local travelers.</p>
                <p>Hokitika was the center of the West Coast Gold Rush in 1864 and has a number of historical buildings in the city from the Woodstock Hotel (est 1870), Carnegie Building (1908), and Heritage Park among others.</p>
                <a href="/about-hokitika" className="main-button">Learn More</a>
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

