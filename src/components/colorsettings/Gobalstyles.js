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
  }
  .themeTwo{
    --main-color: #f07f81;
    --button-bg: rgb(240 127 129 / 12%); 
    --body-color:  #181025;
  }
  .themeThree{
    --main-color: #1a7bb7;
    --button-bg: rgb(26 123 183 / 13%); 
  }
  .themeFour{
    --main-color: #b738e8;
    --button-bg: rgb(183 56 232 / 12%); 
  }
  .themeFive{
    --main-color: #ff2138;
    --button-bg: rgb(255 33 56 / 12%); 
  }
  .themeSix{
    --main-color: #1cba5a;
    --button-bg:rgb(100 255 218 / 8%); 
    --body-color: #17231F;
  }
  .themeSeven{
    --main-color: #2c88eb;
    --button-bg: rgb(44 136 235 / 13%); 
  }
  .themeEight{
    --main-color: #ff3355;
    --button-bg: rgb(255 51 85 / 11%); 
  }
  .themeNine{
    --main-color: #f5d066;
    --button-bg: rgb(245 208 102 / 13%); 
  }
  .themeTen{
    --main-color: #b886ff;
    --button-bg: rgb(184 134 255 / 13%); 
  }

  ::-webkit-scrollbar{
    width:12px;
 }
 
 ::-webkit-scrollbar-track{
   border: 10px solid #dce7f5;
 }
 
 ::-webkit-scrollbar-thumb{
    background: var(--main-color);
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
