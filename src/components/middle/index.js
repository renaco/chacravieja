import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const ContentMiddle = styled(Link)`
  display: grid;
  background: #321D1D;
  text-decoration: none;
  grid-template-columns: 3fr 10fr;
  flex-basis: 100%;
  justify-content: center;
  padding: 20px;
`;

const ContentMiddleHeader = styled.header`
  width: 100%;
`;

const TitleMiddle = styled.div`
  font-family: 'Rokkitt';
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 1em;
  color: #9D7C29;
`;

const SubTittleMiddle = styled.div`
  font-family: 'Rokkitt';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 0.9em;
  color: #C6C6C6;
`;

const IconMiddle = styled.img`
  margin-right: 10px;
  width: 50px;
  height: 50px;
`;

export const ItemSeparator = styled.span`
  border-right: 1px dotted #9D7C29;
  height: 90%;
`;

export const ItemMiddle = ({icon, description, title, subtitle, link }) => (
  <ContentMiddle to={link}>
      <IconMiddle src={icon} alt={description} title={description} />
    <ContentMiddleHeader>
      <TitleMiddle>{title}</TitleMiddle>
      <SubTittleMiddle>{subtitle}</SubTittleMiddle>
    </ContentMiddleHeader>
  </ContentMiddle>
);
