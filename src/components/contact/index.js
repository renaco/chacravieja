import React from "react"
import styled from "styled-components"
import { CONFIG } from "./../../constants/global"

const subTitleContact = styled.span`
  color: yellow;
`
const wrapTitleContacts = styled.p`
  display: flex;
`

const ContactComponent = () => (
  <wrapTitleContacts>
    <subTitleContact>Teléfono:</subTitleContact> 942 428 028 <br />
    <subTitleContact>Dirección:</subTitleContact> Jr. Reyes Guerra N° 870
  Barrio de Zaragoza, Moyobamba, Perú <br />
    <subTitleContact>Correo electrónico:</subTitleContact> <a href="mailto:ventas@chacravieja.com">ventas@chacravieja.com</a>
  </wrapTitleContacts>
)

export default ContactComponent
