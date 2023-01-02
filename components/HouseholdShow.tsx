import { useSelector } from 'react-redux';
import { Roommate, RootState } from '../store/types';

function HouseholdShow() {
  const roommates = useSelector<RootState, Roommate[]>((state) => {
    return state.household.roommates;
  });

  console.log(roommates);

  return <div>HouseholdShow</div>;
}

export default HouseholdShow;
