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
  
  @media (max-width: 1200px) {
    width: 100%;
    height: 800px;
  }
`;
export const Heading = styled.h2<HeadingProps>`
  color: ${colorList.orange};
  font-weight: 700;
  font-size: 64px;
  margin: 78px 0 101px;

  ${({ loginWindow }) => loginWindow && `
    margin: 70px 0 187px;
  `};

  @media (max-width: 1200px) {
    font-size: 42px;
    margin: 78px 0 80px;
  }
  @media (max-width: 820px) {
    font-size: 28px;
    margin: 50px 0 60px;
  }
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
  
  @media (max-width: 1200px) {
    top: 25px;
    left: 20px;
  }
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
  
  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;