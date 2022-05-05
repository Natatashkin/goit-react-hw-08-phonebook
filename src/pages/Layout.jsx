import React from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar } from 'components/AppBar';
import { getIsRefreshing } from 'redux/auth/authSelectors';

export function Layout() {
  const currentPath = useMatch('/');
  const isRefreshingUser = useSelector(getIsRefreshing);

  return (
    <>
      {!isRefreshingUser && (
        <>
          {!currentPath && <AppBar />}

          <main>
            <Outlet />
          </main>
          <footer>
            Developed by
            <a
              href="https://linkedin.com/in/nataliia-semeshenko"
              target="_blank"
              rel="noreferrer"
            >
              Nataliia Semeshenko
            </a>
          </footer>
        </>
      )}
    </>
  );
}
