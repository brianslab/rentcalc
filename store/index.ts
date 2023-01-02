import { configureStore } from '@reduxjs/toolkit';
import {
  roommateReducer,
  changeRoommateName,
  changeRoommateRentSplit,
  changeRoomateOwes,
} from './slices/roommateSlice';
import {
  householdReducer,
  setRent,
  addRoommate,
  deleteRoommate,
} from './slices/householdSlice';
import {
  itemReducer,
  changeItemName,
  changeItemBuyer,
  changeItemCost,
  changeItemSplit,
} from './slices/itemSlice';
import {
  purchasesReducer,
  addItem,
  editItem,
  removeItem,
} from './slices/purchasesSlice';

const store = configureStore({
  reducer: {
    roommate: roommateReducer,
    household: householdReducer,
    item: itemReducer,
    purchases: purchasesReducer,
  },
});

export {
  store,
  changeRoommateName,
  changeRoommateRentSplit,
  changeRoomateOwes,
  setRent,
  addRoommate,
  deleteRoommate,
  changeItemName,
  changeItemBuyer,
  changeItemCost,
  changeItemSplit,
  addItem,
  editItem,
  removeItem,
};
