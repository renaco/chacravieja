import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logoChacraVieja from "./../images/chacravieja.gif"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
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
        <img src={ logoChacraVieja } alt="Logo" />
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Link>INICIO</Link>
        <Link>HISTORIA</Link>
        <Link>PRODUCTOS</Link>
        <Link>GALERÍA</Link>
        <Link>TURISMO Y MÁS</Link>
        <Link>CONTACTO</Link>
        <Link>Facebook</Link>

      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
