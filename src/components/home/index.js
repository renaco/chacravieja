import React from "react"
import {
  HomeSubTittleStyled,
  HomeSubTitleBulletPoint,
  HomePlaceStyle,
  HomePlaceItem,
  HomePlaceItemTitle,
  HomePlaceListItems,
  HomeItemBulletTitle,
  HomeLinkInner,
  HomeLinkInnerContent,
  HomePlaceTitleRow,
  HomePlaceTitleRowGroup,
  HomePlaceImage
} from './styled'
import Map from "@images/icons/map.svg"

export const HomeItem = ({ children, background, link, title, image, description, paragraph, label, width }) => (
  <HomeLinkInner
    to={link}
    background={background}
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

export const HomePlace = ({title, children, url}) => (
  <HomePlaceStyle href={url}>
    <HomePlaceTitleRow>
      <HomePlaceImage src={Map} alt="Moyobamba" />
      <HomePlaceTitleRowGroup>
        <HomePlaceItemTitle>{title}</HomePlaceItemTitle>
        <HomePlaceListItems>
          {children}
        </HomePlaceListItems>
      </HomePlaceTitleRowGroup>
    </HomePlaceTitleRow>
  </HomePlaceStyle>
)

export const HomePlaceItems = ({items}) => (
  items.map((item, index) => {
    return (
      <HomePlaceItem key={index}>
        <p>{item.type}</p>
        <span>{item.value}</span>
      </HomePlaceItem>
    )
  })
)

export const HomeItemBullet = ({background, link, title, image, description, textAlign, width}) => (
  <HomeLinkInner
    to={link}
    background={background}
    width={width}
  >
    <img lazyload='lazy' src={image} alt={description} />
    <HomeItemBulletTitle>{title}</HomeItemBulletTitle>
  </HomeLinkInner>
)
