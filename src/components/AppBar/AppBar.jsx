import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { NavBar } from './NavBar';
import { Header } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Header>
      <NavBar />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </Header>
  );
};
