import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import liquorsImages from "./../images/titulo-licores-de-la-selva.gif"
import { WrapContent, WrapContentParagraph } from "./../components/grid"
import { ImageProductContent } from "./../components/images"

import indanachado from "./../images/products/indanachado.png"
import chuchuhauasi from "./../images/products/chuchuhauasi.png"
import machaska from "./../images/products/machaska.png"
import uvachado from "./../images/products/uvachado.png"
import rompeCalzon from "./../images/products/rompe-calzon.png"
import sieteRaices from "./../images/products/siete-raices.png"

const ProductsPage = () => (
  <Layout>
    <SEO title="Productos" />
    <img src={liquorsImages} alt="" />
    <h2>Descubre la variedad de nuestros licores regionales</h2>
    <WrapContent>
      <ImageProductContent src={chuchuhauasi} alt="Chuchuhuasi" />
      <WrapContentParagraph>
        <h2>Chuchuhuasi</h2>
        <p>Licor de chuchuhuasi, chuchuwasi o chuchuwasha, macerado de la corteza del árbol amazónico de chuchuhuasi en aguardiente de caña, su aroma y sabor amaderado delatan su origen de selva alta, entre algunas de sus propiedades y bondades son: antioxidante, antiviral, astringente para problemas digestivos entre otros. Sobre sus propiedades levanta un halo de misticismo y tradición curativa con siglos de antigüedad y es un elixir.</p>
        <p>Se adecua a nuestro consumo y en especial para la preparación de tragos directos, batidos, sours.  Puede utilizarse también como maridaje para la repostería y cocina.</p>
        <p><strong>Detalles</strong>
          <br />
          Presentación    :  750ml / 500ml
<br />
          Vol. Alcohólico :  40% Vol.</p>
      </WrapContentParagraph>
      <ImageProductContent src={uvachado} alt="Uvachado" />
      <WrapContentParagraph>
        <h2>Uvachado</h2>
        <p>Nuestro licor de uvachado bebida exótica de nuestra selva peruana, se trata  de un macerado de la uva isabela en aguardiente de caña, se caracteriza por ser una bebida  bandera de nuestra región amazónica. En su clase, es la bebida de mayor consumo, su delicadeza dulzura realza los aromas naturales  de nuestra selva. Este emblemático licor  de agradable sabor , es especial como aperitivo, pudiendo servirse solo, ligeramente helado o a las rocas, además puede utilizarse como  maridaje en la repostería y cocina</p>
        <p><strong>Detalles</strong>
          <br />
          Presentación     :  750ml / 500ml
<br />
          Vol. Alcohólico  :   21% Vol.</p>
      </WrapContentParagraph>


      <ImageProductContent src={sieteRaices} alt="Siete Raíces" />
      <WrapContentParagraph>
        <h2>Siete Raíces</h2>
        <p>El licor de siete raíces puede ser consumido como aperitivo, bajativo, gracias al volumen alcohólico de 40% se pueden preparar tragos directos, batidos, sours y cócteles.</p>
        <p>Es uno los más conocidos del pueblo peruano sus propiedades naturales de mejorar  el sistema inmunológico  y evitar resfrío,  energizante de la actividad física y mental para hombres y mujeres, previene el envejecimiento prematuro.</p>
        <p>Como fines terapéuticos se recomienda tomar un shot de una onza al día,  con fines afrodisíacos se recomienda tomar tres shot al día después de cada comida</p>
        <p><strong>Detalles</strong>
          <br />
          Presentación     : 75Oml /500ml
<br />
          Vol. Alcohólico   : 40% Vol.</p>
      </WrapContentParagraph>

      <ImageProductContent src={rompeCalzon} alt="Rompe Calzón" />
      <WrapContentParagraph>
        <h2>Rompe Calzón</h2>
        <p>Licor famoso por sus propiedades afrodisíacas, llamado también "Levanta Muertos" y "Quiebra Catre",  es un macerado en fino aguardiente de caña con cortezas y raíces de plantas que contienen estimuladores altamente vigorizantes y euforizantes del libido y recuperar el deseo sexual, de este se prepara los tragos: "Para Para" y "Levanta Lázaro".</p>
        <p>Nuestro licor  Rompe Calzón es adecuado para preparar tragos directos, batidos, sours, como también puede utilizarse como maridaje en la repostería y cocina.</p>
        <p><strong>Detalles</strong>
          <br />
          Presentación    :  750ml / 500ml
<br />
          Vol. Alcohólico :   40%  Vol.</p>
      </WrapContentParagraph>

      <ImageProductContent src={indanachado} alt="Indanachado" />
      <WrapContentParagraph>
        <h2>Indanachado</h2>
        <p>Licor exclusivo de la región San Martín, macerado con la fruta del Indano con fuerte aroma y agradable sabor, conocido por sus propiedades de antienvegecimiento y antioxidante.</p>
        <p>Puede tomarse como aperitivo bajativo, pude tomarse solo, a tiempo, ligeramente helado o en las rocas.</p>
        <p><strong>Detalles</strong>
          <br />
          Presentación    :  750ml / 500ml
<br />
          Vol. Alcohólico :   17%  Vol.</p>
      </WrapContentParagraph>

      <ImageProductContent src={machaska} alt="Machaska" />
      <WrapContentParagraph>
        <h2>Machaska</h2>
        <p>Licor obtenido de la destilación de los jugos y melados de la caña de azúcar previamente fermentados, elaborado con esencias naturales y tratada de la mejor manera, todos estos insumos mezclados conjugan el sabor inigualable del machaska (aguardiente de caña) chacra vieja.</p>
        <p>Por su gran sabor quien encuentra en nuestro producto, ligero, suave, limpio, sin sabor, sin color, sin olor  y comenta que chacra vieja machaska  esta hecho para brindar, deleite del paladar, como también se adecua a la preparación de tragos directos, batidos y sours, pudiendo también utilizarse como maridaje en la repostería y cocina.</p>
        <p><strong>Detalles</strong>
          <br />
          Presentación    :  750ml / 500ml
<br />
          Vol. Alcohólico :   40%  Vol.</p>
      </WrapContentParagraph>

    </WrapContent>
  </Layout>
)

export default ProductsPage