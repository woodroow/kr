import React, { type Node } from 'react';
import styled, { css } from 'styled-components';
import background from '../../assets/images/background.jpg';
import { lightColor } from '../../theme/colors';

type Props = {
  children: Node,
  full: boolean,
  main: boolean
};

const Section = styled.div`
  display: flex;
  min-height: 50vh;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  background-color: #eceada;
  color: ${lightColor};
  ${props => props.light && css`
    color: #3c485e;
  `}
  ${props => props.full && css`
    padding: 0;
    min-height: 100vh;
  `}
  ${props => props.main && css`
    background-image: linear-gradient(180deg, #3c485ed9, hsla(218.8235294117647, 22.08%, 30.20%, 0.85)), url(${background});
    background-position: 0px 0px, 0px 0px;
    background-size: auto, cover;`}
`;

export default ({ children, full = false, main = false }: Props) => (
  <Section full={full} main={main}>
    {children}
  </Section>
);
