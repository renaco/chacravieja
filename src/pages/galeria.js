import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MainTitle } from "./../components/title"

import media from "styled-media-query"

import galleryOne from "./../images/gallery/galeria-01.png"
import galleryTwo from "./../images/gallery/galeria-02.png"
import galleryThree from "./../images/gallery/galeria-03.png"
import galleryFour from "./../images/gallery/galeria-04.png"
import galleryFive from "./../images/gallery/galeria-05.png"
import gallerySix from "./../images/gallery/galeria-06.png"
import gallerySeven from "./../images/gallery/galeria-07.png"
import galleryEight from "./../images/gallery/galeria-08.png"
import galleryNine from "./../images/gallery/galeria-09.png"
import galleryTen from "./../images/gallery/galeria-10.png"
import galleryEleven from "./../images/gallery/galeria-11.png"
import galleryTwelve from "./../images/gallery/galeria-12.png"
import galleryThirteen from "./../images/gallery/galeria-13.png"
import galleryFourteen from "./../images/gallery/galeria-14.png"
import galleryFifteen from "./../images/gallery/galeria-15.png"
import gallerySixteen from "./../images/gallery/galeria-16.png"

const GalleryContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img {
    width: 30%;
    margin: 5px;
    ${media.lessThan("medium")`
      width: 45%;
      margin: 5px
    `}
  }
`

const GalleryPage = () => (
  <Layout>
    <SEO title="Galería" />
    <MainTitle>GALERÍA</MainTitle>
    <GalleryContent>
      <img src={galleryOne} alt="" />
      <img src={galleryTwo} alt="" />
      <img src={galleryThree} alt="" />
      <img src={galleryFour} alt="" />
      <img src={galleryFive} alt="" />
      <img src={gallerySix} alt="" />
      <img src={gallerySeven} alt="" />
      <img src={galleryEight} alt="" />
      <img src={galleryNine} alt="" />
      <img src={galleryTen} alt="" />
      <img src={galleryEleven} alt="" />
      <img src={galleryTwelve} alt="" />
      <img src={galleryThirteen} alt="" />
      <img src={galleryFourteen} alt="" />
      <img src={galleryFifteen} alt="" />
      <img src={gallerySixteen} alt="" />
    </GalleryContent>
  </Layout>
)

export default GalleryPage