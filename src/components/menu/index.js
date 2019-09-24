import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import media from "styled-media-query"

const MenuNav = styled.nav`
  display: flex;
  justify-content: center;
  a {
    margin: 10px;
  }
  ${media.lessThan("medium")`
    display: none;
  `}
  ${p => p.open ? css`
    display: block;
    ` : css`
    display: none;
  `}
`

const ResponsiveMenu = styled.nav`
  display: flex;
  justify-content: center;
`

const IconMenu = styled.svg`
  background: black;
  display: none;
  padding: 5px;
  position: fixed;
  right: 5px;
  top: 5px;
  ${media.lessThan("medium")`
    display: flex;
  `}
`

export const ResponsiveMenuComponent = (props) => {
  const {
    isMobileNavFolder,
    onMobileNavToggle
  } = props

  return (
    <ResponsiveMenu>
      <IconMenu
        onClick={onMobileNavToggle}
        active={!isMobileNavFolder}
        width="50" height="50" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </IconMenu>
      <MenuNav open={!isMobileNavFolder}>
        <Link to="/">INICIO</Link>
        <Link to="/historia">HISTORIA</Link>
        {/* <Link to="/productos">PRODUCTOS</Link>  */}
        <Link to="/turismo-y-mas">TURISMO Y MÁS</Link>
        {/* <Link>GALERÍA</Link> */}
        <Link to="/contacto">CONTACTO</Link>
        {/* <Link>Facebook</Link> */}
      </MenuNav>
    </ResponsiveMenu>
  )
}
