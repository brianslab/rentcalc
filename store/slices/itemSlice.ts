import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../types';

const initialState: Item = {
  id: '',
  name: '',
  buyer: '',
  cost: 0,
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    changeItemName(state, action) {
      state.name = action.payload;
    },
    changeItemCost(state, action) {
      state.cost = action.payload;
    },
    changeItemBuyer(state, action) {
      state.buyer = action.payload;
    },
  },
});

export const { changeItemName, changeItemCost, changeItemBuyer } =
  itemSlice.actions;
export const itemReducer = itemSlice.reducer;
