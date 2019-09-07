import React from "react";
import styled from "styled-components";

const HomeItem = styled.div`
  background: black;
  margin-bottom: 20px;
  padding: 5px 0;
  text-align: center;
  width: 25%;
`

const HomeItemTitle = styled.h5`
  font-size: 1.5em;
  margin: 0;
`

const HomeItemComponent = () => (
  <HomeItem>
    <HomeItemTitle>GALERÍA</HomeItemTitle>
    <img src="" alt=""/>
    <p>Disfruta tus licores regionales preferidos en nuestros nuestra licorería situada en Moyobamba, San Martín.</p>
    <a href="">Leer más</a>
  </HomeItem>
)

export default HomeItemComponent;