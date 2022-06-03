import styled from "styled-components"
import { COLORS, GRID } from "../../../constants/global.js"

export const HeaderBrowser = styled.header`
  display: block;
  margin: auto;
  max-width: ${GRID.CONTAINER};

  img {
    margin-bottom: 0;
  }

  a {
    font-family: 'Rokkitt', serif;
    font-weight: 600;
    color: ${COLORS.PRIMARY}
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.45em 1.0875rem 1.45rem;
`
