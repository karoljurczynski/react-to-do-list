// IMPORTS


import styled from 'styled-components';
import colorList from '../../config/colorList';


// INTERFACES


interface HeadingProps {
  loginWindow?: boolean;
}


// STYLES


export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 893px;
  height: 1045px;
  background-color: ${colorList.gray};
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Heading = styled.h2<HeadingProps>`
  color: ${colorList.orange};
  font-weight: 700;
  font-size: 64px;
  margin: 78px 0 101px;

  ${({ loginWindow }) => loginWindow && `
    margin: 70px 0 187px;
  `};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const BackButton = styled.button`
  position: absolute;
  cursor: pointer;
  background: transparent;
  top: 54px;
  left: 45px;
`;
export const BackArrow = styled.img`
  width: 100%;
  height: auto;
`;
export const Text = styled.p`
  color: ${colorList.white};
  font-weight: 400;
  line-height: 1;
  font-size: 24px;
`;