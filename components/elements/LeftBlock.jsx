import React, { type Node } from 'react';
import styled from 'styled-components';

type Props = {
  children: Node
};

const LeftBlock = styled.div`
  max-width: 40%;
  margin-right: 140px;
  margin-left: 140px;
  float: none;
  clear: none;
  border: 1px none #000;
  text-align: left;
  @media (max-width: 991px) {
    max-width: none;
  }
  @media (max-width: 767px) {
    margin-right: 100px;
    margin-left: 100px;
  }
  @media (max-width: 479px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export default ({ children }: Props) => (
  <LeftBlock>
    {children}
  </LeftBlock>
);
