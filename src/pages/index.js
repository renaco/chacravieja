import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import homeGallery from "@images/home-gallery.jpg"
import homeGuide from "@images/home-guide.jpg"
import homeHistory from "@images/home-history.jpg"
import ourProducts from "@images/nuestros-productos.jpg"
import Card from "@images/icons/card.svg"
import Box from "@images/icons/box.svg"
import Typography from "@images/typography.svg"
import Bodegon from "@images/bodegon.jpg"
// import Map from "@images/icons/map.svg"
// import embarcadero from "@images/home/embarcadero.png"
// import mirador from "@images/home/mirador-tahuishco.png"
// import oromina from "@images/home/oromina.png"
// import tingana from "@images/home/tingana.png"

import {
  HomeItem,
  HomeContent,
  HomeColumn,
  HomeContactContent,
  HomeSlide,
  HomeSlideParagraph as HomeSlideParagraph,
  HomeSlideButton,
  HomeGridSlider,
  HomeSubTittle,
  HomePlace,
  HomePlaceItems
} from "@components/home";
import { ItemMiddle, ItemSeparator } from "@components/middle";

const IndexPage = () => {

  function downloadCatalog(e) {
    console.log('this', e);
  }

  const items = [
    { type: 'Región:', value: 'Región San Martín' },
    { type: 'Latitud:', value: -6.03473 },
    { type: 'Longitud:', value: -76.9747 },
    { type: 'Altitud:', value: '860 msnm' }
  ]

  return (
    <Layout>
      <SEO title="Home" />
      <HomeColumn>
        <HomeSlide>
          <HomeGridSlider>
            <img src={Bodegon} alt="Bodegon" />
            <div>
              <img src={Typography} alt="Moyobamba San Martin" />
              <HomeSlideParagraph>
                Nuestros productos Chacra Vieja a base de frutas oriundas de la
                selva, es una línea de macerados que se convierten en los licores
                más solicitados en la ciudad de Moyobamba.
              </HomeSlideParagraph>
              <HomeSlideButton
                onClick={downloadCatalog}
                href="https://archivos.chacravieja.com/catalogo.pdf"
                target="_blank"
                data-test="download-catalog"
              >
                <span>descargar catálogo</span>
                <i></i>
              </HomeSlideButton>
            </div>
          </HomeGridSlider>
        </HomeSlide>
      </HomeColumn>

      <HomeContent>
        <HomeColumn>
          <HomeSubTittle title={'VIVE NUESTRA EXPERIENCIA'} />
        </HomeColumn>
        <HomeColumn>
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

        <HomeContactContent>
          <ItemMiddle
            link={'/formas-de-pago'}
            icon={Card}
            description={"Tarjeta"}
            title={"FORMAS DE PAGO"}
            subtitle={"Aceptamos todas las tarjetas"}
          />
          <ItemSeparator />
          <ItemMiddle
            link={'/envios'}
            icon={Box}
            description={"Envíos"}
            title={"FORMAS DE ENVÍO"}
            subtitle={"Atendemos a nivel nacional"}
          />
        </HomeContactContent>
      </HomeContent>
      {/* <HomeContent>
        <HomeColumn>
          <HomeSubTittle title={'SITIOS ESTRATÉGICOS'} />
        </HomeColumn>
        <HomeColumn>
          <HomeItem
            image={embarcadero}
            paragraph={
              "Embarcadero de Tahuishco Av. Los Huambrillos 333 Celular 987229222"
            }
            width={"33.3%"}
          />
          <HomeItem
            image={mirador}
            paragraph={
              "Baños de Oromina Av. Los Huambrillos 333 Celular 987229222"
            }
            width={"33.3%"}
          />
          <HomeItem
            image={oromina}
            paragraph={
              "Mirador de Tahuishco Av. Los Huambrillos 333 Celular 987229222 "
            }
            width={"33.3%"}
          />
          <HomeItem
            image={tingana}
            paragraph={
              "La Tingana Av. Los Huambrillos 333 Celular 987229222"
            }
            width={"33.3%"}
          />
        </HomeColumn>
      </HomeContent> */}
      <HomeContent>
        <HomeColumn>
          {/* <img src={Map} alt="Moyobamba" width="17px" /> */}
          <HomePlace title={'Moyobamba'} url="https://www.google.com/maps?q=moyobamba&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjN7sGbybTxAhUUIbkGHTsIBXMQ_AUoAnoECAEQBQ" target="_blank">
            <HomePlaceItems items={items} />
          </HomePlace>
        </HomeColumn>
      </HomeContent>
    </Layout>
  )
}

export default IndexPage
