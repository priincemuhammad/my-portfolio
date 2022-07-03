import React from 'react';
import styled from 'styled-components';
import Profileimgs from '../../images/aboutProfile.jpg';
const About = () => {
  return (
    <Maincontent id="about">
      <Container>
        <h1>Get to know me</h1>
        <Content>
          <Texts>
            <div>
              <p>
                Hello! My name is Prince Muhammad and I enjoy creating new
                things that live on the internet. My interest in web and mobile
                app development started back in 2021 when I decided to try
                editing custom Tumblr themes — turns out hacking together a
                custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p>
                I am a member of{' '}
                <a href="/" rel="noopener noreferrer">
                  Fn's Softwares
                </a>{' '}
                and have also been awarded 75% Merit Scholarship(Top 10%) by my
                college.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>React.Native</li>
              <li>Node.js</li>
              <li>WordPress</li>
            </ul>
          </Texts>
          <Aboutimgparent>
            <Profile>
              <Princeimg>
                <Imgwrapper>
                  <Mainimg>
                    <a
                      href="https://github.com/prince-muhammad"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img src={Profileimgs} alt="PrinceImg" />
                    </a>
                  </Mainimg>
                </Imgwrapper>
              </Princeimg>
            </Profile>
          </Aboutimgparent>
        </Content>
      </Container>
    </Maincontent>
  );
};

const Maincontent = styled.section`
  display: flex;
  margin: 0px auto;
`;

const Container = styled.div`
  width: 1140px;
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
  margin: 0px auto;
  padding: 100px 50px;
  h1 {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    font-weight: 600;
    line-height: 1.1;
    width: 100%;
    font-size: clamp(26px, 5vw, 30px);
    color: #ccd6f6;
    white-space: nowrap;
    &::before {
      position: relative;
      bottom: 0px;
      counter-increment: section 1;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--main-color);
      font-family: var(--font-mono);
      font-size: 20px;
      font-weight: 300;
    }
    &::after {
      content: '';
      display: block;
      position: relative;
      top: 2px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: #233554;
    }
  }
  @media (max-width: 992px) {
    padding-right: 60px;
  }
  @media (max-width: 774px) {
    h1 {
      &::after {
        width: 20%;
      }
      font-size: 20px;
    }
    padding: 100px 20px;
  }
`;
const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 50px;
  @media (max-width: 1170px) {
    grid-gap: 50px;
  }
  @media (max-width: 992px) {
    grid-gap: 10px;
  }
  @media (max-width: 768px) {
    grid-gap: 60px;
    grid-template-columns: 1fr;
  }
`;
const Texts = styled.div`
  color: var(--white-color);
  padding-right: 90px;
  p {
    margin-bottom: 15px;
    color: #8892b0;
    font-family: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text',
      -apple-system, system-ui, sans-serif;
    font-size: 20px;
    line-height: 1.3;
    a {
      color: var(--main-color);
      text-decoration: none;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    overflow: hidden;
    padding: 0px;
    margin: 20px 0px 0px;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono',
        'Lucida Console', Monaco, monospace;
      font-size: 13px;
      color: var(--main-color);
      &::before {
        content: '▹';
        position: absolute;
        left: 0px;
        color: var(--main-color);
        font-size: 14px;
        line-height: 12px;
      }
    }
  }
  @media (max-width: 1170px) {
    padding-right: 0px;
  }
  @media (max-width: 768px) {
    p,
    a {
      font-size: 16px;
    }
  }
`;

const Aboutimgparent = styled.div`
  @media (max-width: 774px) {
    place-items: center;
    display: grid;
  }
`;

const Profile = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: 992px) {
    display: block;
  }
`;
const Princeimg = styled.div`
  /* transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1); */
  display: block;
  position: relative;
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: 4px;
  background: var(--main-color);
  visibility: visible;
  cursor: pointer;
  transition: all 1s;
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 2px solid var(--main-color) !important;
    top: 20px;
    left: 20px;
    z-index: -1;
    box-sizing: inherit;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  &:hover {
    &::after {
      background: transparent;
      top: 10px;
      left: 10px;
    }
  }
`;
const Imgwrapper = styled.div`
  position: relative;
  border-radius: 4px;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  max-width: 100%;
  &:hover {
    mix-blend-mode: initial;
    filter: initial;
  }
`;
const Mainimg = styled.div`
  z-index: 10;
  max-width: 500px;
  display: block;
  img {
    max-width: 100%;
    height: 100%;
    display: block;
    border-radius: 4px;
  }
`;

export default About;
