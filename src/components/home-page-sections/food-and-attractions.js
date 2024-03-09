import React, {useState} from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
height: 100vh;
min-height: 720px;
width: 100%;
// background-color: black; 
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
          <h2>Local Cuisine & Attractions</h2>
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
          <Link to="/food-and-attractions/#dining-and-cuisine" className="main-button">See More</Link>
        </div>
        <GatsbyImage className={activeItem === 0? "main-image active" : "main-image"} image={getImage(dining[0].image.gatsbyImageData)} alt={dining[0].image.alt} placeholder="blur"/>
        <GatsbyImage className={activeItem === 1? "main-image active" : "main-image"} image={getImage(dining[1].image.gatsbyImageData)} alt={dining[1].image.alt} placeholder="blur"/>
        <GatsbyImage className={activeItem === 2? "main-image active" : "main-image"} image={getImage(dining[2].image.gatsbyImageData)} alt={dining[2].image.alt} placeholder="blur"/>
      </div>
    </Wrapper>
  )
}
