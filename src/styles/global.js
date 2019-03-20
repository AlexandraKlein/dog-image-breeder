import {createGlobalStyle, css, keyframes} from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

function imageItemCSS() {
  let styles = '';

  for (let i = 0; i < 20; i += 1) {
    styles += `
      .item-image-${i} {
        animation-delay: ${.5 + i/15}s !important;
      }
    `;
  }
  return css`${styles}`;
}

export const GlobalStyle = createGlobalStyle`  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${imageItemCSS()}
    
    .item-image {
      width: 100%;
      height: 100%;
      opacity: 0;
      animation: ${fadeIn} .35s ease-in-out forwards;
    }
   
    .item-to-select {
      position: relative;
      transition: .23s ease;
      cursor: pointer;
      
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--primaryColor);
        mix-blend-mode: color;
        opacity: 0;
        transition: .23s ease;
      }
      
      &:not(.selected) {
        &:hover {
          &:after {
            opacity: 1;
          }
        }
      }
    }
    
    .selected { 
      transform: scale(1.5);
      z-index: 1;
      border: 8px solid var(--orangeColor);
      
      .item-image > div {
        filter: unset;
      }
    }
    
    .transitioning {
      .item-image > div {
        opacity: 0;
        animation: ${fadeIn} .35s ease-in-out forwards .75s;
      }
    }
`;
