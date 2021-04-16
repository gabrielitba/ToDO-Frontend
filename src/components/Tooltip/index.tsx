import * as S from './styles';

interface ITooltip {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Tooltip = ({ title, className, children }: ITooltip) => {
  return (
    <S.Wrapper className={className}>
      {children}
      <span>{title}</span>
    </S.Wrapper>
  );
};

export default Tooltip;
