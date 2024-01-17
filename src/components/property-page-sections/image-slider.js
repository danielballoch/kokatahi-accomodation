import React, {useEffect, useState} from "react"
import styled from "@emotion/styled"
import { GatsbyImage, getImage} from "gatsby-plugin-image"

const Wrapper = styled.div`
padding-top: 100px;
display: flex;
align-content: center;
justify-content: center;
width: 100%;
height: 100%;
margin: auto;
.main-image {
    margin: auto;
    height: 500px;
    width: 980px;
    opacity: 1;
    transition: .2s;
}
.fade {
    opacity: 0!important;
}
button {

}
.image-indicator {
    color: white;
    position: absolute;
    top: 566px;
    left: calc(50vw - 980px / 2 + 10px);
    font-size: 14px;
    z-index: 200;
}
.arrow {
    position: absolute;
    top: calc(50vh - 20px);
    height: 10px;
    width: 10px;
    margin: 20px;
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    :hover {
        cursor: pointer;
    }
  }
  
  .right {
    right: 200px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  
  .left {
    left: 200px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  
`


export default function ImageSlider({images}){
    const [selectedImage, setSelectedImage] = useState(0);
    const [imageController, setImageController] = useState("");
    const [transitionAnimation, setTransitionAnimation] = useState(false)
    console.log(images.length)
    useEffect(()=> {
        setTransitionAnimation(true);
        console.log(transitionAnimation)
        setTimeout(()=>{
            setTransitionAnimation(false)
            if(imageController === "next"){
                selectedImage < images.length-1 ? setSelectedImage(selectedImage+1) : setSelectedImage(0)
            } else if (imageController === "back"){
                if(selectedImage>0){setSelectedImage(selectedImage-1)}else{setSelectedImage(images.length-1)}
            }
            setImageController("")
        }, "200")
        
    }, [imageController])
    return(
        <Wrapper>
            <span className="arrow left" onClick={()=> setImageController("back")}/>
            <GatsbyImage className={transitionAnimation ? "main-image fade" : "main-image"} image={getImage(images[selectedImage].gatsbyImageData)} alt={images[selectedImage].alt} placeholder="blur"/>
            <p className="image-indicator">{selectedImage+1}/{images.length}</p>
            <span className="arrow right" onClick={()=> setImageController("next")}/>
            
        </Wrapper>
    )
}