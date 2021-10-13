// IMPORTS


import React from 'react';
import StyledAuthInput from './AuthInputStyles';


// INTERFACES


interface AuthInputProps {
  type: string;
  id: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.SyntheticEvent) => void;
}


// COMPONENT


const AuthInput: React.FC<AuthInputProps> = ({ children, type, id, value, placeholder, onChange }): JSX.Element => {
  return (
    <StyledAuthInput 
      type={ type }
      id={ id } 
      value={ value }
      placeholder={ placeholder }
      onChange={ onChange } >
      { children }
    </StyledAuthInput>
  )
}


// EXPORTS


export default AuthInput;