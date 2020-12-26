import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { CONFIG } from "./../../constants/global"
import media from "styled-media-query"

export const HomeColumn = styled.div`
  width: 100%;
  display: flex;
`

export const HomeItemTitle = styled.h5`
  align-items: center;
  background-color: ${CONFIG.golden};
  color: white;
  display: flex;
  font-family: 'Rokkitt', serif;
  font-weight: 600;
  font-size: 1em;
  justify-content: center;
  margin: 0 0 5px;
  min-height: 50px;
  padding: 5px 10px;
  text-decoration: none;
  text-transform: uppercase;
  ${media.lessThan("medium")`
    font-size: 1.25em;
  `}
`

export const HomeImage = styled.img`
  margin: 0 auto 3em;
  max-width: 140px;
  height: 312px;
  ${media.lessThan("medium")`
    max-width: 175px;
    height: 390px;
  `}
`

export const ContentImage = styled.div`
  display: flex;
  margin: 0 auto 1.45rem;
  text-align: center;
`

export const HomeLinkInner = styled(props => <Link {...props} />)`
  background: white;
  margin: 20px 12px;
  text-align: left;
  width: ${props => props.width ? props.width : `100%`};
  padding: 30px 35px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.12);
  text-decoration: none;
  display: block;
  p {
    color: #797979;
    min-height: 110px;
  }
  strong {
    color: black;
  }
`

export const HomeItem = ({ children, link, title, image, description, paragraph, label, width }) => (
  <HomeLinkInner to={link} width={width}>
    <img lazyload='lazy' src={image} alt={description} />
    <h2>{title}</h2>
    <p>{paragraph}</p>
    {children}
    <strong>{label}</strong>
  </HomeLinkInner>
)
