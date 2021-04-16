import * as S from './styles';

interface ILoading {
  typeLoading: 'roller' | 'spinner';
}

const Loading = ({ typeLoading }: ILoading) => {
  return (
    <>
      {typeLoading === 'roller' && (
        <S.LoadingRoller>
          <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </S.LoadingRoller>
      )}

      {typeLoading === 'spinner' && (
        <S.LoadingRing>
          <div className="spinner" />
        </S.LoadingRing>
      )}
    </>
  );
};

export default Loading;
