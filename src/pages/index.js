import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logoBig from "./../images/logo-big.webp"
import Legal from "./../components/legal"
import HomeItemComponent from "./../components/home"
import styled from "styled-components"

const ContentImage = styled.div`
  display: block;
  margin-bottom: 1.45rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  img {
    max-width: 225px;
  }
`

const ContentItemComponent = styled.div`
  display: flex;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentImage>
      <img src={logoBig} alt="Chacra Vieja" />
    </ContentImage>
    <ContentItemComponent>
      <HomeItemComponent></HomeItemComponent>
      <HomeItemComponent></HomeItemComponent>
      <HomeItemComponent></HomeItemComponent>
      <HomeItemComponent></HomeItemComponent>
    </ContentItemComponent>
    <Legal></Legal>
    <Link to="/contacto/">Contacto</Link>
  </Layout>
)

export default IndexPage
