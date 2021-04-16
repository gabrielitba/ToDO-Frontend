import styled, { keyframes } from 'styled-components';

import signUpBackgroundImg from '../../assets/sign-up-background.jpg';

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;
`;

export const Content = styled.div`
  @media (max-width: 1366px) {
    transform: scale(0.8);
    max-width: 550px;
    font-size: 18px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;
`;

const animationFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(80px);
  }

  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${animationFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #666360;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  > a {
    color: #ff9000;
    margin-top: -20px;
    text-decoration: none;
    transition: filter 0.3s;

    display: flex;
    align-items: center;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
