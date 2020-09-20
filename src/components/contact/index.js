import React from "react"
import styled from "styled-components"
import { CONFIG } from "./../../constants/global"

const SubTitleContact = styled.span`
  color: ${CONFIG.golden};
`
const TitleContacts = styled.p`
  display: flex;
`

const ContactComponent = () => (
  <TitleContacts>
    <SubTitleContact>Teléfono:</SubTitleContact> 942 428 028 <br />
    <SubTitleContact>Dirección:</SubTitleContact> Jr. Reyes Guerra N° 870
  Barrio de Zaragoza, Moyobamba, Perú <br />
    <SubTitleContact>Correo electrónico:</SubTitleContact>
    <a href="mailto:ventas@chacravieja.com">ventas@chacravieja.com</a>
  </TitleContacts>
)

export default ContactComponent;
