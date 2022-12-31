import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Roommate, Household } from '../types';

interface AddRoommateAction extends PayloadAction<Roommate> {}

const initialState: Household = {
  rent: 0,
  roommates: [],
};

const householdSlice = createSlice({
  name: 'household',
  initialState,
  reducers: {
    setRent(state, action: PayloadAction<number>) {
      state.rent = action.payload;
    },
    addRoommate(state, action: AddRoommateAction) {
      state.roommates.push({
        id: String.fromCharCode(65 + state.roommates.length - 1),
        name: action.payload.name,
        rentSplit: action.payload.rentSplit,
        owes: action.payload.owes,
      });
    },
  },
});

export const { setRent, addRoommate } = householdSlice.actions;
export const householdReducer = householdSlice.reducer;
