/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import styled from "styled-components"
import fullBackground from "./../images/full-background.webp"
import "./layout.css"

const BodyApp = styled.div`
  background: url(${fullBackground});
  min-height: 100vh;
  `
    // * {
    //   background: rgba(0, 128, 0, 0.25);
    //   border: 1px solid green;
    // }

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
  background: rgba(0, 0, 0, 0.5);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <BodyApp>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, ©Licores Regionales Chacra Vieja - Moyobamba, San Martín, Perú
          {` `}
        </footer>
      </Container>
    </BodyApp>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
