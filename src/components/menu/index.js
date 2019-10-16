import React, { PureComponent } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import media from "styled-media-query"
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { slide as Menu } from "react-burger-menu"

var MenuNavStyles = {
  bmBurgerButton: {
    background: '#000000',
    display: 'flex',
    justifyContent: 'center',
    padding: '5px',
    position: 'fixed',
    right: 0,
    top: 0,
    width: '50px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmMenuWrap: {
    textAlign: 'center',
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#000000',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    display: 'flex',
    flexFlow: 'column'
  },
  bmItem: {
    display: 'inline-block',
    padding: '10px',
    textDecoration: 'none',
    border: 'none',
    backgroundImage: 'none',
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
// const MenuNav = styled.nav`
//   a {
//     margin: 10px;
//     color: '#DDC000';
//     text-decoration: none;
//     ${media.lessThan("medium")`
//       margin: 20px;
//     `}
//   }
//   ${media.lessThan("medium")`
//     display: none;
//     flex-direction: column;
//     position: fixed;
//     text-align: center;
//     width: 100%;
//     z-index: 10;
//   `}
// `

const ResponsiveMenu = styled.div`
  display: flex;
  justify-content: center;
  a {
    padding: 10px;
  }
`

export class ResponsiveMenuComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange(state) {
    this.setState({
      menuOpen: state.isOpen
    })
  }

  closeMenu() {
    this.setState({
      menuOpen: false
    })
  }

  toggleMenu() {
    this.setState(
      state => ({
        menuOpen: !state.menuOpen
      })
    )
  }

  render() {
    return (
      <ResponsiveMenu>
        <Menu
          right
          customBurgerIcon={
            <svg
              // width="50"
              // height="50"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          }
          styles={ MenuNavStyles }
        >
          <Link to="/">INICIO</Link>
          <Link to="/historia">HISTORIA</Link>
          <Link to="/productos">PRODUCTOS</Link>
          <Link to="/turismo-y-mas">TURISMO Y MÁS</Link>
          <Link to="/galeria">GALERÍA</Link>
          <Link to="/contacto">CONTACTO</Link>
        </Menu>
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
}
