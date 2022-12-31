import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { Roommate } from '../../types';

interface RoommateState {
  roommates: Roommate[];
}
interface AddRoommateAction extends PayloadAction<Roommate> {}

const initialState: RoommateState = {
  roommates: [],
};

const roommatesSlice = createSlice({
  name: 'roommates',
  initialState,
  reducers: {
    addRoommate(state, action: AddRoommateAction) {
      state.roommates.push({
        id: nanoid(),
        name: action.payload.name,
        split: action.payload.split,
      });
    },
  },
});

export const { addRoommate } = roommatesSlice.actions;
export const roommatesReducer = roommatesSlice.reducer;