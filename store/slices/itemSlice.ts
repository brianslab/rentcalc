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
  itemSplit: [],
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
      if (
        state.itemSplit.some((sp) =>
          Object.values(sp).includes(action.payload.roommateID)
        )
      ) {
        state.itemSplit.map((sp) =>
          action.payload.roommateID === sp.roommateID ? action.payload : sp
        );
      } else {
        state.itemSplit.push(action.payload);
      }
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
