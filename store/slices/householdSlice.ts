import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Roommate, Household } from '../types';

type AddRoommateActionType = Omit<Roommate, 'id'>;
interface SetRentAction extends PayloadAction<number> {}
interface AddRoommateAction extends PayloadAction<AddRoommateActionType> {}
interface DeleteRoommateAction extends PayloadAction<string> {}

const initialState: Household = {
  rent: 0,
  roommates: [],
};

const householdSlice = createSlice({
  name: 'household',
  initialState,
  reducers: {
    setRent(state, action: SetRentAction) {
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
    deleteRoommate(state, action: DeleteRoommateAction) {
      state.roommates = state.roommates.filter((roommate: Roommate) => {
        return roommate.id !== action.payload;
      });
    },
  },
});

export const { setRent, addRoommate, deleteRoommate } = householdSlice.actions;
export const householdReducer = householdSlice.reducer;
