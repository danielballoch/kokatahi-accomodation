import React, { useRef, useState } from "react";
import {Swiper, SwiperSlide } from "swiper/react"
import Carousel from "nuka-carousel"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import styled from "@emotion/styled";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../../swiper-styles.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;    
width: 1041px;
// height: 100%;
// .swiper-button-next {

// }
.main-image {
    width: 1041px;
    height: 641px;
}
@media(max-width: 1080px){
  width: 90vw;
  height: 600px;
}
@media(max-width: 700px){
  width: 90vw;
  height: 380px;
}
@media(max-width: 440px){
  height: 300px;
}
`



export default ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <Wrapper>
      <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      loop={true}
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((image, i) => (
                    <SwiperSlide><GatsbyImage className="main-image" image={getImage(image.gatsbyImageData)} alt={image.alt} placeholder="blur"/></SwiperSlide>
            ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
         {images.map((image, i) => (
                    <SwiperSlide><GatsbyImage image={getImage(image.gatsbyImageData)} alt={image.alt} placeholder="blur"/></SwiperSlide>
            ))}
      </Swiper>
      </Wrapper>
    );
  };
