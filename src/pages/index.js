import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home-page-sections/hero2"
import Intro from "../components/home-page-sections/intro2"
import AboutHokitika from "../components/home-page-sections/about-hokitika"
import StayOptions from "../components/stay-options2"
import FoodAndAttractions from "../components/home-page-sections/food-and-attractions"
import CTA from "../components/home-page-sections/cta"
import SEO from "../components/seo"

export default function Index(){
  return(
    <Layout>
      <Hero/>
      <Intro/>
      <AboutHokitika/>
      <StayOptions/>
      <FoodAndAttractions/>
      <CTA/>
    </Layout>
  )
}

export const Head = () => <SEO
title="Kokatahi BnB | Hokitika and West Coast Accomodation"
description="Kokatahi BnB is the perfect place to stay for your Hokitika or West Coast Exploration."
/>
