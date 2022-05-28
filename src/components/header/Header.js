import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [showMenu, setMenue] = useState(false);
  const [menuButton, setmenuButton] = useState(true);

  window.addEventListener('scroll', () => {
    const myMenu = document.querySelector('#mainMenu');
    const scrollsHeight = window.scrollY;
    console.log(scrollsHeight);
    if (scrollsHeight > 50) {
      myMenu.classList.add('menuBgadd');
    } else {
      myMenu.classList.remove('menuBgadd');
    }
  });

  return (
    <Container id="mainMenu">
      <Content>
        {/*logo*/}
        <Logo>
          <a href="#home">
            <span>PRINCE </span>MUHAMMAD
          </a>
        </Logo>
        {/*desktop menu*/}
        <Menu>
          <Links>
            <a href="#home" className="active">
              Home
            </a>
          </Links>
          <Links>
            <a href="#about">About</a>
          </Links>
          <Links>
            <a href="#experience">Experience</a>
          </Links>
          <Links>
            <a href="#works">Works</a>
          </Links>
          <Links>
            <a href="#contact">Contact</a>
          </Links>
          <Links>
            <a href="#resume" className="resume">
              Resume
            </a>
          </Links>
        </Menu>
        {/*mobile menu icon*/}
        <MobileMenuIcon
          onClick={() => {
            setMenue(!showMenu);
            setmenuButton(!menuButton);
          }}
        >
          {menuButton ? <MenuIcon /> : <CloseIcon />}
        </MobileMenuIcon>
        {/*mobile menu*/}
        <MobileMenu className={showMenu ? 'showMobileMenu' : 'hideMobileMenu'}>
          <Links>
            <a
              href="#home"
              className="active"
              onClick={() => {
                setMenue(!showMenu);
                setmenuButton(!menuButton);
              }}
            >
              Home
            </a>
          </Links>
          <Links>
            <a
              href="#about"
              onClick={() => {
                setMenue(!showMenu);
                setmenuButton(!menuButton);
              }}
            >
              About
            </a>
          </Links>
          <Links>
            <a
              href="#experience"
              onClick={() => {
                setMenue(!showMenu);
                setmenuButton(!menuButton);
              }}
            >
              Resume
            </a>
          </Links>
          <Links>
            <a
              href="#services"
              onClick={() => {
                setMenue(!showMenu);
                setmenuButton(!menuButton);
              }}
            >
              Services
            </a>
          </Links>
          <Links>
            <a
              href="#projects"
              onClick={() => {
                setMenue(!showMenu);
                setmenuButton(!menuButton);
              }}
            >
              Projects
            </a>
          </Links>
          <Links>
            <a
              href="#blog"
              onClick={() => {
                setMenue(!showMenu);
                setmenuButton(!menuButton);
              }}
            >
              Blog
            </a>
          </Links>
          <Links>
            <a
              href="#contact"
              onClick={() => {
                setMenue(!showMenu);
                setmenuButton(!menuButton);
              }}
            >
              Contact
            </a>
          </Links>
        </MobileMenu>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background: transparent;
  position: sticky;
  top: 0;
  z-index: 999999999;
  .showMobileMenu {
    transform: scaleY(1);
    opacity: 1;
  }

  .hideMobileMenu {
    transform: scaleY(0);
    opacity: 0;
  }
`;
const Content = styled.nav`
  max-width: 1140px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px !important;
  font-family: 'Poppins', sans-serif;
`;
const Logo = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 1px;
  align-items: center;
  a {
    color: var(--white-color);
    text-decoration: none;
  }
  span {
    font-size: 30px;
    font-weight: 800;
    letter-spacing: 1px;
    color: var(--main-color);
    margin-right: -10px;
  }
`;

const Menu = styled.div`
  .active {
    color: var(--main-color) !important;
  }
  .active::after {
    content: '';
    position: absolute;
    height: 3px;
    left: 50%;
    bottom: -10px;
    transition: all 0.3s ease-in-out;
    transform: translate(-50%, 0) translateZ(0);
    width: 100%;
    background: var(--main-color);
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
const Links = styled.span`
  text-decoration: none;
  font-weight: 600;
  padding: 5px 15px;
  font-family: 'Roboto Mono', monospace;
  font-size: 18px;
  line-height: 1.7;
  position: relative;
  & > a {
    color: var(--white-color);
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease-in-out;
    &::after {
      content: '';
      position: absolute;
      height: 3px;
      left: 50%;
      bottom: -10px;
      transition: all 0.3s ease-in-out;
      transform: translate(-50%, 0) translateZ(0);
      width: 0px;
      background: var(--main-color);
    }
    &:hover {
      color: var(--main-color);
      &::after {
        width: 100%;
      }
    }
  }
  .resume {
    color: var(--main-color);
    border: 1px solid var(--main-color);
    border-radius: 3px;
    padding: 0.8rem 1.75rem;
    font-size: 14px;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono',
      'Lucida Console', Monaco, monospace;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    margin-top: 50px;
    background: var(--button-bg);
    &:hover {
      letter-spacing: 1px;
      &::after {
        width: 0%;
      }
    }
  }
  @media (max-width: 992px) {
    padding-left: 0px;
    margin: 15px 0px;
  }
`;

const MobileMenuIcon = styled.div`
  cursor: pointer;
  display: none;
  z-index: 9999999999999;
  svg {
    font-size: 40px;
    transition: 0.5s ease;
  }
  @media (max-width: 992px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  overflow: hidden;
  display: none;
  transition: 0.5s;
  transform-origin: top;
  position: absolute;
  width: 250px;
  background: var(--mobileMenu);
  top: 0px;
  right: 0px;
  padding-bottom: 15px;
  padding-top: 55px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  z-index: 99999 !important;
  & > span {
    display: block;
    width: 100%;
    margin-bottom: 0px;
    & > a {
      display: block;
      width: 100%;
      padding-left: 30px;
      position: relative;
      &:hover {
        color: var(--main-color);
        &::after {
          width: 0%;
        }
      }
    }
  }
  .active {
    color: var(--main-color) !important;
  }
  .active::after {
    content: '';
    position: absolute;
    display: none;
    height: 3px;
    left: 50%;
    bottom: -10px;
    transition: all 0.3s ease-in-out;
    transform: translate(-50%, 0) translateZ(0);
    width: 100%;
    background: var(--main-color);
  }
`;

export default Header;
