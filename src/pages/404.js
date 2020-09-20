import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Pagina no encontrada" />
    <h1>Página no encontrada</h1>
    <p>Haz tratado de entrar a una ruta desconocida. Puedes regresar atrás o intentar con el menu.</p>
  </Layout>
)

export default NotFoundPage
