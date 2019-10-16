import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logoBig from "./../images/logo-big.png"
import homeItemOne from "./../images/home-item-1.jpg"
import homeItemTwo from "./../images/home-item-2.jpg"
import homeItemThree from "./../images/home-item-3.jpg"
import homeItemFour from "./../images/home-item-4.jpg"
import Legal from "./../components/legal"
import { HomeItem, HomeItemTitle } from "./../components/home"
import styled from "styled-components"
import media from "styled-media-query"

const ContentImage = styled.div`
  display: flex;
  margin: 0 auto 1.45rem;
  text-align: center;
  `

const HomeImage = styled.img`
  margin: 0 auto 3em;
  max-width: 225px;
  ${media.lessThan("medium")`
    max-width: 90px;
  `}
`

const ContentItemComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  ${media.lessThan("medium")`
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  `}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentImage>
      <HomeImage src={logoBig} alt="Chacra Vieja" />
    </ContentImage>
    <ContentItemComponent>
      {/* <HomeItemComponent></HomeItemComponent> */}
      <React.Fragment>
        <HomeItem>
          <Link to="/galeria">
            <HomeItemTitle>GALERÍA</HomeItemTitle>
            <img src={homeItemOne} alt="" />
            <p>Disfruta tus licores regionales preferidos en nuestros nuestra licorería situada en Moyobamba, San Martín.</p>
            Leer más</Link>
        </HomeItem>
        <HomeItem>
          <Link to="/productos">
            <HomeItemTitle>NUESTROS PRODUCTOS</HomeItemTitle>
            <img src={homeItemTwo} alt="" />
            <p>No importa que licor sea tu favorito, ¡En Chacra Vieja lo encontrarás!</p>
            Leer más</Link>
        </HomeItem>
        <HomeItem>
          <Link to="/historia">
            <HomeItemTitle>NUESTRA HISTORIA</HomeItemTitle>
            <img src={homeItemThree} alt="" />
            <p>Somos una organización líder en el mercado local, reconocida como una empresa competitiva y de proyección internacional.</p>
            Leer más</Link>
        </HomeItem>
        <HomeItem>
          <Link to="/turismo-y-mas">
            <HomeItemTitle>GUÍA TURÍSTICA MOYOBAMBA</HomeItemTitle>
            <img src={homeItemFour} alt="" />
            <p>Encuentranos en el hermoso Valle del Alto Mayo, Moyobamba, La ciudad de las Orquídeas</p>
            Leer más</Link>
        </HomeItem>
      </React.Fragment>
    </ContentItemComponent>
    <Legal></Legal>
    {/* <Link to="/contacto/">Contacto</Link> */}
  </Layout>
)

export default IndexPage
