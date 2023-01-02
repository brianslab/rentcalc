import { useSelector } from 'react-redux';
import { Household, Roommate, RootState } from '../store/types';

function HouseholdShow() {
  const household = useSelector<RootState, Household>((state) => {
    return state.household;
  });
  const roommates = household.roommates;

  const handleRoommateDelete = (roommate: Roommate) => {};

  const renderedRoommates = roommates.map((roommate) => {
    return (
      <div key={roommate.name}>
        <p>
          {roommate.name}, Split: {roommate.rentSplit}%
        </p>
        <button onClick={() => handleRoommateDelete}>Delete</button>
      </div>
    );
  });

  return (
    <div>
      <hr />
      <p>Household</p>
      <p>Rent: ${household.rent}</p>
      <hr />
      <p>Roommates:</p>
      {renderedRoommates}
      <hr />
    </div>
  );
}

export default HouseholdShow;
