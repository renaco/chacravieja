import React from "react"
import { MainTitle } from "./../components/title"
import logoBig from "./../images/logo-big.png"
import DownloadFile from "./../components/download"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeImage, ContentImage } from "./../components/home/styled"

const CatalogPage = () => (
  <Layout>
    <SEO title="Catalogo" />
    <MainTitle>CATALOGO</MainTitle>
    <DownloadFile />
    <ContentImage>
      <HomeImage lazyload='lazy' src={logoBig} alt="Chacra Vieja" />
    </ContentImage>
  </Layout>
)

export default CatalogPage