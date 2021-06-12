import React from 'react'
import styled from 'styled-components'

const ContentMiddle = styled.div`
  display: flex;
  background: #321D1D;
  flex-direction: column;
  padding: 20px;
`;

const ContenMidleHeader = styled.header`
  display: flex;
  flex-direction: row;
`;

const TitleMiddle = styled.div`
  font-family: Rokkitt;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 1em;
  color: #9D7C29;
`;

const SubTittleMiddle = styled.div`
  font-family: Rokkitt;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 34px;
  color: #C6C6C6;
`;

const IconMidle = styled.img`
  margin-right: 10px;
  width: 50px;
  height: 50px;
`;

export const ItemMiddle = ({icon, description, title, subtitle
}) => (
  <ContentMiddle>
    <ContenMidleHeader>
      <IconMidle src={icon} alt={description} title={description} />
      <TitleMiddle>{title}</TitleMiddle>
    </ContenMidleHeader>
    <SubTittleMiddle>{subtitle}</SubTittleMiddle>
  </ContentMiddle>
);
