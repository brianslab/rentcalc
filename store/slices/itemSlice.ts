import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, ItemSplit } from '../types';

interface ChangeItemNameAction extends PayloadAction<string> {}
interface ChangeItemBuyerAction extends PayloadAction<string> {}
interface ChangeItemCostAction extends PayloadAction<number> {}
interface ChangeItemSplitAction extends PayloadAction<ItemSplit> {}

const initialState: Item = {
  id: '',
  name: '',
  buyer: '',
  cost: 0,
  split: [],
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    changeItemName(state, action: ChangeItemNameAction) {
      state.name = action.payload;
    },
    changeItemBuyer(state, action: ChangeItemBuyerAction) {
      state.buyer = action.payload;
    },
    changeItemCost(state, action: ChangeItemCostAction) {
      state.cost = action.payload;
    },
    changeItemSplit(state, action: ChangeItemSplitAction) {
      state.split.push(action.payload);
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
