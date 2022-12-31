import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Roommate } from '../types';

type Owes = Record<string, number>;

const initialState: Roommate = {
  id: '',
  name: '',
  split: 1,
  owes: {},
};

const roommateSlice = createSlice({
  name: 'roommate',
  initialState,
  reducers: {
    changeRoommateName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeRoommateSplit(state, action: PayloadAction<number>) {
      state.split = action.payload;
    },
    changeRoomateOwes(state, action: PayloadAction<Owes>) {
      state.owes = action.payload;
    },
  },
});

export const { changeRoommateName, changeRoommateSplit, changeRoomateOwes } =
  roommateSlice.actions;
export const roommateReducer = roommateSlice.reducer;
