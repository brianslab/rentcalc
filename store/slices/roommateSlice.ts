import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Roommate } from '../types';
import { addRoommate } from './householdSlice';

type Owes = Record<string, number>;

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
