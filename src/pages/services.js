import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import "../components/layout.css"


const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery
      query={graphql`
        query {
          img: file(relativePath: { eq: "service.jpg" }) {
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
                heroClass="servicesClass"
                title="ECommerce Services"
                >
                </Hero>
      }}
    />{" "}
  </Layout>
)

export default AboutPage
