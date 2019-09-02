import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contacto" />
    <h1>ESCRÍBENOS</h1>
    <p>Chacra Vieja Licores <br/>
    Jr. Reyes Guerra N° 870 
    Barrio de Zaragoza, Moyobamba, Perú
    ventas@chacravieja.com</p>
    <Link to="/">Inicio</Link>
  </Layout>
)

export default SecondPage
