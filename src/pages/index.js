import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Intro from "../components/intro"
import StayOptions from "../components/stay-options"
import AttractionsAndOutdoors from "../components/attractions-outdoors"
import DiningAndCuisine from "../components/dining-cuisine"
import Reviews from "../components/reviews"

export default function Index(){
  return(
    <Layout>
      <Hero/>
      <Intro/>
      <StayOptions/>
      <DiningAndCuisine/>
      <AttractionsAndOutdoors/>
      <Reviews/>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
