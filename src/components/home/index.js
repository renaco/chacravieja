import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { CONFIG, SIZES, GRID } from "./../../constants/global"
import media from "styled-media-query"
import { HomeSubTittleStyled, HomeSubTitleBulletPoint, HomePlaceStyle } from './styled'

export const HomeColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${SIZES.mobile}) {
    flex-direction: row;
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
  background-color: #D63500;
  color: #ffffff;
  justify-content: center;
  display: inline-flex;
  padding: 10px 15px;
  font-weight: 600;
  margin: 0 20px;
  font-size: 24px;
  width: auto;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  i {
    background-image: url("data:image/svg+xml,%3Csvg width='19' height='23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.431 0h11.061l-.002 17.155h-5.684v-2.342h2.644V13.5h-2.644v-1.33h2.644v-1.314h-2.642v-5.89L7.431 0zM6.404 4.597V.836l4.072 3.761H6.404zM0 22.381V5.909h11.5v16.472H0zM7.373 8.27a2.8 2.8 0 10-3.112 4.656A2.8 2.8 0 007.373 8.27zM3.359 19.026v1.31h4.916v-1.31H3.359zm0-2.649v1.313h4.916v-1.313H3.359zm2.458-4.3a1.483 1.483 0 100-2.967 1.483 1.483 0 000 2.967z' fill='%23fff'/%3E%3C/svg%3E");
    margin-left: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    display: block;
    width: 19px;
    position: relative;
    top: 2px;
    height: 23px;
  }
`

export const HomeContactContent = styled.div`
  border-radius: 20px;
  overflow: hidden;
  display: grid;
  padding: 10px;

  @media (min-width: ${SIZES.mobile}) {
    flex-direction: row;
    display: flex;
    width: 100%;
  }
`

export const HomeContactSeparator = styled.span`
  height: 100%;
  width: 1px;
  border: 2px dashed #9D7C29;
`

export const HomeLinkInner = styled(props => <Link {...props} />)`
  background: white;
  margin: 0 0 30px;
  text-align: left;
  width: 100%;
  padding: 0;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.12);
  text-decoration: none;
  display: block;

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
  background: #E1DBD0;
  div {
    max-width: ${GRID.CONTAINER};
    margin: auto;
  }
`

const HomeLinkInnerContent = styled.div`
  padding: 25px;
`

export const HomeItem = ({ children, link, title, image, description, paragraph, label, width }) => (
  <HomeLinkInner
    to={link}
    width={width}
  >
    <img lazyload='lazy' src={image} alt={description} />
    {title && <HomeLinkInnerContent>
      <h2>{title}</h2>
      {paragraph && <p>{paragraph}</p>}
      {children}
      <strong>{label}</strong>
    </HomeLinkInnerContent>}
  </HomeLinkInner>
)

export const HomeSubTittle = ({title}) => (
  <HomeSubTittleStyled>
    <HomeSubTitleBulletPoint />
    <span>
      {title}
    </span>
  </HomeSubTittleStyled>
)

export const HomePlace = ({title, children}) => (
  <HomePlaceStyle>
    <h2>{title}</h2>
    {children}
  </HomePlaceStyle>
)

export const HomePlaceItem = ({items}) => (
  items.map((item, index) => {
    return (
      <div key={index}>
        <strong>{item.type}</strong>
        <span>{item.value}</span>
      </div>
    )
  })
)
