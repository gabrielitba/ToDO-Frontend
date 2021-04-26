import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 90px;
  padding: 0 3rem;

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);

  > img {
    margin-left: -40px;
    transform: scale(0.8);
  }

  > div {
    margin-right: 940px;

    > h3 {
      color: #ff9000;
    }
  }
  > button {
    background: none;
    border: none;

    transition: transform 0.4s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
