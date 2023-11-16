import styled, { css } from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  border-radius: 10px;
  background: #263243;
  color: #fff;
  border: 2px solid #fff;
  transition: all 0.3s ease-out;
  font-size: 15px;

  &:hover {
    background: #17cf97;
    color: #242424;
    border: 2px solid transparent;
    transition: 250ms;
  }
  @media screen and (max-width: 960px) {
    font-size: 12px;
    }

  ${props =>
    props.$primary &&
    css`
      background: #17cf97;
      color: #242424;
      border: 2px solid transparent;
    `};

    ${props =>
    props.$contact &&
    css`
      width: 150px;
      padding: 10px;
      margin: 30px auto;
      font-size: 20px;
    `};
`;
