import styled from 'styled-components';
import { SIZES } from "./../../constants/global"

export const HomeSubTittleStyled = styled.h3`
  font-family: 'Rokkitt';
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 51px;
  color: #000000;
  position: relative;
  padding-bottom: 20px;
  text-align: center;
  letter-spacing: 0;
  span {
    padding-top: 55px;
    padding-left: 40px;
  }
  @media (min-width: ${SIZES.mobile}) {
    font-size: 45px;
    flex-direction: row;
    padding-top: 40px;
  }
`

export const HomeSubTitleBulletPoint = styled.em`
  position: absolute;
  bottom: 0;
  width: 9px;
  height: 156px;
  background: rgba(165, 140, 87, 0.4);
  display: block;
`

export const Strategic = styled.div`
  display: block;
`

export const HomePlaceStyle = styled.div`
  background: #E1DBD0;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
`

export const HomePlaceItem = styled.div`
  strong {
    font-family: 'Rokkitt';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
  }

  span {
    color: #797979;
  }
`
