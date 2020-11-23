import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MainTitle } from "./../components/title"

import galleryOne from "./../images/gallery/galeria-01.jpg"
import galleryTwo from "./../images/gallery/galeria-02.jpg"
import galleryThree from "./../images/gallery/galeria-03.jpg"
import galleryFour from "./../images/gallery/galeria-04.jpg"
import galleryFive from "./../images/gallery/galeria-05.jpg"
import gallerySix from "./../images/gallery/galeria-06.jpg"
import gallerySeven from "./../images/gallery/galeria-07.jpg"
import galleryEight from "./../images/gallery/galeria-08.jpg"
import galleryNine from "./../images/gallery/galeria-09.jpg"
import galleryTen from "./../images/gallery/galeria-10.jpg"
import galleryEleven from "./../images/gallery/galeria-11.jpg"
import galleryTwelve from "./../images/gallery/galeria-12.jpg"
import galleryThirteen from "./../images/gallery/galeria-13.jpg"
import galleryFourteen from "./../images/gallery/galeria-14.jpg"
import galleryFifteen from "./../images/gallery/galeria-15.jpg"
import gallerySixteen from "./../images/gallery/galeria-16.jpg"

const GalleryContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 20px;
  img {
    margin: 5px;
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