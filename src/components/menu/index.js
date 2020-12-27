import React, { PureComponent } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa"
import { slide as Menu } from "react-burger-menu"
import { SIZES } from "../../constants/global.js"

const MenuNavStyles = {
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
  bmCross: {
    backgroundColor: '#947c22',
    height: '35px',
    width: '5px',
  },
  bmCrossButton: {
    width: '45px',
    height: '45px'
  },
  bmMenuWrap: {
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    height: '100%'
  },
  bmMenu: {
    background: '#000000',
    padding: '0',
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
    background: 'rgba(0, 0, 0, 0.3)',
    top: 0,
    left: 0
  }
}

const ResponsiveMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.mobile ? 'column' : 'row'};
  margin-left: auto;

  a {
    margin: 10px;
    display: block;
  }
`

const MenuLinks = () => {
  return (
    <>
      <Link to="/">INICIO</Link>
      <Link to="/historia">HISTORIA</Link>
      <Link to="/productos">PRODUCTOS</Link>
      <Link to="/turismo-y-mas">TURISMO Y MÁS</Link>
      <Link to="/galeria">GALERÍA</Link>
      <Link to="/contacto">CONTACTO</Link>
    </>
  )
}

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
        {/* <MenuLinks mobile={false} /> */}
        <a href="https://www.youtube.com/channel/UCaTwEocbP1xONnioStBofGw/">
          <FaYoutube />
        </a>
        <a href="https://web.facebook.com/Chacraviejalicores/">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/chacraviejalicores/">
          <FaInstagram />
        </a>
        <Menu
          right
          customBurgerIcon={
            <svg width="40" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#A58C57" d="M0 0h40v4H0zM0 12h40v4H0zM0 24h40v4H0z" />
            </svg>
          }
          outerContainerId={"menu-container"}
          pageWrapId={"menu-wrap"}
          styles={MenuNavStyles}
        >
          <MenuLinks />
        </Menu>
      </ResponsiveMenu>
    )
  }
}
