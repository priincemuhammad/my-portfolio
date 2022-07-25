import React from 'react';
import styled from 'styled-components';
import { Fade, Bounce } from 'react-reveal';

const Sayhello = () => {
  return (
    <Container id="contact">
      <Content>
        <Box>
          <span>What's Next?</span>
          <h1>Get In Touch</h1>
          <p>
            My inbox is always open. Whether you have a question or just want to
            say hello, I'll try my best to get back to you! Feel free to mail me
            about any relevant job updates.
          </p>
          <div className="showMore">
            <Fade bottom>
              <a
                href="mailto:priiincemuhammad@gmail.com"
                rel="noopener noreferrer"
              >
                Say hello!
              </a>
            </Fade>
          </div>
        </Box>
      </Content>
    </Container>
  );
};

const Container = styled.section`
display flex;
`;
const Content = styled.div`
  width: 777px;
  margin: 0 auto;
  padding: 199px 50px;
  display: grid;
  grid-template-columns: 1fr;
`;

const Box = styled.div`
  display: grid;
  place-items: center;
  span {
    position: relative;
    align-items: center;
    margin: 10px 0px 20px;
    width: 100%;
    white-space: nowrap;
    display: block;
    color: var(--main-color);
    font-size: 16px;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono',
      'Lucida Console', Monaco, monospace;
    font-weight: normal;
    text-align: center;
    justify-content: center;
    &::before {
      position: relative;
      bottom: 0px;
      counter-increment: section 4;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--main-color);
      font-family: var(--font-mono);
    }
  }
  h1 {
    margin: 0px 0px 20px;
    font-size: 60px;
    font-weight: 600;
    color: rgb(204, 214, 246);
  }
  p {
    color: rgb(136, 146, 176);
    line-height: 1.3;
    font-size: 20px;
    text-align: center;
  }
  .showMore {
    padding-top: 33px;
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
  @media (max-width: 768px) {
    h1 {
      font-size: 55px;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 45px;
    }
    p {
      font-size: 17px;
    }
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 37px;
    }
  }
  @media (max-width: 350px) {
    h1 {
      font-size: 10vw;
    }
  }
`;

export default Sayhello;
