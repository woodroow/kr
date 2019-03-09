import React, { type Node } from 'react';
import styled from 'styled-components';

type Props = {
  children: Node
};

const LayoutMain = styled.div`
`;

export default ({ children }: Props) => (
  <LayoutMain>
    {children}
  </LayoutMain>
);
