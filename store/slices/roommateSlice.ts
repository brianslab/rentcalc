import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Roommate, Owes } from '../types';
import { addRoommate } from './householdSlice';

interface ChangeRoommateNameAction extends PayloadAction<string> {}
interface ChangeRoommateRentSplitAction extends PayloadAction<number> {}
interface ChangeRoommateOwesAction extends PayloadAction<Owes> {}

const initialState: Roommate = {
  id: '',
  name: '',
  rentSplit: 0,
  owes: {},
};

const roommateSlice = createSlice({
  name: 'roommate',
  initialState,
  reducers: {
    changeRoommateName(state, action: ChangeRoommateNameAction) {
      state.name = action.payload;
    },
    changeRoommateRentSplit(state, action: ChangeRoommateRentSplitAction) {
      state.rentSplit = action.payload;
    },
    changeRoomateOwes(state, action: ChangeRoommateOwesAction) {
      state.owes = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addRoommate, (state, action) => {
      (state.name = ''), (state.rentSplit = 0);
    });
  },
});

export const {
  changeRoommateName,
  changeRoommateRentSplit,
  changeRoomateOwes,
} = roommateSlice.actions;
export const roommateReducer = roommateSlice.reducer;
