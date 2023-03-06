import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  padding: 4px;
  margin: 2px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const Input = styled.input`
  all: unset;
  text-align: left;
  border-bottom: 1.5px solid black;
  padding: 2px;
  margin: 2px;
  transition: all 0.2s;

  &:hover,
  &:focus {
    box-shadow: 0 1px 0 0 black;
  }
`;

export const Select = styled.select`
  border: 1.5px solid black;
`;
