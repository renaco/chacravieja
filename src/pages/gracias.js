import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  HomeContent,
  HomeColumn,
} from "./../components/home/styled"

import {
  HomeSubTittle
} from "@components/home";

const ThanksPage = () => (
  <Layout>
    <SEO title="Contacto" />
    <HomeContent background={'#E5E5E5'}>
      <HomeColumn>
        <HomeSubTittle title={'Gracias por contactarse con nosotros, estaremos respondiendo lo más antes posible'} />
      </HomeColumn>
    </HomeContent>
  </Layout>
)

export default ThanksPage