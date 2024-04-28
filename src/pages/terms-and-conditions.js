import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StructuredText } from 'react-datocms';
import SEO from "../components/seo"

const Wrapper = styled.div`
margin: 200px auto;
padding: 20px;
max-width: 800px;
color: white;
`

export default function Terms(){
  const data = useStaticQuery(graphql`
  query TermsQuery {
    datoCmsTermsAndConditionsPage {
        termsAndConditions {
          value
        }
    }
  }     
`)
let terms = data.datoCmsTermsAndConditionsPage.termsAndConditions.value
  return(
    <Layout invert={true}>
        <Wrapper>
            <StructuredText
            data={terms}
            renderInlineRecord={({ record }) => {
                switch (record.__typename) {
                case 'DatoCmsArticle':
                    return <a href={`/articles/${record.slug}`}>{record.title}</a>;
                default:
                    return null;
                }
            }}
            />
        </Wrapper>
    </Layout>
  )
}

export const Head = () => <SEO
title="Terms & Conditions | Kokatahi Accommodation"
description="Read through our Kokatahi Accomodation terms and conditions."
/>