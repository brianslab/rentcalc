import { configureStore } from '@reduxjs/toolkit';
import { roommatesReducer, addRoommate } from './slices/roommatesSlice';
import {
  itemsReducer,
  addItem,
  editItem,
  removeItem,
} from './slices/itemsSlice';

const store = configureStore({
  reducer: {
    roommates: roommatesReducer,
    items: itemsReducer,
  },
});

export { store, addRoommate, addItem, editItem, removeItem };
