import { createSlice, createSelector } from '@reduxjs/toolkit';

const STORAGE_KEY = 'stmt-data';

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

const initialState = {
  list: loadFromStorage(),
};

const statementSlice = createSlice({
  name: 'statement',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.list.push(action.payload);
    },
    updateTransaction: (state, action) => {
      const idx = state.list.findIndex((t) => t.id === action.payload.id);
      if (idx >= 0) state.list[idx] = action.payload;
    },
    removeTransaction: (state, action) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
    clearAll: (state) => {
      state.list = [];
    },
  },
});

export const { addTransaction, updateTransaction, removeTransaction, clearAll } =
  statementSlice.actions;

export default statementSlice.reducer;

// Selectors
export const selectList = (state) => state.statement.list;

export const selectTotals = createSelector([selectList], (list) => {
  const credit = list.reduce((s, t) => s + (t.credit || 0), 0);
  const debit = list.reduce((s, t) => s + (t.debit || 0), 0);
  return {
    credit,
    debit,
    balance: credit - debit,
  };
});