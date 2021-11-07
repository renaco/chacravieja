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

import { GRID, COLORS, SIZES } from "./../constants/global"
import ShareWhatsapp from "./../components/whatsapp"
import Header from "./../components/Layout/Header"
import fullBackground from "./../images/background.png"
import Legal from "./../components/legal"

const Footer = styled.footer`
  display: flex;
  background-color: ${COLORS.PRIMARY};
  justify-content: center;
  margin-top: 0;
  flex-direction: column;
  padding: 45px;
  font-family: 'Rokkitt', serif;
  font-size: 24px;

  @media (min-width: ${SIZES.mobile}) {
    flex-direction: row;
  }
`

const BodyApp = styled.div`
  background: url(${fullBackground});
  min-height: 100vh;
`

const Container = styled.div`
  background: rgba(0, 0, 0, 0.75);
  margin: 0 auto;
  /* max-width: ${GRID.CONTAINER}; */
  padding-top: 0;
  padding: 0;
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
        © {new Date().getFullYear()} Todos los derechos reservados | Licores Regionales <PreFooter> Chacra Vieja</PreFooter> - Moyobamba, San Martín, Perú.
        {` `}
      </Footer>
      <Legal />
      <ShareWhatsapp />
    </BodyApp>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
