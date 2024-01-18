import React,{useState} from "react"
import styled from "@emotion/styled"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
height: fit-content;
min-height: 960px;
width: 100%;
background-color: white; 
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

  margin: auto;
  .content {
    padding: 60px;
    box-sizing: border-box;
    width: 600px;
    h2 {
      margin-top: 0;
      margin-bottom: 70px;
      font-size: 24px;
      font-weight: 300;
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
        :hover {
            cursor: pointer;
        }
    }
  }
  .main-image {
    width: 600px;
    height: 500px;
    background-color: black;
  }
  .content-right {
    width: 600px;
    min-height: 960px;
  }
  
}
`

export default function AttractionsOutdoors({attractions, title, id}){
  const [activeItem, setActiveItem] = useState(0)
  return(
        <Wrapper>
        <div className="center-div" id={id}>
            <div className="content">
            <h2>{title}</h2>
            <div>
                {attractions.map((attraction, i)=>(
                <div className="content-item" onMouseEnter={() => setActiveItem(i)} key={"level "+i}>
                    <p className={i === activeItem? "active-p" : ""}>{attraction.title}</p>
                    <hr/>
                </div>
                
                ))}
            </div>
            {/* <a className="main-button">See More Local Attractions</a> */}
            </div>
            <div className="content-right">
              <GatsbyImage className="main-image" image={getImage(attractions[activeItem].image.gatsbyImageData)} alt={attractions[0].image.alt} placeholder="blur"/>
              <h2>{attractions[activeItem].title}</h2>
              <p>{attractions[activeItem].blurb}</p>
            </div>
        </div>
        </Wrapper>
  )
}