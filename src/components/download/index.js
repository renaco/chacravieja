import React from "react";
import styled from "styled-components"
import DownloadPDF from "./../../images/icons/download-pdf.svg"

const DownloadLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px 0 0;
  background: rgb(0 0 0 / 50%);
  margin-bottom: 20px;
  img {
    margin-left: 10px;
  }
`

const downloadUrl = '//archivos.chacravieja.com/catalogo.pdf'

const DownloadFile = () => {

  return (
    <DownloadLink href={downloadUrl}>
      <img src={DownloadPDF} alt='Catalogo de productos' />
    </DownloadLink>
  )
}

export default DownloadFile;
