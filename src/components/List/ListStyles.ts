// IMPORTS


import styled from 'styled-components';
import colorList from '../../config/colorList';
import checkmark from '../../images/checkmark.png';


// STYLES


export const Wrapper = styled.div`
  position: relative;
  width: 1162px;
  height: 1312px;
  margin-top: 136px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colorList.gray};

  @media (max-width: 1200px) {
    width: 800px;
  }
  @media (max-width: 820px) {
    width: 100%;
    margin-top: 0;
    height: fit-content;
  }
`;
export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 38px 11px 36px;
  border-bottom: 4px solid ${colorList.orange};

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
export const ListNameInput = styled.input`
  display: block;
  width: 1088px;
  height: 50px;
  padding: 11px 18px;
  font-size: 24px;
  color: ${colorList.black};
  font-weight: 300;
  line-height: 28px;
  margin-top: 36px;
  margin-bottom: 61px;
  border-radius: 8px;
  
  @media (max-width: 1200px) {
    width: 92%;
  }
  @media (max-width: 820px) {
    width: 85%;
  }
`;
export const MainSection = styled.main`
  width: 100%;

`;
export const ButtonsSection = styled.section`
  padding: 16px 23px 16px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const BottomSection = styled.section`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 820px) {
    justify-content: center;
    position: relative;
    margin-top: 50px;
  }
`;
export const Task = styled.p`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 23px;
  font-weight: 400;
`;
export const Checkbox = styled.input`
  appearance: none;
  background-color: transparent;
  border: 2px solid ${colorList.black};
  cursor: pointer;
  position: relative;
  height: 24px;
  width: 24px;
  margin: 46px 12px 12px 0;

  :checked {
    border: 2px solid ${colorList.green};

    ::after {
      content: "";
      position: absolute;
      display: block;
      width: 30px;
      height: 30px;
      top: -5px;
      left: 3px;
      background: url(${checkmark}) no-repeat;
    }
  }
`;
export const TaskNameInput = styled.input`
  width: 1043px;
  padding: 11px 18px;
  background: transparent;
  color: ${colorList.white};
  padding: 6px 20px;
  font-size: 24px;
  line-height: 28px;
  border-bottom: 1px solid ${colorList.orange};

  @media (max-width: 1200px) {
    width: 92%;
  }
  @media (max-width: 820px) {
    width: 85%;
  }
`;