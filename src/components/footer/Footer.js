import React from 'react';
import styled from 'styled-components';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
  return (
    <Container>
      <Content>
        <SocialLinks>
          <a
            href="https://github.com/priiincemuhammad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
          <a
            href="https://www.linkedin.com/in/prince-muhammad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://www.instagram.com/priiince_muhammad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.facebook.com/priince.muhammad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
        </SocialLinks>
        <p>
          No &copy; copyright issues. Feel free to copy. If you need any help,
          ping me !
        </p>
      </Content>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
`;
const Content = styled.div`
  width: 1140px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  p {
    color: #a8b2d1;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    &:hover {
      color: var(--main-color);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: var(--white-color);
    font-size: 14px;
    font-family: monospace;
    position: relative;
    letter-spacing: 2px;
    margin: 10px;
  }
`;

export default Footer;
