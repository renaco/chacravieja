import React from "react"
// import { Link } from "gatsby"
import { MainTitle } from "./../components/title"
import logoBig from "./../images/logo-big.png"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeImage } from "./../components/home"

const CatalogPage = () => (
  <Layout>
    <SEO title="Catalogo" />
    <MainTitle>CATALOGO</MainTitle>
    <HomeImage lazyload='lazy' src={logoBig} alt="Chacra Vieja" />
    <h1>En construcción</h1>
  </Layout>
)

export default CatalogPage