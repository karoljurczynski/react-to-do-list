// IMPORTS


import styled from "styled-components";
import colorList from "../../../config/colorList";


// STYLES


export const StyledAuthInput = styled.input`
  width: 600px;
  height: 50px;
  font-size: 24px;
  line-height: 28px;
  background-color: ${colorList.white};
  color: ${colorList.gray};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-weight: 300;
  padding: 11px 18px;
  margin-bottom: 36px;

  :last-of-type {
    margin-bottom: 0;
  }
`;


// EXPORTS


export default StyledAuthInput;