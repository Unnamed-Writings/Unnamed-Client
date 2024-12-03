import styled from '@emotion/styled';
import useClickOutside from '../../../hooks/useClickOutside';
import logout from '../../../utils/logout';
import useNavigateToHome from '../../../hooks/useNavigateHome';

import { useRef } from 'react';
import LogInOutBtn from '../../../components/commons/LogInOutBtn';

const MyMobileSidebar = ({ onClose }: { onClose: () => void }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { navigateToHome } = useNavigateToHome();

  useClickOutside(sidebarRef, () => {
    if (sidebarRef.current) onClose();
  });
  const handleLogOut = () => {
    logout();
    navigateToHome();
  };
  return (
    <>
      <Background onClick={onClose} />
      <SideBarLayout>
        <LogInOutBtn onClick={handleLogOut}>로그아웃</LogInOutBtn>
      </SideBarLayout>
    </>
  );
};

export default MyMobileSidebar;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SideBarLayout = styled.div`
  position: fixed;
  right: 0;
  z-index: 3;
  display: flex;
  width: 19.1rem;
  height: 100vh;
  padding: 1.2rem 1.6rem;

  background-color: white;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 16%);
`;