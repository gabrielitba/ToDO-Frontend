import * as S from './styles';

import Loading from '../Loading';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

const Button = ({ children, loading, ...rest }: IButton) => {
  return (
    <S.Wrapper type="button" {...rest}>
      {loading ? <Loading typeLoading="roller" /> : children}
    </S.Wrapper>
  );
};

export default Button;
