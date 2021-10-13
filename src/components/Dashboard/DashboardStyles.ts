// IMPORTS


import styled from 'styled-components';
import colorList from '../../config/colorList';


// INTERFACES


interface TextProps {
  type: "listName" | "listDate" | "stats";
}
interface SortProps {
  child?: boolean;
}


// STYLES


export const Wrapper = styled.div`
  position: absolute;
  width: 1175px;
  top: 180px;
`;
export const TopSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 77px;
`;
export const MainSection = styled.section`
  position: relative;
  width: 100%;
`;
export const Search = styled.input`
  width: 482px;
  height: 50px;
  font-size: 24px;
  font-weight: 300;
  color: ${colorList.black};
  padding: 11px 16px;
  border-radius: 8px;
  :hover {
    filter: brightness(0.9);
  }
`;
export const Sort = styled.div<SortProps>`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 265px;
  height: 50px;
  border-radius: 8px;
  background: ${colorList.white};
  font-size: 24px;
  line-height: 28px;
  font-weight: 300;
  color: ${colorList.black};

  ${({ child }) => child && `
    position: absolute;
    z-index 3;
    :hover {
        right: -5px;
      }
    :first-of-type {
      bottom: -110%;
    }
    :last-of-type {
      bottom: -220%;
    }
  `}
`;
export const SortIcon = styled.img`
  display: block;
  position: absolute;
  z-index: 5;
  top: 13px;
  right: 220px;
  width: 28px;
  height: auto;
  cursor: pointer;
`;
export const AddButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background: ${colorList.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: ${colorList.gray};
  }
`;
export const AddIcon = styled.img`
`;
export const ToDoList = styled.ul`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  background-color: ${colorList.gray};
  color: white;
  margin: 36px 0;
  border-radius: 8px;
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    border-radius: 8px;
  }
  :hover {
    filter: brightness(1.1);
  }
`;
export const Text = styled.p<TextProps>`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  ${({type}) => type === "listName" && `
    font-weight: 700;
  `};
  ${({type}) => type === "listDate" && `
    font-style: italic;
  `};
`;
export const ListStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 35%;
  justify-content: space-between;
`;