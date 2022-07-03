import React from 'react';
import styled from 'styled-components';
import imgs from '../../images/projectimgs/tesla-clone.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import Golive from '@mui/icons-material/OpenInNew';

const Singleproject = () => {
  return (
    <Container>
      <Content>
        <Project>
          <Projectimg>
            <Imgwrapper>
              <Mainimg>
                <a
                  href="https://github.com/prince-muhammad"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={imgs} alt="ProjectImg" />
                </a>
              </Mainimg>
            </Imgwrapper>
          </Projectimg>
        </Project>
        <Info>
          <Infoheader>
            <span>Featured Project</span>
            <h2>Tesla Clone</h2>
          </Infoheader>
          <Descriptions>
            A web app for visualizing personalized <a href="#">Spotify data.</a>
            View your top artists, top tracks, recently played tracks, and
            detailed audio information about each track. Create and save new
            playlists of recommended tracks based on your existing playlists and
            more.
          </Descriptions>
          <Infofooter>
            <div>
              <a href="#">
                <GitHubIcon />
              </a>
              <a href="#">
                <Golive />
              </a>
            </div>
            <div>
              <span>React.js</span>
              <span>Styled Components</span>
              <span>Redux Toolkit</span>
              <span>Firebase</span>
            </div>
          </Infofooter>
        </Info>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Project = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 992px) {
    width: 100%;
    position: absolute;
  }
`;
const Projectimg = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  border-radius: 4px;
  background: var(--main-color);
  visibility: visible;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  @media (max-width: 992px) {
    background: #0a192f;
  }
`;
const Imgwrapper = styled.div`
  position: relative;
  border-radius: 4px;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  height: 100%;
  &:hover {
    mix-blend-mode: initial;
    filter: initial;
  }
  @media (max-width: 992px) {
    &:hover {
      filter: grayscale(100%) contrast(1);
      mix-blend-mode: multiply;
    }
  }
`;
const Mainimg = styled.div`
  z-index: 10;
  height: 100%;
  width: 100%;
  display: block;
  img {
    max-width: 100%;
    height: 100%;
    display: block;
    border-radius: 4px;
    object-fit: cover;
  }
  @media (max-width: 992px) {
    img {
      object-fit: initial;
      width: 100%;
    }
  }
`;

const Info = styled.div`
  text-align: right;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 2;
  @media (max-width: 992px) {
    text-align: left;
  }

  @media (max-width: 992px) {
    padding: 30px 20px !important;
  }
`;

const Infoheader = styled.div`
  span {
    color: var(--main-color);
    margin: 10px 0px;
    font-size: 15px;
    font-weight: 500;
  }
  h2 {
    margin: 0px 0px 20px;
    color: #ccd6f6;
    font-weight: 600;
    line-height: 1.1;
    font-size: clamp(24px, 5vw, 28px);
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
    }
  }
`;

const Descriptions = styled.div`
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 25px;
  border-radius: 5px;
  background-color: #112240;
  color: #a8b2d1;
  font-size: 18px;
  a {
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: var(--main-color);
  }
  @media (max-width: 992px) {
    padding: 0px;
    background-color: transparent;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Infofooter = styled.div`
  padding-top: 14px;
  div {
    span {
      font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono',
        'Lucida Console', Monaco, monospace;
      font-size: 13px;
      color: var(--main-color);
      margin-left: 20px;
    }
    a {
      text-decoration: none;
      color: #ccd6f6;
      margin-left: 15px;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
      &:hover {
        color: var(--main-color);
      }
    }
  }
  @media (max-width: 992px) {
    a,
    span {
      margin-right: 15px;
      margin-left: 0px !important;
    }
  }
`;

export default Singleproject;
