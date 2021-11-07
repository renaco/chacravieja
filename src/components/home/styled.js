import React from "react"
import styled from 'styled-components';
import {
  CONFIG,
  COLORS,
  GRID,
  SIZES
} from "./../../constants/global"
import { Link } from "gatsby"
import media from "styled-media-query"

export const HomeColumn = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  width: 90%;
  flex-direction: column;

  @media (min-width: ${SIZES.mobile}) {
    flex-direction: row;
    max-width: ${GRID.CONTAINER};
  }
`

export const HomePlaceTitleRowGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${SIZES.tablet}) {
    flex-direction: row;
  }
`

export const HomePlaceTitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  @media (min-width: ${SIZES.tablet}) {
    align-items: center;
  }
`

export const HomePlaceImage = styled.img`
  width: 20px;
  height: 28px;
  margin-right: 10px;
  margin-top: -1px;
  @media (min-width: ${SIZES.tablet}) {
    margin-top: -5px;
  }
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
`;

export const HomeSlide = styled.div`
  background: #ffffff;
  padding: 0;
  max-width: ${GRID.CONTAINER};
  margin: 0 auto 90px;
`

export const HomeGridSlider = styled.div`
  display: grid;
  grid-template-columns: none;
  @media (min-width: ${SIZES.mobile}) {
    grid-template-columns: 6fr 4fr;
  }
`

export const HomeSlideParagraph = styled.p`
  color: #767676;
  padding: 0 20px;
`

export const HomeSlideButton = styled.a`
  cursor: pointer;
  background-color: #D63500;
  color: #ffffff;
  justify-content: center;
  display: flex;
  padding: 10px 15px;
  font-weight: 600;
  margin: 0 auto;
  font-size: 24px;
  width: auto;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  height: 50px;
  @media (min-width: ${SIZES.mobile}) {
    display: inline-flex;
  }
`

export const HomeContactContent = styled.div`
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 1em auto;
  @media (min-width: ${SIZES.mobile}) {
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`

export const HomeContactSeparator = styled.span`
  height: 100%;
  width: 1px;
  border: 2px dashed #9D7C29;
`

export const HomeLinkInner = styled(props => <Link {...props} />)`
  background: ${props => props.background ? props.background : COLORS.WHITE};
  padding: 0;
  text-decoration: none;
  display: block;
  
  &.is-content {
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.12);
  }
  
  @media (min-width: ${SIZES.mobile}) {
    margin: 20px 12px;
    padding: 0;
    width: ${props => props.width ? props.width : '100%'};
  }

  img {
    margin-bottom: 0;
  }

  p {
    color: #797979;
    min-height: 110px;
  }

  strong {
    color: black;
  }
`

export const HomeContent = styled.div`
  background: ${props => props.background ? props.background : '#E1DBD0'};
  padding-bottom: 20px;
`

export const HomeLinkInnerContent = styled.div`
  padding: 25px;
`

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
  background: #E5E5E5;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  grid-template-columns: none;
  margin: auto;
  width: 100%;
  @media (min-width: ${SIZES.mobile}) {
    margin: 0 auto;
  }
  `

export const HomePlaceItemsStyled = styled.div`
  display: grid;
  max-width: ${GRID.CONTAINER};
  align-items: center;
  grid-template-columns: 2fr 5fr;
`

export const HomePlaceListItems = styled.div`
  display: grid;
  grid-template-columns: none;
  width: 80%;
  @media (min-width: ${SIZES.tablet}) {
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
  margin-top: -5px;
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

export const HomeItemBulletTitle = styled.h2`
  font-family: 'Rokkitt';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
`