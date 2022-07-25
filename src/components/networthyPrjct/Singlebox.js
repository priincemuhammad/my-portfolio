import React from 'react';
import styled from 'styled-components';

const Singlebox = () => {
  return (
    <Singlefile>
      <div className="topIcons">
        <div>
          <svg
            id="files"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="feather feather-folder"
          >
            <title>Folder</title>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <div>
          <a href="#">
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="GitHubIcon"
            >
              <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="OpenInNewIcon"
            >
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="middleText">
        <h2>Time to Have More Fun</h2>
        <p>Project description will bw here</p>
      </div>
      <div>
        <span>React.js</span>
        <span>Styledcomponents</span>
        <span>Redux</span>
      </div>
    </Singlefile>
  );
};

const Singlefile = styled.section`
  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: 3px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  background-color: rgb(23, 42, 69);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &:hover {
    transform: translateY(-10px);
  }
  .topIcons {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    #files {
      width: 40px;
      height: 40px;
      color: var(--main-color);
    }
  }
  .middleText {
    padding: 30px 0px;
    h2 {
      margin: 0px 0px 10px;
      font-size: 22px;
      color: rgb(204, 214, 246);
    }
    p {
      font-size: 17px;
      color: rgb(168, 178, 209);
    }
  }
  div {
    a {
      color: rgb(204, 214, 246);
      margin-left: 15px;
    }
    span {
      font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono',
        'Lucida Console', Monaco, monospace;
      font-size: 12px;
      color: var(--main-color);
      line-height: 1.75;
      margin-right: 15px;
    }
  }
`;
export default Singlebox;
