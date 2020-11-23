import styled from "styled-components"
import { CONFIG } from "./../../constants/global"
import media from "styled-media-query"

export const HomeItem = styled.div`
  background: black;
  margin-bottom: 20px;
  padding: 5px;
  text-align: center;
  width: 100%;
  a {
    text-decoration: none;
    display: block;
  }
  p {
    color: white;
    min-height: 110px;
  }
`

export const HomeItemTitle = styled.h5`
  align-items: center;
  background-color: ${CONFIG.golden};
  color: white;
  display: flex;
  font-family: 'Times';
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
