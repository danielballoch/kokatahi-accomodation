import React, {useState} from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { StructuredText } from 'react-datocms';
import SupportForm from "../components/support-form"

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
overflow: hidden;
.contact-wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  ::before {
    display: grid;
    grid-area: 1/1;
    z-index: 100;
    content: "";
    display: block;
    width: 100vw;
    height: 100%;
    // background-color: rgba(18,37,70, 0.8); /* Change the color and opacity as needed */
    }
    .background-image {
        grid-area: 1/1;
        width: 100%;
        margin: 0;
        padding: 0;
        height: 100%;
        filter: 
    }
}
`
const Faq = styled.div`
margin: 200px auto 0px auto;
height: auto;
color: black;
display: flex;
flex-direction: column;
h1 {
        font-size: 40px;
        font-weight: 500;
        color: #333;
        padding-bottom: 10px;
        margin-bottom: 0;
        margin-top: 80px;
}
.subheading {
    max-width: 800px;
    margin-bottom: 50px;
}
div {
    :hover {
        cursor: pointer ;
    }
}
.toggle {
    max-height: 0px !important;
    padding: 0px 40px;
    /* background-color: #f8f8f8; */
    overflow: hidden;
}
.answer {
    transition: max-height 200ms ease-in-out 0s;
    overflow: hidden;
    margin: 10px 0;
    border-left: 2px solid rgba(14, 30, 37, 0.12);
    // max-height: 300px;
    box-sizing: border-box;
    p {
        margin: 10px;
    }
    /* background-color: #f8f8f8; */
}
@media(max-width: 940px){
    width: 80%;
    margin: 100px auto 20px;
}
`
const ContentBox = styled.div`
width: 800px;
display: flex;
flex-direction: row;
margin-bottom: 10px;
/* border-radius: 10px; */
color: black;
img {
    border-radius: 2px;
}
div {
    transition: .3s;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}
h3 {
    font-size: 20px;
    margin: 0;
    font-weight: 400;
}
.question {
    width: 100%;
    display: flex;
    margin: 0;
    
    justify-content: space-between;
    /* align-items: center; */
    align-items: start;
}
.arrow {
  margin-top: 5px;
  transition: .2s;
  margin-left: 20px;
  height: 3px;
  width: 3px;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
@media(max-width: 1000px){
    flex-direction: column;
    div {
        width: auto;
    }
}
@media(max-width: 940px){
    width: 100%;
}
`


const Content = ({question, answer,i}) => {
    const [toggle, setToggle] = useState(true);
    return (
        <ContentBox  onClick={() => {setToggle(!toggle)}}>
            <div key={"question " + i}>
                <h3><p className="question">{question}<span className={toggle ? "arrow" : "arrow down"}/></p></h3>
                <div className={toggle ? "answer toggle" : "answer"}>
                <StructuredText
                        data={answer.value}
                        renderInlineRecord={({ record }) => {
                            switch (record.__typename) {
                            case 'DatoCmsArticle':
                                return <a href={`/articles/${record.slug}`}>{record.title}</a>;
                            default:
                                return null;
                            }
                        }}
                    />
                </div>
            </div>
        </ContentBox>
    )
} 

const FAQ = (data) => {
    let Questions = data.data.allDatoCmsFaq.nodes;
    let c = data.data.datoCmsSupportPage
    return(
        <Layout invert={true} location={data.location.pathname}>
            <Wrapper>
                <Faq itemScope itemType="https://schema.org/FAQPage">
                  <h1>{c.title}</h1>
                  <p className="subheading">{c.blurb}</p>  
                  {Questions.map((question, i) => (
                      <Content question={question.question} answer={question.answer} i={i}/>
                  ))}
                </Faq>
                <div className="contact-wrapper">
                  {/* <GatsbyImage className="background-image" image={getImage(c.contactBackground.gatsbyImageData)} alt={c.contactBackground.alt} placeholder="blur"/> */}
                  <SupportForm/>
                </div>
            </Wrapper>
        </Layout>
    )
}

export default FAQ;

export const pageQuery = graphql`
    query FAQ{
      allDatoCmsFaq(
        sort: {position:ASC}
      ) {
        nodes {
          position
          question
          answer {
            value
          }
        }
      }
      datoCmsSupportPage {
        title
        blurb
      }
    }
`

export const Head = () => <SEO
title="Support | Kokatahi Accommodation"
description="Checkout our FAQ's or get in touch via email: tuisbnb@gmail.com, phone: 021 506 496 or our support contact form."
/>