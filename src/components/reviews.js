import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"

const Wrapper = styled.div`
height: 100vh;
min-height: 960px;
width: 100%;
// background-color: lightblue; 
display: flex;
flex-direciton: column;
flex-direction: center;
align-items:center;
.main-content {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 46px;
  }
}
.review-wrapper {
  display: flex;
  margin: 100px 0;
  .review {
    max-width: 400px;
    text-align: center;
    margin: 0 20px;
    .name {
      font-size: 18px;
    }
    .location {
      color: grey;
    }
  }
}
.button-div {
  margin: 40px;
  display: flex;
}
.main-button {
  border: solid 1px black;
  padding: 14px 20px;
  width: 200px;
  text-align: center;
  display: block;
  margin: 0 40px;
}
`
export default function Reviews(){
  const data = useStaticQuery(graphql`
  query ReviewsPageQuery {
    allDatoCmsTestimonial {
	    nodes {
	      name
        from
        review
	    }
	  }
    }
`)
let testimonials = data.allDatoCmsTestimonial.nodes;
console.log(testimonials)
return(
    <Wrapper> 
      <div className="main-content">
        <h1>Guest Reviews & Feedback</h1>
        <div className="review-wrapper">
          {testimonials.map((review, i)=>(
            <div className="review">
              <p>“{review.review}”</p>
              <p className="name">{review.name} <span className="location">| {review.from}</span></p>
            </div>
          ))}
        </div>
        <div className="button-div">
          <a className="main-button">View All Stay Options</a>
          <a className="main-button">Leave A Review</a>
        </div>
        
      </div>
    </Wrapper>
  )
}

