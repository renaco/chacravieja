// import React from "react"
import styled from "styled-components"
import { CONFIG } from "./../../constants/global"
// import { StaticQuery, graphql } from "gatsby"
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
  }
`

export const HomeItemTitle = styled.h5`
  align-items: center;
  background-color: ${CONFIG.golden};
  color: white;
  display: flex;
  font-family: 'Times';
  font-size: 0.9em;
  justify-content: center;
  margin: 0 0 5px;
  min-height: 50px;
  padding: 5px 10px;
  text-decoration: none;
  ${media.lessThan("medium")`
    font-size: 1.25em;
  `}
`