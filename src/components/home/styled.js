import styled from 'styled-components';
import { SIZES, GRID } from "./../../constants/global"

export const HomeSubTittleStyled = styled.h3`
  font-family: 'Rokkitt';
  font-size: 35px;
  font-weight: 700;
  line-height: 1em;
  color: #000000;
  position: relative;
  padding-bottom: 20px;
  padding-top: 40px;
  text-align: center;
  letter-spacing: 0;
  span {
    padding-top: 55px;
    padding-left: 0;
    @media (min-width: ${SIZES.mobile}) {
      padding-left: 40px;
    }
  }
  @media (min-width: ${SIZES.mobile}) {
    font-size: 45px;
    flex-direction: row;
    padding-top: 40px;
    padding-left: 40px;
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

export const HomePlaceStyle = styled.a`
  background: #E1DBD0;
  border-radius: 10px;
  display: grid;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  grid-template-columns: none;
  width: 90%;
  margin: auto;
  @media (min-width: ${SIZES.mobile}) {
    margin: 0 auto;
    grid-template-columns: 1fr 8fr;
  }
  `

export const HomePlaceItems = styled.div`
  display: grid;
  max-width: ${GRID.CONTAINER};
  align-items: center;
  grid-template-columns: 2fr 5fr;
`

export const HomePlaceListItems = styled.div`
  display: grid;
  grid-template-columns: none;
  @media (min-width: ${SIZES.tablet}) {
    display: grid;
    grid-template-columns: 2fr 3fr;
  }
  @media (min-width: ${SIZES.mobile}) {
    justify-content: space-around;
    display: flex;
    align-items: center;
  }
`

export const HomePlaceItemTitle = styled.h2`
  font-family: 'Rokkitt';
  font-size: 36px;
  font-style: normal;
  margin-bottom: 0;
  color: #000000;
  font-weight: 700;
`

export const HomePlaceItem = styled.div`
  display: flex;
  align-items: center;
  p {
    font-family: 'Rokkitt';
    font-size: 24px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0;
    text-align: left;
    color: #000000;
    display: block;
    padding-right: 5px;
    margin-bottom: 0;
  }

  span {
    color: #797979;
  }
`