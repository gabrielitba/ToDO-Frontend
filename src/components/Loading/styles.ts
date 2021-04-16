import styled from 'styled-components';

export const LoadingRoller = styled.div`
  margin-top: -1%;
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .lds-roller {
    position: relative;
    display: inline-block;
    height: 50px;
    width: 50px;
    transform: scale(0.7);

    > div {
      animation: lds-roller 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: 32px 32px;

      &:after {
        position: absolute;
        display: block;
        background: #fff;
        border-radius: 50%;
        content: ' ';
        margin: -3px 0 0 -3px;
        height: 6px;
        width: 6px;
      }

      &:nth-child(1) {
        animation-delay: -0.036s;

        &:after {
          top: 50px;
          left: 50px;
        }
      }

      &:nth-child(2) {
        animation-delay: -0.072s;

        &:after {
          top: 54px;
          left: 45px;
        }
      }

      &:nth-child(3) {
        animation-delay: -0.108s;

        &:after {
          top: 57px;
          left: 39px;
        }
      }

      &:nth-child(4) {
        animation-delay: -0.144s;

        &:after {
          top: 58px;
          left: 32px;
        }
      }

      &:nth-child(5) {
        animation-delay: -0.18s;

        &:after {
          top: 57px;
          left: 25px;
        }
      }

      &:nth-child(6) {
        animation-delay: -0.216s;

        &:after {
          top: 54px;
          left: 19px;
        }
      }

      &:nth-child(7) {
        animation-delay: -0.252s;

        &:after {
          top: 50px;
          left: 14px;
        }
      }

      &:nth-child(8) {
        animation-delay: -0.288s;

        &:after {
          top: 45px;
          left: 10px;
        }
      }
    }
  }
`;

export const LoadingRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: scale(2);

  .spinner {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid #ff9000;
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
