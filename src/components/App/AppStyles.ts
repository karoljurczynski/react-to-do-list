// IMPORTS


import styled from 'styled-components';
import colorList from '../../config/colorList';


// STYLES


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 30px;
  }
  @media (max-width: 820px) {
    padding: 20px;
  }
`;
export const LogoutButton = styled.button`
  height: 85px;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 1200px) {
    height: 60px;
  }
  @media (max-width: 820px) {
    height: 42px;
  }
`;
export const LogoutIcon = styled.img`
  width: auto;
  height: 100%;
`;
export const Heading = styled.h1`
  font-size: 64px;
  font-weight: 400;
  font-family: "ZCOOL KuaiLe", cursive;
  color: ${colorList.orange};
  line-height: 1;

  @media (max-width: 1200px) {
    font-size: 54px;
  }
  @media (max-width: 820px) {
    font-size: 36px;
  }
`;