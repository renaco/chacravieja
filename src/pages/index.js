import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logoBig from "./../images/logo-big.webp"
import Legal from "./../components/legal"
import styled from "styled-components"

const ContentImage = styled.div`
  margin-bottom: 1.45rem; 
  margin-left: auto;
  margin-right: auto;
  display: block;
  text-align: center;
  img {
    max-width: 225px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentImage>
      <img src={logoBig} alt="Chacra Vieja" />
    </ContentImage>
    <Legal></Legal>
    <Link to="/contacto/">Contacto</Link>
  </Layout>
)

export default IndexPage
