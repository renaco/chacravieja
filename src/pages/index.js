import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logoBig from "./../images/logo-big.webp"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginLeft: `auto`, marginRight: `auto` }}>
      <img src={logoBig} />
    </div>
    <Link to="/contacto/">Contacto</Link>
  </Layout>
)

export default IndexPage
