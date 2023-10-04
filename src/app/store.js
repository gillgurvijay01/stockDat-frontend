import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import LoginSlice from './slice/loginSlice/loginSlice';
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {
    // Handle errors while saving state
  }
};

const initialState = loadState();

const store = configureStore({
  reducer: {
    login: LoginSlice,
    logout: LoginSlice,
  },
  preloadedState: initialState,
});

store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});

export { store };
