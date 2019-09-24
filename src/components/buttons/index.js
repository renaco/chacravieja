import React from "react"
import styled from "styled-components"

const MainButton = styled.a`
  align-items: center;
  background-color: rgba(253, 247, 51, 1);
  background: yellow;
  border-color: rgba(253, 247, 51, 1);
  color: black;
  display: flex;
  justify-content: center;
  margin: 0 auto 20px;
  padding: 10px 20px;
  text-decoration: none;
`

const MainButtonInner = styled.span`
  color: #000000;
  display: inline-block;
  font: normal normal 700 15px/1.4em raleway,sans-serif;
  margin: calc(-1 * 0px) 0px 0;
  position: relative;
  transition: color 0.4s ease 0s;
  white-space: nowrap;
`

export const MainButtonAction = (props) => (
  <MainButton href={props.linkTo} target="_blank">
    <MainButtonInner>¿Más turismo? Clic aquí...</MainButtonInner>
  </MainButton>
)