import React from "react"
import { Link } from "gatsby"
import {
  Label,
  Input,
  Textarea
} from '@rebass/forms'
import {
  Box,
  Flex
} from 'rebass'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contacto" />
    <Box
      as='form'
      onSubmit={console.log(this)}
      method="post" action="https://formsubmit.co/renanromeroruiz@gmail.com"
      py={3}>
      <Flex mx={-2} mb={3}>
        <Box width={1 / 2} px={2}>
          <h1>ESCRÍBENOS</h1>
          <p>
            ESCRÍBENOS
  Chacra Vieja Licores
  Jr. Reyes Guerra N° 870
  Barrio de Zaragoza, Moyobamba, Perú
  <br/>
  ventas@chacravieja.com 
  <br/>
  Telf:  942 428 028
          </p>
        </Box>
        <Box width={1 / 2} px={2}>
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
          <Input type="hidden" name="_next" value="http://localhost:8000/gracias"></Input>
        </Box>
      </Flex>
    </Box>
    <Link to="/">Inicio</Link>
  </Layout>
)

export default SecondPage
