// IMPORTS


import styled from "styled-components";
import colorList from "../../../config/colorList";


// INTERFACES


interface StyledButtonProps {
  width: number;
  height: number;
  fontSize: number;
  margin?: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  disabled?: boolean;
}


// STYLES


const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  
  ::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${colorList.white};
    border-radius: 8px;
    opacity: 0;
  }

  :hover {
    ::after {
      opacity: 0.2;
    }
  }

  
  ${({ width, height, fontSize }) => `
    width: ${width}px;
    height: ${height}px;
    font-size: ${fontSize}px;
  `}
  ${({ margin }) => margin && `
    margin: ${margin};
  `};


  ${({ primary }) => primary && `
    font-weight: 500;
    color: ${colorList.white};
    background-color: ${colorList.orange};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `};
  ${({ secondary }) => secondary && `
    font-weight: 500;
    color: ${colorList.white};
    background-color: ${colorList.darkOrange};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `};
  ${({ tertiary }) => tertiary && `
    font-weight: 300;
    color: ${colorList.orange};
    background-color: transparent;
  `};
  

  ${({ disabled }) => disabled && `
    opacity: 0.5;
    cursor: default;
    :hover {
      ::after { opacity: 0 }
    }
  `};

  @media (max-width: 820px) {
    font-size: 28px;
  }
`;


// EXPORTS


export default StyledButton;