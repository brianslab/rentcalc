import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Item, RootState } from '../store/types';
import AddItem from './AddItem';

function PurchasesList() {
  const purchases = useSelector<RootState, Item[]>((state) => {
    return state.purchases.items;
  });

  const renderedPurchases = purchases.map((item: Item) => {
    const renderedSplit = 'renderedSplit: FIXME';

    return (
      <Fragment key={item.id}>
        {item.name}: {item.cost} - Buyer: {item.buyer}, Split: {renderedSplit}
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
