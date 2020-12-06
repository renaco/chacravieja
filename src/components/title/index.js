import styled from "styled-components"
import { CONFIG } from "./../../constants/global"

export const MainTitle = styled.h1`
  font-family: 'Rokkitt', serif;
  font-weight: 600;
  color: ${CONFIG.golden};
  padding-bottom: 10px;
  border-bottom: 1px dashed ${CONFIG.golden};
  text-align: center;
`

export const MainSubtitle = styled.h2`
  color: ${CONFIG.golden};
  font-family: 'Rokkitt', serif;
  font-weight: 600;
`
