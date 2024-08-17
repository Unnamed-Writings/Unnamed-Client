import styled from '@emotion/styled';
import { isAxiosError } from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { DefaultHeader } from '../../components/commons/Header';
import Spacing from '../../components/commons/Spacing';
import useNavigateLoginWithPath from '../../hooks/useNavigateLoginWithPath';

import GroupInfo from './components/GroupInfo';
import Title from './components/Title';
import UserInfoInput from './components/UserInfoInput';
import { useGetGroupInfo } from './hooks/queries';

const GroupInvite = () => {
  const navigate = useNavigate();
  const { groupId } = useParams() as { groupId: string };

  const { moimTitle, imageUrl, leader, foundedDate, memberCount, description, error, isError } =
    useGetGroupInfo(groupId);

  const { navigateToLogin } = useNavigateLoginWithPath();

  useEffect(() => {
    if (isError && isAxiosError(error)) {
      if (error.response && error.response.status) {
        const { status } = error.response;
        if (status === 400) {
          if (error.response.data.status === 40010 || error.response.data.status === 40014) {
            alert('존재하지 않는 글모임입니다.');
            navigateToLogin();
          } else if (error.response.data.status === 40016) {
            alert('이미 가입한 모임입니다.');
            navigate(`/group/${groupId}`);
          }
        } else if (status === 404) {
          alert('존재하지 않는 글모임입니다.');
          navigateToLogin();
        } else {
          alert('올바르지 않은 접근입니다.');
          navigate('/error');
        }
      }
    } else {
      alert('올바르지 않은 접근입니다.');
      navigate('/error');
    }
  }, [error, isError, groupId]);

  // if (errorLoading) {
  //   return <Loading />;
  // } else {
  return (
    <GroupInviteWrapper>
      <DefaultHeader />
      <Spacing marginBottom="11.4" />
      <Title />
      <Spacing marginBottom="4.8" />

      <GroupInfo
        moimTitle={moimTitle}
        imageUrl={imageUrl}
        leader={leader}
        foundedDate={foundedDate}
        memberCount={memberCount}
        description={description}
      />
      <Spacing marginBottom="2.8" />
      <UserInfoInput moimTitle={moimTitle} />

      <Spacing marginBottom="7.7" />
    </GroupInviteWrapper>
  );
};

export default GroupInvite;

const GroupInviteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 82.6rem;
`;
