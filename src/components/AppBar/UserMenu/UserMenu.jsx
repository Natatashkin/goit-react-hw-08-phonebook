import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';
import * as authOperations from 'redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserName);

  return (
    <div>
      <span>Wellcome, {email}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
};
