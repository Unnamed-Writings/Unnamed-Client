import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import { useGetGroupInfo } from '../hooks/queries';

import { GroupLeaderIc, GroupMemberIc, GroupDateIc } from './../../../assets/svgs';
import Spacing from '../../../components/commons/Spacing';

const GroupInfo = () => {
  const { groupId } = useParams() as { groupId: string };
  const { moimTitle, imageUrl, leader, memberCount, description } = useGetGroupInfo(groupId);

  return (
    <GroupInfoWrapper>
      <GroupImg src={imageUrl} alt={'모임 이미지'} />
      <GroupInfoContainer>
        <GroupName>{moimTitle}</GroupName>
        <Spacing marginBottom="1.8" />
        <GroupInfoContentWrapper>
          <GroupLeaderIc />
          <GroupInfoContent>모임방장</GroupInfoContent>
          <GroupInfoText>{leader}</GroupInfoText>
        </GroupInfoContentWrapper>
        <Spacing marginBottom="1.2" />
        <GroupInfoContentWrapper>
          <GroupDateIc />
          <GroupInfoContent>설립날짜</GroupInfoContent>
          <GroupInfoText>24.01.08~</GroupInfoText>
        </GroupInfoContentWrapper>
        <Spacing marginBottom="1.2" />
        <GroupInfoContentWrapper>
          <GroupMemberIc />
          <GroupInfoContent>모임인원</GroupInfoContent>
          <GroupInfoText>{memberCount}명의 작가들</GroupInfoText>
        </GroupInfoContentWrapper>
        <Spacing marginBottom="2.4" />
        <GroupDetailWrapper>
          <BorderBar />
          <GroupDetail>{description}</GroupDetail>
        </GroupDetailWrapper>
      </GroupInfoContainer>
    </GroupInfoWrapper>
  );
};

export default GroupInfo;

const GroupInfoWrapper = styled.section`
  display: flex;
  gap: 4.5rem;
  align-items: center;
  width: 100%;
`;

const GroupImg = styled.img`
  width: 36.4rem;
  height: 27.3rem;

  border-radius: 8px;
`;

const GroupInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const GroupName = styled.div`
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.fonts.title10};
`;

const GroupInfoContentWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: space-between;
`;

const GroupInfoContent = styled.span`
  color: ${({ theme }) => theme.colors.gray70};
  ${({ theme }) => theme.fonts.subtitle6};
`;

const GroupInfoText = styled.span`
  color: ${({ theme }) => theme.colors.gray80};
  ${({ theme }) => theme.fonts.body1};
`;

const GroupDetailWrapper = styled.section`
  display: flex;
  gap: 1.2rem;
  width: 45.1rem;
  height: 12.8rem;
`;

const BorderBar = styled.div`
  width: 13px;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.middleViolet};
  border-radius: 2px;
`;

const GroupDetail = styled.div`
  color: ${({ theme }) => theme.colors.gray70};
  ${({ theme }) => theme.fonts.body2};
  line-break: auto;
`;
