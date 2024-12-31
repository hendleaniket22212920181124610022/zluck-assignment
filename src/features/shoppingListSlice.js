import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  items: [], 
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({ id: Date.now(), ...action.payload, qty: 1, checked: false });
      }
    },
    toggleItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.checked = !item.checked;
    },
    updateItem: (state, action) => {
      const { id, name } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) item.name = name;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, toggleItem, updateItem, deleteItem } = shoppingListSlice.actions;

const persistConfig = {
  key: 'shoppingList',
  storage,
};

export const shoppingListReducer = persistReducer(persistConfig, shoppingListSlice.reducer);
