import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setRent } from '../store';

function HouseholdForm() {
  const dispatch = useDispatch();
  const rent = useSelector<RootState, number>((state) => {
    return state.household.rent;
  });

  const handleRentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rentCost = parseInt(event.target.value) || 0;
    dispatch(setRent(rentCost));
  };

  return (
    <div>
      <h4>Enter Household Information</h4>
      <form>
        <div>
          <label>Rent cost</label>
          <input value={rent || ''} onChange={handleRentChange} type='number' />
        </div>
      </form>
    </div>
  );
}

export default HouseholdForm;
