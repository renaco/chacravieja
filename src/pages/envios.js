import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  HomeItem,
  HomeSubTittle
} from "@components/home";
import shipping from "./../images/envios.jpg"
import {
  HomeContent,
  HomeColumn
} from "./../components/home/styled"

const GalleryPage = () => (
  <Layout>
    <SEO title="Envíos" />

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
          paragraph={"MOVILBUS, MARVISUR"}
          width={"66.6%"}
        />
      </HomeColumn>
    </HomeContent>
  </Layout>
)

export default GalleryPage