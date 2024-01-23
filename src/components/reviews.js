import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"

const Wrapper = styled.div`
height: 100vh;
min-height: 960px;
margin: auto;
width: 100%;
max-width: 90vw;
// background-color: lightblue; 
display: flex;
flex-direciton: column;
flex-direction: center;
align-items:center;
.main-content {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 46px;
    text-align: center;
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
  width: 100%;
  display: flex;
  justify-content: center;
}
.main-button {
  box-sizing: border-box;
  border: solid 1px black;
  // padding: 14px 20px;
  padding: 20px 0;
  width: 400px;
  // margin: auto;
  text-align: center;
  display: block;
  margin: 0 40px;
  color: black;
  text-decoration: none;
}
@media(max-width: 800px){
  .review-wrapper {
    margin: 0;
    flex-direction: column;
  }
}
@media(max-width: 600px){
  margin: 100px auto;
  .button-div {
    flex-direction: column-reverse;
    .main-button {
      width: unset;
      margin-bottom: 30px;
    }
  }
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
          <Link to="/accomodation" className="main-button">View All Stay Options</Link>
          <Link className="main-button">Leave A Review</Link>
        </div>
        
      </div>
    </Wrapper>
  )
}

