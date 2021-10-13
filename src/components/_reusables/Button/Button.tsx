// IMPORTS


import React from 'react';
import StyledButton from './ButtonStyles';


// INTERFACES


interface ButtonProps {
  onClick: (e: React.SyntheticEvent) => void;
  width: number;
  height: number;
  fontSize: number;
  margin?: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  disabled?: boolean;
}


// COMPONENT


const Button: React.FC<ButtonProps> = ({ children, onClick, width, height, fontSize, margin, primary, secondary, tertiary, disabled }): JSX.Element => {
  return (
    <StyledButton
      onClick={ onClick}
      width={ width } 
      height={ height }
      fontSize={ fontSize }
      margin={ margin }
      primary={ primary }
      secondary={ secondary }
      tertiary={ tertiary }
      disabled={ disabled }>
      { children }
    </StyledButton>
  )
}


// EXPORTS


export default Button;