import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Roommate, Household } from '../types';

type AddRoommateActionType = Omit<Roommate, 'id'>;
interface AddRoommateAction extends PayloadAction<AddRoommateActionType> {}

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
        id: nanoid(),
        name: action.payload.name,
        rentSplit: action.payload.rentSplit,
        owes: action.payload.owes,
      });
    },
  },
});

export const { setRent, addRoommate } = householdSlice.actions;
export const householdReducer = householdSlice.reducer;
