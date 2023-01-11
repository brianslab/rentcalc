import { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRoommate,
  changeRoommateName,
  changeRoommateRentSplit,
  setRent,
} from '../store';
import { RootState, Roommate } from '../store/types';

function HouseholdForm() {
  const dispatch = useDispatch();
  const rent = useSelector<RootState, number>((state) => {
    return state.household.rent;
  });
  const { name, rentSplit } = useSelector<RootState, Roommate>((state) => {
    return state.roommate;
  });

  const handleRentChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRent(parseInt(event.target.value) || 0));
  };
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeRoommateName(event.target.value));
  };
  const handleRentSplitChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeRoommateRentSplit(parseFloat(event.target.value) || 0));
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addRoommate({ name, rentSplit, owes: {} }));
  };

  return (
    <div>
      <h4>Enter Household Information</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rent cost</label>
          <input value={rent || ''} onChange={handleRentChange} type='number' />
        </div>
        <div>
          <label>Roommate Information</label>
          <div>
            <label>Name</label>
            <input value={name || ''} onChange={handleNameChange} />
            <label>Rent Split</label>
            <input
              value={rentSplit || ''}
              onChange={handleRentSplitChange}
              type='number'
              step='0.01'
            />
          </div>
        </div>
        <div>
          <button>Add Roommate</button>
        </div>
      </form>
    </div>
  );
}

export default HouseholdForm;
