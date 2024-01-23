import React from "react";
import Carousel from "nuka-carousel"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import styled from "@emotion/styled";

const Wrapper = styled.div`
padding-top: 100px;
.main-image {
    height: 65vh;
    width: 60vw;
    margin: auto;
}
.paging-dot {
    fill: white;
}
img {
    border-radius: 15px;
}
.slider-container {
    width: 60vw;
    margin: auto;
}
.slider-control-bottomcenter {
    div {
        top: 20px!important;
    }
}
@media(max-width: 1500px){
    .main-image {
        height: 65vh;
        width: 95vw;
        margin: auto;
    }
    .slider-container {
        width: 95vw;
        margin: auto;
    }
}
@media(max-width: 600px){
    padding-top: 120px;
    .main-image {
        height: 40vh;
        width: 95vw;
        margin: auto;
    }
    .slider-container {
        width: 95vw;
        margin: auto;
    }
}
`

export default function Slider({images}) {
    return (
      <Wrapper>
        <Carousel wrapAround={true}>
            {images.map((image, i) => (
                    <GatsbyImage className="main-image" image={getImage(image.gatsbyImageData)} alt={image.alt} placeholder="blur"/>
            ))}
        </Carousel>
      </Wrapper>
    );
}