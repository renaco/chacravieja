import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import historyOne from "./../images/historia-chacravieja.webp"
import cellar from "./../images/bodega-chacravieja.webp"
import styled from "styled-components"
import media from "styled-media-query"

import { MainTitle } from "./../components/title"

const ContentHistory = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  ${media.lessThan("medium")`
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  `}
`
const ContentHistoryParagraph = styled.div`
  padding: 0 0 0 20px;
`

const HistoryPage = () => (
  <Layout>
    <SEO title="Historia" />
    <ContentHistory>

      <img src={historyOne} alt="Historia Chacra Vieja" />
      <ContentHistoryParagraph>
        <MainTitle>NUESTRA HISTORIA</MainTitle>
        <p>En el hermoso valle del Alto Mayo, en la bella ciudad de Moyobamba acompañada de añejas costumbres y tradiciones que merecen ser conocidas, ahí nace CHACRA VIEJA, el paraíso de ríos y grandes tierras húmedos, mejor clima privilegiado de la selva, manos sabias conocedoras de plantas medicinales exóticas y afrodisíacas, tomando así la producción de licores de bandera de nuestra amazonia, Nuestra marca denominada CHACRA VIEJA creada para identificarnos en el mercado con logo de un leñador, cualidad atribuida al hombre de nuestras chacras cargando leña. Nuestros productos están elaborados a base de los mejores insumos, que garantizan un gran e intenso sabor y excelente calidad. Los licores de CHACRA VIEJA pueden ser consumidos como aperitivo, bajativo, batidos, incluyendo sour y en la preparación de tragos directos.</p>
      </ContentHistoryParagraph>

      <img src={cellar} alt="Bodega Chacra Vieja" />
      <ContentHistoryParagraph>
        <h2>MISIÓN Y VISIÓN</h2>
        <h3>MISIÓN</h3>
        <p>"Satisfacer a nuestros consumidores con bebidas alcohólicas de alta calidad y disfrute creando valor para nuestros accionistas y colaboradores, con responsabilidad social"</p>

        <h3>VISIÓN</h3>
        <p>"Ser una empresa líder en nuestra región, con proyección al mundo, con crecimiento sostenido rentable a través de la innovación y orientación al mercado, comprometidos con nuestros colaboradores y la comunidad"</p>

      </ContentHistoryParagraph>
    </ContentHistory>
  </Layout>
)

export default HistoryPage