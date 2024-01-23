import React from "react"
import styled from "@emotion/styled"
import ImageSlider from "./image-slider"
import ImageGallery from "./react-image-slider"

const Wrapper = styled.div`
background-color: black;
min-height: 100vh;
width: 100%;
.content-box {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: absolute;
    top: calc(50vh + 250px + 20px);
    width: 900px;
    left: calc(50vw - 450px);
    h1 {
        font-size: 20px;
        width: fit-content;
        flex-shrink:0;
        margin-right: 20px;
    }
    p {
        // width: 80%;
        font-size: 14px;
    }
}
.features-box {
    display: flex;
    flex-wrap: wrap;
    margin-top: 170px;
    height: 300px;
    width: 100%;
    background: linear-gradient(180deg, black 50%, white 50%);
    .features {
        display: flex;
        flex-wrap: wrap;
        width: 900px;
        margin: auto;
        span {
            margin: 40px 0;
            text-align: center;
            width: 25%;
            :first-of-type, :nth-of-type(2), :nth-of-type(3), :nth-of-type(4) {
                color: white;
            }
        }
        
    }
}
@media(max-width: 950px){
    .content-box {
        flex-direction: column;
        width: 90vw;
        margin: 0px auto 0 auto;
        padding: 0;
        left: 5vw;
        text-align: center;
        h1 {
            margin-right: 0;
        }
    }
}
@media(max-width: 600px){
    .content-box {
        top: 60vh;
    }
    .features-box {
        margin-top: 300px;
    }
}
`




export default function PropertyHero({images, title, blurb}){
    console.log(title, blurb)
    return(
        <Wrapper>
            <ImageGallery images={images}/>
            {/* <ImageSlider images={images}/> */}
            <div className="content-box">
                <h1>{title}</h1>
                <p>{blurb}</p>
            </div>
            <div className="features-box">
                <div className="features">
                    <span>4 Rooms</span>
                    <span>2 Bathrooms</span>
                    <span>Sleeps 6</span>
                    <span>Private Backyard</span>
                    <span>Full Kitchen</span>
                    <span>TV</span>
                    <span>Wi-Fi</span>
                    <span>Ample Parking</span>
                </div>
            </div>
            
        </Wrapper>
    )
}