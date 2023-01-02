import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeItemBuyer, changeItemCost, changeItemName } from '../store';
import { RootState, Item } from '../store/types';
import Dropdown from './Dropdown';
import { DropdownOptionType } from './DropdownTypes';

function AddItem() {
  const dispatch = useDispatch();
  const { name, buyer, cost, split } = useSelector<RootState, Item>((state) => {
    return state.item;
  });
  const items = useSelector<RootState, Item[]>((state) => {
    return state.purchases.items;
  });

  const BuyerDropdownOptions: DropdownOptionType[] = items.map((item: Item) => {
    const conversion = { value: item.buyer, label: item.buyer };
    console.log('Options', conversion);
    return conversion;
  });

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeItemName(event.target.value));
  };
  const handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeItemCost(parseFloat(event.target.value)));
  };
  const handleBuyerChange = (event: any) => {
    dispatch(changeItemBuyer(event.target.value));
  };

  return (
    <>
      <form style={{ display: 'flex' }}>
        <label>
          Item:
          <input value={name || ''} onChange={handleNameChange} />
        </label>
        <label>
          Cost:
          <input
            value={cost || 0}
            onChange={handleCostChange}
            type='number'
            step='0.01'
          />
        </label>
        <label>
          Buyer:
          <Dropdown
            options={BuyerDropdownOptions}
            value={buyer}
            onChange={handleBuyerChange}
          />
        </label>
        <label>
          Split:
          <button>FIXME - dropdown form</button>
        </label>
        <div>
          <button>Add item</button>
        </div>
      </form>
    </>
  );
}

export default AddItem;
