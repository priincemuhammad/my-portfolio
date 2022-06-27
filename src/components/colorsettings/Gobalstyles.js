import { createGlobalStyle } from 'styled-components';

export const Gobalstyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', monospace;
}
  
  :root{
    --body-color: #0A192F;
    --main-color: #1cba5a;
    --white-color: #fff;
    --header-bg: #0a192f;
    --mobileMenu: #112240;
  }

  .themeOne{
    --main-color: #64ffda;
    --button-bg: rgb(100 255 218 / 8%) ; 
    --switch-bg: #4fd3b3;
    --button-hover: rgb(100 255 218 / 35%);
  }
  .themeTwo{
    --main-color: #f07f81;
    --button-bg: rgb(240 127 129 / 12%); 
    --body-color:  #181025;
    --header-bg: #181025; 
    --button-hover: rgb(240 127 129 / 35%);
  }
  .themeThree{
    --main-color: #1a7bb7;
    --button-bg: rgb(26 123 183 / 13%); 
    --button-hover: rgb(26 123 183 / 35%);
  }
  .themeFour{
    --main-color: #b738e8;
    --button-bg: rgb(183 56 232 / 12%); 
    --button-hover: rgb(183 56 232 / 35%);
  }
  .themeFive{
    --main-color: #ff2138;
    --button-bg: rgb(255 33 56 / 12%); 
    --button-hover: rgb(255 33 56 / 35%);
  }
  .themeSix{
    --main-color: #1cba5a;
    --button-bg:rgb(100 255 218 / 8%); 
    --body-color: #17231F;
    --header-bg: #17231F;
    --button-hover: rgb(100 255 218 / 35%);
  }
  .themeSeven{
    --main-color: #2c88eb;
    --button-bg: rgb(44 136 235 / 13%); 
    --button-hover: rgb(44 136 235 / 35%);
  }
  .themeEight{
    --main-color: #ff3355;
    --button-bg: rgb(255 51 85 / 11%); 
    --button-hover: rgb(255 51 85 / 35%);
  }
  .themeNine{
    --main-color: #f5d066;
    --button-bg: rgb(245 208 102 / 13%); 
    --button-hover: rgb(245 208 102 / 35%);
  }
  .themeTen{
    --main-color: #b886ff;
    --button-bg: rgb(184 134 255 / 13%); 
    --button-hover: rgb(184 134 255 / 35%);
  }

  ::-webkit-scrollbar{
    width: 7px;
 }
 
 ::-webkit-scrollbar-track{
   border: 5px solid   var(--body-color);
 }
 
 ::-webkit-scrollbar-thumb{
    background: #495670;
   border-radius: 10px;
 }

 ::-webkit-input-placeholder{
   color: #AEACCA;
 }
 
 html{
     scroll-behavior: smooth;
 }
  
  body{
    background: #252B2F;
    background: var(--body-color);
  }
  div{
    font-size: 30px;
    color: #fff; 
  }
   
  .menuBgadd{
    background: var(--header-bg) !important;
  } 
`;
