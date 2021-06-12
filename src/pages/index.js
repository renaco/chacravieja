import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from "./../images/typography.svg"
import Bodegon from "./../images/bodegon.jpg"
import homeGallery from "./../images/home-gallery.jpg"
import homeGuide from "./../images/home-guide.jpg"
import homeHistory from "./../images/home-history.jpg"
import ourProducts from "./../images/nuestros-productos.jpg"
import Card from "./../images/icons/card.svg"
import Box from "./../images/icons/box.svg"
// import Catalog from './../images/icons/catalog.svg'

import {
  HomeItem,
  HomeColumn,
  HomeContactContent,
  HomeSlide,
  HomeSlidePharagraph,
  HomeSlideButton,
} from "./../components/home"
import { ItemMiddle } from "./../components/middle"

const IndexPage = () => {

  function downloadCatalog(e) {
    e.preventDefault();
    console.log('this');
  }

  return (
    <Layout>
      <SEO title="Home" />
      <HomeColumn>
        <HomeSlide>
          <img src={Bodegon} alt="Bodegon" />
          <img src={Typography} alt="Moyobamba San Martin" />
          <HomeSlidePharagraph>
            Nuestros productos Chacra Vieja a base de frutas oriundas de la
            selva, es una línea de macerados que se convierten en los licores
            más solicitados en la ciudad de Moyobamba.
          </HomeSlidePharagraph>
          <HomeSlideButton onClick={downloadCatalog}>
            <span>descargar catálogo</span>
            <i></i>
          </HomeSlideButton>
        </HomeSlide>

        <HomeItem
          link={"/galeria"}
          title={"Galería"}
          image={homeGallery}
          description={"Descarga el catalogo"}
          paragraph={
            "Disfruta tus licores regionales preferidos en nuestra licorería situada en Moyobamba, San Martín"
          }
          label={"Leer más"}
          width={"33.3%"}
        />

        <HomeItem
          link={"/productos"}
          title={"Nuestros productos"}
          image={ourProducts}
          description={"Descarga el catalogo"}
          paragraph={
            "Licor de Chuchuhuasi, Chuchuwasi o Chuchuwasha, macerado de la corteza del árbol amazónico de Chuchuhuasi en aguardiente de caña, su aroma y sabor amaderado delatan su origen de selva alta, entre algunas de sus propiedades"
          }
          label={"Leer más >"}
          width={"66.6%"}
        />
      </HomeColumn>

      <HomeColumn>
        <HomeItem
          link={"/turismo-y-mas"}
          title={"Guía turística Moyobamba"}
          image={homeGuide}
          description={"Descarga el catalogo"}
          paragraph={
            "En Moyobamba, en plena selva alta a 903 metros sobre el nivel del mar y rodeados de un ambiente natural propio de la zona, se encuentran los Baños Sulfurosos de Orominas baños termales a 8 grados..."
          }
          label={"Leer más >"}
          width={"66.6%"}
        />

        <HomeItem
          link={"/historia"}
          title={"Nuestra historia"}
          image={homeHistory}
          description={"Descarga el catalogo"}
          paragraph={
            "En el hermoso valle del Alto Mayo, en la bella ciudad de Moyobamba acompañada de añejas costumbres"
          }
          label={"Leer más >"}
          width={"33.3%"}
        />
      </HomeColumn>

      <HomeColumn>
        <HomeContactContent>
          <ItemMiddle
            icon={Card}
            description={"Tarjeta"}
            title={"FORMAS DE PAGO"}
            subtitle={"Aceptamos todas las tarjetas"}
          />
          <ItemMiddle
            icon={Box}
            description={"Envíos"}
            title={"FORMAS DE ENVÍO"}
            subtitle={"Atendemos a nivel nacional"}
          />
        </HomeContactContent>
      </HomeColumn>
    </Layout>
  )
}

export default IndexPage
