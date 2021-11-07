import React from "react"
import {
  Label,
} from '@rebass/forms'
import addToMailchimp from 'gatsby-plugin-mailchimp';

import Layout from "../components/layout"
import { MainTitle } from "./../components/title"
import { HomeSlideButton } from "./../components/home/styled"

import SEO from "../components/seo"
import styled from "styled-components"
import media from "styled-media-query"

import { URL_CONTACT } from "./../constants/global"

const ContentContact = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  ${media.lessThan("medium")`
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
`}
`

class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: null,
      subject: null,
      message: 'Suscrito a nuestra lista de correos'
    };
  }

  handlerChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlerSubmit = (e) => {
    console.log('data from email', e);
    e.preventDefault();
    this.setState({ message: 'Gracias por enviar' });
    addToMailchimp(this.state.email)
      .then(data => {
        console.log('data then', data);
      })
      .catch(() => {
        console.log('catch');
      })
    this.setState({ email: '' });
  }

  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <SEO title="Contacto" />
        <MainTitle>ESCRÍBENOS</MainTitle>
        <ContentContact
          as='form'
          onSubmit={this.handlerSubmit}
          method="post"
          className={classes.mailForm}
          action={URL_CONTACT}
          data-test="form"
          py={3}>
          <div className="sm-col sm-col-12 lg-col-6">
            <h2>CONTÁCTANOS</h2>
            <p>
              942 428 028 <br />
              Jr. Reyes Guerra N° 870 <br />
              Barrio de Zaragoza, Moyobamba, Perú <br />
              <a href="mailto:ventas@chacravieja.com">ventas@chacravieja.com</a>
              <br />
            </p>
          </div>
          <div className="sm-col sm-col-12 lg-col-6">
            <Label>
              Nombre
            </Label>
            <input
              className="contact__input"
              type="text"
              name="name"
              id="name"
              data-test="name"
              required
              // value={state.name}
              onChange={this.handlerChange}
            />
            <Label>
              Correo
            </Label>
            <input
              className="contact__input"
              type="email"
              name="email"
              id="email"
              data-test="email"
              // value={state.email}
              onChange={this.handlerChange}
              required
            />
            <Label>
              Motivo
            </Label>
            <input
              className="contact__input"
              type="text"
              name="subject"
              id="subject"
              data-test="subject"
              required
            />
            <Label>
              Mensaje
            </Label>
            <textarea
              className="contact__input"
              name="message"
              id="message"
              rows="5"
              data-test="message"
            />
            <br />
            {/* onClick={sendForm} */}
            <HomeSlideButton
              type="submit"
              data-test="send-contact"
            >
              <span>Enviar</span>
            </HomeSlideButton>
            <input
              type="hidden"
              name="_next"
              value="/gracias/"
            />
          </div>
        </ContentContact>
      </Layout>
    )
  }
}

export default ContactPage();
