import styled from "styled-components"
import media from "styled-media-query"

export const ImageProductContent = styled.img`
  display: block;
  margin: auto;
  width: 175px;
  max-width: 75%;
  ${media.lessThan("medium")`
    width: 100%;
    margin-bottom: 20px;
  `}
`