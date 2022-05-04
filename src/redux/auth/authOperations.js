import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookAPI from 'services/phonebookAPI';

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await phonebookAPI.signUpUser(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await phonebookAPI.logInUser(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await phonebookAPI.logOutUser(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.phonebook.auth.token;

    if (!persistedToken) {
      return rejectWithValue();
    }

    const response = await phonebookAPI.refreshCurrenthUser(persistedToken);
    return response;
  }
);
