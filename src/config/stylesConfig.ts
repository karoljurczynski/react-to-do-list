// IMPORTS


import { createGlobalStyle } from 'styled-components';
import colorList from './colorList';

export const portal: HTMLElement = document.querySelector("#portal") as HTMLElement;
export const root: HTMLElement = document.querySelector("#root") as HTMLElement;


// STYLES


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-shadow: none;
    border: none;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color: ${colorList.darkGray};
    width: 1920px;
    height: 1553px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 820px) {
      width: 100%;
    }
  }
  #root {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }
  #portal {
    position: absolute;
    display: none;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
`;



// EXPORT


export default GlobalStyle;