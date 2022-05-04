import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/auth/authOperations';

export const SignupForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'login':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ name, email, password });
    dispatch(authOperations.signUp({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div aria-label="Form field for login">
        <label htmlFor="login">
          <input
            type="text"
            name="login"
            value={name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div aria-label="Form field for password">
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div aria-label="Form field to repeat password">
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit">Login</button>
    </form>
  );
};
