import React from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainContainer from './Layout.styled';
import AppBar from 'components/AppBar';
import { getIsRefreshing } from 'redux/auth/authSelectors';
import { LayoutWrapper } from './Layout.styled';
import { HomePage } from 'pages/HomePage';
import { Footer } from 'components/Footer';
import { Toaster } from 'react-hot-toast';

export function Layout() {
  const currentPath = useMatch('/');
  const isRefreshingUser = useSelector(getIsRefreshing);

  return (
    <LayoutWrapper>
      {!isRefreshingUser && (
        <>
          {currentPath ? (
            <HomePage />
          ) : (
            <>
              <AppBar />
              <MainContainer component="main">
                <Outlet />
              </MainContainer>
              <Footer />
              <Toaster />
            </>
          )}
        </>
      )}
    </LayoutWrapper>
  );
}
