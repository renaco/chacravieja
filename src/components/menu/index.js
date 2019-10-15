import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import media from "styled-media-query"
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa"

const MenuNav = styled.nav`
  display: flex;
  justify-content: center;
  background: #000000;
  a {
    margin: 10px;
    color: '#DDC000';
    text-decoration: none;
    ${media.lessThan("medium")`
      margin: 20px;
    `}
  }
  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 10;
    text-align: center;
    width: 100%;
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
  right: 0;
  top: 0;
  ${media.lessThan("medium")`
    display: flex;
  `}
`

export const ResponsiveMenuComponent = props => {
  const {
    isMobileNavFolder,
    onMobileNavToggle
  } = props

  return (
    <ResponsiveMenu
      onClick={onMobileNavToggle}
      active={!isMobileNavFolder}
    >
      <IconMenu
        width="50"
        height="50"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <title>Menu</title> */}
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </IconMenu>
      <MenuNav open={!isMobileNavFolder}>
        <Link to="/">INICIO</Link>
        <Link to="/historia">HISTORIA</Link>
        <Link to="/productos">PRODUCTOS</Link>
        <Link to="/turismo-y-mas">TURISMO Y MÁS</Link>
        <Link to="/galeria">GALERÍA</Link>
        <Link to="/contacto">CONTACTO</Link>
      </MenuNav>
      <a
        href="https://api.whatsapp.com/send?phone=51942428028&text=Hola ChacraVieja deseo contactarme con ustedes"
        // target="_blank"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://www.youtube.com/channel/UCaTwEocbP1xONnioStBofGw/"
        // target="_blank"
      >
        <FaYoutube />
      </a>
      <a
        href="https://web.facebook.com/Chacraviejalicores/"
        // target="_blank"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://instagram.com/chacraviejalicores/"
        // target="_blank"
      >
        <FaInstagram />
      </a>
    </ResponsiveMenu>
  )
}
