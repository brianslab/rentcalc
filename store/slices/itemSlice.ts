import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../types';

const initialState: Item = {
  id: '',
  name: '',
  buyer: '',
  cost: 0,
  split: {},
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    changeItemName(state, action) {
      state.name = action.payload;
    },
    changeItemBuyer(state, action) {
      state.buyer = action.payload;
    },
    changeItemCost(state, action) {
      state.cost = action.payload;
    },
    changeItemSplit(state, action) {
      state.split = action.payload;
    },
  },
});

export const {
  changeItemName,
  changeItemBuyer,
  changeItemCost,
  changeItemSplit,
} = itemSlice.actions;
export const itemReducer = itemSlice.reducer;
