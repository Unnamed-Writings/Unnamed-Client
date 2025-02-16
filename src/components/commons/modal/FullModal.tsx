import styled from '@emotion/styled';
import React from 'react';
import { createPortal } from 'react-dom';

import Spacing from '../Spacing';
import { MOBILE_MEDIA_QUERY } from '../../../styles/mediaQuery';

interface FullModalBtnPropType {
  isPrimary: boolean;
  onClick: () => void;
  content: string;
}

export const FullModalBtn = (props: FullModalBtnPropType) => {
  const { isPrimary, onClick, content } = props;

  return (
    <ModalBtn $isPrimary={isPrimary} onClick={onClick}>
      {content}
    </ModalBtn>
  );
};

interface FullModalPropType {
  isModalOpen: boolean;
  onClickBg?: () => void;
  children: React.ReactNode;
  content: string;
}

const portalElement = document.getElementById('modal') as HTMLElement;

export const FullModal = (props: FullModalPropType) => {
  const { isModalOpen, onClickBg, children, content } = props;

  return (
    <>
      {isModalOpen &&
        createPortal(
          <Wrapper>
            <ModalBackground onClick={onClickBg} />
            <ModalWrapper>
              <Content>{content}</Content>
              <Spacing marginBottom="2.8" />
              <BtnWrapper>{children}</BtnWrapper>
            </ModalWrapper>
          </Wrapper>,
          portalElement,
        )}
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  z-index: 4;
  width: 100vw;
  height: 100%;

  background-color: #0009;
`;

const ModalWrapper = styled.div`
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40rem;
  padding: 3.2rem 4rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;

  @media ${MOBILE_MEDIA_QUERY} {
    width: 33.5rem;
    padding: 3.2rem;
  }
`;

const Content = styled.p`
  color: ${({ theme }) => theme.colors.gray100};
  white-space: pre-wrap;
  text-align: center;
  ${({ theme }) => theme.fonts.title8};

  @media ${MOBILE_MEDIA_QUERY} {
    ${({ theme }) => theme.fonts.mSubtitle4};
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  width: 100%;
`;

const ModalBtn = styled.button<{ $isPrimary: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32rem;
  height: 3.9rem;

  color: ${({ $isPrimary, theme }) => ($isPrimary ? theme.colors.mainViolet : theme.colors.white)};

  background-color: ${({ $isPrimary, theme }) =>
    $isPrimary ? theme.colors.white : theme.colors.mainViolet};
  border: 1px solid ${({ theme }) => theme.colors.mainViolet};
  border-radius: 8px;

  ${({ theme }) => theme.fonts.button2};

  &:hover {
    color: ${({ theme }) => theme.colors.mainViolet};

    background-color: ${({ theme }) => theme.colors.mileViolet};
    border: ${({ $isPrimary }) => ($isPrimary ? '1px solid theme.colors.mainViolet' : 'none')};
  }

  @media ${MOBILE_MEDIA_QUERY} {
    width: 27.1rem;

    ${({ theme }) => theme.fonts.mButton1};
  }
`;
