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
// import { Grid, Cell } from 'styled-css-grid';

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contacto" />
    {/* <Grid columns={12}>
      <Cell width={6}>.sm-col.sm-col-6</Cell>
      <Cell width={6}>.sm-col.sm-col-6</Cell>
    </Grid> */}
    <Box
      as='form'
      onSubmit={console.log(this)}
      method="post" action="https://formsubmit.co/chacravieja@gmail.com"
      py={3}>
      <div className="container">
        <div className="clearfix">
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
        </div>
      </div>
      <Flex mx={-2} mb={3}>
        <Box width={1 / 2} px={2}>

        </Box>
        <Box width={1 / 2} px={2}>

        </Box>
      </Flex>
    </Box>
    <Link to="/">Inicio</Link>
  </Layout>
)

export default SecondPage
