import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { COLORS } from "./../../src/constants/global.js"
import logoChacraVieja from "./../images/logo-chacravieja.svg"
import { ResponsiveMenuComponent } from "./../components/menu"

const HeaderBrowser = styled.header`
  display: flex;
  img {
    margin-bottom: 0;
  }
  a {
    font-family: 'Rokkitt', serif;
    font-weight: 600;
    color: ${COLORS.PRIMARY}
  }
`

const Header = ({ data }) => (
  <HeaderBrowser
    style={{
      background: '#060606'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45em 1.0875rem 1.45rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <img src={logoChacraVieja} alt="Chacra Vieja" title="Chacra Vieja" />
        </Link>
      </h1>
      <ResponsiveMenuComponent/>
    </div>
  </HeaderBrowser>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
