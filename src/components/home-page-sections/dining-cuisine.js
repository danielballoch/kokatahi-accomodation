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
.mobile-image {
  display: none!important;
}
@media(max-width: 1200px){
  margin-top: 200px;
  height: unset;
  .main-image {
    display: none;
  }
  hr {
    display: none;
  }
  .mobile-image {
    display: block;
    height: 300px;
  }
  .content-item {
    p {
      font-weight: 600;
      margin-top: 80px;
    }
  }
  .main-button {
    margin: auto;
    padding: 20px 0!important;
    width: 100%;
    text-align: center;
  }
  .content {
    width: 90vw!important;
    max-width: 600px;
    padding: 0!important;
  }
}
`

export default function AttractionsOutdoors(){
  const [activeItem, setActiveItem] = useState(0)
  const data = useStaticQuery(graphql`
  query DiningOptionsQuery {
      datoCmsHomePage {
          localDiningCuisineTitle
          localDiningCuisineBlurb
      }
      allDatoCmsDiningCusineItem(
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
let diningMain = data.datoCmsHomePage;
let dining = data.allDatoCmsDiningCusineItem.nodes
  return(
    <Wrapper id="local-dining-and-cuisine">
      <div className="center-div">
        <div className="content">
          <h2>{diningMain.localDiningCuisineTitle}</h2>
          <p>{diningMain.localDiningCuisineBlurb}</p>
          <div>
            {dining.map((resturant, i)=>(
              <div className="content-item" onMouseEnter={() => setActiveItem(i)}>
                <p className={i === activeItem? "active-p" : ""}>{resturant.title}</p>
                <GatsbyImage className="mobile-image" image={getImage(resturant.image.gatsbyImageData)} alt={resturant.image.alt} placeholder="blur"/>
                <hr/>
              </div>
              
            ))}
          </div>
          <Link to="/food-and-attractions/#dining-and-cuisine" className="main-button">See More Local Favourites</Link>
        </div>
        <GatsbyImage className="main-image" image={getImage(dining[activeItem].image.gatsbyImageData)} alt={dining[0].image.alt} placeholder="blur"/>
      </div>
    </Wrapper>
  )
}
