import React, { type Node } from 'react';
import styled from 'styled-components';

type Props = {
  children: Node
};

const H1 = styled.h1`
  margin-top: 40px;
  margin-bottom: 20px;
  direction: ltr;
  font-size: 68px;
  line-height: 68px;
  letter-spacing: normal;
  text-decoration: none;
  text-indent: 0px;
  @media (max-width: 991px) {
    text-align: center;
  }
  @media (max-width: 479px) {
    font-size: 58px;
    text-align: center;
  }
`;

export default ({ children }: Props) => (
  <H1>
    {children}
  </H1>
);
