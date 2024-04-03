import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FetchGroupResponseTypes, Groups, MYGROUP } from '../constants/myGroupName';

import useClickOutside from '../../../hooks/useClickOutside';

const MyGroupDropDown = () => {
  const navigate = useNavigate();
  const handleRoutingGroupFeed = (groupId: string) => {
    navigate(`/group/${groupId}`);
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropDownRef = useRef(null);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOutSideClick = () => {
    setIsOpen(false);
  };

  // 기존 커스텀 훅 재사용 - 바깥 영역 클릭시 드롭다운 닫힘
  useClickOutside(dropDownRef, handleOutSideClick);

  return (
    <MyGroupDropDownWrapper ref={dropDownRef}>
      <MyGroupBtnLayout onClick={handleOnClick}>내 글 모임</MyGroupBtnLayout>
      <MyGroupListLayout $isOpen={isOpen}>
        {MYGROUP.map(({ data }: FetchGroupResponseTypes) =>
          data.groups.map(({ groupId, groupName }: Groups) => (
            <GroupContentContainer key={groupId} onClick={() => handleRoutingGroupFeed(groupId)}>
              {groupName}
            </GroupContentContainer>
          )),
        )}
      </MyGroupListLayout>
    </MyGroupDropDownWrapper>
  );
};

export default MyGroupDropDown;

const MyGroupDropDownWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyGroupBtnLayout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.5rem;
  height: 4rem;
  padding: 1rem 1.6rem;

  color: ${({ theme }) => theme.colors.gray70};
  text-align: center;

  cursor: pointer;

  ${({ theme }) => theme.fonts.subtitle6}

  :hover {
    color: ${({ theme }) => theme.colors.mainViolet};

    background-color: ${({ theme }) => theme.colors.gray10};
    transform: scale(0.95);
    border-radius: 0.8rem;

    transition: 0.5s;
  }

  :active {
    transform: scale(1.1);

    transition: 0.5s;
  }
`;

const MyGroupListLayout = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 6rem;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.2rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 16%);
  border: ${({ theme }) => theme.colors.grayViolet};
  border-radius: 0.8rem;
`;

const GroupContentContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.6rem;

  color: ${({ theme }) => theme.colors.gray70};

  border-radius: 0.8rem;
  ${({ theme }) => theme.fonts.body1};

  &:hover {
    color: ${({ theme }) => theme.colors.black};

    background-color: ${({ theme }) => theme.colors.gray10};
    ${({ theme }) => theme.fonts.subtitle6};
  }
`;