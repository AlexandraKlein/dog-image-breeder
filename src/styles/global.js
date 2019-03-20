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

  for (let i = 0; i < 30; i += 1) {
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
    
    
    .image-wrap,
    .item-image{
      position: relative;
      width: 100%;
      height: 100%;
    }
    
    .item-image {
      opacity: 0;
    }
    
    .img-loading {
      opacity: 0
      width: 100%
      height: auto
    }
    
    .img-loaded {
      animation: ${fadeIn} .35s ease-in-out forwards;
    }
    
    .item-image {
      animation: ${fadeIn} .35s ease-in-out forwards;
    }
   
    .item-select {
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
      
      img {
        filter: unset;
      }
    }
`;
