import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { HeaderBrowser, HeaderContent } from "./styled"
import { ResponsiveMenuComponent } from "./../../menu"
import logoChacraVieja from "./../../../images/logo-chacravieja.svg"

const Header = ({ menuLinks }) => {
  return (
    <HeaderBrowser>
      <HeaderContent>
        <Link to="/">
          <img src={logoChacraVieja} alt="Chacra Vieja" title="Chacra Vieja" />
        </Link>
        <ResponsiveMenuComponent items={menuLinks} />
      </HeaderContent>
    </HeaderBrowser>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
