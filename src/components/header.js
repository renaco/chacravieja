import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logoChacraVieja from "./../images/chacravieja.gif"
import styled from "styled-components"
import media from "styled-media-query"

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  a {
    margin: 10px;
  }
  ${media.lessThan("medium")`
    display: none;
  `}
`

const HeaderBrowser = styled.header`
  display: flex;
`

const Header = ({ siteTitle }) => (
  <HeaderBrowser
    style={{
      background: 'black'
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
          <img src={logoChacraVieja} alt="Logo" />
        </Link>
      </h1>
      <Nav>
        {/* <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link> */}
        <Link to="/">INICIO</Link>
        <Link to="/historia">HISTORIA</Link>
        {/* <Link to="/productos">PRODUCTOS</Link>  */}
        <Link to="/turismo-y-mas">TURISMO Y MÁS</Link>
        {/* 
          <Link>GALERÍA</Link>
        */}
        <Link to="/contacto">CONTACTO</Link>
        {/* <Link>Facebook</Link> */}
      </Nav>
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
