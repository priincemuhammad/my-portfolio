import React, { useState } from 'react';
import styled from 'styled-components';
import PrinceImg from '../../images/prince-md-final-banner.png';
import Typical from 'react-typical';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const Home = () => {
  const switchButton = document.querySelector('.switch');
  const allColor = document.querySelector('#colorPlate');

  const [colorPlate, setColorPlate] = useState(true);

  return (
    <Container>
      <Content>
        <Text>
          <p>
            I'm
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[' React.js Developer', 3000, ' Front-End Expert', 3000]}
            />
          </p>
          <div>
            <h1>Prince Muhammad</h1>
          </div>
          <div>
            <a href="#">Divcover More</a>
          </div>
        </Text>
        <Profileback>
          <Profile>
            <img src={PrinceImg} alt="Prince'sImg" />
          </Profile>
        </Profileback>
        <ScrollDown>
          <a href="#">
            <div className="scroll">Scroll Down</div>
            <div className="mouse">
              <div className="whell"></div>
            </div>
          </a>
        </ScrollDown>
        <Gmail>
          <a href="https://priiincemuhammad@gmail.com" target="_blank">
            priiincemuhammad@gmail.com
          </a>
        </Gmail>
        <Colorswitch id="colorPlate" className={colorPlate ? 'close' : 'open'}>
          <div className="header">
            <p>Choose your color</p>
            <button
              className="switch"
              onClick={() => setColorPlate(!colorPlate)}
            >
              <ColorLensIcon />
            </button>
          </div>
          <div className="allButtons">
            <button onClick={() => setColorPlate(!colorPlate)}></button>
            <button onClick={() => setColorPlate(!colorPlate)}></button>
            <button onClick={() => setColorPlate(!colorPlate)}></button>
            <button onClick={() => setColorPlate(!colorPlate)}></button>
            <button onClick={() => setColorPlate(!colorPlate)}></button>
            <button onClick={() => setColorPlate(!colorPlate)}></button>
            <button onClick={() => setColorPlate(!colorPlate)}></button>
            <button onClick={() => setColorPlate(!colorPlate)}></button>
            <button onClick={() => setColorPlate(!colorPlate)}></button>
            <button onClick={() => setColorPlate(!colorPlate)}></button>
          </div>
        </Colorswitch>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  .close {
    left: -202px;
  }
  .open {
    left: 0px;
  }
`;
const Content = styled.div`
  width: 1140px;
  margin: auto;
  padding-right: 30px;
  padding-left: 30px;
`;
const ScrollDown = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 40px;
  width: 100%;
  left: 0;
  a {
    text-align: center !important;
    display: block;
    text-decoration: none;
    .scroll {
      font-weight: 500;
      font-size: 13px;
      color: #f0f0f0;
      margin-bottom: 8px;
    }
    .mouse {
      width: 30px;
      height: 50px;
      border-radius: 20px;
      position: relative;
      display: inline-block;
      border: 2px solid #f0f0f0;
      .whell {
        background: #f0f0f0;
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        transform: translateX(-50%);
        left: 50%;
        top: 4px;
        animation: scroll 1s linear 0.5s infinite backwards;
      }
    }
  }

  @keyframes scroll {
    0% {
      top: 5px;
    }
    50% {
      top: 30%;
    }
    100% {
      top: 70%;
      opacity: 0;
    }
  }
`;
const Gmail = styled.div`
  position: absolute;
  bottom: 14rem;
  right: -50px;
  transform: rotate(90deg);
  a {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    font-family: monospace;
    position: relative;
    letter-spacing: 2px;
    &::after {
      content: '';
      display: block;
      width: 91px;
      position: absolute;
      bottom: 0.5rem;
      right: -115px;
      height: 1px;
      margin: 0px auto;
      background-color: #fff;
    }
  }
`;
const Colorswitch = styled.div`
  position: absolute;
  top: 14rem;
  z-index: 20;
  transition: 0.5s;
  .header {
    background: #1e2326;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 20px;
      padding: 0px 8px;
    }
    .switch {
      border: none;
      outline: none;
      color: #fff;
      padding: 10px;
      background: #1cba5a;
      cursor: pointer;
      svg {
        font-size: 31px;
      }
    }
  }
  .allButtons {
    width: 68%;
    background: #1e2326;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    padding: 15px;
    button {
      width: 100%;
      height: 27px;
      border: none;
      outline: none;
      cursor: pointer;
    }
    button:nth-child(1) {
      background: #1cba5a;
    }
    button:nth-child(2) {
      background: #f07f81;
    }
    button:nth-child(3) {
      background: #1a7bb7;
    }
    button:nth-child(4) {
      background: #b738e8;
    }
    button:nth-child(5) {
      background: #ff2138;
    }
    button:nth-child(6) {
      background: #64ffda;
    }
    button:nth-child(7) {
      background: #2c88eb;
    }
    button:nth-child(8) {
      background: #ff3355;
    }
    button:nth-child(9) {
      background: #f5d066;
    }
    button:nth-child(10) {
      background: #b886ff;
    }
  }
`;
const Text = styled.div`
  width: 100%;
  height: 400px;
  margin: auto;
  z-index: 10;
  display: flex;
  justify-content: start;
  align-item: start;
  flex-direction: column;
  position: relative;
  p {
    font-size: 20px;
    padding-bottom: 30px;
    font-weight: 900;
    top: 0;
  }
  div {
    display: block;
    padding-bottom: 25px;
    h1 {
      border: 1px solid #f0f0f0;
      position: relative;
      padding: 16px;
      text-transform: uppercase;
      display: inline-block;
      margin: 0;
      &::before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        bottom: -5px;
        right: -5px;
        background-color: #1cba5a;
      }
    }
    a {
      text-decoration: none;
      color: #fff;
      background-color: #1cba5a;
      border: 1px solid #1cba5a;
      text-align: center;
      border-radius: 0;
      padding: 10px 25px;
      outline: none;
      font-weight: 700;
      font-family: 'Roboto Mono', monospace;
      font-size: 18px;
      transition: all 0.5s ease-in-out;
      user-select: none;
      pointer-events: auto;
    }
  }
`;
const Profileback = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Profile = styled.div`
  height: 100%;
  overflow: hidden;
  flex: 0 0 55%;
  position: relative;
  img {
    left: 50%;
    transform: translateX(-16%);
  }
  @media (max-width: 992px) {
    flex: 0 0 100%;
    img {
      transform: translateX(-10%);
    }
  }
  @media (max-width: 570px) {
    img {
      transform: translateX(-30%);
    }
  }
`;

export default Home;
