import React from 'react';
import styled from 'styled-components';
const Alltexts = (props) => {
  return (
    <Text>
      <h3>Narshingdi Polytechnic Academy</h3>
      <span>
        2020 - Present <b>(HSC)</b>
      </span>
      <p>
        Write modern, performant, maintainable code for a diverse array of
        client and internal projects
      </p>
      <p>
        Work with a variety of different languages, platforms, frameworks, and
        content management systems such as JavaScript, TypeScript, Gatsby,
        React, Craft, WordPress, Prismic, and Netlify
      </p>
      <p>
        Communicate with multi-disciplinary teams of engineers, designers,
        producers, and clients on a daily basis
      </p>
    </Text>
  );
};

const Text = styled.section`
  h3 {
    font-size: 22px;
    font-weight: 800;
    color: #ccd6f6;
  }
  span {
    color: #8892b0;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    font-size: 16px;
    font-weight: 500;
    b {
      color: var(--main-color);
    }
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
`;

export default Alltexts;
