import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SuccessTem from "../components/form-success-tem"

export default function Index(){
  return(
    <Layout location={"/"}>
      <SuccessTem title="Booking" message={"Thanks for getting in touch! Your booking request has been sent to the team at Kokatahi Accomodation and they will be in touch as soon as possible."}/>
    </Layout>
  )
}

export const Head = () => <SEO
title="Form Sent | Hokitika and West Coast Accomodation"
description="Kokatahi BnB is the perfect place to stay for your Hokitika or West Coast Exploration."
/>
