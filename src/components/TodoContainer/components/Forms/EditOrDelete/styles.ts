import styled from 'styled-components';

interface IButton {
  color: string;
}

export const Wrapper = styled.div`
  margin: 0 20px;

  div {
    border-radius: 0.25rem;
  }
`;

export const Button = styled.button<IButton>`
  color: #fff;
  background-color: ${({ color }) => color};

  margin-top: 40px;
  margin-left: 370px;

  width: 150px;

  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  height: 40px;


  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }

  > div {
    transform: scale(0.8);
    height: 25px;
    margin-top: -13px;
    margin-bottom: 15px;
  }
  }
`;