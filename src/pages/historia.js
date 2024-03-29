import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import cellar from "./../images/history/bodega-chacravieja.jpg"

import { MainTitle } from "./../components/title"
import { WrapContent, WrapContentParagraph } from "./../components/grid"

const HistoryPage = () => (
  <Layout>
    <SEO title="Historia" />
    <MainTitle>NUESTRA HISTORIA</MainTitle>
    <WrapContent>
      <WrapContentParagraph>
        <p>En el hermoso valle del Alto Mayo, en la bella ciudad de Moyobamba acompañada de añejas costumbres y tradiciones que merecen ser conocidas, ahí nace CHACRA VIEJA, el paraíso de ríos y grandes tierras húmedos, mejor clima privilegiado de la selva, manos sabias conocedoras de plantas medicinales exóticas y afrodisíacas, tomando así la producción de licores de bandera de nuestra amazonia.</p>
        <p>Nuestra marca denominada CHACRA VIEJA creada para identificarnos en el mercado con logo de un leñador, cualidad atribuida al hombre de nuestras chacras cargando leña. Nuestros productos están elaborados a base de los mejores insumos, que garantizan un gran e intenso sabor y excelente calidad. Los licores de CHACRA VIEJA pueden ser consumidos como aperitivo, bajativo, batidos, incluyendo sour y en la preparación de tragos directos.</p>
      </WrapContentParagraph>
      <img lazyload='lazy' src={cellar} alt="Bodega Chacra Vieja" />

      <WrapContentParagraph>
        <h3>MISIÓN</h3>
        <p>"Satisfacer a nuestros consumidores con bebidas alcohólicas de alta calidad y disfrute creando valor para nuestros accionistas y colaboradores, con responsabilidad social"</p>

        <h3>VISIÓN</h3>
        <p>"Ser una empresa líder en nuestra región, con proyección al mundo, con crecimiento sostenido rentable a través de la innovación y orientación al mercado, comprometidos con nuestros colaboradores y la comunidad"</p>
      </WrapContentParagraph>
    </WrapContent>
  </Layout>
)

export default HistoryPage