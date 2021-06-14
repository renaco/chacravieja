import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  HomeItem,
  HomeContent,
  HomeColumn,
  HomeSubTittle
} from "@components/home";
import pagos from "./../images/pagos.jpg"

const GalleryPage = () => (
  <Layout>
    <SEO title="Galería" />

    <HomeContent>
      <HomeColumn>
        <HomeSubTittle title={'FORMAS DE PAGO'} />
      </HomeColumn>
      <HomeColumn>
        <HomeItem
          image={pagos}
          description={"Aceptamos todas las tarjetas"}
          width={"33.3%"}
        />

        <HomeItem
          title={"Aceptamos todas las tarjetas"}
          paragraph={
            "Contamos con la siguientes cuentas: Visa, Mastercard, American Express. Ademas puede depositarnos a los siguientes cuentas:"
          }
          width={"66.6%"}
        />
      </HomeColumn>
    </HomeContent>
  </Layout>
)

export default GalleryPage