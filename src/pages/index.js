import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import logoBig from "./../images/logo-big.png"
import homeItemOne from "./../images/home-item-1.jpg"
import homeItemTwo from "./../images/home-item-2.jpg"
import homeItemThree from "./../images/home-item-3.jpg"
import homeItemFour from "./../images/home-item-4.jpg"
import homeItemMail from "./../images/home-item-mail.jpg"
import Legal from "./../components/legal"
import { HomeItem, HomeItemTitle } from "./../components/home"
import styled from "styled-components"
import media from "styled-media-query"
import DownloadFile from "./../components/download"

const ContentImage = styled.div`
  display: flex;
  margin: 0 auto 1.45rem;
  text-align: center;
`

const ContentItemComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33%, 1fr));
  ${media.lessThan("medium")`
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  `}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentImage>
      {/* <HomeImage lazyload='lazy' src={logoBig} alt="Chacra Vieja" /> */}
    </ContentImage>
    <ContentItemComponent>
      <React.Fragment>
        <HomeItem>
          <Link to="/catalogo">
            <HomeItemTitle>Catalogo de productos</HomeItemTitle>
            <DownloadFile/>
            <p>Descarga nuestro catalógo de productos, donde encontraras ademas: Chocolates de cacao, pasta de cacao, puros amazónicos</p></Link>
        </HomeItem>
        <HomeItem>
          <Link to="/historia">
            <HomeItemTitle>NUESTRA HISTORIA</HomeItemTitle>
            <img lazyload='lazy' src={homeItemThree} alt="Nuestra historia" />
            <p>Somos una organización líder en el mercado local, reconocida como una empresa competitiva y de proyección internacional.</p>
            Leer más</Link>
        </HomeItem>
        <HomeItem>
          <Link to="/productos">
            <HomeItemTitle>NUESTROS PRODUCTOS</HomeItemTitle>
            <img lazyload='lazy' src={homeItemTwo} alt="Nuestros productos" />
            <p>No importa que licor sea tu favorito, ¡En Chacra Vieja lo encontrarás!</p>
            Leer más</Link>
        </HomeItem>
        <HomeItem>
          <Link to="/turismo-y-mas">
            <HomeItemTitle>GUÍA TURÍSTICA MOYOBAMBA</HomeItemTitle>
            <img lazyload='lazy' src={homeItemFour} alt="Guía turística Moyobamba" />
            <p>Conoce el hermoso Valle del Alto Mayo, Moyobamba, la ciudad de las Orquídeas.</p>
            Leer más</Link>
        </HomeItem>
        <HomeItem>
          <Link to="/galeria">
            <HomeItemTitle>GALERÍA</HomeItemTitle>
            <img lazyload='lazy' src={homeItemOne} alt="Galería" />
            <p>Disfruta tus licores regionales preferidos en nuestros nuestra licorería situada en Moyobamba, San Martín.</p>
            Leer más</Link>
        </HomeItem>
        <HomeItem>
          <Link to="/contacto">
            <HomeItemTitle>CONTACTANOS</HomeItemTitle>
            <img lazyload='lazy' src={homeItemMail} alt="Contactanos" />
            <p>Encuentranos y gustosamente te explicaremos acerca de nuestros productos.</p>
            Ponte en contacto</Link>
        </HomeItem>
      </React.Fragment>
    </ContentItemComponent>
    <Legal/>
  </Layout>
)

export default IndexPage
