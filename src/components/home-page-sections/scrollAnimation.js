import React from "react"
import styled from '@emotion/styled';

const ScrollContainer = styled.div`
// @media (max-width: 980px){
//     display: none !important;
// }
width: 60px;
// height: 108px;
margin-top: -54px;
margin-left: -54px;
position: absolute;
z-index: 10;
left: calc(50% + 30px);
top: 140%;
transform: scale(.4) ;

.scroll-msg-inner {
    width: 40px;
    height: 80px;
    position: relative;
    border-radius: 34px;
    border: 4px solid white;
  }
.scroll-msg-wheel {
    position: relative;
    left: 50%;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    border-radius: 50%;
    background-color: white;
    animation-duration: 2s;
    animation-name: mouse-scroll;
    animation-iteration-count: infinite;
    @keyframes mouse-scroll {
        0%   { top: 10%; opacity: 1; }
        80% { opacity: 1; }
        100% { top: 30%; opacity: 0; }
        position: absolute;
        }
      }
`

export default function ScrollAnimation(){
    return (
        <ScrollContainer>
            <div className="scroll-msg-inner">
                <div className="scroll-msg-wheel">
                </div>
            </div>
        </ScrollContainer>
    )
}