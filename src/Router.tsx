import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Admin from './pages/admin/Admin';
import Error from './pages/error/Error';
import GroupFeed from './pages/groupFeed/GroupFeed';
import GroupInvite from './pages/groupInvite/GroupInvite';
import GroupJoinCongrats from './pages/groupJoinCongrats/GroupJoinCongrats';
import Login from './pages/login/Login';
import RedirectLogin from './pages/login/RedirectLogin';
import Main from './pages/main/Main';
import PostDetail from './pages/postDetail/PostDetail';
import PostPage from './pages/postPage/PostPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/group/:groupId" element={<GroupFeed />} />
        <Route path="/detail/:groupId/:postId" element={<PostDetail />} />
        <Route path="/post/:groupId/:type" element={<PostPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/redirect-kakao" element={<RedirectLogin />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
        <Route path="/group/:groupId/groupInvite" element={<GroupInvite />} />
        <Route path="/group/:groupId/groupJoin" element={<GroupJoinCongrats />} />
        <Route path="/admin/:groupId" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
