import { useSelector } from 'react-redux';
import { Household, Purchases, RootState } from '../store/types';

function RentCalc() {
  const { rent, roommates } = useSelector<RootState, Household>((state) => {
    return state.household;
  });
  const { items } = useSelector<RootState, Purchases>((state) => {
    return state.purchases;
  });

  const renderedRentSplit = roommates.map((roommate) => {
    let itemDebt = 0;
    items.forEach((item) => {
      if (item.buyer !== roommate.name) {
        const tmp = item.itemSplit.find((split) => {
          return split.roommateID === roommate.id;
        })?.share;
        const share = tmp !== undefined ? tmp / 100 : 0;

        itemDebt += share * item.cost;
      } else {
        const tmp = item.itemSplit.find((split) => {
          return split.roommateID === roommate.id;
        })?.share;
        const share = tmp !== undefined ? tmp / 100 : 0;

        itemDebt -= (1 - share) * item.cost;
      }
    });

    return (
      <div key={roommate.id}>
        {roommate.name} : ${(rent * roommate.rentSplit) / 100 + itemDebt}
      </div>
    );
  });

  return <div>Rent Split: {renderedRentSplit}</div>;
}

export default RentCalc;
