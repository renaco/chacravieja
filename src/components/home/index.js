// import React from "react"
import styled from "styled-components"
import { CONFIG } from "./../../constants/global"
// import { StaticQuery, graphql } from "gatsby"

export const HomeItem = styled.div`
  background: black;
  margin-bottom: 20px;
  padding: 5px;
  text-align: center;
  width: 100%;
`

export const HomeItemTitle = styled.h5`
  align-items: center;
  display: flex;
  font-family: 'Times';
  font-size: 0.9em;
  justify-content: center;
  margin: 0 0 5px;
  min-height: 50px;
  padding: 5px 10px;
  background-color: ${CONFIG.bgTitleColor};
`