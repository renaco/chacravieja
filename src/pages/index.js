import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import homeGallery from "./../images/home-gallery.jpg"
import homeGuide from "./../images/home-guide.jpg"
import homeHistory from "./../images/home-history.jpg"
import ourProducts from "./../images/nuestros-productos.jpg"
import Legal from "./../components/legal"
import { HomeItem, HomeColumn } from "./../components/home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeColumn>

      <HomeItem
        link={'/galeria'}
        title={'Galería'}
        image={homeGallery}
        description={'Descarga el catalogo'}
        paragraph={'Disfruta tus licores regionales preferidos en nuestra licorería situada en Moyobamba, San Martín'}
        label={'Leer más'}
        width={'33.3%'}
      />

      <HomeItem
        link={'/productos'}
        title={'Nuestros productos'}
        image={ourProducts}
        description={'Descarga el catalogo'}
        paragraph={'Licor de Chuchuhuasi, Chuchuwasi o Chuchuwasha, macerado de la corteza del árbol amazónico de Chuchuhuasi en aguardiente de caña, su aroma y sabor amaderado delatan su origen de selva alta, entre algunas de sus propiedades'}
        label={'Leer más >'}
        width={'66.6%'}
      />

    </HomeColumn>
    <HomeColumn>
      <HomeItem
        link={'/turismo-y-mas'}
        title={'Guía turística Moyobamba'}
        image={homeGuide}
        description={'Descarga el catalogo'}
        paragraph={'En Moyobamba, en plena selva alta a 903 metros sobre el nivel del mar y rodeados de un ambiente natural propio de la zona, se encuentran los Baños Sulfurosos de Orominas baños termales a 8 grados...'}
        label={'Leer más >'}
        width={'66.6%'}
      />

      <HomeItem
        link={'/historia'}
        title={'Nuestra historia'}
        image={homeHistory}
        description={'Descarga el catalogo'}
        paragraph={'En el hermoso valle del Alto Mayo, en la bella ciudad de Moyobamba acompañada de añejas costumbres'}
        label={'Leer más >'}
        width={'33.3%'}
      />
    </HomeColumn>
    <Legal />
  </Layout>
)

export default IndexPage
