import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import NoPageFound from './pages/no-page-found/no-page-found';

export const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NoPageFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
