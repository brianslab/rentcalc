import { useSelector, useDispatch } from 'react-redux';
import { deleteRoommate } from '../store';
import { Household, Roommate, RootState } from '../store/types';

function HouseholdShow() {
  const dispatch = useDispatch();

  const household = useSelector<RootState, Household>((state) => {
    return state.household;
  });
  const roommates = household.roommates;

  const handleRoommateDelete = (roommate: Roommate) => {
    dispatch(deleteRoommate(roommate.id));
  };

  const renderedRoommates = roommates.map((roommate) => {
    return (
      <div key={roommate.name}>
        <p>
          {roommate.name}, Split: {roommate.rentSplit}%
        </p>
        <button onClick={() => handleRoommateDelete(roommate)}>Delete</button>
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
