import React from "react"
import { graphql, StaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import '../components/layout.css'

import Infoblock from '../components/infoblock'
import Dualinfoblock from '../components/dualinfoblock'
import Courses from "../components/cart/courses"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  <StaticQuery
    query={graphql`
      query {
        img: file(relativePath: { eq: "ecom.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          mycourses: allContentfulCoureses {
            edges {
              node {
                id
                title
                price
                category
                discription {
                  id
                }
                image {
                  fixed(height: 200, width: 150) {
                    ...GatsbyContentfulFixed_tracedSVG
                  }
                }
              }
            }
          }
        }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.img.childImageSharp.fluid
      return (
        <Hero
          img={imageData}
          heroClass="heroClass"
          title="I Write Code"
          subtitle="Learning Something New"
        >
        </Hero>
      )
    }}
  />
  <Infoblock title="About Us" />
  <Courses />
  <Dualinfoblock title="Our Team" />
  </Layout>
)

export default IndexPage


