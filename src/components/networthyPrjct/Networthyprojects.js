import React from 'react';
import styled from 'styled-components';
import Singlebox from './Singlebox';
import { Fade, Bounce } from 'react-reveal';

const Networthyprojects = () => {
  return (
    <Container>
      <Content>
        <div className="header">
          <Bounce top>
            <h4 className="heading">Other Noteworthy Projects</h4>
          </Bounce>
          <Fade bottom>
            <a className="viewAll" href="#" rel="noopener noreferrer">
              View Complete List of Projects
            </a>
          </Fade>
        </div>
        <Innercontent>
          <Fade bottom>
            <Singlebox />
          </Fade>
          <Fade bottom>
            <Singlebox />
          </Fade>
          <Fade bottom>
            <Singlebox />
          </Fade>
          <Fade bottom>
            <Singlebox />
          </Fade>
          <Fade bottom>
            <Singlebox />
          </Fade>
          <Fade bottom>
            <Singlebox />
          </Fade>
        </Innercontent>
        <div className="showMore">
          <Fade bottom>
            <a href="#" rel="noopener noreferrer">
              Show More
            </a>
          </Fade>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
`;
const Content = styled.section`
  width: 1140px;
  margin: 0 auto;
  padding: 100px 50px;
  .showMore {
    padding-top: 100px;
    display: grid;
    place-items: center;
    a {
      color: var(--main-color);
      border: 1px solid var(--main-color);
      border-radius: 3px;
      padding: 1.25rem 1.75rem;
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
        background: var(--button-hover);
      }
    }
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 70px;
    .heading {
      margin: 10px;
      font-weight: 600;
      font-size: clamp(26px, 5vw, 30px);
      color: #ccd6f6;
    }
  }
  a.viewAll {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    cursor: pointer;
    color: var(--main-color);
    text-align: center;
    margin: 0px auto;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono',
      'Lucida Console', Monaco, monospace;
    font-size: 14px;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
      opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
      transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
    &::after {
      content: '';
      display: block;
      height: 1px;
      width: 0%;
      background: var(--main-color);
      position: relative;
      bottom: 0px;
      left: 0;
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
        opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
        transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    .heading {
      &::after {
        width: 20%;
      }
      font-size: 22px !important;
    }
    padding: 100px 20px !important;
  }
`;

const Innercontent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  grid-row-gap: 95px;
  @media (max-width: 1140px) {
    grid-template-columns: 1fr 1fr !important;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr !important;
  }
`;

export default Networthyprojects;
