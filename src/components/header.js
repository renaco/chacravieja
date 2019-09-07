import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logoChacraVieja from "./../images/chacravieja.gif"
import styled from "styled-components"
// import { Flex, Box } from '@rebass/grid'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  a {
    margin: 10px;
  }
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
        padding: `1.45rem 1.0875rem`,
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
        {/* 
        <Link>HISTORIA</Link>
        <Link>PRODUCTOS</Link>
        <Link>GALERÍA</Link>
        <Link>TURISMO Y MÁS</Link>
      */}
        <Link to="/contacto">CONTACTO</Link>
        {/* <Link>Facebook</Link> */}
      </Nav>
    </div>
    {/* <Flex>
      <Box
        sx={{
          display: 'grid',
          gridGap: 4
        }}
      >Flex asap</Box>
      <Box>Box</Box>
    </Flex> */}
  </HeaderBrowser>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
