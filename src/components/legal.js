import React from "react";
import styled from "styled-components";

const LegalBar = styled.div`
  background: rgba(221, 192, 0, 0.5);
  text-align: center;
  padding: 15px 0;
  width: 100%;
`

const LegalCode = styled.code`
  color: #EFEFEF;
  font-size: 1em;
  font-family: 'open sans condensed', sans-serif;
`

const Legal = () => (
  <LegalBar>
    <LegalCode>TOMAR BEBIDAS ALCOHÓLICAS EN EXCESO ES DAÑINO PARA LA SALUD</LegalCode>
  </LegalBar>
)

export default Legal;