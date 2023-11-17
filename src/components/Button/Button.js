import styled, { css } from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 22px;
  border-radius: 10px;
  background: #263243;
  color: #fff;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  font-size: 17px;

  &:hover {
    background: #17cf97;
    color: #242424;
    border: 2px solid transparent;
    transition: 250ms;
  }

  ${props =>
    props.$primary &&
    css`
      background: #17cf97;
      color: #242424;
    `};

`;
