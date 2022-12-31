import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { Item } from '../types';

interface AddItemAction extends PayloadAction<Item> {}
interface EditItemAction extends PayloadAction<Item> {}
interface RemoveItemAction extends PayloadAction<string> {}

interface ItemState {
  items: Item[];
}
const initialState: ItemState = {
  items: [],
};

const purchasesSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem(state, action: AddItemAction) {
      state.items.push({
        id: nanoid(),
        name: action.payload.name,
        buyer: action.payload.buyer,
        cost: action.payload.cost,
      });
    },
    editItem(state, action: EditItemAction) {
      state.items = state.items.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });
    },
    removeItem(state, action: RemoveItemAction) {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { addItem, editItem, removeItem } = purchasesSlice.actions;
export const purchasesReducer = purchasesSlice.reducer;
