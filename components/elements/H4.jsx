import React, { type Node } from 'react';
import styled from 'styled-components';

type Props = {
  children: Node
};

const H4 = styled.h4`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 22px;
  line-height: 28px;
  font-weight: 300;
  @media (max-width: 991px) {
    text-align: center;
  }
  @media (max-width: 479px) {
    text-align: center;
  }
`;

export default ({ children }: Props) => (
  <H4>
    {children}
  </H4>
);
