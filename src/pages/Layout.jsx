import React from 'react';
import { Outlet, useMatch, Link } from 'react-router-dom';
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
            <Link
              reloadDocument
              to="https://linkedin.com/in/nataliia-semeshenko"
              target="_blank"
            >
              Nataliia Semeshenko
            </Link>
          </footer>
        </>
      )}
    </>
  );
}
