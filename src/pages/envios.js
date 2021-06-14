import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  HomeItem,
  HomeContent,
  HomeColumn,
  HomeSubTittle
} from "@components/home";
import shipping from "./../images/envios.jpg"

const GalleryPage = () => (
  <Layout>
    <SEO title="Galería" />

    <HomeContent>
      <HomeColumn>
        <HomeSubTittle title={'FORMAS DE ENVÍO'} />
      </HomeColumn>
      <HomeColumn>
        <HomeItem
          image={shipping}
          description={"Hacemos envíos a todo el Perú"}
          width={"33.3%"}
        />

        <HomeItem
          title={"Hacemos envíos a todo el Perú"}
          paragraph={
            "Hacemos envíos a todo el país por Olva Courier y Movil Tour de manera que puedas hacer tus compras cómodamente desde tu casa u oficina."
          }
          width={"66.6%"}
        />
      </HomeColumn>
    </HomeContent>
  </Layout>
)

export default GalleryPage