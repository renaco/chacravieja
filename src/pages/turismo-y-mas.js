import React from "react"
import { MainTitle } from "./../components/title"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { WrapContent, WrapContentParagraph } from "./../components/grid"

import morro from "./../images/tourism/morro-de-calzada.jpg"
import banosTermales from "./../images/tourism/banos-termales.jpg"
import embarcaderoPuertoTahuishco from "./../images/tourism/embarcadero-puerto-de-tahuishco.jpg"
import tingana from "./../images/tourism/tingana.jpg"

import { MainButtonAction } from "./../components/buttons"

const TourismPage = () => (
  <Layout>
    <SEO title="Turismo y más" />
    <MainTitle>TURISMO EN MOYOBAMBA</MainTitle>
    <WrapContent>

      <img src={morro} alt="Morro de Calzada" />
      <WrapContentParagraph>
        <h2>MORRO DE CALZADA</h2>
        <p>Se presenta como cerro testigo (o apartado) de la cadena montañosa de la denominada cordillera oriental. El morro se levanta en medio de la llanura del Valle del Mayo a una altura de 575 m. y a una altitud de 1430 msnm. Desde la cima se observan las ciudades de Moyobamba y Rioja, así como la densa vegetación y belleza paisajística del lugar.</p>
      </WrapContentParagraph>

      <WrapContentParagraph>
        <h2>BAÑOS SULFUROSOS DE OROMINA</h2>
        <p>En Moyobamba, en plena selva alta a 903 metros sobre el nivel del mar y rodeados de un ambiente natural propio de la zona, se encuentran los Baños Sulfurosos de Orominas baños termales a 8 grados.Se conoce que el agua sulfurosa tiene propiedades medicinales y terapéuticas que los turistas aprovechan. Allí, se pueden encontrar tres fosas construidas a base de piedra, adornando las faldas del Cerro Oromina y muy cerca de la mágica cascada de Asnacyacu.</p>
      </WrapContentParagraph>
      <img src={banosTermales} alt="Bodega Chacra Vieja" />

      <img src={embarcaderoPuertoTahuishco} alt="Embarcadero de Tahuishco" />
      <WrapContentParagraph>
        <h2>EMBARCADERO DE TAHUISHCO</h2>
        <p>La punta de Tahuishco es un lugar muy concurrido en Moyobamba, desde donde se puede divisar el puerto del mismo nombre, y el sinuoso recorrido del río Mayo formando el Valle del Alto Mayo. Las "puntas" son miradores naturales que se encuentran alrededor de la ciudad de Moyobamba, la cual esta situada en una extensa meseta, es por eso que a esta ciudad también se la reconoce por sus diversos Barrancos. La punta de Tahuishco es la más conocida y concurrida, donde aparte de apreciar el paisaje se puede degustar de diversos platos típicos en los restaurantes que se encuentran en el lugar. Por las noches además se puede visitar discotecas como "Kovachi", muy concurrida por los Moyobambinos. En el puerto de Tahuishco puedes también realizar un paseo en botemotor por las aguas del caudaloso río Mayo.</p>
      </WrapContentParagraph>

      <img src={banosTermales} alt="Baños Termales de San Mateo" />
      <WrapContentParagraph>
        <h2>BAÑOS TERMALES DE SAN MATEO</h2>
        <p>Los Baños Termales de San Mateo surgen gracias a la filtraciones de agua que brotan del Cerro San Mateo, de donde estos baños adquieren el nombre. Las aguas que brotan de la corteza terrestre, fluyen hasta unirse con corrientes superficiales, mismas que permiten que el agua se tempere a 42°C.</p>
      </WrapContentParagraph>

      <WrapContentParagraph>
        <h2>LA TINGANA</h2>
        <p>El nombre Tingana, se debe a que en este área abundan árboles llamado comúnmente por los pobladores “Choloques”, cuyo fruto es pequeño de color negro, no comestible, de forma redonda y de consistencia muy dura, utilizada antiguamente por los niños para jugar como boliches, de allí proviene la palabra “tingar” las bolitas. Cuando los niños jugaban, las abuelitas decían a los niños “tinga hijito con ganas” “tinga con ganas”. Desde entonces a ese lugar se le denomina Tingana.</p>
      </WrapContentParagraph>
      <img src={tingana} alt="La Tingana" />

      <MainButtonAction linkTo="https://turismoi.pe/ciudades/provincia/moyobamba.htm" />
    </WrapContent>
  </Layout>
)

export default TourismPage