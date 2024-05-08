import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { Container, Body } from './styles';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Outlet />
      </Body>
    </Container>
  );
};

export default Layout;
