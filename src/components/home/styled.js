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
  /* white-space: pre; */
  span {
    padding-top: 55px;
    /* line-height: 1em; */
    padding-left: 40px;
  }
  @media (min-width: ${SIZES.mobile}) {
    font-size: 45px;
    flex-direction: row;
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
