/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import "./layout.css"
import "./customs.css"

import { GRID, COLORS } from "./../constants/global"
import ShareWhatsapp from "./../components/whatsapp"
import Header from "./../components/Layout/Header"
import fullBackground from "./../images/background.png"

const Footer = styled.footer`
  display: flex;
  background-color: ${COLORS.PRIMARY};
  justify-content: center;
  margin-top: 10px;
  padding: 45px 0;
  font-family: 'Rokkitt', serif;
  font-size: 24px;
`

const BodyApp = styled.div`
  background: url(${fullBackground});
  min-height: 100vh;
`

const Container = styled.div`
  background: rgba(0, 0, 0, 0.75);
  margin: 0 auto;
  max-width: ${GRID.CONTAINER};
  padding-top: 0;
  padding: 0 1.0875rem 1.45rem;
`

const PreFooter = styled.span`
  display: inline-block;
  padding: 0;
  margin: 0;
  font-size: 1.15em;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            link
            label
          }
        }
      }
    }
  `)
  
  return (
    <BodyApp>
      <Header 
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
        />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer>
        © {new Date().getFullYear()} Todos los derechos reservados | Licores Regionales <PreFooter>Chacra Vieja</PreFooter> - Moyobamba, San Martín, Perú.
        {` `}
      </Footer>
      <ShareWhatsapp />
    </BodyApp>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
