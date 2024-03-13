import React, {useState} from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { StructuredText } from 'react-datocms';
import SupportForm from "../components/support-form"
import CTA from "../components/home-page-sections/cta"

const Wrapper = styled.div`
background-color: #535D41;
display: flex;
flex-direction: column;
width: 100%;
overflow: hidden;
.contact-wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 80px 0 100px 0;
//   height: 100vh;
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
margin: 100px auto 0 auto;
height: auto;
color: white;
display: flex;
flex-direction: column;
h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 10px;
    margin-bottom: 0;
    margin-top: 80px;
}
.subheading {
    text-align: center;
    max-width: 700px;
    margin: auto;
    margin-bottom: 50px;
}
div {
    :hover {
        cursor: pointer ;
    }
}
.toggle {
    max-height: 0px !important;
    // padding: 0px 40px;
    /* background-color: #f8f8f8; */
    overflow: hidden;
}
.answer {
    display: grid;
    grid-template-rows: 0fr;
    justify-content: flex-start;
    max-height: 800px;
    transition: max-height 200ms ease-in-out 0s;
    overflow: hidden;
    // margin: 10px 0;
    box-sizing: border-box;
}
@media(max-width: 940px){
    width: 90%;
    margin: 100px auto 20px;
}
`
const ContentBox = styled.div`
// border: solid white 3px;
box-sizing: border-box;
background-color: #74815B;
padding: 20px;
width: 800px;
display: flex;
flex-direction: row;
margin-bottom: 20px;
border-radius: 10px;
color: white;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // align-items: start;
}
.question {
    width: 88%;
    margin: 0;
    font-size: 18px;
}
.button{
    position: relative;
    width: 30px;
    height: 30px;

    &:before,
    &:after{
        content: "";
        position: absolute;
        background-color: white;
        transition: transform 0.25s ease-out;
    }

    /* Vertical line */
    &:before{
        top: 0;
        left: 50%;
        width: 4px;
        height: 100%;
        margin-left: -2px;
    }

    /* horizontal line */
    &:after{
        top: 50%;
        left: 0;
        width: 100%;
        height: 4px;
        margin-top: -2px;
    }
    
}
.open {
    &:before{ transform: rotate(90deg); }
    &:after{ transform: rotate(180deg); }
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
                <h3><p className="question">{question}</p><div className={toggle ? "button" : "button open"}/></h3>
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
        <Layout location={data.location.pathname}>
            <Wrapper>
                <Faq itemScope itemType="https://schema.org/FAQPage">
                  <h1>{c.title}</h1>
                  <p className="subheading">{c.blurb}</p>  
                  {Questions.map((question, i) => (
                      <Content question={question.question} answer={question.answer} i={i}/>
                  ))}
                </Faq>
                <div className="contact-wrapper">
                  <SupportForm/>
                </div>
                <CTA/>
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