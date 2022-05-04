import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export function HomePage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/contacts');
    }
    navigate('/login');
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <p>Keep all your contacts in save place!</p>
      <button onClick={handleButtonClick}>Let's Go!</button>
    </div>
  );
}
