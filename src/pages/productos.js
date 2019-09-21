import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import liquorsImages from "./../images/titulo-licores-de-la-selva.gif"

const titleToUse = 'Productos'

const ProductsPage = () => (
  <Layout>
    <SEO title={titleToUse} />
    <img src={liquorsImages} alt=""/>
    <h1>{titleToUse}</h1>
  </Layout>
)

export default ProductsPage