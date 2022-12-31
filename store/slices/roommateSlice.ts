import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Roommate } from '../types';

type Owes = Record<string, number>;

const initialState: Roommate = {
  id: '',
  name: '',
  rentSplit: 1,
  owes: {},
};

const roommateSlice = createSlice({
  name: 'roommate',
  initialState,
  reducers: {
    changeRoommateName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeRoommateRentSplit(state, action: PayloadAction<number>) {
      state.rentSplit = action.payload;
    },
    changeRoomateOwes(state, action: PayloadAction<Owes>) {
      state.owes = action.payload;
    },
  },
});

export const {
  changeRoommateName,
  changeRoommateRentSplit,
  changeRoomateOwes,
} = roommateSlice.actions;
export const roommateReducer = roommateSlice.reducer;
