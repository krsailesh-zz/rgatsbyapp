import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import "../components/layout.css"

import Infoblock from "../components/infoblock"
import Dualinfoblock from "../components/dualinfoblock"
import Teamphotosection from "../components/about/teamphotosection"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery
      query={graphql`
        query {
          img: file(relativePath: { eq: "about.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.img.childImageSharp.fluid
        return <Hero 
                img={imageData} 
                heroClass="aboutClass"
                title="About Comapany"
                >
                </Hero>
      }}
    />{" "}
    <Infoblock title="A Message from CEO" />
    <Dualinfoblock title="About Team members" />
    <Teamphotosection />
  </Layout>
)

export default AboutPage
