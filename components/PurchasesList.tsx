import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeItemSplit } from '../store';
import { Item, ItemSplit, Roommate, RootState } from '../store/types';
import AddItem from './AddItem';

function PurchasesList() {
  const dispatch = useDispatch();

  const purchases = useSelector<RootState, Item[]>((state) => {
    return state.purchases.items;
  });

  const roommates = useSelector<RootState, Roommate[]>((state) => {
    return state.household.roommates;
  });

  useEffect(() => {
    for (let roommate of roommates) {
      dispatch(changeItemSplit({ roommateID: roommate.id, share: 0 }));
    }
  }, []);

  const renderedPurchases = purchases.map((item: Item) => {
    return (
      <Fragment key={item.id}>
        {item.name}: {item.cost} - Buyer: {item.buyer}, Split:
        <AddItem />
      </Fragment>
    );
  });

  return (
    <div>
      <AddItem />
      {renderedPurchases}
    </div>
  );
}

export default PurchasesList;
