import React, { useState } from 'react';
import styled from 'styled-components';

export const Singleskills = (props) => {
  return (
    <div>
      <i class={props.icons}></i>
    </div>
  );
};

const Experiences = () => {
  const [toggleButtons, setToggleButtons] = useState(1);

  const toggleTab = (index) => {
    setToggleButtons(index);
  };

  return (
    <Container>
      <Content>
        <h1 className="heading">Experience</h1>
        <Textparent>
          <Buttons>
            <button
              className={toggleButtons === 1 ? 'tabs active' : 'tabs'}
              onClick={() => toggleTab(1)}
            >
              Skills
            </button>
            <button
              className={toggleButtons === 2 ? 'tabs active' : 'tabs'}
              onClick={() => toggleTab(2)}
            >
              Education
            </button>
            <button
              className={toggleButtons === 3 ? 'tabs active' : 'tabs'}
              onClick={() => toggleTab(3)}
            >
              Experience
            </button>
            <button
              className={toggleButtons === 4 ? 'tabs active' : 'tabs'}
              onClick={() => toggleTab(4)}
            >
              Microsoft
            </button>
            <button
              className={toggleButtons === 5 ? 'tabs active' : 'tabs'}
              onClick={() => toggleTab(5)}
            >
              KS Devware
            </button>
            <button
              className={toggleButtons === 6 ? 'tabs active' : 'tabs'}
              onClick={() => toggleTab(6)}
            >
              Amazon
            </button>
          </Buttons>
          <Text
            className={toggleButtons === 1 ? 'text activeText' : 'text'}
            onClick={() => toggleTab(1)}
          >
            <h3>My Technical Skills</h3>
            <p>
              "What really matters, is the depth of your heart and the strength
              of your character"
            </p>
            <Allskills>
              <Singleskills icons={'devicon-html5-plain-wordmark'} />
              <Singleskills icons={'devicon-css3-plain-wordmark'} />
              <Singleskills icons={'devicon-javascript-plain'} />
              <Singleskills icons={'devicon-react-original-wordmark'} />
              <Singleskills icons={'devicon-nodejs-plain'} />
              <Singleskills icons={'devicon-redux-original'} />

              <Singleskills icons={'devicon-express-original'} />
              <Singleskills icons={'devicon-mongodb-plain-wordmark'} />
              <Singleskills icons={'devicon-firebase-plain-wordmark'} />
              <Singleskills icons={'devicon-mysql-plain-wordmark'} />
              <Singleskills icons={'devicon-sequelize-plain'} />
              <Singleskills icons={'devicon-jquery-plain-wordmark'} />

              <Singleskills icons={'devicon-linux-plain'} />
              <Singleskills icons={'devicon-sass-original'} />
              <Singleskills icons={'devicon-materialui-plain'} />
              <Singleskills icons={'devicon-figma-plain'} />
              <Singleskills icons={'devicon-git-plain'} />
              <Singleskills icons={'devicon-github-original'} />
            </Allskills>
          </Text>
          <Text
            className={toggleButtons === 2 ? 'text activeText' : 'text'}
            onClick={() => toggleTab(2)}
          >
            <h3>
              Narshingdi Polytechnic Academy
              <a href="/" rel="noopener noreferer">
                (SSC)
              </a>
            </h3>
            <span>2020 - Present</span>
            <p>
              "I don't like studying, I like learning. Learning is beautiful."
            </p>
            <p>
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </p>
            <p>
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </p>
          </Text>
          <Text
            className={toggleButtons === 3 ? 'text activeText' : 'text'}
            onClick={() => toggleTab(3)}
          >
            <h3>
              Cyber71 Bangladesh <b>(Cyber Specialist)</b>
            </h3>
            <span>2020 - Present</span>
            <p>
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </p>
            <p>
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </p>
            <p>
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </p>
          </Text>
          <Text
            className={toggleButtons === 4 ? 'text activeText' : 'text'}
            onClick={() => toggleTab(4)}
          >
            <h3>Google</h3>
            <span>
              2020 - Present <b>(Front-End Expert)</b>
            </span>
            <p>
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </p>
            <p>
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </p>
            <p>
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </p>
          </Text>
          <Text
            className={toggleButtons === 5 ? 'text activeText' : 'text'}
            onClick={() => toggleTab(5)}
          >
            <h3>Amazon Web Services</h3>
            <span>
              2020 - Present <b>(AWS Specialist)</b>
            </span>
            <p>
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </p>
            <p>
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </p>
            <p>
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </p>
          </Text>
          <Text
            className={toggleButtons === 6 ? 'text activeText' : 'text'}
            onClick={() => toggleTab(6)}
          >
            <h3>Netflix</h3>
            <span>
              2020 - Present <b>(Web Designer)</b>
            </span>
            <p>
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </p>
            <p>
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </p>
            <p>
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </p>
          </Text>
        </Textparent>
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
  .text {
    display: none;
  }
  .activeText {
    display: block !important;
  }
  .heading {
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
      counter-increment: section 2;
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
  @media (max-width: 768px) {
    .heading {
      &::after {
        width: 20%;
      }
      font-size: 20px;
    }
    padding: 100px 20px !important;
  }
`;
const Textparent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  @media (max-width: 774px) {
    grid-template-columns: 1fr;
  }
`;
const Buttons = styled.section`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  button {
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    display: flex;
    align-items: center;
    width: 100%;
    height: 42px;
    padding: 0px 20px 2px;
    border-left: 2px solid #8892b0 !important;
    background-color: transparent;
    color: #8892b0;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    font-size: 16px;
    text-align: left;
    cursor: pointer;
    border: 0px;
    border-radius: 0px;
    font-weight: 500;
    &:hover {
      border-color: var(--main-color) !important;
      color: var(--main-color);
      background: var(--button-bg);
    }
  }
  .active {
    border-color: var(--main-color) !important;
    color: var(--main-color);
    background: var(--button-bg);
  }
  @media (max-width: 774px) {
    flex-direction: row !important;
    overflow-x: scroll;
    button {
      border-left: 0px !important;
      border-top: 2px solid #8892b0 !important;
      text-align: center !important;
    }
  }
`;
const Text = styled.section`
  i {
    &:hover {
      color: var(--main-color);
    }
  }
  h3 {
    font-size: 22px;
    font-weight: 800;
    color: #ccd6f6;
    a {
      text-decoration: none;
      color: var(--main-color);
    }
  }
  span {
    color: #8892b0;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    font-size: 16px;
    font-weight: 500;
  }
  p {
    position: relative;
    padding-left: 30px;
    padding-right: 100px;
    margin-top: 20px;
    color: #8892b0;
    font-family: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text',
      -apple-system, system-ui, sans-serif;
    font-size: 20px;
    line-height: 1.3;
    &::before {
      content: '▹';
      position: absolute;
      left: 0px;
      color: var(--main-color);
    }
  }
  @media (max-width: 992px) {
    p {
      padding-right: 0px;
    }
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }
`;
const Allskills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 20px;
  padding: 20px 0px;
  div {
    i {
      font-size: 4rem;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr !important;
  }
  @media (max-width: 570px) {
    grid-template-columns: 1fr 1fr 1fr 1fr !important;
  }
`;


export default Experiences;
