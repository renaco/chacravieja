import React from "react"
import { Link } from "gatsby"
import {
  Label,
  Input,
  Textarea
} from '@rebass/forms'

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import media from "styled-media-query"

const ContentContact = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
${media.lessThan("medium")`
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
`}
`

const SecondPage = () => (
  <Layout>
    <SEO title="Contacto" />
    <ContentContact
      as='form'
      onSubmit={console.log(this)}
      method="post" action="https://formsubmit.co/chacravieja@gmail.com"
      py={3}>
      <div className="sm-col sm-col-12 lg-col-6">
        <h1>Contáctenos</h1>
        <p>
          Teléfono: 942 428 028 <br />
          Dirección: Jr. Reyes Guerra N° 870
            Barrio de Zaragoza, Moyobamba, Perú <br />
          Correo electrónico: <a href="mailto:ventas@chacravieja.com">ventas@chacravieja.com</a>
          <br />
        </p>
      </div>
      <div className="sm-col sm-col-12 lg-col-6">
        <Label>
          Nombre
          </Label>
        <Input type="text" name="name" id="name" required />
        <Label>
          Correo
          </Label>
        <Input type="email" name="email" id="email" required />
        <Label>
          Motivo del mensaje
          </Label>
        <Input type="text" name="subject" id="subject" required />
        <Label>
          Mensaje
          </Label>
        <Textarea name="message" id="message" rows="5" />
        <br />
        <button type="submit">Enviar</button>
        <Input type="hidden" name="_next" value="/gracias/"></Input>
      </div>
    </ContentContact>
    <Link to="/">Inicio</Link>
  </Layout>
)

export default SecondPage
