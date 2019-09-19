import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logoBig from "./../images/logo-big.webp"
import homeItemOne from "./../images/home-item-1.webp"
import homeItemTwo from "./../images/home-item-2.webp"
import homeItemThree from "./../images/home-item-3.webp"
import homeItemFour from "./../images/home-item-4.webp"
import Legal from "./../components/legal"
import { HomeItem, HomeItemTitle } from "./../components/home"
import styled from "styled-components"

const ContentImage = styled.div`
  display: flex;
  margin: 0 auto 1.45rem;
  text-align: center;
  img {
    max-width: 225px;
  }
`

const HomeImage = styled.img`
  margin: 0 auto 3em;
`

const ContentItemComponent = styled.div`
  display: flex;
`
// const { title, paragraphs } = props.pageContext;
// console.log(props.pageContext)

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
          <HomeItemTitle>GALERÍA</HomeItemTitle>
          <img src={homeItemOne} alt="" />
          <p>Disfruta tus licores regionales preferidos en nuestros nuestra licorería situada en Moyobamba, San Martín.</p>
        </HomeItem>
        <HomeItem>
          <HomeItemTitle>NUESTROS PRODUCTOS</HomeItemTitle>
          <img src={homeItemTwo} alt="" />
          <p>No importa que licor sea tu favorito, ¡En Chacra Vieja lo encontrarás!</p>
          {/* <Link to="/productos">Leer más</Link> */}
        </HomeItem>
        <HomeItem>
          <HomeItemTitle>NUESTRA HISTORIA</HomeItemTitle>
          <img src={homeItemThree} alt="" />
          <p>Somos una organización líder en el mercado local, reconocida como una empresa competitiva y de proyección internacional.</p>
          <Link to="/historia">Leer más</Link>
        </HomeItem>
        <HomeItem>
          <HomeItemTitle>GUÍA TURÍSTICA MOYOBAMBA</HomeItemTitle>
          <img src={homeItemFour} alt="" />
          <p>Encuentranos en el hermoso Valle del Alto Mayo, Moyobamba, La ciudad de las Orquídeas</p>
        </HomeItem>
      </React.Fragment>
    </ContentItemComponent>
    <Legal></Legal>
    <Link to="/contacto/">Contacto</Link>
  </Layout>
)

export default IndexPage
