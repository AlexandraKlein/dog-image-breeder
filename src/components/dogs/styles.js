import {css, keyframes} from "styled-components";
import styled from "styled-components";
import { bp } from "../../styles/theme";

function spanCSS() {
  let styles = '';

  for (let i = 0; i < 15; i += 1) {
    styles += `
       .span-${i} {
         animation-delay: ${.5 + i/15}s;
       }
     `
  }
  return css`${styles}`;
}

export const DropDownFade = (fromPixels) => keyframes`
 0% {
    transform: translate(0, -${fromPixels}px);
    opacity: 0;
  }

  10% {
    transform: translate(0, 0);
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export const Header = styled.div`
  ${spanCSS()};
  padding: 0 20px;
  text-align: center;
  
  ${bp.tablet`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
  `}
  
  h1,
  h2 {
    line-height: 1;
  }
  
  h1 {
    color: var(--darkBlueColor);
  }
  
  span {
    display: inline-block;
    opacity: 0;
    animation: ${DropDownFade(20)} 1s ease-in forwards;
  }  
`;

export const Logo = styled.div`
  font-size: 120px;
  line-height: 1.2;
  opacity: 0;
  animation: ${DropDownFade(60)} 2s ease-in forwards;
 
  ${bp.tablet`
    line-height: inherit;
    font-size: 85px;
    margin-right: 30px;
  `}
  
  i {
    color: var(--darkBlueColor);
  }
`;

export const Item = styled.div`
  position: relative;
  width: 260px;
  height: 260px;
  margin: 20px;
  flex-grow: unset;
  overflow: hidden;
`;

export const ImgWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const DropDown = styled.div`
  width: calc(100% - 40px);
  margin: 45px 0 20px 20px;
  text-transform: uppercase;
  
  * {
    text-transform: inherit;
  }
  
  button {
    width: 100%;
  }
`;
