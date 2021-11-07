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
import embarcadero from "@images/home/embarcadero.png"
import mirador from "@images/home/mirador-tahuishco.png"
import oromina from "@images/home/oromina.png"
import tingana from "@images/home/tingana.png"
import { SliderComponent } from "./../components/slider"
import { MAP, LOCATION, CATALOG } from "../constants/global.js"

import {
  HomeItem,
  HomeItemBullet,
  HomeSubTittle,
  HomePlace,
  HomePlaceItems
} from "@components/home";
import { ItemMiddle, ItemSeparator } from "@components/middle";

import {
  HomeSlide,
  HomeSlideParagraph,
  HomeContactContent,
  HomeSlideButton,
  HomeContent,
  HomeGridSlider,
  HomeColumn,
} from "./../components/home/styled"

const IndexPage = () => {

  function downloadCatalog(e) {
    console.log('this', e);
  }

  return (
    <Layout>
      <SEO title="Home" />
      <HomeColumn>
        <HomeSlide>
          <HomeGridSlider>
            <img src={Bodegon} alt="Bodegon" />
            <div className="home__content-slider">
              <img src={Typography} alt="Moyobamba San Martin" />
              <HomeSlideParagraph>
                Nuestros productos Chacra Vieja a base de frutas oriundas de la
                selva, es una línea de macerados que se convierten en los licores
                más solicitados en la ciudad de Moyobamba.
              </HomeSlideParagraph>
              <HomeSlideButton
                onClick={downloadCatalog}
                href={CATALOG}
                target="_blank"
                data-test="download-catalog"
              >
                <span>descargar catálogo</span>
                <i className="icon icon-download"></i>
              </HomeSlideButton>
            </div>
          </HomeGridSlider>
        </HomeSlide>
      </HomeColumn>

      <HomeContent background={'#E5E5E5'}>
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
            style={{boxShadow: '0 4px 5px rgba(0, 0, 0, 0.12)'}}
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
            style={{boxShadow: '0 4px 5px rgba(0, 0, 0, 0.12)'}}
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
            style={{boxShadow: '0 4px 5px rgba(0, 0, 0, 0.12)'}}
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
            style={{boxShadow: '0 4px 5px rgba(0, 0, 0, 0.12)'}}
          />
        </HomeColumn>

        <HomeColumn>
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
        </HomeColumn>
      </HomeContent>

      <HomeContent background={'#ffffff'}>
        <HomeColumn>
          <HomeSubTittle title={'SOCIOS COMERCIALES'} />
        </HomeColumn>
        <SliderComponent></SliderComponent>
      </HomeContent>

      <HomeContent background={'#E1DBD0'}>
        <HomeColumn>
          <HomeSubTittle title={'SOCIOS ESTRATÉGICOS'} />
        </HomeColumn>
        <HomeColumn>
          <HomeItemBullet
            link={'/turismo-y-mas#embardadero-de-tahuishco'}
            image={embarcadero}
            title={'Embarcadero de Tahuishco'}
            background={"transparent"}
            textAlign={'center'}
            width={"33.3%"}
          />
          <HomeItemBullet
            link={'/turismo-y-mas#banos-sulfurosos-oromina'}
            image={mirador}
            title={'Baños de Oromina'}
            background={"transparent"}
            textAlign={'center'}
            width={"33.3%"}
          />
          <HomeItemBullet
            link={'/turismo-y-mas#banos-termales-san-mateo'}
            image={oromina}
            title={'Mirador de Tahuishco'}
            background={"transparent"}
            textAlign={'center'}
            width={"33.3%"}
          />
          <HomeItemBullet
            link={'/turismo-y-mas#la-tingana'}
            title={'La Tingana'}
            image={tingana}
            background={"transparent"}
            textAlign={'center'}
            width={"33.3%"}
          />
        </HomeColumn>
      </HomeContent>
      <HomeContent>
        <HomeColumn>
          <HomePlace title={'Moyobamba'}
            url={MAP}
            target="_blank">
            <HomePlaceItems items={LOCATION} />
            <HomeSlideButton
                data-test="link-map"
              >
                <span>ver mapa</span>
                <i className="icon icon-map"></i>
              </HomeSlideButton>
          </HomePlace>
        </HomeColumn>
      </HomeContent>
    </Layout>
  )
}

export default IndexPage
