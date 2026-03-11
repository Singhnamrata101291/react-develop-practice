import { configureStore } from '@reduxjs/toolkit';
import statementReducer from '../feature/statementSlice';

export const store = configureStore({
  reducer: {
    statement: statementReducer,
  },
});

// Persist to localStorage on any change
const STORAGE_KEY = 'stmt-data';
store.subscribe(() => {
  const state = store.getState();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.statement.list));
  } catch {
  }
});