import styled from '@emotion/styled';

import {
  MainManualCuriousIc,
  MainManualJoinIc,
  MainManualLookIc,
  MainManualMakeIc,
  MainManualShareIc,
  MainManualWriteIc,
} from '../../../assets/svgs';
import Spacing from '../../../components/commons/Spacing';

const Manual = () => {
  return (
    <ManualWrapper>
      <ManualLayout>
        <ManualTitle>마일 메뉴얼</ManualTitle>
        <Spacing marginBottom="3.6" />
        <ManualContainer>
          <ManualRow>
            <MainManualMakeIc />
            <MainManualJoinIc />
            <MainManualWriteIc />
          </ManualRow>
          <ManualRow>
            <MainManualShareIc />
            <MainManualCuriousIc />
            <MainManualLookIc />
          </ManualRow>
        </ManualContainer>
      </ManualLayout>
    </ManualWrapper>
  );
};

export default Manual;

const ManualWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10rem;
`;

const ManualLayout = styled.div`
  cursor: default;
`;

const ManualTitle = styled.h1`
  display: flex;
  margin-top: 10rem;
  ${({ theme }) => theme.fonts.title3};
`;

const ManualContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 92.8rem;
`;

const ManualRow = styled.div`
  display: flex;
  gap: 2rem;
`;
