import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logoChacraVieja from "./../images/chacravieja.gif"
import styled from "styled-components"
// import media from "styled-media-query"
import { ResponsiveMenuComponent } from "./../components/menu"

const HeaderBrowser = styled.header`
  display: flex;
`

const Header = ({ siteTitle }) => (
  <HeaderBrowser
    style={{
      background: '#060606'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
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
