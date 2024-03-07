import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Wrapper = styled(Link)`
  text-decoration: none;
  button {

    background-color: #535d41;
    color: white;
    margin: 48px;
    font-size: 1.25rem;
    border: none;
    padding: 18px 40px;
    // padding: 12px 24px;
    padding-right: 42px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: background 150ms;
  
    &:hover, &:focus {
      background-color: #3c5139;
  
      .arrow-icon__tip {
        transform: translateX(0px);
      }
  
      .arrow-icon__line {
        opacity: 1;
      }
    }
  
    &:focus {
      outline-offset: 4px;
    }
  }
  
  .arrow-icon__tip {
    transform: translateX(-3px);
    transition: transform 150ms;
  }
  
  .arrow-icon__line {
    opacity: 0;
    transition: opacity 150ms;
  }
  
`

export default function Button({buttonText, buttonLink}){
  return(
    <Wrapper to={buttonLink}>
        <button>
            {buttonText}
            <svg class="arrow-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow-icon__tip" d="M8 15L14 8.5L8 2" stroke="currentColor" stroke-width="3" />
                <line class="arrow-icon__line" x1="13" y1="8.5" y2="8.5" stroke="currentColor" stroke-width="3" />
            </svg>
        </button>
    </Wrapper>
  )
}

