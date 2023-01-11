import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeItemSplit, removeItem } from '../store';
import { Item, Roommate, RootState } from '../store/types';
import { getRoommateByID } from '../utils/getRoommateByID';
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
  }, [dispatch, roommates]);

  const renderedPurchases = purchases.map((item: Item) => {
    const renderedItemSplit = item.itemSplit.map((split) => {
      return `
        ${getRoommateByID(split.roommateID, roommates)} : ${split.share} 
        `;
    });

    function handleItemDelete(id: string) {
      dispatch(removeItem(id));
    }

    return (
      <div key={item.id}>
        Name: {item.name} | Cost: ${item.cost} | Buyer: {item.buyer} | Split:{' '}
        {renderedItemSplit}
        {/* <button>edit</button> */}
        <button onClick={(event) => handleItemDelete(item.id)}>delete</button>
      </div>
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
