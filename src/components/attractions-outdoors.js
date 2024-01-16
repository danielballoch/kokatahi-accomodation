import React, {useState} from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
height: 100vh;
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
      font-size: 60px;
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
      padding: 10px 80px;
      border: solid black 1px;
      margin-top: 40px;
      margin-right: 20px;
      color: black;
      text-decoration: none;
    }
  }
  .main-image {
    width: 600px;
    height: 600px;
    background-color: black;
  }
  
}
`

export default function AttractionsOutdoors(){
  const [activeItem, setActiveItem] = useState(0)
  const data = useStaticQuery(graphql`
  query AttractionsOptionsQuery {
      datoCmsHomePage {
          attractionsOutdoorsTitle
          attractionsOutdoorsBlurb
      }
      allDatoCmsAttractionOutdoorItem(
        sort: {position:ASC}
        limit: 3
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
let attractionsMain = data.datoCmsHomePage;
let attractions = data.allDatoCmsAttractionOutdoorItem.nodes
  return(
    <Wrapper>
      <div className="center-div">
        <div className="content">
          <h2>{attractionsMain.attractionsOutdoorsTitle}</h2>
          <p>{attractionsMain.attractionsOutdoorsBlurb}</p>
          <div>
            {attractions.map((attraction, i)=>(
              <div className="content-item" onMouseEnter={() => setActiveItem(i)}>
                <p className={i === activeItem? "active-p" : ""}>{attraction.title}</p>
                <hr/>
              </div>
              
            ))}
          </div>
          <Link to="/food-and-attractions" className="main-button">See More Local Attractions</Link>
        </div>
        <GatsbyImage className="main-image" image={getImage(attractions[activeItem].image.gatsbyImageData)} alt={attractions[0].image.alt} placeholder="blur"/>
      </div>
    </Wrapper>
  )
}
