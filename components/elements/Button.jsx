import React, { type Node } from 'react';
import styled, { css } from 'styled-components';
import { buttonColor } from '../../theme/colors';

type Props = {
  children: Node,
  outline: boolean
};

const Button = styled.a`
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898EC;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
  min-width: 120px;
  margin: 0px 20px 20px 0px;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  ${props => props.outline && css`
    background-color: transparent;
    padding: 8px 14px;
    border-style: solid;
    border-width: 1px;
    border-color: hsla(208.00000000000003, 82.57%, 57.25%, 1.00);
    transition: background-color 200ms ease;
    &:hover {
      background: ${buttonColor};
    }
  `}
`;

export default ({ children, outline = false }: Props) => (
  <Button outline={outline}>
    {children}
  </Button>
);
