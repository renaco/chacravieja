import styled from "styled-components"
import media from "styled-media-query"

export const row = styled.div`
  display: grid;
`

export const column = styled.div`
  display: flex;
`

export const WrapContent = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  ${media.lessThan("medium")`
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  `}
`
export const WrapContentParagraph = styled.div`
  padding: 0 10px;
  margin-bottom: 20px;
  ${media.lessThan("medium")`
    padding: 0;
  `}
`