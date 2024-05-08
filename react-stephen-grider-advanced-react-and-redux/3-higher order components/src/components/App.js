import React from 'react';
import { Route, Routes, createBrowserRouter } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<CommentList />} />
        <Route path="post" element={<CommentBox />} />
        {/* protected routes */}
        {/* <Route element={<RequireAuth allowedRoles={[ROLE_USER]} />}>
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLE_ADMIN]} />}>
          <Route path="admin" element={<Admin />} />
        </Route> */}
        {/* catch all */}
        <Route path="*" element={<div>Error 404: Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default App;
