import React from "react"
import styled from "@emotion/styled"
import ImageSlider from "./image-slider"
import ImageGallery from "./react-image-slider"

const Wrapper = styled.div`
padding-top: 120px;
padding-bottom: 4px;
background-color: black;
.gallery-wrapper {
    // height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.swiper {
    border-radius: 5px;
}
.features-box {
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
    height: 300px;
    width: 100%;
    background: linear-gradient(180deg, black 50%, #eeeeee 50%);
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
@media(max-width: 600px){
    .content-box {
        top: 60vh;
    }
    .features-box {
        margin-top: 300px;
        span {
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
`




export default function PropertyHero({images, title, blurb}){
    return(
        <Wrapper>
            <div className="gallery-wrapper">
            <ImageGallery images={images}/>
            </div>
            {/* <div className="features-box">
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
            </div> */}
            
        </Wrapper>
    )
}