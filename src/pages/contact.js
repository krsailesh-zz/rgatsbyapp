import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import "../components/layout.css"

import Infoblock from "../components/infoblock"
import ContactForm from "../components/contact/contactForm"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery
      query={graphql`
        query {
          img: file(relativePath: { eq: "contact.jpg" }) {
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
                title="Contact Us"
                >
                </Hero>
      }}
    />{" "}
    <Infoblock title="How can we help?" />
    <ContactForm />
  </Layout>
)

export default ContactPage
